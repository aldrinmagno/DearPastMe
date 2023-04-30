import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-bottom-area">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <ul>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms-of-service">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </footer>
  );
};

export default Footer;
