import React from "react";
import Img from "../assets/istockphoto-1165384568-612x612.jpg";
const Blog = () => {
  return (
    <div>
      <section className="text-black">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-extrabold text-3xl">
              Our Latest Property News
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
                Appartment
              </h2>
              <h1 className="font-extrabold text-xl my-1">
                Top Title Insurer Exposed.
              </h1>
              <p className="text-base leading-relaxed mt-2">
                It is a long established fact that a reader is will be
                distracted by the readable....
              </p>
              <div className="inset-0 flex items-center py-4">
                <div className="w-full border-b border-gray-300"></div>
              </div>
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
                Appartment
              </h2>
              <h1 className="font-extrabold text-xl my-1">
                Top Title Insurer Exposed.
              </h1>
              <p className="text-base leading-relaxed mt-2">
                It is a long established fact that a reader is will be
                distracted by the readable....
              </p>
              <div className="inset-0 flex items-center py-4">
                <div className="w-full border-b border-[#0984E3]"></div>
              </div>
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
                Appartment
              </h2>
              <h1 className="font-extrabold text-xl my-1">
                Top Title Insurer Exposed.
              </h1>
              <p className="text-base leading-relaxed mt-2">
                It is a long established fact that a reader is will be
                distracted by the readable....
              </p>
              <div className="inset-0 flex items-center py-4">
                <div className="w-full border-b border-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center mt-4">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            See All News
          </button>{" "}
        </div>
      </section>
    </div>
  );
};

export default Blog;
