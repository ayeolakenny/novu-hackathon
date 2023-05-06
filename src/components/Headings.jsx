import { Fragment } from "react";
import { Button } from "./Buttons";

export const HeroHeader = () => {
  return (
    <Fragment>
      <div className="pt-40 flex  mx-16 h-screen">
        <div className="container ">
          <h1 className="py-2 mb-4 text-2xl font-extrabold  tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white leading-loose">
            Discover Your Next Property: Check Out Our
            <span className="text-blue-600 dark:text-blue-500"> Listings</span>
          </h1>
          <p className="text-2xl  font-normal text-gray-400 lg:text-xl  font-[Raleway] ">
            Browse through our extensive database of properties and find your
            perfect match. Start your search now and discover your next home
            sweet home.
          </p>
          <div className="my-8">
            <Button name="Get Started" />
          </div>
        </div>
        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
            <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"></div>
            <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="aspect-[1/2] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg "
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10 hover:animate-pulse"></div>
              </div>
            </div>
            <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
