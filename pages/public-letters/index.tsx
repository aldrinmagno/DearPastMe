// pages/drafts.tsx

import React from 'react';
import { GetServerSideProps } from 'next';
import { useSession, getSession } from 'next-auth/react';
import Letter, { LetterProps } from '../../components/Common/Letter';
import prisma from '../../lib/prisma';
import Layout from '../../components/_App/Layout';
import Header from './../../components/_App/Header';

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return { props: { drafts: [] } };
  }

  const drafts = await prisma.letter.findMany({
    where: {
      author: { email: session.user.email },
      published: false,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: { drafts },
  };
};

type Props = {
  drafts: LetterProps[];
};

const PublicLetters: React.FC<Props> = (props) => {
  const { data: session } = useSession();

  return (
    <Layout>
      <Header />
      <div className="page">
        <h1>My Drafts</h1>
        <main>
          {props.drafts.map((letter) => (
            <div key={letter.id} className="post">
              <Letter letter={letter} />
            </div>
          ))}
        </main>
      </div>
     
    </Layout>
  );
};

export default PublicLetters;
