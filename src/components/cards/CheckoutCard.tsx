export default function CheckoutCard({ item }: { item: any }) {
  return (
    <div className="checkout-product-box py-3">
      <div className="row mx-0">
        <div className="col-md-5">
          <img src={item.image} alt="" className="img-fluid w-100" />
        </div>
        <div className="col-md-7">
          <ul className="list-inline">
            <li className="text-white mb-3">{item.title}</li>
            <li className="text-white">Price:</li>
            <li className="text-white mb-3 text-secondary">${item.price}</li>
            <li>
              <button className="btn btn-sm btn-secondary border border-light w-100">
                Remove
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
