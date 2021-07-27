import React, { useContext, useEffect, useState } from "react";
import Game from "./Game";
import LazyLoad from "react-lazyload";
import { MainContext } from "../MainContext";
import { CgSmileSad } from "react-icons/cg";
import Filter from "./filter";
const GameList = () => {
  const { inputVal, platform } = useContext(MainContext);
  useEffect(() => {
    fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${platform} `,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "3a7500bf3fmshd20b0ffde286e45p12717djsn657e168f2e08",
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setGameList(data);
        setSearchGame(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [platform]);
  const [searchGame, setSearchGame] = useState([]);
  const [gameList, setGameList] = useState([]);
  useEffect(() => {
    if (inputVal === "") {
      setSearchGame(gameList);
    } else {
      setSearchGame(
        searchGame.filter((game) => game.title.toLowerCase().includes(inputVal))
      );
    }
  }, [inputVal]);
  return (
    <div className="bg-bodyBgBase p-10 text-white min-h-[calc(100vh-3.5rem)] px-36">
      <div>
        <div className="header-text text-gray-400 text-4xl font-semibold">
          Best Free to Play Games for PC and Browser in 2021!
        </div>
        <p className="text-gray-500 font-semibold mt-4 mb-4">
          350 free-to-play games found in our list!
        </p>
      </div>
      <Filter />
      <div className="flex flex-wrap">
        {gameList &&
          searchGame.map((game, key) => (
            <LazyLoad
              key={key}
              placeholder={
                <div className="w-60 flex items-center justify-center h-72">
                  <div className="border-4 h-16 w-16 border-blue-600 animate-spin rounded-full border-l-blue-200 m-2"></div>
                </div>
              }
              debounce={100}
            >
              <Game key={key} {...game} />
            </LazyLoad>
          ))}
        {searchGame.length === 0 ? (
          <div className="w-full text-center text-3xl mt-20 text-gray-400 flex items-center justify-center">
            {inputVal} ile bagli oyun tapilmadi
            <CgSmileSad className="ml-4 text-4xl" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default GameList;
