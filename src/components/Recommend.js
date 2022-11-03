import React from "react";
import apt from "../assets/istockphoto-1165384568-612x612.jpg";
const Recommend = () => {
  return (
    <div>
      <section className="text-gray-600 body-font text-center py-5">
        <h1 className="text-4xl font-bold text-black">NewsLetter</h1>
        <div class="p-6 container md:w-2/3 xl:w-auto mx-auto flex flex-col xl:items-stretch justify-between xl:flex-row">
          <div class="xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center">
            <img
              src="https://cdn.tuk.dev/assets/components/26May-update/newsletter-1.png"
              alt="Envelope with a newsletter"
              role="img"
              class="h-full xl:w-full lg:w-1/2 w-full"
            />
          </div>
          <div class="w-full xl:w-1/2 xl:pl-40 xl:py-28">
            <h1 class="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-gray-800 dark:text-white mb-4 text-center xl:text-left md:mt-0 mt-4">
              Subscribe
            </h1>
            <p class="text-base leading-normal text-gray-600 dark:text-gray-200 text-center xl:text-left">
              Whether article spirits new her covered hastily sitting her. Money
              witty books nor son add.
            </p>
            <div class="flex items-stretch mt-12">
              <input
                class="bg-gray-100 rounded-lg rounded-r-none dark:bg-gray-800 text-base leading-none text-gray-800 dark:text-white p-5 w-4/5 border border-transparent focus:outline-none focus:border-gray-500"
                type="email"
                placeholder="Your Email"
              />
              <button class="w-32 rounded-l-none hover:bg-indigo-600 bg-indigo-700 rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">
                subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between w-full mb-20 pt-18">
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            There are many variations of passages of Lorem Ipsum available but
            the this in majority have suffered alteration in some
          </p>
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Recomended For You
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <div className="flex flex-row justify-center items-center mt-4">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              See More
            </button>{" "}
          </div>
        </div>
        <div className="container mx-auto flex px-5  md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Bravo Apollo Apartments
            </h1>
            <h1>779 6th Ave New York, NY 120400</h1>
            <p>$3200</p>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              <br />
              air plant cold-pressed tacos poke beard tote bag.
              <br />
              Heirloom echo park mlkshk tote bag selvage hot chicken authentic
              <br />
              tumeric truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded  bg-pink-200 uppercase last:mr-0 mr-1">
                  4 Bed
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded  bg-pink-200 uppercase last:mr-0 mr-1">
                  3 Bath
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded  bg-pink-200 uppercase last:mr-0 mr-1">
                  8 Rooms
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 rounded  bg-pink-200 uppercase last:mr-0 mr-1">
                  500000 sq.fr
                </span>
              </div>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={apt}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recommend;
