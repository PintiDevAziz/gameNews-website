import React from "react";
import { FaWindows } from "react-icons/fa";
import { GoBrowser } from "react-icons/go";
import { Link } from "react-router-dom";
const Game = (game) => {
  console.log(game.platform);
  return (
    <Link
      to={`/${game.id}`}
      className="bg-[#32383E] block rounded-md w-60 m-2 overflow-hidden group hover:scale-[1.03] ease-in transition-all cursor-pointer"
    >
      <div className="object-cover">
        <img src={game.thumbnail} alt={game.title} />
      </div>
      <div className="content  p-4 relative">
        <h2 className="text-gray-400 font-bold capitalize text-lg mb-2">
          {game.title}
        </h2>
        <div className="free bg-blue-400 absolute right-1 top-4 rounded px-2">
          Free
        </div>
        <p className="text-gray-400 w-56 min-w-56 overflow-hidden h-6 mb-3 relative">
          {game.short_description}{" "}
          <span className="absolute top-0 right-3">...</span>
        </p>
        <div className="types flex items-center justify-between">
          <div className="genre font-semibold bg-[#7A8288] text-[#272B30] rounded text-sm px-2 ">
            {game.genre}
          </div>
          <div className="genre text-xl">
            {game.platform === "PC (Windows)" ? <FaWindows /> : <GoBrowser   />}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Game;
