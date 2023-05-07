import { Fragment } from "react";
import { Hero } from "../components/Hero";
import { Map } from "../components/Map";
import { FancyCard } from "../components/Card";
export const Home = () => {
  const location = () => {};
  return (
    <Fragment>
      <Hero />
      <section className="relative h-screen z-20 lg:flex-col ">
        <Map location={location} />
        <span className="absolute w-[500px] top-10 z-50 left-5 bg-blue-900 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 shadow-2xl  overflow-hidden">
          <FancyCard location={location} />
        </span>
      </section>
    </Fragment>
  );
};
