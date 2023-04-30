import Head from "next/head";
import Layout from "../components/_App/Layout";
import PageBanner from "../components/Common/PageBanner";


export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>DearPastMe: Write to Your Past, Heal Your Future</title>
        <meta
          name="description"
          content="DearPast.me is a platform that allows users to write letters to their past selves and share them with a community of people who are also looking to heal and reflect on their past. It is a safe and private space for self-discovery, reflection, gratitude, inspiration, and healing. It aims to provide users with a tool to process and understand their past experiences, find closure and move forward. It also allows users to read and gain inspiration from other's letters, which can help them with their journey of self-discovery and healing."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Layout>
      <PageBanner
        pageTitle="Terms of service" 
        homePageUrl="/" 
        homePageText="Home" 
        activePageText="Terms of service"/> 

        <div className="privacy-policy-area ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="privacy-policy-content">
                  <p>
                    <i>
                      This Privacy Policy was last updated on  28 January 2023.
                    </i>
                  </p>
                  <p>
                    DearPast.me ("we", "us", "our") is committed to protecting the privacy of all individuals who use our platform.
                     This Privacy Policy applies to all personal information collected, used and disclosed by us about our platform, 
                     DearPast.me. This Privacy Policy is compliant with the Privacy Act 1988 (Cth) (the "Act") and the 
                     Australian Privacy Principles (the "APPs").
                  </p>
                  <ol>
                    <li>Personal Information Collected We collect personal information from individuals who use our platform, including but not limited to, names, email addresses, and any other information that individuals choose to provide when using our platform.</li>
                    <li>
                      Use of Personal Information We use personal information collected through our platform for the following purposes:
                      <ul>
                        <li>to provide and improve our platform;</li>
                        <li>to communicate with individuals about their use of our platform;</li>
                        <li>to comply with legal obligations;</li>
                        <li>for internal research and development.</li>
                      </ul>
                    </li>
                    <li>
                      Disclosure of Personal Information We may disclose personal information to third parties for the following purposes:
                      <ul>
                        <li>to comply with legal obligations;</li>
                        <li>to protect the rights, property or safety of us or third parties;</li>
                        <li>to provide and improve our platform;</li>
                      </ul>
                    </li>
                    <li>Data Retention We will retain personal information for as long as necessary to fulfill the purposes for which it was collected, or as required by law.</li>
                    <li>Access to Personal Information Individuals have the right to request access to any personal information that we hold about them and to advise us of any perceived inaccuracy. There may be instances where access to personal information is denied, such as where the information relates to existing or anticipated legal proceedings or for the protection of other individuals' rights.</li>
                    <li>Data Security We take reasonable steps to protect personal information from misuse, loss, unauthorized access, modification or disclosure.</li>
                    <li>Changes to the Privacy Policy We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website.</li>
                    <li>Contact Us If you have any questions or concerns about our Privacy Policy or the way in which we handle personal information, please contact us at hello@dearpast.me.</li>
                  </ol>

                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      </>
  );
}
