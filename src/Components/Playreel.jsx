import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

function Playreel() {
  const parent = useRef(null)
  const videoref = useRef(null)
 useEffect(()=>{
  gsap.registerPlugin(ScrollTrigger)
  gsap.to(videoref.current,{
    scrollTrigger:{
      trigger: parent.current,
      top: "0 0",
      pin:true,
      scrub:1,
      markers:true
    },
    width:"120%",
    height:"100%",
    // ease: "linear",
  })

 })
  return (
    <div ref={parent} className="w-full h-screen bg-black text-white p-10 relative">
      <div ref={videoref} className="w-40 aspect-video bg-red-400 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <video className="w-full h-full"  autoPlay loop muted src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"></video>
      </div>
      <div className=" w-full h-full flex flex-col justify-between items-center">
        <div className="flex">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon w-4 text-white"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <h1 className=" ml-2">Work In Motion</h1>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="text-5xl sm:text-9xl flex gap-32">
            <div>Play</div>
            <div>Reel</div>
          </h1>
        </div>
        <div className="px-10 text-center">
          <p className="text-xs">
            Our work is best experienced in motion. Don’t forget to put on your
            headphones.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Playreel;
