import { Routes } from "@/constants/enums";
import Link from "next/link";
import { Assets } from "../../../public/assets/assets";

export default function AssetCard({ item }: { item: any }) {
  return (
    <Link href={`${Routes.Marketplace}/1`} className="common-img-box">
      <img src={item.src} alt="" className="img-fluid" />
      <div className="title-price">
        <p className="name">{item.title}</p>
        <strong className="price">{item.price}</strong>
      </div>

      <div className="box-ctas">
        <button className="add-to-card-btn">
          <img src={Assets.Marketplace.Cart} alt="" />
        </button>
        <button className="btn primary-btn buy-now-btn" type="submit">
          Buy now
        </button>
      </div>
    </Link>
  );
}
