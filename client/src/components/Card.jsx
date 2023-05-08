import { Fragment, useState } from "react";
import { MapData } from "../data/custom";
import PropTypes from "prop-types";

export const Card = () => {
  return (
    <Fragment>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5">
        <div className="col-span-4 flex flex-col items-center text-center lg:col-span-1 lg:items-start lg:text-left">
          <div
            className="flex h-full w-5/6 flex-col justify-end rounded-md relative overflow-hidden"
            style={{
              backgroundPosition: "center" + "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img
              src="https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Running Pro"
              className="object-cover w-full h-full rounded-[10px] z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute left-4 bottom-4 text-left">
              <h1 className="text-sm text-white font-semibold">Running Pro</h1>
              <p className="text-gray-300 mt-2 text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, debitis?
              </p>
              <button className=" text-white cursor-pointer mt-2 font-semibold text-xs">
                Shop Now →
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export const Card2 = () => {
  return (
    <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <img
        className="object-cover object-center w-full h-56"
        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        alt="avatar"
      />

      <div className="flex items-center px-6 py-3 bg-gray-900">
        <h1 className="mx-3 text-lg font-semibold text-white uppercase">
          Available
        </h1>
      </div>

      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          {/* <!-- title --> */}
        </h1>

        <p className="py-2 text-gray-700 dark:text-gray-400">
          {/* <!-- description --> */}
        </p>
        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <svg
            aria-label="location pin icon"
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z" />
            <path d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z" />
          </svg>

          <h1 className="px-2 text-sm">California</h1>
        </div>

        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <svg
            aria-label="email icon"
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z" />
          </svg>

          <h1 className="px-2 text-sm">patterson@example.com</h1>
        </div>
      </div>
    </div>
  );
};
export const FancyCard = () => {
  const [featuredData, setFeaturedData] = useState();

  return (
    <Fragment>
      <section className="font-[Raleway] relative">
        {featuredData ? (
          <div className="grid grid-cols-2 gap-2 relative">
            <div>
              <img src={featuredData.image} className="w-full h-full" />
            </div>
            <div>
              {/* status */}
              <div className="absolute top-3 flex gap-3">
                <div className="rounded-lg bg-amber-300 text-[10px] px-1 py-1">
                  Featured
                </div>
                <div className="rounded-lg bg-green-500 text-[10px] px-1 py-1">
                  Available
                </div>
              </div>
              <div className="mt-12">
                {/* name */}
                <h1 className="text-sm text-[#101010] font-semibold">
                  {featuredData.title}
                </h1>
                {/* location */}
                <p className="text-[#242424] mt-2 text-xs">
                  {featuredData.location}
                </p>

                {/* description */}
                <p className="text-[#242424] mt-2 text-xs">
                  {featuredData.description}
                </p>
              </div>
              <div className="flex justify-between mt-3 item-center mr-2">
                {/* price */}
                <h1 className="text-lg font-semibold text-red-400  text-shadow-sm md:text-md">
                  {featuredData.price}{" "}
                  <span className="text-black text-[10px]">/year</span>
                </h1>
                {/* contact button */}
                <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-sky-800 rounded focus:outline-none focus:bg-sky-700 dark:focus:bg-sky-600">
                  Contact Now
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2 relative">
            <div>
              <img src="https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>
            <div>
              {/* status */}
              <div className="absolute top-3 flex gap-3">
                <div className="rounded-lg bg-amber-300 text-[10px] px-1 py-1">
                  Featured
                </div>
                <div className="rounded-lg bg-green-500 text-[10px] px-1 py-1">
                  Available
                </div>
              </div>
              <div className="mt-12">
                {/* name */}
                <h1 className="text-sm text-[#101010] font-semibold">
                  Running Pro
                </h1>
                {/* location */}
                <p className="text-[#242424] mt-2 text-xs">
                  Ikotun Lagos Nigeria.
                </p>

                {/* description */}
                <p className="text-[#242424] mt-2 text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi, debitis?
                </p>
              </div>
              <div className="flex justify-between mt-3 item-center mr-2">
                {/* price */}
                <h1 className="text-lg font-semibold text-red-400  text-shadow-sm md:text-md">
                  $220 <span className="text-black text-[10px]">/year</span>
                </h1>
                {/* contact button */}
                <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-sky-800 rounded focus:outline-none focus:bg-sky-700 dark:focus:bg-sky-600">
                  Contact Now
                </button>
              </div>
            </div>
          </div>
        )}
        <div className=" flex flex-row gap-6 mt-8 overflow-x-scroll">
          {/* map-items */}
          {MapData.map((val, key) => (
            <Fragment key={key}>
              <div
                className=""
                key={key}
                onClick={() => {
                  setFeaturedData(val);
                }}
              >
                <img src={val.image} alt={"image"} className="w-full h-[80%]" />
                <div className="truncate block">{val.title}</div>
               
              </div>
            </Fragment>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

FancyCard.propTypes = {
  location: PropTypes.func,
};
