import { Fragment } from "react";
import PropTypes from "prop-types";

export const Button = ({ fancy, handleEvent, name }) => (
  <Fragment>
    {fancy ? (
      <button
        type="button"
        className="text-amber-400 hover:text-white border border-amber-400 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-amber-300 dark:text-amber-300 dark:hover:text-white dark:hover:bg-amber-400 dark:focus:ring-amber-900 bg-clip-padding backdrop-filter backdrop-blur-sm"
        onClick={handleEvent}
      >
        {name}
      </button>
    ) : (
      <button className="w-full px-5 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto  focus:outline-none bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
        {name}
      </button>
    )}
  </Fragment>
);
export const ToggleMenu = ({ handleEvent, isOpen }) => {
  return (
    <Fragment>
      {!isOpen ? (
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-blue-700 z-50"
          onClick={handleEvent}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      ) : (
        <button
          type="button"
          className="-m-2.5 rounded-md p-2.5 text-blue-700 z-50"
          onClick={handleEvent}
        >
          <span className="sr-only">Close menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </Fragment>
  );
};

ToggleMenu.propTypes = {
  handleEvent: PropTypes.func,
  isOpen: PropTypes.bool,
};
Button.propTypes = {
  handleEvent: PropTypes.func,
  fancy: PropTypes.bool,
  name: PropTypes.string,
};
