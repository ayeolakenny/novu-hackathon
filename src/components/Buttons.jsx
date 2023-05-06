import { Fragment } from "react";
import PropTypes from "prop-types";

export const Button = () => {
  <Fragment></Fragment>;
};
export const ToggleMenu = ({ handleEvent, isOpen }) => {
  return (
    <Fragment>
      {!isOpen ? (
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
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
          className="-m-2.5 rounded-md p-2.5 text-gray-700"
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
