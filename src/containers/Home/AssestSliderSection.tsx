"use client";
import { Assets } from "../../../public/assets/assets";

export default function AssetSliderSection() {
  return (
    <>
      <section className="collection">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 p-0">
              <div className="collection-slider">
                {AssetsData.map((asset, index) => (
                  <a href="#" className="collection-slide" key={index}>
                    <img src={asset.src} alt="" className="img-fluid" />
                    <h4 className="slide-title">{asset.title}</h4>
                  </a>
                ))}
              </div>
              <div className="browse-collection container">
                <a href="#" className="browse-collection-txt">
                  Browse collections
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="26"
                    viewBox="0 0 50 26"
                    fill="none"
                  >
                    <path
                      d="M13.3871 1L1 13M1 13L13.3871 25M1 13L49 13"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="logo-slider">
        <div className="slick marquee">
          {LogoData.map((logo, index) => (
            <div className="slick-slide" key={index}>
              <div className="inner">
                <img src={logo} alt="Placeholder" className="img-fluid" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

const LogoData = [
  Assets.Marketplace.Aflam,
  Assets.Marketplace.Elite,
  Assets.Marketplace.Aflam,
  Assets.Marketplace.Elite,
  Assets.Marketplace.Aflam,
  Assets.Marketplace.Elite,
  Assets.Marketplace.Aflam,
  Assets.Marketplace.Elite,
  Assets.Marketplace.Aflam,
  Assets.Marketplace.Elite,
];

const AssetsData = [
  {
    src: Assets.Marketplace.HomeSlide1,
    title: "Illustrations",
  },
  {
    src: Assets.Marketplace.HomeSlide2,
    title: "Illustrations",
  },
  {
    src: Assets.Marketplace.HomeSlide1,
    title: "Illustrations",
  },
  {
    src: Assets.Marketplace.HomeSlide2,
    title: "Illustrations",
  },
  {
    src: Assets.Marketplace.HomeSlide1,
    title: "Illustrations",
  },
  {
    src: Assets.Marketplace.HomeSlide2,
    title: "Illustrations",
  },
  {
    src: Assets.Marketplace.HomeSlide1,
    title: "Illustrations",
  },
  {
    src: Assets.Marketplace.HomeSlide2,
    title: "Illustrations",
  },
];
