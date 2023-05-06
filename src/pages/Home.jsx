import { Fragment } from "react";
import { Hero } from "../components/Hero";
import { Map } from "../components/Map";
import { FancyCard } from "../components/Card";
export const Home = () => {
  return (
    <Fragment>
      <Hero />
      <section className="relative h-screen z-20 lg:flex-col">
        <Map />
        <span className="absolute top-10 z-50 left-5 bg-white rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 shadow-lg w-4/12 ">
          <FancyCard />
        </span>
      </section>
    </Fragment>
  );
};
