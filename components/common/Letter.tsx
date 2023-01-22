import React from "react";
import Router from "next/router";
import ReactMarkdown from 'react-markdown'

export type LetterProps = {
  id: string;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
};

const Letter: React.FC<{ letter: LetterProps }> = ({ letter }) => {
  const authorName = letter.author ? letter.author.name : "Unknown author";
  return (
    <div onClick={() => Router.push("/letters/[id]", `/letters/${letter.id}`)}>
      <h2>{letter.title}</h2>
      <small>By {authorName}</small>
      <ReactMarkdown children={letter.content} />
      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Letter;