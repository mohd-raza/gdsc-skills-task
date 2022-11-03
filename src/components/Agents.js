import React from "react";
import { FiInstagram } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import { FaPinterestP } from "react-icons/fa";
const Agents = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-12 mx-auto">
          <div class="flex flex-row -m-4 justify-center items-center">
            <div class="p-4 lg:w-[350px] h-[332px]">
              <div class="h-full bg-white bg-opacity-75 px-8 pt-16 pb-12 rounded-lg overflow-hidden text-center relative shadow-md flex flex-col justify-center items-center">
                <img
                  src="https://i.pravatar.cc/150?img=60"
                  className="rounded-full w-32"
                  alt="avatar"
                />

                <p className="text-black text-2xl inline-flex items-center mt-2">
                  Grant Marshall
                </p>
                <p className="mt-2">Agents</p>

                <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full pb-4">
                  <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm ">
                    <FiInstagram className="text-xl" />
                  </span>
                  <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm">
                    <GrLinkedinOption className="text-xl" />
                  </span>
                  <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm">
                    <FaPinterestP className="text-xl" />
                  </span>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-[350px] h-[332px]">
              <div class="h-full bg-white bg-opacity-75 px-8 pt-16 pb-12 rounded-lg overflow-hidden text-center relative shadow-md flex flex-col justify-center items-center">
                <img
                  src="https://i.pravatar.cc/150?img=70"
                  className="rounded-full w-32"
                  alt="avatar"
                />

                <p className="text-black text-2xl inline-flex items-center mt-2">
                  Grant Marshall
                </p>
                <p className="mt-2">Agents</p>

                <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full pb-4">
                  <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm ">
                    <FiInstagram className="text-xl" />
                  </span>
                  <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm">
                    <GrLinkedinOption className="text-xl" />
                  </span>
                  <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm">
                    <FaPinterestP className="text-xl" />
                  </span>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-[350px] h-[332px]">
              <div class="h-full bg-white bg-opacity-75 px-8 pt-16 pb-12 rounded-lg overflow-hidden text-center relative shadow-md flex flex-col justify-center items-center">
                <img
                  src="https://i.pravatar.cc/150?img=62"
                  className="rounded-full w-32"
                  alt="avatar"
                />

                <p className="text-black text-2xl inline-flex items-center mt-2">
                  Grant Marshall
                </p>

                <p className="mt-2">Agents</p>
                <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full pb-4">
                  <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm ">
                    <FiInstagram className="text-xl" />
                  </span>
                  <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm">
                    <GrLinkedinOption className="text-xl" />
                  </span>
                  <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm">
                    <FaPinterestP className="text-xl" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center mt-4">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            See All Agents
          </button>{" "}
        </div>
      </section>
    </div>
  );
};

export default Agents;
