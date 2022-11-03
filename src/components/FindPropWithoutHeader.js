import React from "react";
import Img from "../assets/istockphoto-1165384568-612x612.jpg";
const FindPropWithoutHeader = () => {
  return (
    <div>
      <section className="text-black">
        <div className="container px-5 pt-12 mx-auto">
          <div className="flex flex-col justify-center items-center"></div>
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
          <div className="flex flex-row justify-center items-center mt-4">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              See All cities
            </button>{" "}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FindPropWithoutHeader;
