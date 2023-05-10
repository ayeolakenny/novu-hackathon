import { Fragment } from "react";
import { Hero } from "../components/Hero";
import { Map } from "../components/Map";
import { FancyCard } from "../components/Card";
export const Home = () => {
  return (
    <Fragment>
      <Hero />
      <span className="lg:hidden md:hidden block">
        <FancyCard />
      </span>
      <div className="relative h-screen z-20 lg:flex-col ">
        <Map />
        <div className=" lg:block lg:absolute md:absolute hidden w-[500px] top-10 z-50 left-5 bg-blue-900 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 shadow-2xl  overflow-hidden">
          <FancyCard />
        </div>
      </div>
    </Fragment>
  );
};
