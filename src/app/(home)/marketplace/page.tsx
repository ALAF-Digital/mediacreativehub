import { AssetFilters } from "@/constants/enums";
import { Assets } from "../../../../public/assets/assets";
import AssetCard from "@/components/cards/AssetCard";

export default function Marketplace() {
  return (
    <>
      <section className="filters-sec">
        <div className="container-fluid p-0">
          <div className="filters-wrap">
            <ul className="sorting-btns">
              {Filter.map((item, index) => (
                <li>
                  <a
                    href="#"
                    className={`btn primary-btns ${
                      item.id === AssetFilters.All ? "active" : ""
                    }`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>

            <div className="filter-and-sort">
              <div className="dropdown">
                <button className="dropbtn tw-flex tw-items-center">
                  Filters
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M19 3.5H5C3.58579 3.5 2.87868 3.5 2.43934 3.9122C2 4.3244 2 4.98782 2 6.31466V7.00448C2 8.04232 2 8.56124 2.2596 8.99142C2.5192 9.4216 2.99347 9.68858 3.94202 10.2225L6.85504 11.8624C7.49146 12.2206 7.80967 12.3998 8.03751 12.5976C8.51199 13.0095 8.80408 13.4935 8.93644 14.0872C9 14.3722 9 14.7058 9 15.3729L9 18.0424C9 18.952 9 19.4067 9.25192 19.7613C9.50385 20.1158 9.95128 20.2907 10.8462 20.6406C12.7248 21.375 13.6641 21.7422 14.3321 21.3244C15 20.9066 15 19.9519 15 18.0424V15.3729C15 14.7058 15 14.3722 15.0636 14.0872C15.1959 13.4935 15.488 13.0095 15.9625 12.5976C16.1903 12.3998 16.5085 12.2206 17.145 11.8624L20.058 10.2225C21.0065 9.68858 21.4808 9.4216 21.7404 8.99142C22 8.56124 22 8.04232 22 7.00448V6.31466C22 4.98782 22 4.3244 21.5607 3.9122C21.1213 3.5 20.4142 3.5 19 3.5Z"
                      stroke="white"
                      stroke-width="1.5"
                    />
                  </svg>
                </button>

                <div className="dropdown-content">
                  <p>Filters</p>
                  <p>Ratings</p>
                  <div className="star-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                  </div>
                  <p> Lorem </p>
                  <label>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                    />{" "}
                    Category
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                    />{" "}
                    Category
                  </label>
                </div>
              </div>

              <div className="dropdown sort-by">
                <button className="dropbtn tw-flex tw-items-center">
                  Sort By{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M22 7.5L2 7.5"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M19 12.5L5 12.5"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M16 17.5H8"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <div className="dropdown-content">
                  <p>Sort By</p>
                  <label>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                    />{" "}
                    Date
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value="usage"
                    />{" "}
                    File size (ascending)
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value="new"
                    />{" "}
                    File size (descending)
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value="new3"
                    />{" "}
                    Popularity
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value="new3"
                    />{" "}
                    Prize (low to high)
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value="new3"
                    />{" "}
                    Prize (high to low)
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="all-assets tw-mt-4 tw-mb-10">
        <h2 className="main-heading">All Assets</h2>
        <div className="common-img-box-wrap">
          {Data.map((item, index) => (
            <AssetCard item={item} key={index} />
          ))}
        </div>

        <div className="browse-collection container-fluid">
          <a
            href="#"
            className="browse-collection-txt tw-flex tw-items-center tw-justify-end"
          >
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
      </section>
      <section className="all-assets tw-mt-4 tw-mb-10">
        <h2 className="main-heading">3D Models</h2>
        <div className="common-img-box-wrap">
          {Data.map((item, index) => (
            <AssetCard item={item} key={index} />
          ))}
        </div>

        <div className="browse-collection container-fluid">
          <a
            href="#"
            className="browse-collection-txt tw-flex tw-items-center tw-justify-end"
          >
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
      </section>

      <section className="all-assets tw-mt-4 tw-mb-10">
        <h2 className="main-heading">AR Assets</h2>
        <div className="common-img-box-wrap">
          {Data.map((item, index) => (
            <AssetCard item={item} key={index} />
          ))}
        </div>

        <div className="browse-collection container-fluid">
          <a
            href="#"
            className="browse-collection-txt tw-flex tw-items-center tw-justify-end"
          >
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
      </section>
    </>
  );
}

const Filter = [
  {
    title: "All Assets",
    id: AssetFilters.All,
  },
  {
    title: "3D Models",
    id: AssetFilters.Models3D,
  },
  {
    title: "AR",
    id: AssetFilters.AR,
  },
  {
    title: "Full frame",
    id: AssetFilters.FullFrame,
  },
  {
    title: "Category",
    id: "Category",
  },
  {
    title: "Category",
    id: "Category3",
  },
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
