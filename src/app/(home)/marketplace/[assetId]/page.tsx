import AssetCard from "@/components/cards/AssetCard";
import { Assets } from "../../../../../public/assets/assets";

export default function AssetItem() {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row custom-border-btm">
            <div className="col-lg-9 p-0 custom-border-rgt">
              <div className="row">
                <div className="col-12">
                  <div className="big-img-slider-wrap">
                    <div className="big-img-slider">
                      {SliderImages.map((src, index) => (
                        <div key={index}>
                          <img src={src} className="img-fluid" alt="Image 1" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="product-details">
                    <h2 className="main-heading">Description</h2>
                    <p className="text-white">
                      A 3D model of a high-tech vault designed to store Bitcoin,
                      with a sleek and modern aesthetic. The vault is surrounded
                      by a circular platform and features a large screen
                      displaying real-time market data. A 3D model of a
                      high-tech vault designed to store Bitcoin, with a sleek
                      and modern aesthetic. The vault is surrounded by a
                      circular platform and features a large screen displaying
                      real-time market data. A 3D model of a high-tech vault
                      designed to store Bitcoin, with a sleek and modern
                      aesthetic. The vault is surrounded by a circular platform
                      and features a large screen displaying real-time market
                      data. A 3D model of a high-tech vault designed to store
                      Bitcoin, with a sleek and modern aesthetic. The vault is
                      surrounded by a circular platform and features a large
                      screen displaying real-time market data.
                    </p>
                    <strong className="text-white">Keywords & tags:</strong>
                    <div className="tags-wrapper">
                      <span className="tags">illustrations</span>
                      <span className="tags">3D models</span>
                      <span className="tags">AR</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 text-center p-0">
              <div className="product-tech-specs">
                <div className="row">
                  <div className="col-12 p-0">
                    <div className="product-details-wrap">
                      <h3 className="text-white category-name">
                        Illustrations
                      </h3>
                      <div className="author-details">
                        <span className="text-white prod-name">Astronaut</span>
                        <span className="text-white auther-name text-end">
                          <small>by</small> Tanzeel Ghori
                        </span>
                      </div>
                      <div className="price">
                        <small>Price:</small>
                        <p>$10.00</p>
                      </div>
                    </div>
                    <div className="buy-now-ctas">
                      <button className="add-to-card-btn">
                        <img src="./images/marketplace/cart-icon.svg" alt="" />
                      </button>
                      <button className="add-to-card-btn">
                        <img src="./images/marketplace/cart-icon.svg" alt="" />
                      </button>
                      <button
                        className="btn primary-btn buy-now-btn w-100"
                        type="submit"
                      >
                        Buy now
                      </button>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="technical-specs">
                      <h2 className="main-heading">Technical specs</h2>
                      <ul>
                        <li>
                          <strong>Materials:</strong> Metal, Glass, LED Screen
                        </li>
                        <li>
                          <strong>Environment:</strong> Futuristic Room, Dark
                          Background, Reflections
                        </li>
                        <li>
                          <strong>Animations:</strong> Opening/Closing Vault
                          Doors, Spinning Platform, Blinking LED Lights
                        </li>
                        <li>
                          <strong>Lighting:</strong> Bright, Neon, Ambient
                          Occlusion
                        </li>
                        <li>
                          <strong>Shapes:</strong> Geometric, Futuristic,
                          High-Tech
                        </li>
                        <li>
                          <strong>Textures:</strong> Metallic, Glossy, Digital
                          Screen
                        </li>
                        <li>
                          <strong>Colours:</strong> Golden, Blue, Black
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="all-assets ar-assets related-assets">
        <h2 className="main-heading">Related assets</h2>
        <div className="common-img-box-wrap">
          <div className="common-img-box-slider">
            {Data.map((item, index) => (
              <AssetCard item={item} key={index} />
            ))}
          </div>

          <div className="browse-collection container-fluid">
            <a href="#" className="browse-collection-txt">
              See more
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
    </>
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
];
