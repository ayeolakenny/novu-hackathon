import { Fragment } from "react";
import { Hero } from "./Hero";
export const Home = () => {
  return (
    <Fragment>
      <Hero />
      <section className="h-screen bg-blue-400"></section>
    </Fragment>
  );
};
