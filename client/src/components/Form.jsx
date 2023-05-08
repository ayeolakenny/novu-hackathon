import { Fragment, useState } from "react";

export const SignUpForm = () => {
  const [Register, setRegister] = useState(!false);
  return (
    <Fragment>
      <section className="relative bg-[url('https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-fixed h-screen bg-no-repeat ">
        <div
          className={
            "grid lg:grid-cols-2 md:grid-cols-2  px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20 h-screen rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20   justify-around bg-[#101010] grid-cols-1"
          }
        >
          {Register ? (
            <div
              className={
                Register
                  ? "xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md order-2 pt-10 lg:flex-1 "
                  : "xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md order-2 pt-10 lg:flex-1 "
              }
            >
              <h2 className="text-xl font-bold leading-tight text-black">
                {Register
                  ? "Sign up to create account"
                  : "Login to your account"}
              </h2>
              <p
                className="mt-2  text-gray-600 text-sm "
                onClick={() => {
                  setRegister(!Register);
                }}
              >
                {Register
                  ? "Already have an account"
                  : "Don't have an account ?"}
                <a
                  href="#"
                  onClick={() => {
                    setRegister(!Register);
                  }}
                  className="font-medium text-black transition-all duration-200 hover:underline hover:text-blue-600"
                >
                  {Register ? " Sign In" : "Register"}
                </a>
              </p>
              <form action="#" method="POST" className="pt-10">
                <div className="space-y-5">
                  <div className="relative">
                    <input
                      type="text"
                      name=""
                      className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-white  rounded-lg border-1  outline-none border shadow-sm border-gray-600  text-black   dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-gray-900 peer  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-4"
                      placeholder=" "
                      required
                      minLength="4"
                      onChange={() => {}}
                    />
                    <label
                      required
                      className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-inherit px-2 peer-focus:px-2 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 peer-focus:bg-blue-600"
                    >
                      Full Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="Email"
                      name=""
                      className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-white  rounded-lg border-1  outline-none border shadow-sm border-gray-600 appearance-none text-black   dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                      placeholder=" "
                      required
                      minLength="4"
                      onChange={() => {}}
                    />
                    <label
                      required
                      className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-inherit px-2 peer-focus:px-2 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 peer-focus:bg-blue-600"
                    >
                      Email Address
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="password"
                      name=""
                      className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-white  rounded-lg border-1  outline-none border shadow-sm border-gray-600 appearance-none text-black   dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                      placeholder=" "
                      required
                      minLength="4"
                      onChange={() => {}}
                    />
                    <label
                      required
                      className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-inherit px-2 peer-focus:px-2 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1  peer-focus:bg-blue-600"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      name=""
                      className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-white  rounded-lg border-1  outline-none border shadow-sm border-gray-600 appearance-none text-black   dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-gray-900 peer bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-9"
                      placeholder=" "
                      required
                      minLength="4"
                      onChange={() => {}}
                    />
                    <label
                      required
                      className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-inherit px-2 peer-focus:px-2 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 peer-focus:bg-blue-600"
                    >
                      Confirm Password
                    </label>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="inline-flex w-full items-center justify-center rounded-md bg-blue-500 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-blue-400"
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
                <span className="my-4 text-xs flex text-white gap-1">
                  <input type="checkbox" className="" />
                  <p>
                    By signing up, you are creating an Ile account, and you
                    agree to ile’s
                    <span className="font-semibold hover:underline cursor-pointer hover:text-blue-600">
                      Terms of Use {""}
                    </span>
                    and {""}
                    <span className="font-semibold hover:underline cursor-pointer hover:text-blue-600">
                      Privacy Policy
                    </span>
                    .?
                  </p>
                </span>
              </form>
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
          ) : (
            <div
              className={
                Register
                  ? "xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md order-2 pt-10 flex-auto"
                  : "xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md order-1 pt-10 flex-3"
              }
            >
              <h2 className="text-xl font-bold leading-tight text-black">
                {Register
                  ? "Sign up to create account"
                  : "Login to your account"}
              </h2>
              <p className="mt-2  text-gray-600 text-sm ">
                {Register
                  ? "Already have an account"
                  : "Don't have an account ?"}
                <a
                  href="#"
                  onClick={() => {
                    setRegister(!Register);
                  }}
                  className="font-medium text-black transition-all duration-200 hover:underline hover:text-blue-600"
                >
                  {Register ? " Sign In" : " Register"}
                </a>
              </p>
              <form action="#" method="POST" className="pt-10">
                <div className="space-y-5">
                  <div className="relative">
                    <input
                      type="Email"
                      name=""
                      className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-white  rounded-lg border-1  outline-none border shadow-sm border-gray-600 appearance-none text-black   dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                      placeholder=" "
                      required
                      minLength="4"
                      onChange={() => {}}
                    />
                    <label
                      required
                      className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-inherit px-2 peer-focus:px-2 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 peer-focus:bg-blue-600"
                    >
                      Email Address
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="password"
                      name=""
                      className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-white  rounded-lg border-1  outline-none border shadow-sm border-gray-600 appearance-none text-black   dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                      placeholder=" "
                      required
                      minLength="4"
                      onChange={() => {}}
                    />
                    <label
                      required
                      className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-inherit px-2 peer-focus:px-2 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1  peer-focus:bg-blue-600"
                    >
                      Password
                    </label>
                  </div>

                  <div>
                    <button
                      type="button"
                      className="inline-flex w-full items-center justify-center rounded-md bg-blue-500 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-blue-400"
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
                <span className="my-4 text-sm flex text-white gap-3">
                  <input type="checkbox" className="" /> Forget Password ?
                </span>
              </form>
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
          )}
          <div className=" relative bg-[url('https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-fixed bg-no-repeat  shadow-lg my-8 lg:flex-1 ">
            <div className="bg-black bg-opacity-30 h-full">
              <div className="relative">
                <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
                  <h3 className="text-3xl font-bold text-white py-12 text-center ">
                    <a
                      href="#"
                      className="-m-1.5 p-1.5 flex align-center justify-center items-center"
                    >
                      <div className="material-icons md-36 ">villa</div>
                      <div className="ile"> Ile</div> <br />
                    </a>
                    <div>
                      Start your search now and discover your next home sweet
                      home.
                    </div>
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
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                        </svg>
                      </div>
                      <span className="text-lg font-medium text-white">
                        {" "}
                        Email Notification of Available Rents{" "}
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
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                        </svg>
                      </div>
                      <span className="text-lg font-medium text-white">
                        {" "}
                        Geo Location of Available Rents{" "}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
