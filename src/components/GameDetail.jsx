import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router";
import { GoBrowser } from "react-icons/go";
import { FaArrowRight, FaMinus, FaPlus, FaWindows } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/effect-fade/effect-fade.scss";
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const GameDetail = () => {
  const [specificGame, setSpecficGame] = useState();
  const id = useParams();
  const [readMore, setReadMore] = useState(false);
  useEffect(() => {
    fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id.id}`,
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
        setSpecficGame(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const handleReadMore = () => {
    setReadMore(!readMore);
  };
  return (
    <div className="bg-bodyBgBase w-full min-h-[calc(100vh-3.5rem)]">
      {specificGame && (
        <>
          <div className="bg-[#32383E] block rounded-md w-80 m-2 overflow-hidden group hover:scale-[1.03] ease-in transition-all cursor-pointer absolute left-32 top-20">
            <div className="object-cover">
              <img src={specificGame.thumbnail} alt={specificGame.title} />
            </div>
            <div className="content  p-4 relative">
              <h2 className="text-gray-400 font-bold capitalize text-lg mb-2">
                {specificGame.title}
              </h2>
              <div className="free bg-blue-400 absolute right-1 top-4 rounded px-2">
                Free
              </div>
              <p className="text-gray-400 mb-3 relative">
                {specificGame.short_description}
              </p>
              <div className="types flex items-center justify-between">
                <div className="genre font-semibold bg-[#7A8288] text-[#272B30] rounded text-sm px-2 ">
                  {specificGame.genre}
                </div>
                <div className="genre text-xl">
                  {specificGame.platform === "PC (Windows)" ? (
                    <FaWindows />
                  ) : (
                    <GoBrowser />
                  )}
                </div>
              </div>
            </div>
            <div className="playNow mt-2 w-full ">
              <a
                href={specificGame.game_url}
                target="_blank"
                className="rounded bg-blue-500 w-full flex items-center px-10 text-white font-semibold text-xl h-12"
              >
                Play now <FaArrowRight className="text-base ml-3 mt-1" />
              </a>
            </div>
          </div>
          <div className="w-[50rem] pt-8 ml-auto h-full mr-12">
            <h1 className="text-gray-400 font-semibold text-2xl border-b-2 pb-2  border-gray-400">
              About {specificGame.title}
            </h1>
            <p
              className={`mt-2 text-gray-400 break-all whitespace-pre-wrap ${
                readMore ? "h-auto" : "h-64"
              }  transition-all overflow-hidden`}
            >
              {specificGame.description}
            </p>
            <button
              className="text-gray-300 mt-2 flex items-center mb-4"
              onClick={handleReadMore}
            >
              <p className="mr-2">Read {readMore ? "Less" : "More"}</p>{" "}
              {readMore ? <FaMinus /> : <FaPlus />}
            </button>
            <div className="info mb-6">
              <h1 className="text-gray-400 font-semibold mb-4 text-2xl border-b-2 pb-2  border-gray-400">
                Additional Information
              </h1>
              <div>
                <div className="grid grid-cols-3 px-10 mb-4">
                  <div className="text-gray-400 mb-2">
                    Title
                    <div className="text-gray-300">{specificGame.title}</div>
                  </div>
                  <div className="text-gray-400 mb-2">
                    Developer
                    <div className="text-gray-300">
                      {specificGame.developer}
                    </div>
                  </div>
                  <div className="text-gray-400 mb-2">
                    Publisher
                    <div className="text-gray-300">
                      {specificGame.publisher}
                    </div>
                  </div>
                  <div className="text-gray-400 mb-2">
                    Relase Date
                    <div className="text-gray-300">
                      {specificGame.release_date}
                    </div>
                  </div>
                  <div className="text-gray-400 mb-2">
                    Genre
                    <div className="text-gray-300">{specificGame.genre}</div>
                  </div>
                  <div className="text-gray-400 mb-2">
                    Platform
                    <div className="text-gray-300">{specificGame.platform}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="screen-shots mb-6">
              <h1 className="text-gray-400 font-semibold mb-4 text-2xl border-b-2 pb-2  border-gray-400">
                Game Screen Shots
              </h1>
              <Swiper
                spaceBetween={20}
                autoplay={true}
                loop={true}
                effect={"flip"}
              >
                {specificGame &&
                  specificGame.screenshots.map((image, key) => (
                    <SwiperSlide key={key}>
                      <img src={image.image} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
            <div className="system pb-10">
              <h1 className="text-gray-400 font-semibold mb-4 text-2xl border-b-2 pb-2  border-gray-400">
                Minimum System Requirements {specificGame.platform}
              </h1>
              <div className="grid grid-cols-2">
                <div className="text-gray-400 mb-2">
                  OS{" "}
                  <div className="text-gray-300">
                    {specificGame.minimum_system_requirements.os}
                  </div>
                </div>
                <div className="text-gray-400 mb-2">
                  Proceccor{" "}
                  <div className="text-gray-300">
                    {specificGame.minimum_system_requirements.processor}
                  </div>
                </div>
                <div className="text-gray-400 mb-2">
                  Memory{" "}
                  <div className="text-gray-300">
                    {specificGame.minimum_system_requirements.memory}
                  </div>
                </div>
                <div className="text-gray-400 mb-2">
                  Graphics{" "}
                  <div className="text-gray-300">
                    {specificGame.minimum_system_requirements.graphics}
                  </div>
                </div>
                <div className="text-gray-400 mb-2">
                  Storage{" "}
                  <div className="text-gray-300">
                    {specificGame.minimum_system_requirements.storage}
                  </div>
                </div>
                <div className="text-gray-400 mb-2">
                  Additional Notes{" "}
                  <div className="text-gray-300">
                    Specifications may change during development
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default GameDetail;
