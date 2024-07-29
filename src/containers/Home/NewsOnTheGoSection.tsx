import Image from "next/image";
import { Assets } from "../../../public/assets/assets";

export default function NewsOnTheGoSection() {
  return (
    <section className="news-on-the-go">
      <div className="container">
        <h2 className="main-heading text-center">News On The Go!</h2>
        <div className="news-section-wrapper">
          <div className="single-img" id="div1">
            <Image
              src={Assets.Marketplace.Flower}
              width={573}
              height={573}
              alt=""
              className="img-fluid"
            />
            <div className="content">
              <h1 className="main-heading">3D Flowers</h1>
              <p>
                Temperate ocean-bass sea chub unicorn fish treefish eulachon .
              </p>
              <a href="#" className="link-with-arrow tw-flex tw-items-center">
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

          <div className="multiple-images">
            <div className="single-img" id="div2">
              <Image
                src={Assets.Marketplace.Image294}
                width={539}
                height={254}
                alt=""
                className="img-fluid"
              />
              <div className="content">
                <h1 className="main-heading">3D Flowers</h1>
                <p>
                  Temperate ocean-bass sea chub unicorn fish treefish eulachon .
                </p>
                <a href="#" className="link-with-arrow tw-flex tw-items-center">
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

            <div className="single-img" id="div3">
              <Image
                src={Assets.Marketplace.Image202}
                width={539}
                height={286}
                alt=""
                className="img-fluid"
              />
              <div className="content">
                <h1 className="main-heading">3D Flowers</h1>
                <p>
                  Temperate ocean-bass sea chub unicorn fish treefish eulachon .
                </p>
                <a href="#" className="link-with-arrow tw-flex tw-items-center">
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

        <div className="browse-collection news-section">
          <a href="#" className="browse-collection-txt">
            See more news
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
    </section>
  );
}
