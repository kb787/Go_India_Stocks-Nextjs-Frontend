"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBell,
  faCommentDots,
  faCircleDollarToSlot,
} from "@fortawesome/free-solid-svg-icons";

const Card3 = () => {
  return (
    <div className="bg-gray-200 pr-3 min-h-screen">
      <div className="bg-blue-900 min-w-60 min-h-full">
        <div className="flex gap-1 p-4">
          <FontAwesomeIcon
            icon={faUser}
            className="rounded-full text-white fa-2x border-2 border-blue-900 p-1"
          />
          <p className="text-white text-md pt-2">Hello,User</p>
          <FontAwesomeIcon
            icon={faBell}
            className="rounded-full text-white fa-2x border-2 border-blue-900 pl-14 pt-1"
          />
        </div>
        <div className="flex gap-2 bg-blue-950 justify-center items-center p-3">
          <FontAwesomeIcon
            icon={faCommentDots}
            className="rounded-full text-white fa-2x"
          />
          <p className="text-white text-md pt-2">Disscussion Fourm</p>
        </div>
        <div className="flex gap-2 pt-4 pl-8">
          <FontAwesomeIcon
            icon={faCircleDollarToSlot}
            className="rounded-full text-white fa-2x"
          />
          <p className="text-white text-md pt-2">Market Stories</p>
        </div>
        <div className="flex flex-col pl-2">
          <p className="text-white pt-3 pl-16">Sentiment</p>
          <p className="text-white pt-3 pl-16">Market</p>
          <p className="text-white pt-3 pl-16">Sector</p>
          <p className="text-white pt-3 pl-16">Watchlist</p>
          <p className="text-white pt-3 pl-16">Events</p>
          <p className="text-white pt-3 pl-16">News/Interview</p>
        </div>
      </div>
    </div>
  );
};

export default Card3;
