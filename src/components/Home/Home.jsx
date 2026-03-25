import React from "react";
import { Link } from "react-router-dom";
import tree from "../../assets/tree.jpg";
import tree2 from "../../assets/tree2.jpg";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl px-3 sm:px-0">
      <aside className="relative overflow-hidden text-black rounded-2xl sm:mx-12 mx-0 py-8 sm:py-16">
        <div className="absolute inset-0 bg-linear-to-t from-white/95 via-white/65 to-white/20 sm:hidden" />

        <div className="relative z-10 max-w-7xl px-4 pb-6 pt-6 sm:pb-20 sm:pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl mt-44 sm:mt-1 space-y-6 text-center sm:text-right sm:ml-auto">
            <h2 className="text-3xl font-bold sm:text-5xl">
              Download Now
              <span className="block text-2xl mt-1 sm:text-4xl">
                Lorem Ipsum
              </span>
            </h2>

            <Link
              className="inline-flex text-white items-center px-5 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-85"
              to="/"
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              &nbsp; Download now
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-8 h-full">
          <img
            className="w-full h-full object-cover sm:object-contain"
            src={tree}
            alt="image1"
          />
        </div>
      </aside>

      <div className="grid place-items-center mt-8 sm:mt-20 outline-none px-1 sm:px-0">
        <img className="w-full max-w-4xl rounded-xl" src={tree2} alt="image2" />
      </div>

      <h1 className="text-center text-2xl sm:text-5xl py-8 sm:py-10 font-medium tracking-tight">
        React-Router
      </h1>
    </div>
  );
}
