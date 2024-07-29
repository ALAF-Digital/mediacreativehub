import Image from "next/image";
import { Assets } from "../../../../public/assets/assets";
import { Routes } from "@/constants/enums";
import HeaderClient, { HeaderClientWrapper } from "./HeaderClient";
import Link from "next/link";

export default function Header() {
  return (
    <HeaderClientWrapper>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid p-0">
          <Link className="navbar-brand" href={Routes.Home}>
            <Image
              width={260}
              height={32}
              alt="Main Logo"
              src={Assets.Marketplace.CmhLogo}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll">
              <HeaderClient />
            </ul>
            <div className="nav-cta">
              <Image
                src={Assets.Marketplace.Search}
                alt=""
                height={24}
                width={24}
                className="img-fluid"
              />
              <Link href={Routes.Checkout}>
                <Image
                  src={Assets.Marketplace.Cart}
                  alt=""
                  width={24}
                  height={24}
                  className="img-fluid"
                />
              </Link>
              <Link href={Routes.Login}>
                <button className="btn primary-btn">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </HeaderClientWrapper>
  );
}
