// Header.tsx
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

const Header: React.FC = () => {
  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  /*

  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const { data: session, status } = useSession();

  let left = (
    <div className="left">
      <Link href="/" className="bold" data-active={isActive('/')}>
        Feed
      </Link>
      
    </div>
  );

  let right = null;

  if (status === 'loading') {
    left = (
      <div className="left">
        <Link href="/" className="bold" data-active={isActive('/')}>
          Feed
        </Link>
        
      </div>
    );
    right = (
      <div className="right">
        <p>Validating session ...</p>
      
      </div>
    );
  }

  if (!session) {
    right = (
      <div className="right">
        <Link href="/api/auth/signin" data-active={isActive('/signup')}>
          Log in
        </Link>
      
      </div>
    );
  }

  if (session) {
    left = (
      <div className="left">
        <Link href="/" className="bold" data-active={isActive('/')}>
          Letters
        </Link>
        <Link href="/drafts" data-active={isActive('/drafts')}>
          My drafts
        </Link>
        
      </div>
    );
    right = (
      <div className="right">
        <p>
          {session.user.name} ({session.user.email})
        </p>
        <Link href="/write-to-your-past-self">
          <button>
           New post
          </button>
        </Link>
        <button onClick={() => signOut()}>
          <a>Log out</a>
        </button>
        
      </div>
    );
  } */

  return (
    <div id="navbar" className="navbar-area">
      <div className="edemy-nav">
        <div className="container-fluid">
          <div className="navbar navbar-expand-lg navbar-light">
            <Link href="/" onClick={toggleNavbar} className="navbar-brand">
              <img src="/images/logo.png" alt="logo" />
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne}>
              <div className="dpm-nav-link">
                <Link
                  href="/coming-soon"
                  className="nav-item "
                >
                  Write to your past self
                </Link>
              </div>
              <div className="dpm-nav-link">
                <Link
                  href="/coming-soon"
                  className="nav-item"
                >
                  Public letters
                </Link>
              </div>
              
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    href="/coming-soon"
                    className="nav-link"
                  >
                    Blog
                  </Link>
                </li>
              </ul>

              <div className="others-option d-flex align-items-center">
                <div className="option-item">
                  <Link href="/coming-soon" className="default-btn">
                    <i className="flaticon-user"></i> Login/Register{" "}
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
