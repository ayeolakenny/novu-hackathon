import { Fragment } from "react";
import { Button } from "./Buttons";

export const Hero = () => {
  return (
    <Fragment>
      <div className="relative w-full bg-[url('https://images.pexels.com/photos/3195644/pexels-photo-3195644.jpeg?auto=compress&cs=tinysrgb&w=900')] bg-cover bg-no-repeat bg-fixed">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            {/* logofrom-[#203674] to-[#0077b6] */}
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-6xl ">
              Discover Your Next{" "}
              <span className="text-[#fe6600] underline">Property:</span>
            </h1>
            <p className="mt-8 text-lg text-gray-300">
              Our listing website has got you covered. Browse through our
              extensive database of properties and find your perfect match.
            </p>
            <div action="" className="mt-8 flex items-start space-x-2">
              <div>
                <Button name={"Get Started"} />
              </div>
            </div>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6 hidden lg:flex">
            <img
              className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
              src="https://images.pexels.com/photos/3195644/pexels-photo-3195644.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
