import { Fragment } from "react";


export const Card = () => {
  return (
    <Fragment>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5">
        <div className="col-span-4 flex flex-col items-center text-center lg:col-span-1 lg:items-start lg:text-left">
          <div
            className="flex h-full w-5/6 flex-col justify-end rounded-md relative overflow-hidden"
            style={{
              backgroundPosition: "center" + "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img
              src="https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Running Pro"
              className="object-cover w-full h-full rounded-[10px] z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute left-4 bottom-4 text-left">
              <h1 className="text-sm text-white font-semibold">Running Pro</h1>
              <p className="text-gray-300 mt-2 text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, debitis?
              </p>
              <button className=" text-white cursor-pointer mt-2 font-semibold text-xs">
                Shop Now →
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export const FancyCard = () => {
  return (
    <Fragment>
      <section className="">
        <div className="flex">
          <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 ">
            <div className="mx-3 my-6 relative ">
              <img
                src="https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg "
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10 "></div>
            </div>
          </div>
          <div className="flex flex-col font-[Raleway]">
            {/* little gossip */}
            <div className="text-xs py-3">Available</div>
            <div className="mt-4">
              <h1 className="text-md text-black font-semibold py-2">
                Rosy apartment for rent
              </h1>
              <p className="text-sm">
                {/* location */}
                4, Ikotun Oshodi Lagos Nigeria
              </p>
              <p className="text-xs leading-relaxed pt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                eum aspernatur, perferendis itaque sapiente ipsum optio ab sed
                facere quas?
              </p>
              <div>
                <p className="text-xs"> #24,000.00/month</p>
                {/* button: show Contact */}
                <button className=" text-blue-400  cursor-pointer mt-2 font-semibold text-xs">
                  Contact Now →
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* show case */}
        <div className=" flex">
          {/* featured rents */}
          <div>house 1</div>
        </div>
      </section>
    </Fragment>
  );
};