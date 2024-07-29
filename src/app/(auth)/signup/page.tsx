import { Routes } from "@/constants/enums";
import Link from "next/link";

export default function Signup() {
  return (
    <section className="login-form">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form action="">
              <h1 className="main-heading">Sign Up</h1>
              <p className="text">Sign Up to enjoy the world of 3D Assets</p>
              <input
                type="text"
                name=""
                id="fullName"
                placeholder="Full name"
                required
              />
              <input
                type="email"
                name="email"
                id=""
                placeholder="Email Address"
                required
              />

              <div className="user-box">
                <input
                  type="password"
                  name=""
                  id="password"
                  placeholder="Password"
                  required
                />
                <span className="password-toggle-icon">
                  <img src="./images/marketplace/eye.svg" alt="" />
                </span>
              </div>

              <p className="w-100 mb-0 news-letter-txt">
                <input
                  type="checkbox"
                  className="form-check-input  tw-mt-0"
                  name=""
                  id="filled-in-box"
                />
                <span className="tw-ml-2">
                  I agree to join news letter and updates
                </span>
              </p>
              <button className="btn primary-btn" type="submit">
                Login
              </button>
              <p className="mb-0">
                Already have an account?
                <strong>
                  <Link href={Routes.Login}> Sign In now</Link>
                </strong>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
