import { Fragment, useState } from "react";
import { Signin } from "../components/Signin";
import { SignUp } from "../components/Signup";


export const Account = () => {
  const [newUser, setnewUser] = useState(!true);
  return (
    <Fragment>
      <section className="relative bg-[url('https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-fixed h-screen bg-no-repeat ">
        <div>{newUser ? <SignUp /> : <Signin />}</div>
      </section>
    </Fragment>
  );
};
