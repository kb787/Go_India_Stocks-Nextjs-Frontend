"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye, faMessage } from "@fortawesome/free-regular-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Card1 = () => {
  return (
    <div>
      <p className="bg-gray-200 text-red-700 px-3 py-3 font-semibold max-h-14 max-w-96 overflow-hidden text-center justify-center text-2xl mt-1 ml-2">
        DISCUSSION FOURM
      </p>
      <div className="bg-gray-200 pt-1 pb-1 pr-1 pl-1 mt-10 mb-10 ml-2 greater-mid-xs:min-w-96 md:min-w-96 md:pl-2 min-xs:min-w-96">
        <div className="bg-white rounded-md p-2">
          <div className="flex gap-2 greater-mid-xs:gap-2">
            <Image
              src="/images/sampleImagePerson.png"
              alt="Loading your image"
              width={15}
              height={15}
              className="rounded-full"
            />
            <p className="text-lg max-wid-lg font-bold">Lorem Ipsum</p>
            <button className="bg-blue-600 text-white px-5 py-1 rounded-2xl text-xs mt-1">
              Sector 2
            </button>
            <p className=" text-blue-600 text-sm text-right pl-64 pt-1 lg:pl-20 greater-2xl-xs:pl-8  greater-mid-xs:pl-6 md:pl-14 min-xs:pl-24">
              2 min ago
            </p>
          </div>
          <p className="pt-2 text-md font-semibold pr-5 pl-6 w-auto max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is
          </p>
          <div className="flex gap-4 pt-4 pl-6">
            <div className="flex gap-2 md:gap-1">
              <FontAwesomeIcon icon={faHeart} />
              <p className="text-xs">2k</p>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon icon={faEye} />
              <p className="text-xs">2k</p>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon icon={faMessage} />
              <p className="text-xs">2k Comments</p>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon icon={faShareNodes} />
              <p className="text-xs">Share</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 pt-1 pb-1 pr-1 pl-1 ml-2 mt-10 mb-10 greater-mid-xs:min-w-96">
        <div className="bg-white rounded-md p-2">
          <div className="flex gap-2 greater-mid-xs:gap-2">
            <Image
              src="/images/sampleImagePerson.png"
              alt="Loading your image"
              width={15}
              height={15}
              className="rounded-full"
            />
            <p className="text-lg font-bold max-w-lg">Lorem Ipsum</p>
            <button className="bg-blue-600 text-white px-5 py-1 rounded-2xl text-xs mt-1">
              Sector 2
            </button>
            <p className=" text-blue-600 text-sm text-right pl-64 pt-1 lg:pl-20 greater-2xl-xs:pl-8 greater-mid-xs:pl-6 md:pl-14 min-xs:pl-24">
              2 min ago
            </p>
          </div>
          <p className="pt-2 text-md font-semibold pr-5 pl-6 w-auto max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is
          </p>
          <div className="flex gap-4 pt-4 pl-6">
            <div className="flex gap-2 md:gap-1">
              <FontAwesomeIcon icon={faHeart} />
              <p className="text-xs">2k</p>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon icon={faEye} />
              <p className="text-xs">2k</p>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon icon={faMessage} />
              <p className="text-xs">2k Comments</p>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon icon={faShareNodes} />
              <p className="text-xs">Share</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 pt-1 pb-1 pr-1 pl-1 mt-10 mb-10 ml-2 greater-mid-xs:min-w-96">
        <div className="bg-white rounded-md p-2">
          <div className="flex gap-2 greater-mid-xs:gap-2">
            <Image
              src="/images/sampleImagePerson.png"
              alt="Loading your image"
              width={15}
              height={15}
              className="rounded-full"
            />
            <p className="text-lg font-bold max-w-lg">Lorem Ipsum</p>
            <button className="bg-blue-600 text-white px-5 py-1 rounded-2xl text-xs mt-1">
              Sector 2
            </button>
            <p className=" text-blue-600 text-sm text-right pl-64 pt-1 lg:pl-20 greater-2xl-xs:pl-8 greater-mid-xs:pl-6  md:pl-14 min-xs:pl-24">
              2 min ago
            </p>
          </div>
          <p className="pt-2 text-md font-semibold pr-5 pl-6 w-auto max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is
          </p>
          <div className="flex gap-4 pt-4 pl-6">
            <div className="flex gap-2 md:gap-1">
              <FontAwesomeIcon icon={faHeart} />
              <p className="text-xs">2k</p>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon icon={faEye} />
              <p className="text-xs">2k</p>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon icon={faMessage} />
              <p className="text-xs">2k Comments</p>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon icon={faShareNodes} />
              <p className="text-xs">Share</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 pt-1 pb-1 pr-1 pl-1 mt-10 mb-10 ml-2 greater-mid-xs:min-w-96">
        <div className="bg-white rounded-md p-2">
          <div className="flex gap-2 greater-mid-xs:gap-2">
            <Image
              src="/images/sampleImagePerson.png"
              alt="Loading your image"
              width={15}
              height={15}
              className="rounded-full"
            />
            <p className="text-lg font-bold max-w-lg">Lorem Ipsum</p>
            <button className="bg-blue-600 text-white px-5 py-1 rounded-2xl text-xs mt-1">
              Sector 2
            </button>
            <p className=" text-blue-600 text-sm text-right pl-64 pt-1 lg:pl-20 greater-2xl-xs:pl-8 greater-mid-xs:pl-6 md:pl-14 min-xs:pl-24">
              2 min ago
            </p>
          </div>
          <p className="pt-2 text-md font-semibold pr-5 pl-6 w-auto max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is
          </p>
          <div className="flex gap-4 pt-4 pl-6">
            <div className="flex gap-2 md:gap-1">
              <FontAwesomeIcon icon={faHeart} />
              <p className="text-xs">2k</p>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon icon={faEye} />
              <p className="text-xs">2k</p>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon icon={faMessage} />
              <p className="text-xs">2k Comments</p>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon icon={faShareNodes} />
              <p className="text-xs">Share</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
