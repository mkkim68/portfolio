"use client";

import { useEffect, useRef, useState } from "react";

export default function Education() {
  //   const previewRef = useRef<HTMLDivElement | null>(null);
  //   const [w, setWidth] = useState<number>(300);
  //   useEffect(() => {
  //     if (previewRef.current) {
  //       const eventHandler = () => {
  //         const { width } = previewRef.current?.getBoundingClientRect();

  //         setWidth(width);
  //       };

  //       const resizeObserver = new ResizeObserver(eventHandler);
  //       resizeObserver.observe(previewRef.current);

  //       return () => resizeObserver.disconnect();
  //     }
  //   }, []);

  return (
    <div className="h-full flex">
      <div className="flex flex-col py-[35px] items-center w-[35%] border-r-[0.5px] border-[#607B96] gap-10">
        <button
          className="cursor-default text-[14px] text-start
                      w-[full] px-3 py-2 rounded-lg
                      text-[#607B96]
                      bg-white/5 backdrop-blur-md
                      border border-white/10 border-t-white/20

                      transition-all duration-300 ease-out

                      hover:text-[#719fe9]
                      hover:bg-gradient-to-br hover:from-[#719fe9]/12 hover:via-white/2 hover:to-transparent
                      hover:border-[#719fe9]/15 hover:border-t-[#719fe9]/30 hover:-translate-y-[1.5px]
                    "
        >
          <p>Kyunghee Univ.</p>
          Electronic Engineering
          <p>dd</p>
        </button>
        <button
          className="cursor-default text-[14px] text-start
                      w-[full] px-3 py-2 rounded-lg
                      text-[#607B96]
                      bg-white/5 backdrop-blur-md
                      border border-white/10 border-t-white/20

                      transition-all duration-300 ease-out

                      hover:text-[#719fe9]
                      hover:bg-gradient-to-br hover:from-[#719fe9]/12 hover:via-white/2 hover:to-transparent
                      hover:border-[#719fe9]/15 hover:border-t-[#719fe9]/30 hover:-translate-y-[1.5px]
                    "
        >
          <p>SSAFY 11th</p>
          Electronic Engineering
          <p>dd</p>
        </button>
      </div>
      <div
        className={`text-[14px] 
             flex justify-center items-start w-[100%] border-r-[0.5px] border-[#607B96] py-[100px]`}
      >
        ddd
      </div>
    </div>
  );
}
