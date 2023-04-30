import React from "react";
import Link from "next/link";

const Blogs = () => {
  return (
    <div className="blog-area ptb-100">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Blogs</span>
          <h2>Need inspiration?</h2>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-blog-post">
              <div className="post-image">
                <Link href="/blogs/a-journey-of-self-discovery-how-i-found-healing-and-created-DearPast-me" className="d-block">
                    <img src="/images/about-img9.png" alt="image" />
                </Link>
              </div>
              <div className="post-content">
                <Link href="#" className="category">
                </Link>
                <h3>
                  <Link href="/blogs/a-journey-of-self-discovery-how-i-found-healing-and-created-DearPast-me">
                    A Journey of Self-Discovery: How I Found Healing and Created DearPast.me
                  </Link>
                </h3>
                <ul className="post-content-footer d-flex justify-content-between align-items-center">
                  <li>
                    <div className="post-author d-flex align-items-center">
                      <img
                        src="/images/user1.jpg"
                        className="rounded-circle"
                        alt="image"
                      />
                      <span>Buzz</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
