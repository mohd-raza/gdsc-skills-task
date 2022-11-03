import React from "react";
import Img from "../assets/istockphoto-1165384568-612x612.jpg";
const FindProp = () => {
  return (
    <div>
      <section className="text-black">
        <div className="container px-5 pt-24 pb-0 mx-auto">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-extrabold text-3xl">
              Find Properties In These Cities{" "}
            </h1>
            <p className="font-thin text-sm my-4">
              There are many variations of passages of Lorem Ipsum available but
              the this in majority have suffered alteration in some
            </p>
          </div>
          <div className="flex flex-row sm:-m-4 -mx-4 -mb-10 -mt-4 justify-center items-center">
            <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={Img}
                />
              </div>
              <h2 className="text-md font-medium title-font text-[#0984E3] mt-5">
                San Fransico
              </h2>
            </div>
            <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={Img}
                />
              </div>
              <h2 className="text-md font-medium title-font text-[#0984E3] mt-5">
                San Fransico
              </h2>
            </div>
            <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={Img}
                />
              </div>
              <h2 className="text-md font-medium title-font text-[#0984E3] mt-5">
                San Fransico
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FindProp;
