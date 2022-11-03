import React from "react";
import fam from "../assets/medium-shot-happy-family-nature_23-2148996570.webp";
const Gallery = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={fam}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                Are You Looking Best Property Near You? Contact Us{" "}
              </h1>
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Who are we
              </h2>

              <p className="leading-relaxed">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has normal
                distribution.
                <br />
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>

              <div className="flex space-x-6">
                <span className="title-font font-medium text-xl text-gray-900">
                  332+
                  <br />
                  Properties Sold
                </span>{" "}
                <span className="title-font font-medium text-xl text-gray-900">
                  158+
                  <br />
                  Properties Sold
                </span>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
