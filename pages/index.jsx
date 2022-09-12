import HeroSection from "../components/HeroSection";
import {
  PrimaryButton,
  SelectMenu,
  SimpleSlider,
  TextInput,
} from "../components/MyUI";
import { useState, useEffect } from "react";

export default function Home() {
  const options = [
    { id: 1, name: "Websites" },
    { id: 2, name: "Social Media" },
    { id: 3, name: "Video" },
  ];
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState(options[0]);

  useEffect(() => {
    document.addEventListener("snipcart.ready", () => {
      console.log('snipcart ready')

      Snipcart.events.on("cart.confirmed", (cartItem) => {
        console.log(cartItem)
      })
    })
  },[])

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
            Test Product
          </h3>
          <p className="max-w-md mx-auto text-sm text-gray-700 dark:text-gray-200 lg:text-md">
            Price $25.00
          </p>
          <div className="mx-16 mt-8">
            <PrimaryButton href={"#test"} text="Click Here" />
            {1 === 1 && (
            <button
            className="snipcart-add-item buy-button"
            data-item-id={1}
            data-item-price={25}
            data-item-url={`https://609f-2603-3005-218d-c100-00-1cb1.ngrok.io`}
            data-item-file-guid={`c25bc085-8f00-44d7-a65e-088e358257cf`}
            data-item-image={`/images/laptop.png`}
            data-item-name={`test product`}
          >
            buy
          </button>
            )}
            {1 === 2 && (
            <button
            className="snipcart-add-item buy-button"
            data-item-id={1}
            data-item-price={25}
            data-item-url={`https://609f-2603-3005-218d-c100-00-1cb1.ngrok.io`}
            data-item-file-guid={`c25bc085-8f00-44d7-a65e-088e358257cf`}
            data-item-image={`/images/laptop.png`}
            data-item-name={`test product`}
          >
            add
          </button>
            )}
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
