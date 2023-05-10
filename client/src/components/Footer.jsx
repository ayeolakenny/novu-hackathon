import { Fragment } from "react";
import { Menu } from "../data/custom";
import { Button } from "./Buttons";

export const Footer = () => {
  return (
    <Fragment>
      <footer className="flex justify-center px-4 text-white bg-black  z-auto">
        <div className="container px-6 py-6">
          <h1 className="text-lg font-bold text-center lg:text-2xl">
            Join 31,000+ other and never miss <br /> out on new listings,
            updates, and more.
          </h1>

          <div className="flex flex-col justify-center mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
            <input
              id="email"
              type="text"
              className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-transparent dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
              placeholder="Email Address"
            />
            &nbsp;&nbsp;
            <Button name="Subscribe" />
          </div>

          <hr className="h-px bg-gray-200 border-none my-7 dark:bg-gray-700" />

          <div className="flex flex-col items-center justify-between md:flex-row">
            <a
              href="#"
              className="-m-1.5 p-1.5 flex align-center justify-center items-center"
            >
              <div className="material-icons md-36 ">villa</div>

              <div className="ile"> Ile</div>
            </a>

            <div className="flex mt-4 md:m-0">
              <div className="-mx-4">
                {Menu.map((value, key) => (
                  <a
                    href={value.url}
                    key={key}
                    className="px-4 text-sm   text-white transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
                  >
                    {value.name}
                  </a>
                ))}
                <a
                  href="/create-account"
                  className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};
