import { motion } from "framer-motion";
import React from "react";

function Work() {
  
  return (
    <div className="max-w-screen-xl m-auto mt-20 px-10 sm:p-10">
      <div className="flex gap-2">
        <svg
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="icon w-4"
          data-v-669b4a84=""
        >
          <path
            d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
            fill="currentColor"
            data-v-669b4a84=""
          ></path>
        </svg>
        <h1 className="text-xl capitalize tracking-tight">Featured Project</h1>
      </div>
      <div className="mt-10">
        <h1 className="text-8xl capitalize sm:text-[30vh] overflow-hidden ">
          < motion.span
          className="inline-block origin-left"
          initial={{rotate:90, y:"40%", opacity:0}}
          whileInView={{rotate:0, y:0, opacity:1}}
          transition={{ease:[0.22,1,0.36,1], duration:0.9}}
          viewport={{once:true}}
          >work</motion.span>
        </h1>
        <p className="mt-10 text-2xl tracking-tighter capitalize">
          Highlights of cases that we passionately built with forward-thinking
          clients and friends over the years.
        </p>
      </div>
      <div className="mt-10 w-full">
       <div className="sm:flex sm:h-[150vh] gap-20 w-full ">
         {/* video1 */}
         <div className="video w-full h-[80vh] sm:h-[120vh] sm:w-[60%] overflow-hidden">
          <motion.img 
          initial={{opacity:1}}
          whileHover={{opacity:0}} 
          data-scroll
          data-scroll-speed="-.2"
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/2409x3000/c155d3e27e/amaterasu-hero.jpg/m/1300x1619/filters:quality(90)"
            alt=""
          />
          <video
            autoPlay
            mute
            loop
            className="block w-full h-full scale-[1.1] absolute top-1/2 left-1/2 "
            src="https://player.vimeo.com/progressive_redirect/playback/1020697798/rendition/720p/file.mp4?loc=external&log_user=0&signature=cd45f23683db91c40f08a3f4a31ba153f1e93eac3d4f98cb3ca4b651b8830d04"
          ></video>
        </div>
        {/* video2 */}
        <div className="mt-36 sm:w-[40%] sm:pl-20 sm:mt-[70vh] relative">
        <div className="video w-full h-[80vh] sm:w-[100%] sm:h-[70vh] overflow-hidden">
          <motion.img 
          initial={{opacity:1}}
          whileHover={{opacity:0}} 
          data-scroll
          data-scroll-speed="-.2"
            className="w-full h-full object-cover absolute z-[2] "
            src="https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)"
            alt=""
          />
          <video
            autoPlay
            mute
            loop
            className="w-full h-full scale-[1.1] absolute z-[1] top-1/2"
            src="https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"
          ></video>
        </div>
        <h1 className="font-semibold text-xl mt-3">Columbia Pictures</h1>
        <h1 className="text-xl text-zinc-600 capitalize">
          Celebrating a century of cinema
        </h1>
      </div>
      </div>
      
      <div className="sm:flex sm:gap-20 ">
            {/* video3 */}
      <div className="mt-10 sm:w-[100%] ">
        <div className="video w-full h-[80vh]  overflow-hidden relative">
          <motion.img 
          initial={{opacity:1}}
          whileHover={{opacity:0}} 
          data-scroll
          data-scroll-speed="-.2"
            className="w-full h-full object-cover "
            src="https://a.storyblok.com/f/133769/2400x2990/8f08135741/studio-d-hero.jpg/m/1300x1620/filters:quality(90)"
            alt=""
          />
          <video
            autoPlay
            mute
            loop
            className="w-full h-full scale-[1.1] absolute top-0 left-0 z-[1] "
            src="https://player.vimeo.com/progressive_redirect/playback/914798702/rendition/720p/file.mp4?loc=external&log_user=0&signature=b76cb0994de6beca7f6ba29e7eb52db1750d34600352dab2566c6ca16fcd817f"
          ></video>
        </div>
        <h1 className="font-semibold text-xl mt-3">Combium</h1>
        <h1 className="text-xl text-zinc-600 capitalize">
          pioneering sustainable solutions
        </h1>
      </div>
      {/* video4 */}
      <div className="mt-10 sm:mt-96 sm:w-full">
        <div className="video w-full h-[80vh] overflow-hidden">
          <motion.img 
          initial={{opacity:1}}
          whileHover={{opacity:0}} 
          data-scroll
          data-scroll-speed="-.2"
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/2409x3000/cfd16e1a58/cambium-carbon-hero.jpg/m/1300x1619/filters:quality(90)"
            alt=""
          />
          <video
            autoPlay
            mute
            loop
            className="w-full h-full scale-[1.1]"
            src="https://player.vimeo.com/progressive_redirect/playback/1001982172/rendition/720p/file.mp4?loc=external&log_user=0&signature=b92eb1ab8119f2ffaaa03f075ef271714f5ee63065ee8d29f4e188ce30202de0"
          ></video>
        </div>
        <h1 className="font-semibold text-xl mt-3">Studio D</h1>
        <h1 className="text-xl text-zinc-600 capitalize">
          urban and Landscape design
        </h1>
      </div>
        
      </div>
       </div>
    
    </div>
  );
}

export default Work;
