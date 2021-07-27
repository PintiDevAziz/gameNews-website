import React, { createContext, useState } from "react";

export const MainContext = createContext();

export const MainContextPorvider = ({ children }) => {
  const [inputVal, setInputVal] = useState("");
  const [noResult, setNoResult] = useState(false);
  const [platform, setPlatform] = useState("all");
  const data = {
    inputVal,
    setInputVal,
    noResult,
    setNoResult,
    platform,
    setPlatform,
  };
  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};
