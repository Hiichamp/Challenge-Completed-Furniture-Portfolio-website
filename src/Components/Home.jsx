import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import ForHome from "../Components2/ForHome";
import ForOffice from "../Components2/ForOffice";
import Others from "../Components2/Others";

function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-200">
      <div className="mx-auto mt-5 px-4 sm:px-8 lg:px-16">
        <div className="w-full h-64 sm:h-80 lg:h-96 bg-red-600 overflow-hidden rounded-lg">
          <img
            className="w-full h-full object-cover"
            src="https://www.ulcdn.net/media/furniture-stores/coimbatore/avinashiroad/Avinashi-Road-TN-store-mobile.jpg?1683050227"
            alt="Furniture Store"
          />
        </div>
        <div className="w-full bg-gray-300 h-auto mt-4 text-center flex flex-col sm:flex-row justify-center items-center mx-auto rounded-xl gap-2 sm:gap-4 lg:gap-6 px-4 py-2 sm:py-4">
          <NavLink
            to="/"
            style={(e) => ({
              color: e.isActive ? "white" : "",
              backgroundColor: e.isActive ? "gray" : "",
            })}
            className="px-4 py-2 m-2 bg-gray-200 rounded-lg"
          >
            For Home
          </NavLink>
          <NavLink
            to="/forOffice"
            style={(e) => ({
              color: e.isActive ? "white" : "",
              backgroundColor: e.isActive ? "gray" : "",
            })}
            className="px-4 py-2 m-2 bg-gray-200 rounded-lg"
          >
            For Office
          </NavLink>
          <NavLink
            to="/Others"
            style={(e) => ({
              color: e.isActive ? "white" : "",
              backgroundColor: e.isActive ? "gray" : "",
            })}
            className="px-4 py-2 m-2 bg-gray-200 rounded-lg"
          >
            Others
          </NavLink>
        </div>
      </div>
      <div className="px-4 sm:px-8 lg:px-16 mt-4">
        <Routes>
          <Route path="/" element={<ForHome />} />
          <Route path="/forOffice" element={<ForOffice />} />
          <Route path="/Others" element={<Others />} />
        </Routes>
      </div>
    </div>
  );
}

export default Home;
