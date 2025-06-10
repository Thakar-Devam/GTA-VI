import React from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { useState } from 'react'
import 'remixicon/fonts/remixicon.css'

function App() {
  let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.8) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {

    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".character", {
      scale: 0.8,
      x: "-50%",
      bottom: "-60%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}% `,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className='svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]'>
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className='navbar absolute top-0 left-0 z-[10] py-10 px-10 w-full'>
              <div className='logo flex justify-between flex-row-reverse align-center'>
                <div className="lines flex flex-col gap-1">
                  <div className='line w-9 h-[5px] bg-white'></div>
                  <div className='line w-9 h-[5px] bg-white'></div>
                  <div className='line w-9 h-[5px] bg-white'></div>
                </div>
                <h3 className='text-4xl text-white'>Rockstar</h3>
              </div>
            </div>
            <div className='imagesdiv relative w-full h-screen overflow-hidden'>
              <img src="./sky.png" alt="" className='scale-[1.5] rotate-[-5deg] sky w-full h-full object-cover absolute top-0 left-0' />
              <img src="./bg.png" alt="" className='bg scale-[1.8] rotate-[-10deg] w-full h-full object-cover absolute top-0 left-0' />
              <div className='text absolute flex flex-col gap-3 -translate-x-1/2 top-12 left-1/2 text-white scale-[1.4] rotate-[-10deg]'>
                <h1 className='text-8xl leading-none -ml-20'>grand</h1>
                <h1 className='text-8xl leading-none ml-20'>theft</h1>
                <h1 className='text-8xl leading-none -ml-20'>auto</h1>
              </div>
              <img src="./girlbg.png" alt="" className='character absolute -bottom-[190%] -translate-x-1/2 left-1/2 scale-[2] rotate-[-20deg]' />
            </div>
            <div className='btmbar absolute bottom-0 left-0 w-full py-10 px-10 bg-gradient-to-t from-black to-bg-transparent'>
              <div className='flex gap-4 text-white item-center'>
                <i className="ri-arrow-down-line text-3xl"></i>
                <h3 className='text-xl font-[helvatika]'>Scroll Down</h3>

              </div>
              <img src="./ps5.png" className='absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' alt="" />
            </div>
          </div>
          <div className="w-full h-screen flex items-center justify-center bg-black overflow-hidden">
            <div className="cntnr flex text-white w-full h-[80%] mt-10 ">
              <div className="limg relative w-1/2 h-full">
                <img
                  className="absolute scale-[1.1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rg w-[40%]">
                <h1 className="text-5xl">Still Running,</h1>
                <h1 className="text-5xl">Not Hunting</h1>
                <p className="mt-10 text-xl font-[helvatika]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Distinctio possimus, asperiores nam, omnis inventore nesciunt
                  a architecto eveniet saepe, ducimus necessitatibus at
                  voluptate.
                </p>
                <p className="mt-3 text-xl font-[helvatika]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  excepturi soluta tenetur illo repellat consectetur laborum
                  eveniet eaque, dicta, hic quisquam? Ex cupiditate ipsa nostrum
                  autem sapiente.
                </p>
                <p className="mt-3 text-xl font-[helvatika]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  eius illum fugit eligendi nesciunt quia similique velit
                  excepturi soluta tenetur illo repellat consectetur laborum
                  eveniet eaque, dicta, hic quisquam? Ex cupiditate ipsa nostrum
                  autem sapiente.
                </p>
                <button className="bg-yellow-500 px-10 py-5 text-black mt-10 text-4xl">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App
