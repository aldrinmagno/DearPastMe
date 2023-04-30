import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <div className="main-banner-wrapper">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12">
            <div className="main-banner-wrapper-content">
              <h1>DearPast.me allows you to write letters to your past self</h1>
              <p>
                Addressing the small moments and large changes in your life that
                happened over time. Putting pen to paper allows you to reflect
                on the person you used to be while celebrating your
                accomplishments and seeing the ways your life has grown.
              </p>

              <Link href="/coming-soon" className="default-btn">
                <i className="flaticon-user"></i> Join For Free <span></span>
              </Link>
            </div>
          </div>

          <div className="col-lg-7 col-md-12">
            <div className="main-banner-wrapper-image text-center">
              <img src="/images/banner-img3.png" alt="image" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
                <div className="row align-items-center">
                <div className="banner-inner-area">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-banner-box">
                             
                                <h3>Healing</h3>
                                <p>Allowing you to confront your past experiences, emotions, and traumas, and offering the opportunity to gain insight, clarity, and personal growth.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-banner-box">
                               
                                <h3>Closure</h3>
                                <p>Express your thoughts and feelings to your past self, helping you process and come to terms with past events or experiences. </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                            <div className="single-banner-box">
                              
                                <h3>Self discovery</h3>
                                <p>Allowing you to reflect on your past experiences, learn from your mistakes, and identify patterns in your thoughts and behaviors. </p>
                            </div>
                        </div>
                    </div>
                </div>
                  </div></div>



      <div className="banner-shape14">
        <img src="/images/banner-shape15.png" alt="image" />
      </div>
      <div className="banner-shape15">
        <img src="/images/banner-shape16.png" alt="image" />
      </div>
      <div className="banner-shape16">
        <img src="/images/banner-shape17.png" alt="image" />
      </div>
      <div className="banner-shape17">
        <img src="/images/banner-shape18.png" alt="image" />
      </div>
      <div className="banner-shape18">
        <img src="/images/banner-shape19.png" alt="image" />
      </div>
    </div>
  );
};

export default MainBanner;
