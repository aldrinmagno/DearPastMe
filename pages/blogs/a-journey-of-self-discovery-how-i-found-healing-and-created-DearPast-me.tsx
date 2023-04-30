import Head from "next/head";
import BreadCrumb from "../../components/Blogs/BreadCrumb";
import Layout from "../../components/_App/Layout";

export default function FirstBlog() {
  return (
    <>
      <Head>
        <title>
          A Journey of Self-Discovery: How I Found Healing and Created DearPast.me
        </title>
        <meta
          name="description"
          content="DearPast.me is a platform that allows users to write letters to their past selves and share them with a community of people who are also looking to heal and reflect on their past. It is a safe and private space for self-discovery, reflection, gratitude, inspiration, and healing. It aims to provide users with a tool to process and understand their past experiences, find closure and move forward. It also allows users to read and gain inspiration from other&apos;s letters, which can help them with their journey of self-discovery and healing."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
        </Head>
      <Layout>
        <BreadCrumb
          homePageUrl="/"
          homePageText="Home"
          activePageText="A Journey of Self-Discovery: How I Found Healing and Created DearPast.me"
        />
        <div className="blog-details-area ptb-70">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-8">
                <article className="article-content">
                  <h1>A Journey of Self-Discovery: How I Found Healing and Created DearPast.me</h1>
                  <h4 className="ptb-50">
                    Hello World! In this post, I want to share my personal journey of self-rediscovery and how it has led me to create a platform for healing and reflection called DearPast.me.
                  </h4>
                  <p>
                  Over the last couple of years, I&apos;ve been on a journey of self-discovery. Every year, I&apos;ve found something new about myself. I&apos;ve rediscovered lived experiences that I thought were long gone but still affect who I am today. Through this journey, I&apos;ve come to understand the reasons behind what makes me, me.
                  </p>
                  <p>
                  I&apos;ve learned why I often challenge myself, why I&apos;m so focused on moving forward, and why I feel like I&apos;m not enough. I&apos;ve struggled with my emotions for a long time, and I&apos;ve often tried to suppress my feelings in unhealthy ways. I still need to work on my current self, but I&apos;m getting there.
                  </p>
                  <p> 
                  It&apos;s a bit late for a New Year&apos;s resolution however moving forward as the year progress, my theme for 2023 will be healing. I want to be the person that my child self needed during those tough times. I want to let him know that things will be fine. I want to heal my past self from all the negative lived experiences he has gone through. I&apos;m sure my child self will be proud of me if he sees me today, so he should not worry too much. I want to tell him he is doing a good job. I&apos;m proud of myself, and I&apos;m sure my child self will be proud too.
                  </p>
                  <p>
                  This 2023, I will write to my past self every now and then. I have created a platform called DearPast.me, a safe space for reflection, gratitude, inspiration, and healing as a platform for me and anybody who likes to write to their past self. It&apos;s a DearPast.me is where people can write letters to their past selves and share them with others. You never know, readers might draw inspiration from these letters and help them with their journeys. DearPast.me is public and free for everyone interested in using it. DearPast.me can help others heal their past self from their negative lived experience. Let&apos;s help each other heal our past selves and live our lives to the fullest. I&apos;m keen to see what others write in DearPast.me.
                  </p>
                  <p>
                  Healing is a journey that we all must go through, and DearPast.me is a platform that can help us on this journey. It&apos;s a safe space for reflection, gratitude, inspiration, and healing, and I invite you to join me on my journey here at DearPast.me
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
