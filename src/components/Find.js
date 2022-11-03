import React from "react";
import fam from "../assets/medium-shot-happy-family-nature_23-2148996570.webp";
import loc from "../assets/loc.png";
const Find = () => {
  return (
    <div>
      <div className="relative">
        <img src={fam} className="h-2/3" alt="" />
        <h1 className="absolute text-5xl text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1>Select Your Properties</h1>
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Looking For
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Proprety Size
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Property Location
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-row justify-center items-center mt-4 text-2xl">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Submit
              </button>{" "}
            </div>
          </form>
        </h1>
      </div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -mx-4 -my-8">
            <div class="py-8 px-4 lg:w-1/3">
              <div class="h-full flex items-start">
                <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                  <a class="inline-flex items-center">
                    <img
                      alt="blog"
                      src={loc}
                      class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span class="flex-grow flex flex-col pl-3"></span>
                  </a>
                </div>
                <div class="flex-grow pl-6">
                  <h1 class="title-font text-xl font-medium text-gray-900 mb-3">
                    Buy & Sell Properties
                  </h1>
                  <p class="leading-relaxed mb-5">
                    There are many variations of passages of Lorem Ipsum
                    available but the majority suffered.
                  </p>
                </div>
              </div>
            </div>
            <div class="py-8 px-4 lg:w-1/3">
              <div class="h-full flex items-start">
                <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                  <a class="inline-flex items-center">
                    <img
                      alt="blog"
                      src={loc}
                      class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span class="flex-grow flex flex-col pl-3"></span>
                  </a>
                </div>
                <div class="flex-grow pl-6">
                  <h1 class="title-font text-xl font-medium text-gray-900 mb-3">
                    Perfect Location
                  </h1>
                  <p class="leading-relaxed mb-5">
                    There are many variations of passages of Lorem Ipsum
                    available but the majority suffered.
                  </p>
                </div>
              </div>
            </div>
            <div class="py-8 px-4 lg:w-1/3">
              <div class="h-full flex items-start">
                <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                  <a class="inline-flex items-center">
                    <img
                      alt="blog"
                      src={loc}
                      class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span class="flex-grow flex flex-col pl-3"></span>
                  </a>
                </div>
                <div class="flex-grow pl-6">
                  <h1 class="title-font text-xl font-medium text-gray-900 mb-3">
                    Faster Services
                  </h1>
                  <p class="leading-relaxed mb-5">
                    There are many variations of passages of Lorem Ipsum
                    available but the majority suffered.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Find;
