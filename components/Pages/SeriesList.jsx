import { baseUrl } from "@/utils/requests";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const SeriesList = ({
  seriesname,
  seriesPost,
  seriesoverview,
  seriesRating,
  seriesDate,
  seriesid,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const imageOpacity = isHovered ? "opacity-40" : "opacity-100";
  const textOpacity = isHovered ? "opacity-100" : "opacity-0";

  return (
    <>
      <Link href={`/series/${seriesid}`}>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative   flex flex-col items-center w-[100%] cursor-pointer transition duration-300 ease-out "
        >
          <div className="relative">
            <Image
              src={`${baseUrl}${seriesPost}`}
              alt="poster"
              width={200}
              height={250}
              className={`rounded-[5px] hover:opacity-50 ${imageOpacity}`}
            />
            <p className="text-[13px] md:hidden text-center py-2">
              {seriesname}
            </p>
            <div className="absolute bottom-0 px-6 pt-3 md:px-5 xl:px-5 lg:py-4 pb-3 xl:py-10 hidden md:flex flex-col justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-out ">
              <div className="text-[18px] lg:text-[15px] xl:text-[22px] font-bold">
                {seriesname}
                {""}
              </div>
              <div className="text-[14px] lg:text-[10px] ">
                {seriesDate}
                {"  "}
                <span className="ml-2 lg:ml-3">
                  {seriesRating}
                  <span className="text-yellow-500">&#x2605;</span>
                </span>
              </div>
              <div className="text-[15px] lg:text-[14px] xl:text-[15px]  ">
                {seriesoverview.slice(0, 60) + "..."}
                {""}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SeriesList;
