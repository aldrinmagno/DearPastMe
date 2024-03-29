import React from "react";
import Link from "next/link";



const PageBanner = ({
  pageTitle,
  homePageUrl,
  homePageText,
  activePageText,
} : { pageTitle: string; homePageUrl: string, homePageText: string, activePageText: string  }) => {
  return (
    <div className="page-title-area">
      <div className="container">
        <div className="page-title-content">
          <ul>
            <li>
              <Link href={homePageUrl}>{homePageText}</Link>
            </li>
            <li className="active">{activePageText}</li>
          </ul>

          <h2>{pageTitle}</h2>
        </div>
      </div>

      <div className="shape9">
        <img src="/images/shape8.svg" alt="image" />
      </div>
    </div>
  );
};

export default PageBanner;
