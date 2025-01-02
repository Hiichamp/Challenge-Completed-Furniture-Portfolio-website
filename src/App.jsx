import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <nav className="w-full  ">
        <div className="w-full sm:w-3/4 lg:w-2/3 bg-gray-200 h-15 mt-4 text-center flex flex sm:flex-row justify-center mx-auto rounded-xl gap-2 sm:gap-[15vw]">
          <NavLink
            style={(e) => ({
              color: e.isActive ? "white" : "",
              backgroundColor: e.isActive ? "gray" : "",
            })}
            className="px-5 py-2 font-semibold text-lg sm:text-xl rounded-lg"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            style={(e) => ({
              color: e.isActive ? "white" : "",
              backgroundColor: e.isActive ? "gray" : "",
            })}
            className="px-5 py-2 font-semibold text-lg sm:text-xl rounded-lg"
            to="/About"
          >
            About
          </NavLink>
          <NavLink
            style={(e) => ({
              color: e.isActive ? "white" : "",
              backgroundColor: e.isActive ? "gray" : "",
            })}
            className="px-5 py-2 font-semibold text-lg sm:text-xl rounded-lg"
            to="/Contact"
          >
            Contact
          </NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
