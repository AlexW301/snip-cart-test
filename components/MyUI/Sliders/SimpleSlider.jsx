import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function SimpleSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
  }, []);

  function handleClick({ index }) {
    setCurrentIndex(index);
    slideRef.current.classList.add("animate-fade");
  }

  function handleNext() {
    setCurrentIndex(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
    slideRef.current.classList.add("animate-fade");
  }

  function handlePrevious() {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
    slideRef.current.classList.add("animate-fade");
  }

  function removeAnimation() {
    slideRef.current.classList.remove("animate-fade");
  }

  return (
    <div
      ref={slideRef}
      className="flex flex-col items-center justify-center max-w-fit"
    >
      {/* Image */}
      <div className="relative bg-gray-400 rounded-lg w-[512px] h-[512px]">
        <Image
          priority
          className="rounded-lg"
          objectFit="cover"
          objectPosition="center"
          src={images[currentIndex]}
          alt="slide show"
          layout="fill"
        />
        <button
          onClick={handleNext}
          className="absolute h-full duration-300 -translate-y-1/2 right-2 hover:translate-x-1 text-primary-700 top-1/2"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={handlePrevious}
          className="absolute h-full duration-300 -translate-y-1/2 rounded-lg left-2 hover:-translate-x-1 text-primary-700 top-1/2"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {/* Pagination */}
      <div className="flex items-center justify-center gap-1 my-3 text-center max-w-fit">
        {images.map((image, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                handleClick({ index });
              }}
              className={`w-2 h-2 ${
                index === currentIndex ? "bg-primary-700" : "bg-gray-300"
              } rounded-full`}
            ></button>
          );
        })}
      </div>
    </div>
  );
}
