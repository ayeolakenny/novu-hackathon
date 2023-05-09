import { useState } from "react";
import { Menu } from "../data/custom";
import { ToggleMenu } from "./Buttons";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [scroll, setScroll] = useState();
  const [islogged] = useState(false);

  function scrollHandler() {
    switch (true) {
      case window.scrollY >= 20:
        setScroll(true);
        break;

      default:
        setScroll(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <header
      className={
        scroll
          ? "text-white bg-black fixed w-full z-50 shadow-md rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 "
          : " text-white fixed w-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 z-50"
      }
    >
      <nav
        className={
          "mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        }
      >
        <div className="flex lg:flex-1  ">
          <a
            href="/"
            className="-m-1.5 p-1.5 flex align-center justify-center items-center"
          >
            <div className="material-icons md-36">villa</div>

            <div className="ile"> Ile</div>
          </a>
        </div>
        <div className="flex lg:hidden z-50">
          {menuOpen ? (
            <ToggleMenu handleEvent={() => setMenuOpen(!menuOpen)} />
          ) : (
            ""
          )}
        </div>
        <div className="hidden lg:flex lg:gap-x-12 z-50 ">
          {Menu.map((value, key) => (
            <a
              href={value.url}
              key={key}
              className={
                scroll
                  ? "text-sm  leading-6 text-white transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
                  : "text-sm  leading-6 text-white transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
              }
            >
              {value.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {!islogged ? (
            <a
              href="/create-account"
              className={
                scroll
                  ? "text-sm font-normal leading-6 text-gray-900 "
                  : "text-sm font-normal leading-6 text-white "
              }
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          ) : (
            <div className="flex items-center mt-4 lg:mt-0">
              <button
                className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-blue-400 dark:hover:text-blue-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
                aria-label="show notifications"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                    stroke="currentColor"
                  />
                </svg>
              </button>

              <button
                type="button"
                className="flex items-center focus:outline-none"
                aria-label="toggle profile dropdown"
              >
                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    className="object-cover w-full h-full"
                    alt="avatar"
                  />
                </div>

                <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">
                  Khatab wedaa
                </h3>
              </button>
            </div>
          )}
        </div>
      </nav>
      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
      <div
        className={!menuOpen ? "lg:hidden " : "hidden"}
        role="dialog"
        aria-modal="true"
      >
        {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
        <div className="fixed inset-0 z-10"></div>
        <div
          className={
            !menuOpen
              ? "fixed inset-y-0 right-0 z-50 w-6/12 h-screen overflow-y-auto  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-white"
              : "hidden -z-10"
          }
        >
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="-m-1.5 p-1.5 flex align-center justify-center"
            >
              <div className="material-symbols-outlined">&#xe586;</div>
              <div> Ile</div>
            </a>
            <ToggleMenu isOpen handleEvent={() => setMenuOpen(!menuOpen)} />
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {Menu.map((value, key) => (
                  <a
                    href={value.url}
                    key={key}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400 hover:underline leading-7 text-black hover:bg-gray-50"
                  >
                    {value.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
