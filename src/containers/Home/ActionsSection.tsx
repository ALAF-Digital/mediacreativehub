import Image from "next/image";
import { Assets } from "../../../public/assets/assets";

export default function ActionsSection() {
  return (
    <section className="two-columns-sec">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4">
            <h1 className="main-heading">Sign up as Creator</h1>
            <p className="color-white">
              Revolutionize your creative workflow with (place holder text.)
            </p>
            <button className="btn primary-btn" type="submit">
              Sign Up as Creator
            </button>
          </div>
          <div className="col-md-4 text-center">
            <Image
              src={Assets.Marketplace.Animated1}
              width={300}
              height={300}
              alt=""
              className="img-fluid"
            />
          </div>
        </div>

        <div className="row justify-content-center align-items-center">
          <div className="col-md-4">
            <Image
              src={Assets.Marketplace.Animated2}
              width={300}
              height={300}
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-md-4">
            <h1 className="main-heading">Create your collection</h1>
            <p className="color-white">
              Revolutionize your creative workflow with (place holder text.)
            </p>
            <button className="btn primary-btn" type="submit">
              Create collection
            </button>
          </div>
        </div>

        <div className="row justify-content-center align-items-center">
          <div className="col-md-4">
            <h1 className="main-heading">Sell with us here</h1>
            <p className="color-white">
              Revolutionize your creative workflow with (place holder text.)
            </p>
            <button className="btn primary-btn" type="submit">
              Start selling
            </button>
          </div>
          <div className="col-md-4">
            <Image
              src={Assets.Marketplace.Animated3}
              width={300}
              height={300}
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
