import { Fragment } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import PropTypes from "prop-types";
// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <section className="relative h-full z-auto">{children}</section>
      <Footer />
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};
