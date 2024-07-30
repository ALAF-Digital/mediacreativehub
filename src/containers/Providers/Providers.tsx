"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
export default function Providers({ children }: PropsWithChildren) {
  const path = usePathname();
  const [allScriptsLoaded, setAllScriptsLoaded] = useState<boolean[]>([]);

  function addToLoaded() {
    setAllScriptsLoaded((prev) => [...prev, true]);
  }
  useEffect(() => {
    if (allScriptsLoaded.length === 3) {
      $(document).ready(function () {
        $(".collection-slider").slick({
          dots: false,
          arrows: true,
          infinite: false,
          speed: 800,
          slidesToShow: 5,
          autoplay: false,
          autoplaySpeed: 3000,
          adaptiveHeight: false,
          // centerMode: true,
          initialSlide: 0,
          slidesToScroll: 1,
          variableWidth: false,
          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                centerMode: true,
                variableWidth: false,
                mobileFirst: true,
              },
            },
          ],
        });
        $(".slick.marquee").slick({
          speed: 6000,
          autoplay: true,
          autoplaySpeed: 0,
          centerMode: true,
          cssEase: "linear",
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          infinite: true,
          initialSlide: 1,
          arrows: false,
          buttons: false,
        });
        const singleImgDivs = document.querySelectorAll(".single-img");
        singleImgDivs.forEach((div) => {
          div.addEventListener("mouseover", () => {
            singleImgDivs.forEach((otherDiv) => {
              if (otherDiv !== div) {
                otherDiv.classList.add("inActive-box");
              }
            });
          });
          div.addEventListener("mouseout", () => {
            singleImgDivs.forEach((otherDiv) => {
              otherDiv.classList.remove("inActive-box");
            });
          });
        });
        $(".full-img-slider").slick({
          dots: true,
          arrows: true,
          infinite: false,
          speed: 800,
          slidesToShow: 1,
          autoplay: false,
          autoplaySpeed: 3000,
          adaptiveHeight: false,
          // centerMode: true,
          initialSlide: 0,
          slidesToScroll: 1,
          variableWidth: false,
        });
        $(".common-img-box-slider").slick({
          dots: false,
          arrows: false,
          infinite: false,
          slidesToShow: 5,
          autoplay: false,
          adaptiveHeight: false,
          // centerMode: true,
          initialSlide: 0,
          slidesToScroll: 1,
          variableWidth: false,
          responsive: [
            {
              breakpoint: 1366,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                centerMode: true,
                variableWidth: false,
                mobileFirst: true,
              },
            },
          ],
        });
      });
      // test js
      $(document).ready(function () {
        $(".big-img-slider").slick({
          dots: true,
          arrows: true,
          customPaging: function (slider, i) {
            var thumb = $(slider.$slides[i]).find("img").attr("src");
            return '<img src="' + thumb + '">';
          },
        });
      });
    }
  }, [path, allScriptsLoaded]);

  return (
    <>
      <Script
        onLoad={addToLoaded}
        strategy="afterInteractive"
        src="https://code.jquery.com/jquery-3.7.1.min.js"
      />
      <Script
        onLoad={addToLoaded}
        strategy="afterInteractive"
        src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"
      />
      <Script
        onLoad={addToLoaded}
        strategy="afterInteractive"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      />

      {children}
    </>
  );
}
