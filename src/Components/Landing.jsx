import { delay, motion } from "framer-motion";
import { Power0, Power4 } from "gsap";
import React from "react";
import { FaRotate } from "react-icons/fa6";

function Landing() {
  return (
    <div className="w-full sm:h-[250vh] h-[150vh] overflow-hidden relative">
      <div  className="w-full h-full ">
        <img
           data-scroll 
           data-scroll-speed="-1"
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt=""
        />
      </div>

      <div className="absolute z-[999] top-0 w-full ">
        <div className="mt-96 max-w-screen-xl m-auto p-5 sm:p-10 text-white">
          <div className="para-1 sm:ml-4 ml-2">
            {[
              "Global digital design studio partnering",
              "with brands and businesses that create",
              "exceptional experiences where people",
              "live, work, and unwind.",
            ].map((val,idx)=>(
              <p className="text-md sm:text-2xl tracking-tighter leading-none overflow-hidden">
              <motion.span
                initial={{ rotate: 90, y: "100%", opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 1  }}
                transition={{ ease: [0.22,1,0.36,1], duration: .5,delay: idx*0.2 }}
                className="inline-block origin-left"
              >
                {val}
              </motion.span>
            </p>
            ))}
            
          </div>
          <div className="heading mt-8 ml-0">
            {["Digital","Design","Experience"].map((val,idx)=>(
              <h1 className="text-8xl sm:text-[14vw] font-semibold tracking-tighter leading-none">
              <motion.span
                initial={{ rotate: 90, y: "100%", opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 1  }}
                transition={{ ease: [0.22,1,0.36,1], duration: .6,delay: 1+idx*0.2 }}
                className="inline-block origin-left"
              >
                {val}
              </motion.span>
            </h1>
               
            ))}
            
            {/* <h1 className="text-8xl sm:text-[14vw] font-semibold tracking-tighter leading-none">
              Design
            </h1>
            <h1 className="text-8xl sm:text-[14vw] font-semibold tracking-tighter leading-none">
              Experience
            </h1> */}
          </div>
          <div className="para-2 mt-5 sm:mt-16 sm:ml-4 ml-2 sm:w-1/2 ">
            <p className="sm:text-xl ">
              <motion.span
                initial={{ Rotate: 90, y: "100%", opacity: 0 }}
                animate={{ Rotate: 0, y: 0, opacity: 1 }}
                transition={{ ease: Power4.easeIn, duration: 0.9 }}
                className="inline-block origine-left"
              >
                We help experience-driven companies thrive by making their
                {/* audience feel the refined intricacies of their brand and product
              in the digital space. Unforgettable journeys start with a click. */}
              </motion.span>
            </p>
            <a href="#" className="mt-3 sm:mt-10 inline-block border-b-[0.3px]">
              The Studio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
