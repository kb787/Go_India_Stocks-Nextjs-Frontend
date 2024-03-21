"use client";
import React from "react";
import Card1 from "./(card-containers)/Card1";
import Card2 from "./(card-containers)/Card2";
import Card3 from "./(card-containers)/Card3";

const HomepageOne = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex">
        <Card3 />
        <Card1 />
        <Card2 />
      </div>
    </div>
  );
};

export default HomepageOne;
