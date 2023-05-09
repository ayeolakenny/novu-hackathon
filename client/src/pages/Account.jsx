import { Fragment, useState } from "react";
import { Signin } from "../components/Signin";

export const Account = () => {
  return (
    <Fragment>
      <section className="z-auto bg-[url('https://images.pexels.com/photos/3195644/pexels-photo-3195644.jpeg?auto=compress&cs=tinysrgb&w=900')] bg-cover bg-no-repeat bg-fixed">
        <Signin />
      </section>
    </Fragment>
  );
};
