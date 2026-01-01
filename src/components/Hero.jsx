import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import Cookie from "/cookie.webp";
import Peanut from "/peanut.png";
import Chip from "/choco-chips.png";
import Gem from "/gem.png";
import Frost from "/frosted-sugar.webp";
import Oreo from "/oreo.webp";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
useLayoutEffect(() => {

  const mm = gsap.matchMedia();

  // =========================
  // DESKTOP (min-width: 768px)
  // =========================
  mm.add("(min-width: 768px)", () => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#section",
        start: "top bottom",
        end: "top 30%",
        scrub: true,
      },
    });

    tl.to("#cookie",
      { y: "90vh", x: "-22vw", rotate: 50, ease: "none" },
      0
    );

    tl.to("#Chip",
      { y: "40vh", x: "45vw", rotate: 50, ease: "none" },
      0
    );


    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#third-section",
        start: "20% 100%",
        end: "50% 50%",
        scrub: true,
       
      },
    });

    tl2.to("#cookie",
      {
        top: "120vh",
        left: "65vw",
        width: "15vw",
        rotate: "30deg",
      },
      "cookism"
    );

    // cleanup ONLY this media query
    return () => {
      tl.kill();
      tl2.kill();
    };
  });


  // =========================
  // MOBILE (max-width: 767px)
  // =========================
  mm.add("(max-width: 767px)", () => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#section",
        start: "top 70%",
        end: "top 30%",
        scrub: true,
       
      },
    });

    tl.to("#cookie",
      { x: "30vh", rotate: 20, ease: "none" },
      0
    );

    tl.to("#hero-text",
      { y: "5vh", ease: "none" },
      0
    );

     const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#third-section",
        start: "20% 100%",
        end: "50% 60%",
        scrub: true,
        markers: true,
      },
    });
    tl2.from("#frogfrog",
      {
       x: "-30vw",
      }
      
    );
    tl2.from("#deerdeer",
      {
       x: "120vw",
      }
     
    );
    tl2.from("#henhen",
      {
        x: "-30vw",
       
      }
      
    );



    return () => tl.kill();
  });


  // =========================
  // GLOBAL CLEANUP
  // =========================
  return () => mm.revert();

}, []);



  return (
    <>
      {/* HERO */}
      <div className="flex relative items-center justify-center hero-container h-[70vh] md:h-[calc(100vh-64px)]  overflow-hidden md:overflow-visible">
        <h1 className="text-brand text-[20.5vw] font-bold z-5 " id="hero-text">
          Cookie
        </h1>

        <img
          id="cookie"
          src={Cookie}
          alt="Cookie"
          className="absolute w-[22vw] rotate-[-60deg] z-999"
        />

        <img
        id="Chip"
          src={Chip}
          alt="Choco Chips"
          className="absolute w-[11vw] top-[55%] left-[35%] z-10"
        />

        <img
          src={Peanut}
          alt="Peanut"
          className="absolute w-[12vw] left-[85%] top-[50%] z-0 translate-x-[-40%] translate-y-[-90%]"
        />

        <img
          src={Gem}
          alt="Gem"
          className="absolute w-[8vw] left-[10%] top-[30%] z-10 translate-x-[-50%] translate-y-[-50%]"
        />
      </div>

      {/* SECTION 2 */}
      <div className="md:h-screen h-[70vh]  bg-[rgba(85,44,16,0.2)]" id="section">
        <div className="flex flex-col md:flex-row  items-center justify-center h-full gap-6">

          <div className="w-1/2 flex items-center justify-center text-3xl font-bold text-brand">
           <img src={Cookie} alt="Cookie" className="md:hidden " />
          </div>

          <div className="md:w-1/2 w-full p-8">
            <h2 className="text-3xl font-bold top-2 text-brand  text-center md:text-left ">
              TASTE THE DIFFERENCE.
            </h2>

            <p className="md:m-6 m-20  text-center md:text-left ">
              Cookie Co. was founded in 2020 during the height of the
              Covid-19 pandemic by Elise and Matt Thomas. Working behind
              the scenes to open the first Cookie Co. location, Elise
              baked her signature cookie recipes using real eggs, real
              butter, and real cane sugar in her home, preparing hundreds
              of boxes weekly by hand for driveway pick-up.
            </p>

            
          </div>
        </div>
      </div>

        {/* THIRD  SECTION */}

        <div className=' md:h-screen h-auto flex md:flex-row flex-col md:items-center md:justify-center md:gap-6 gap-10 p-8  translate-y-[5vh] overflow-hidden' id="third-section">
         
   

          <div className="md:h-[30vh] h-[50vw] bg-brand w-[50vw] md:w-[20vw]  relative flex flex-col md:gap-[2vh] gap-[4vh] items-center justify-center text-white md:rounded-lg rounded-r-lg">
            <img src={Frost} alt="Frosted Sugar" className="w-[90%] h-auto   absolute translate-x-[50vw] md:translate-x-0 md:-translate-y-[20vh] rotate-[30deg]" id="frogfrog" />
                  <h2 className="font-bold md:translate-y-[5vh]">FROSTED SUGAR</h2> 
                  <button className="border-white border rounded-lg w-[50%] hover:bg-white hover:text-brand hover:scale-110 ease-in-out duration-150 md:translate-y-[4vh]">BUY</button>

          </div>
         
                   <div className="md:h-[30vh] h-[50vw] bg-brand w-[50vw] md:w-[20vw]  relative flex flex-col md:gap-[2vh] gap-[4vh] items-center justify-center text-white  md:rounded-lg rounded-l-lg translate-x-[50vw] md:translate-x-0">

            <img src={Cookie} alt="oreo" className="w-[90%] h-auto   absolute md:hidden -translate-x-[50vw] md:-translate-y-[20vh] rotate-[30deg]" id="deerdeer"/>

                  <h2 className="font-bold md:translate-y-[5vh]">OREO</h2> 

                  <button className="border-white border rounded-lg w-[50%] hover:bg-white hover:text-brand hover:scale-110 ease-in-out duration-150 md:translate-y-[4vh]">BUY</button>

          </div>
        
         
                   <div className="md:h-[30vh] h-[50vw] bg-brand w-[50vw] md:w-[20vw]  relative flex flex-col md:gap-[2vh] gap-[4vh] items-center justify-center text-white  md:rounded-lg rounded-r-lg">
            <img src={Oreo} alt="Frosted Sugar" className="w-[90%] h-auto   absolute translate-x-[50vw] md:translate-x-0 md:-translate-y-[20vh] rotate-[30deg]" id="henhen"/>
                  <h2 className="font-bold md:translate-y-[5vh]">OREO</h2> 
                  <button className="border-white border rounded-lg w-[50%] hover:bg-white hover:text-brand hover:scale-110 ease-in-out duration-150 md:translate-y-[4vh]">BUY</button>

          </div>
        

        </div>
        <footer className="bg-brand text-white text-center h-[20vh] p-4 translate-y-[20vh] flex items-center justify-center">
          
          <h1 className="font-bold">COOKIE CO.</h1>
           <p className="text-sm opacity-80 mt-1">
        Baked fresh. Loved always.
      </p>
     
            


        </footer>


    </>
  );
};

export default Hero;
