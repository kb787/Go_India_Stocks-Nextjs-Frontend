"use client";
import React from "react";
import Image from "next/image";

const Card2 = () => {
  return (
    <div className="flex flex-col ml-24 lg:ml-14 lg:mr-5 mid-xs:ml-4 min-xs:ml-2 min-xs:mr-2">
      <p className="bg-gray-200 text-red-700 px-1 py-1 font-semibold max-h-8 max-w-60 overflow-hidden text-center justify-center text-base mt-1 ml-2 greater-mid-xs:max-w-64 greater-mid-xs:max-h-12 min-xs:max-w-36">
        MARKET STORIES
      </p>
      <div className="flex flex-col">
        <div className="mt-5 w-fit ml-2 border-2 border-slate-200 mb-5 min-xs:w-60">
          <Image
            src="/images/card-2-Image.png"
            width={250}
            height={180}
            alt="Loading your image"
            // className="w-250 h-180 min-xs:w-60 h-40"
          />
          <p className="font-semibold text-sm text-left p-2">
            The Coldest Sunset
          </p>
          <p className="text-xs max-w-60 p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            fermentum lectus nec ipsum eleifend,
          </p>
        </div>
        <div className="mt-5 w-fit ml-2  border-2 border-slate-200 mb-5">
          <Image
            src="/images/card-2-Image.png"
            width={250}
            height={180}
            alt="Loading your image"
            // className="w-250 h-180 min-xs:w-60 h-40"
          />
          <p className="font-semibold text-sm text-left p-2">
            The Coldest Sunset
          </p>
          <p className="text-xs max-w-60 p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            fermentum lectus nec ipsum eleifend
          </p>
        </div>
        <div className="mt-5 w-fit ml-2  border-2 border-slate-200 mb-5">
          <Image
            src="/images/card-2-Image.png"
            width={250}
            height={180}
            alt="Loading your image"
            // className="w-250 h-180 min-xs:w-60 h-40"
          />
          <p className="font-semibold text-sm text-left p-2">
            The Coldest Sunset
          </p>
          <p className="text-xs max-w-60 p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            fermentum lectus nec ipsum eleifend
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
