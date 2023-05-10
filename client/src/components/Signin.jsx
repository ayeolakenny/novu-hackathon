import { Fragment, useState, useEffect } from "react";
import { Input } from "./Form";
import PropTypes from "prop-types";
import { useGlobalState, getGlobalState } from "../data/custom";
export const Signin = () => {
  const [Register, setRegister] = useState(true);
  const cookies = getGlobalState("cookies");
  const [user, setUser] = useGlobalState("user");
  console.log(user);
  const { fullname, email, password, confirm_paassword } = user;
  function CreateAccount() {
    switch (true) {
      case fullname === "":
        console.log("Fullname cannot be empty");
        break;
      case email === "":
        console.log(" Email cannot be empty");
        break;
      case password === "":
        console.log("Password cannot be empty");
        break;
      case confirm_paassword !== password:
        console.log(" Confirm Password Doesnt Match");
        break;

      default:
        console.log(user);
        break;
    }
  }

  return (
    <Fragment>
      <section className="bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
            <div className="absolute inset-0">
              <img
                className="h-full w-full rounded-md object-cover object-top"
                src="https://images.pexels.com/photos/4569894/pexels-photo-4569894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="relative">
              <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
                <h3 className="text-4xl font-bold text-white">
                  Now you dont have to rely on your designer to create a new
                  page
                </h3>
                <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                      <svg
                        className="h-3.5 w-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white">
                      {" "}
                      Email Notification{" "}
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                      <svg
                        className="h-3.5 w-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white">
                      {" "}
                      Geo location{" "}
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                      <svg
                        className="h-3.5 w-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white">
                      {" "}
                      contact Sellers{" "}
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                      <svg
                        className="h-3.5 w-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white">
                      {" "}
                      Discover Listings{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                {Register ? "Sign up" : "Sign in"}
              </h2>
              <p className="mt-2 text-base text-gray-300">
                {Register
                  ? " Already have an account? "
                  : "Dont have an Account? "}
                <a
                  href="#"
                  title=""
                  className="font-medium text-white transition-all duration-200 hover:underline hover:text-blue-300"
                  onClick={() => {
                    setRegister(!Register);
                  }}
                >
                  {Register ? " Sign In" : "Sign Up"}
                </a>
              </p>
              {Register ? (
                <form action="#" method="POST" className="mt-8">
                  <div className="space-y-5">
                    <Input
                      name="Full Name "
                      type="text"
                      label="Full Name"
                      value={user.fullname}
                      handleEvent={(e) => {
                        setUser({ ...user, fullname: e.target.value });
                      }}
                    />
                    <Input
                      name="Email "
                      type="email"
                      label="Email"
                      value={user.email}
                      handleEvent={(e) => {
                        setUser({ ...user, email: e.target.value });
                      }}
                    />

                    <Input
                      name="Password "
                      type="password"
                      label="Password"
                      value={user.password}
                      handleEvent={(e) => {
                        setUser({ ...user, password: e.target.value });
                      }}
                    />

                    <Input
                      name="confirm Password "
                      type="password"
                      label="confirm Password"
                      value={user.confirm_password}
                      handleEvent={(e) => {
                        setUser({ ...user, confirm_password: e.target.value });
                      }}
                    />

                    <div>
                      <button
                        type="button"
                        className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-blue-700"
                        onClick={CreateAccount}
                      >
                        Create Account{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="ml-2"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                <form action="#" method="POST" className="mt-8">
                  <div className="space-y-5">
                    <Input name="Email " type="email" label="Email" />

                    <Input name="Password " type="password" label="Password" />

                    <div>
                      <button
                        type="button"
                        className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-blue-700"
                      >
                        Get Started{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="ml-2"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>
                </form>
              )}
              <div className="mt-3 space-y-3">
                <button
                  type="button"
                  className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                >
                  <span className="mr-2 inline-block">
                    <svg
                      className="h-6 w-6 text-rose-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                    </svg>
                  </span>
                  Sign up with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Signin.propTypes = {
  user: PropTypes.object,
};
