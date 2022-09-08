import Image from "next/image";
import {
  PrimaryButtonLarge,
  SecondaryButtonLarge,
  SimpleSlider,
  TextInput,
} from "./MyUI";
import { useState } from "react";

export default function HeroSection() {
  function toggleDarkMode() {
    document.getElementsByTagName("html")[0].classList.toggle("dark");
  }
  return (
    <div>
      {/* Container */}
      <div className="m-5 mx-auto mt-20 mb-40 max-w-containerxl">
        {/* Content */}
        <div className="flex flex-col items-center justify-center px-4 sm:px-0">
          <div className="flex items-center justify-center gap-3 py-1 pl-1 pr-2 mx-auto mb-4 rounded-full bg-primary-50 dark:bg-primary-800 w-fit">
            <div className="px-1 bg-white rounded-full dark:bg-primary-900">
              <p className="text-sm dark:text-primary-100 px-1 py-[2px] text-primary-700 font-medium">
                Template Created By
              </p>
            </div>
            <div>
              <p className="text-sm font-medium dark:text-primary-100 text-primary-700">
                Alex Waller
              </p>
            </div>
          </div>
          <h1 className="mb-5 font-semibold text-center text-displaymd dark:text-white sm:text-displayxl">
            The Ultimate Next.js Starter Template
          </h1>
          <p className="max-w-3xl mb-12 text-lg text-center text-gray-500 sm:text-xl dark:text-gray-400">
            The perfect template to start your next project! Organized file
            structure, global state, hooks, custom components, tailwind css,
            design system, responsive navigation, and dark mode.
          </p>
          {/* Button Container */}
          <div className="flex flex-col w-full gap-4 mb-12 sm:mb-20 sm:flex-row sm:items-center sm:justify-center">
            <SecondaryButtonLarge href="#demo" text="Demo" />
            <PrimaryButtonLarge
              href="#"
              onClick={toggleDarkMode}
              text="Buy"
            />
          </div>
          {/* Hero Image */}
          <Image
            src="/images/laptop.png"
            height={448}
            width={1280}
            alt="play button"
          />
        </div>
      </div>
    </div>
  );
}
