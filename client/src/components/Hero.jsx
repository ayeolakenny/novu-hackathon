import { Fragment } from "react";
import { HeroHeader } from "./Headings";
export const Hero = () => {
  return (
    <Fragment>
      <section className=" relative bg-[url('https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-fixed h-screen bg-no-repeat">
        <div className="bg-black bg-opacity-60 h-screen">
          <HeroHeader />
        </div>
      </section>
    </Fragment>
  );
};
