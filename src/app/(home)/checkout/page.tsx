import CheckoutCard from "@/components/cards/CheckoutCard";
import { Assets } from "../../../../public/assets/assets";

export default function Checkout() {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 px-md-0 border-end responsive-border-none">
            <div className="row px-md-5 pt-5">
              {CheckoutAssets.map((item, index) => (
                <div className="col-6 mb-4" key={index}>
                  <CheckoutCard item={item} />
                </div>
              ))}

              <div className="col-12 mt-5 tw-mb-4">
                <div className="d-flex justify-content-between">
                  <p className="mb-0 text-white ">Total amount</p>
                  <strong className="mb-0 text-secondary">$60.00</strong>
                </div>
              </div>
            </div>
            <hr className="text-white" />
            <div className="row">
              <div className="col-12 text-end px-md-5 pt-3 pb-4">
                <button className="btn btn-sm btn-secondary border border-light">
                  Add more items
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center mt-lg-5 pt-lg-5 pt-3 px-md-5 mb-lg-0 mb-5">
            <h2 className="text-white main-heading">Checkout</h2>
            <p className="text-white tw-mb-5">
              Enter your card details to make payments
            </p>
            <form className="checkout-inputs">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name on card"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Card number"
                  required
                />
              </div>
              <div className="btn-group">
                <input
                  type="date"
                  className="form-control me-3"
                  placeholder="Expiry date"
                  required
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="CCV"
                  required
                />
              </div>
              <div className="divider mb-3">or</div>
              <div className="mb-4 custom-select">
                <select className="form-select">
                  <option selected>Select from saved</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="mb-3">
                <ul className="list-inline">
                  {Cards.map((card, index) => (
                    <li className="list-inline-item" key={index}>
                      <img src={card} alt="Visa Card" />
                    </li>
                  ))}
                </ul>
              </div>
              <hr className="text-white my-4" />
              <div className="mb-3 text-start">
                <input
                  type="checkbox"
                  checked
                  className="form-check-input bg-secondary p-2 m-0 me-2"
                />
                <label className="form-check-label text-white">
                  I agree to all{" "}
                  <a href="/" className="text-white text-decoration-underline">
                    terms & conditions
                  </a>
                </label>
              </div>
              <button
                className="btn primary-btn text-white w-100"
                type="submit"
              >
                Pay now $30.00
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

const Cards = [
  Assets.CheckOut.CreditCard,
  Assets.CheckOut.StripeCard,
  Assets.CheckOut.PayFastCard,
  Assets.CheckOut.MasterCard,
  Assets.CheckOut.Gpay,
];
const CheckoutAssets = [
  {
    title: "Astronaut",
    price: 10,
    image: Assets.Marketplace.Astronaut,
  },
  {
    title: "Astronaut",
    price: 10,
    image: Assets.Marketplace.Astronaut,
  },
  {
    title: "Astronaut",
    price: 10,
    image: Assets.Marketplace.Astronaut,
  },
  {
    title: "Astronaut",
    price: 10,
    image: Assets.Marketplace.Astronaut,
  },
  {
    title: "Astronaut",
    price: 10,
    image: Assets.Marketplace.Astronaut,
  },
  {
    title: "Astronaut",
    price: 10,
    image: Assets.Marketplace.Astronaut,
  },
];
