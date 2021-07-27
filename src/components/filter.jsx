import React, { useContext } from "react";
import { CgWindows } from "react-icons/cg";
import { MdKeyboardArrowDown, MdSettingsEthernet } from "react-icons/md";
import { ImFloppyDisk } from "react-icons/im";
import { MainContext } from "../MainContext";
const Filter = () => {
  const { setPlatform, platform} = useContext(MainContext);
  return (
    <div className="border-b-2 border-gray-600 py-3 mb-4 relative flex items-center justify-between">
      <div className="platform flex items-center group">
        <h2 className="text-gray-400">Platform : </h2>
        <div className="dropdown ml-2">
          <div
            tabIndex="0"
            className="dropdwon-button flex items-center cursor-pointer"
          >
            <p className="capitalize">{platform}</p>
            <MdKeyboardArrowDown className="text-xl text-blue-500" />
          </div>
          <div className="bg-[#3A3F44] text-[#91999e] absolute top-10 rounded-md group-hover:scale-100 py-2 px-4 z-50 scale-0 transition-all">
            <p className="mb-2">Browse by platform </p>
            <div className="options">
              <div
                className="flex items-center w-full hover:text-white transition-all cursor-pointer my-2"
                onClick={() => setPlatform("all")}
              >
                All
              </div>
              <div
                className="flex items-center w-full hover:text-white transition-all cursor-pointer my-2"
                onClick={() => setPlatform("pc")}
              >
                <CgWindows className="mr-1" /> Windows
              </div>
              <div
                className="flex items-center w-full hover:text-white transition-all cursor-pointer my-2"
                onClick={() => {
                  setPlatform("browser");
                }}
              >
                <ImFloppyDisk className="mr-1" /> Browser Web
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
