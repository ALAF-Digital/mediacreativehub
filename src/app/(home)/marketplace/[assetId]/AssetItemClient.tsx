"use client";

import AssetCard from "@/components/cards/AssetCard";
import { Assets } from "../../../../../public/assets/assets";
import Script from "next/script";
import { CustomScript } from "@/containers/Providers/Providers";

export function ClientImageSlider() {
  return (
    <>
      <div className="big-img-slider-wrap">
        <div className="big-img-slider">
          {SliderImages.map((src, index) => (
            <div key={index}>
              <img src={src} className="img-fluid" alt="Image 1" />
            </div>
          ))}
        </div>
      </div>

      <Script
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: CustomScript,
        }}
      />
    </>
  );
}

export function ClientRelatedData() {
  return (
    <div className="common-img-box-slider">
      {Data.map((item, index) => (
        <AssetCard item={item} key={index} />
      ))}
    </div>
  );
}
const SliderImages = [
  Assets.Marketplace.Slider1,
  Assets.Marketplace.Slider1,
  Assets.Marketplace.Slider1,
  Assets.Marketplace.Slider1,
  Assets.Marketplace.Slider1,
  Assets.Marketplace.Slider1,
  Assets.Marketplace.Slider1,
];

const Data = [
  {
    src: Assets.Marketplace.Paramid,

    title: "Astronaut",
    price: "$10.00",
  },
  {
    src: Assets.Marketplace.Astronaut,
    title: "Astronaut",
    price: "$10.00",
  },
  {
    src: Assets.Marketplace.Paramid,
    title: "Astronaut",
    price: "$10.00",
  },
  {
    src: Assets.Marketplace.Astronaut,
    title: "Astronaut",
    price: "$10.00",
  },
  {
    src: Assets.Marketplace.Astronaut,
    title: "Astronaut",
    price: "$10.00",
  },
  {
    src: Assets.Marketplace.Astronaut,
    title: "Astronaut",
    price: "$10.00",
  },
  {
    src: Assets.Marketplace.Astronaut,
    title: "Astronaut",
    price: "$10.00",
  },
  {
    src: Assets.Marketplace.Astronaut,
    title: "Astronaut",
    price: "$10.00",
  },
  {
    src: Assets.Marketplace.Astronaut,
    title: "Astronaut",
    price: "$10.00",
  },
];
