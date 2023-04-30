import React, { ReactNode } from "react";
import Footer from "./footer";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div>
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Layout;