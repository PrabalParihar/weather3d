import React, { useState } from "react";
import { fetchWeatherData } from "../api/weather";
import WeatherCard from "./CurrentWeather/WeatherCard";
import CustomGlobe from "./CustomGlobe";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [data, setdata] = useState();

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    fetchWeatherData(searchValue).then((data) => {
      if (data.status === 200) {
        data.json().then((r) => {
          console.log("data", r);
          setdata(r);
        });
      } else {
        data.json().then((e) => {
          toast.error(e.message);
        });
      }
    });

    console.log("Search value:", searchValue);
  };

  return (
    <div className="mb-3">
      <div className="">
        <div className="flex-1">
          <CustomGlobe data={data} />
        </div>
        <div className="flex items-center fixed bottom-32 right-16">
          <WeatherCard data={data} />
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
        <div className="w-1/2 fixed right-1/4 top-4">
          <form onSubmit={handleSearchSubmit}>
            <div className="bg-opacity-40 backdrop-filter backdrop-blur-lg bg-white bg-clip-padding rounded-lg p-4 shadow-lg">
              <div className="flex items-center">
                <input
                  type="search"
                  className="w-full py-2 px-3 rounded-md border border-neutral-300 bg-transparent outline-none text-white focus:border-primary focus:ring focus:ring-primary dark:border-neutral-600 dark:text-neutral-200 dark:placeholder-text-white-200 dark:focus:border-primary"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchValue}
                  onChange={handleSearchChange}
                />
                <button
                  type="submit"
                  className="ml-2 p-2 rounded-full text-white hover:text-primary focus:outline-none focus:text-primary dark:text-neutral-200 dark:hover:text-primary"
                  aria-label="Search"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
