"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { RxDot, RxCross2 } from "react-icons/rx";

const Photos = () => {
  const slides = [
    {
      url: "/photos/img1.jpg",
      desc: "snow walk",
    },
    {
      url: "/photos/img2.jpg",
      desc: "sunflower",
    },
    {
      url: "/photos/img3.jpg",
      desc: "snow explosions",
    },
    {
      url: "/photos/img4.jpg",
      desc: "winter path",
    },
    {
      url: "/photos/img5.jpg",
      desc: "grass",
    },
    {
      url: "/photos/img6.jpg",
      desc: "wet boy",
    },
    {
      url: "/photos/img7.jpg",
      desc: "glimmer",
    },
    {
      url: "/photos/img8.jpg",
      desc: "bellevue",
    },
    {
      url: "/photos/img9.jpg",
      desc: "rainier",
    },
    {
      url: "/photos/img10.jpg",
      desc: "sunset",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideBoxOpen, setSlideBoxOpen] = useState(false);

  const handleOpenSlideBox = (index: React.SetStateAction<number>) => {
    // const handleOpenSlideBox = () => {
    setCurrentIndex(index);
    setSlideBoxOpen(!slideBoxOpen);
  };

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="flex w-full justify-center p-6 bg-slate-600 pt-20">
      <div className=" mx-auto flex flex-col justify-center h-full px-8">
        <p className="py-2 text-xl tracking-widest text-slate-400 border-b-2 border-[#1a363d] ">
          photos
        </p>
        <div className="flex h-full p-10 sm:mt-auto justify-center">
          {/* <div className='grid sm:grid-cols-1 md:grid-cols-4 lg:grid-col-4 gap-1 text-slate-200 '>  */}
          <div className="flex flex-row flex-wrap justify-center gap-1 text-slate-200 ">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => handleOpenSlideBox(slideIndex)}
                className="grid p-2 rounded-sm text-sm hover:scale-105 ease-in duration-100 "
              >
                <div className="grid grid-cols-1 p-2 gap-1 shadow-md rounded-sm bg-[#1a363d] justify-center items-center">
                  <div className="m-auto ">
                    <Image
                      className="rounded-sm w-auto h-auto"
                      src={slides[slideIndex].url}
                      width="200"
                      height="200"
                      alt={slides[slideIndex].desc}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center p-1">
                    <p className="tracking-widest">{slides[slideIndex].desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        onClick={() => handleOpenSlideBox(0)}
        className={
          slideBoxOpen
            ? "fixed border-[#1a363d] bg-black rounded-lg m-auto top-0 left-0 right-0 bottom-0 w-full h-full"
            : "hidden fixed border-[#004050] bg-[#1a363d]/50 rounded-lg m-auto top-0 left-0 right-0 bottom-0 w-full h-full"
        }
      ></div>
      <div
        className={
          slideBoxOpen
            ? "fixed border-2 border-[#004050] bg-[#1a363d]/90 rounded-lg m-auto top-0 left-0 right-0 bottom-0 max-w-[80%] h-[95%] group"
            : "hidden"
        }
      >
        <div className="flex flex-col w-full h-full rounded-sm items-center justify-center p-2 m-auto">
          {/* <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full min-h-full rounded-sm bg-center bg-contain bg-no-repeat p-2 m-auto'> */}
          <div className=" flex m-auto w-full justify-center rounded-sm p-5">
            <div className="h-full m-auto p-10 ">
              <Image
                className="object-cover rounded-sm p-2"
                src={slides[currentIndex].url}
                fill
                // width='400'
                // height='400'
                alt={slides[currentIndex].desc}
              />
            </div>
          </div>
        </div>
        <div
          onClick={prevSlide}
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-[2%] text-2xl rounded-full p-2 bg-slate-900/40 border-2 border-slate-400/60 text-slate-400/60 cursor-pointer"
        >
          <FaChevronLeft size={10} />
        </div>
        <div
          onClick={nextSlide}
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%]  right-[2%] text-2xl rounded-full p-2 bg-slate-900/40 border-2 border-slate-400/60 text-slate-400/60 cursor-pointer"
        >
          <FaChevronRight size={10} />
        </div>
        <div
          onClick={() => handleOpenSlideBox(0)}
          className="hidden group-hover:block absolute top-[5%] -translate-x-0 translate-y-[-50%] right-[2%] text-2xl rounded-full p-2 bg-slate-900/40 border-2 border-slate-400/60 text-slate-400/60 cursor-pointer"
        >
          <RxCross2 size={10} />
        </div>
        <div className="flex gap-2 top-4 justify-center py-2 -translate-y-20">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="hidden group-hover:block cursor-pointer "
            >
              <RxDot className=" rounded-full border-slate-400/60 text-slate-400/60" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Photos;
