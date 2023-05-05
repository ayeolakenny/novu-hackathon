import { useState } from "react";
import { Menu } from "../Hooks/custom";
import { ToggleMenu } from "./Buttons";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(!false);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1  ">
          <a
            href="#"
            className="-m-1.5 p-1.5 flex align-center justify-center items-center"
          >
            <div className="material-icons md-36">villa</div>

            <div className="ile"> Ile</div>
          </a>
        </div>
        <div className="flex lg:hidden">
          <ToggleMenu handleEvent={() => setMenuOpen(!menuOpen)} />
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {Menu.map((value, key) => (
            <a
              href={value.url}
              key={key}
              className="text-sm  leading-6 text-gray-900 transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
            >
              {value.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 "
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
      <div
        className={menuOpen ? "lg:hidden " : "hidden"}
        role="dialog"
        aria-modal="true"
      >
        {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
        <div className="fixed inset-0 z-10"></div>
        <div
          className={
            menuOpen
              ? " fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
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
                    className="-mx-3 block rounded-lg px-3 py-2 text-base transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline leading-7 text-gray-900 hover:bg-gray-50"
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
