import { Routes } from "@/constants/enums";
import Link from "next/link";

export default function Login() {
  return (
    <section className="login-form">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form action="">
              <h1 className="main-heading">Welcome</h1>
              <p className="text">Login to continue to your account.</p>
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

              <p className="text-end w-100 mb-0">
                <a href="">Forgot password? </a>
              </p>
              <button className="btn primary-btn" type="submit">
                Login
              </button>
              <p className="mb-0">
                Don’t have an account?{"  "}
                <strong>
                  <Link href={Routes.Signup}>Sign Up now</Link>
                </strong>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
