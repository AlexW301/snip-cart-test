import HeroSection from "../components/HeroSection";
import { PrimaryButton, SelectMenu, SimpleSlider, TextInput } from "../components/MyUI";
import { useState } from "react";

export default function Home() {
  const options = [
    { id: 1, name: "Websites" },
    { id: 2, name: "Social Media" },
    { id: 3, name: "Video" },
  ];
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState(options[0]);

  return (
    <>
      <HeroSection />
      {/* Simple Slider Component Example */}
      <div className="flex flex-col items-center justify-between px-6 mx-auto mb-40 text-center lg:text-left lg:flex-row max-w-containerxl">
        <SimpleSlider
          images={[
            "/images/image-01.avif",
            "/images/image-02.avif",
            "/images/image-03.avif",
          ]}
        />
        <div className="flex flex-col justify-center w-full mt-12 lg:mt-0 lg:pl-36">
          <h3 className="max-w-md mx-auto mb-3 font-medium text-displaysm lg:text-displaymd dark:text-white">
            This is a Simple Component
          </h3>
          <p className="max-w-md mx-auto text-sm text-gray-700 dark:text-gray-200 lg:text-md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione,
            omnis! Esse earum ipsum blanditiis molestiae magnam iste officiis
            architecto?
          </p>
          <div className="mx-16 mt-8">
          <PrimaryButton href={"#test"} text="Click Here" />
          </div>
        </div>
      </div>
      {/* Input Examples */}
      <div className="flex flex-col max-w-sm gap-5 mx-auto mb-36">
        <h2 className="mb-10 font-medium text-center text-displaysm lg:text-displaymd dark:text-white">
          Input Fields
        </h2>
        <TextInput
          value={value}
          setValue={setValue}
          label="Your Name"
          placeholder="Your Name"
        />
        <SelectMenu
          selected={selected}
          setSelected={setSelected}
          options={options}
          label="Service"
        />
      </div>
    </>
  );
}
