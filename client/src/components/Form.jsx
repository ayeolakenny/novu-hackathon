import { Fragment } from "react";
import PropTypes from "prop-types";

export const Input = ({ textarea, name, label, type, handleEvent }) => {
  return (
    <Fragment>
      {!textarea ? (
        <div className="relative">
          <input
            type={type}
            name={name}
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-white  rounded-lg border-1  outline-none border shadow-sm border-gray-600 appearance-none text-black   dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
            placeholder=" "
            minLength="4"
            onChange={handleEvent}
          />
          <label
            required
            name={name}
            className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-inherit px-2 peer-focus:px-2 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 peer-focus:bg-blue-600"
          >
            {label}
          </label>
        </div>
      ) : (
        <div className="relative">
          <textarea
            name={name}
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-white  rounded-lg border-1  outline-none border shadow-sm border-gray-600 appearance-none text-black   dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
            placeholder=" "
            required
            minLength="4"
            onChange={handleEvent}
          />
          <label
            required
            name={name}
            className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-inherit px-2 peer-focus:px-2 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 peer-focus:bg-blue-600"
          >
            {label}
          </label>
        </div>
      )}
    </Fragment>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,

  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleEvent: PropTypes.func,
  textarea: PropTypes.string,
};
