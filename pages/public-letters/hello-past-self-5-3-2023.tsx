import Head from "next/head";
import BreadCrumb from "../../components/Blogs/BreadCrumb";
import Layout from "../../components/_App/Layout";

export default function PublicLetterOne() {
  return (
    <>
      <Head>
        <title>
          Hello past self, 5-03-2023
        </title>
        <meta
          name="description"
          content="DearPast.me is a platform that allows users to write letters to their past selves and share them with a community of people who are also looking to heal and reflect on their past. It is a safe and private space for self-discovery, reflection, gratitude, inspiration, and healing. It aims to provide users with a tool to process and understand their past experiences, find closure and move forward. It also allows users to read and gain inspiration from other's letters, which can help them with their journey of self-discovery and healing."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>

        <div className="blog-details-area ptb-70">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-10">
                <article className="article-content">
                  <h1>Hello past self, 5-03-2023</h1>
                  <h3 className="ptb-20">Dear past me,</h3>
                  <p>
                    We may collect different data from or about you depending on
                    how you use the Services. Below are some examples to help
                    you better understand the data we collect.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
