import React, { useContext, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MainContext } from "../MainContext";
const Header = () => {
  const { setInputVal } = useContext(MainContext);
  const [sticky, setSticky] = useState(false);
  const stickyHeader = (e) => {
    if (window.pageYOffset > 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
    console.log(sticky);
  };
  window.addEventListener("scroll", stickyHeader);
  return (
    <div
      className={`flex items-center bg-bgBase w-full h-14 px-36 ${
        sticky ? " fixed top-0 left-0 z-50 transition-all" : null
      }`}
    >
      <div className="logo">
        <img
          src="https://www.freetogame.com/assets/images/freetogame-logo.png"
          alt="freeToGameLogo"
        />
      </div>
      <ul className="ml-5">
        <li className="text-gray-400 font-semibold">
          <Link to="/">Game List</Link>
        </li>
      </ul>
      <label className="ml-auto flex items-center text-white group">
        <input
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
          type="text"
          className="bg-transparent w-0 group-focus-within:w-60 transition-all mr-4 h-8 text-center px-3"
          placeholder="Search game"
        />
        <FaSearch className="text-gray-400 group-focus-within:text-white transition-all text-xl" />
      </label>
    </div>
  );
};

export default Header;
