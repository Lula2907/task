import React from "react";
import "../App.css";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <>
      <nav className="liniar ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <div>
              <svg
                width="49"
                height="40"
                viewBox="0 0 49 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.3947 40C43.8275 39.8689 49 34.6073 49 28.1389C49 24.9931 47.7512 21.9762 45.5282 19.7518L25.7895 0V12.2771C25.7895 14.3303 26.6046 16.2995 28.0556 17.7514L32.6795 22.3784L32.6921 22.3907L40.4452 30.149C40.697 30.4009 40.697 30.8094 40.4452 31.0613C40.1935 31.3133 39.7852 31.3133 39.5335 31.0613L36.861 28.3871H12.139L9.46655 31.0613C9.21476 31.3133 8.80654 31.3133 8.55476 31.0613C8.30297 30.8094 8.30297 30.4009 8.55475 30.149L16.3079 22.3907L16.3205 22.3784L20.9444 17.7514C22.3954 16.2995 23.2105 14.3303 23.2105 12.2771V0L3.47175 19.7518C1.24882 21.9762 0 24.9931 0 28.1389C0 34.6073 5.17252 39.8689 11.6053 40H37.3947Z"
                  fill="#428de3"
                ></path>
              </svg>
            </div>
            <span className="  self-center text-2xl font-semibold whitespace-nowrap text-white">
              Panini8
            </span>
          </a>
          <div className="sm:block hidden">
            <input
              placeholder="Search students"
              className="bg-gray-800 p-[12px] w-[500px]  rounded-xl text-white font-light"
              type="text"
            />
            <button className="bg-lime-400 w-[80px] p-[8px] rounded relative right-[90px]">
              Search
            </button>
          </div>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <img
                className="w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="user photo"
              />
            </button>
            {/* Dropdown menu */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
