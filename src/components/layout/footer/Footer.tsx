export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="widget">
              <div className="logo">
                <img
                  src="./images/marketplace/creative-media-hub-logo.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="socialLinks">
                <ul>
                  <li>
                    <a href="#">
                      <img
                        src="./images/marketplace/twitter.svg"
                        alt="twitter"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="./images/marketplace/linkedin.svg"
                        alt="linkedin"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="./images/marketplace/facebook.svg"
                        alt="facebook"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./images/marketplace/github.svg" alt="github" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="./images/marketplace/angellist.svg"
                        alt="angellist"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="./images/marketplace/dribble.svg"
                        alt="dribble"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-2">
            <div className="widgets">
              <h5>Marketplace</h5>
              <ul>
                <li>
                  <a href="#"> Buy Templates </a>
                </li>
                <li>
                  <a href="#"> Sell Templates </a>
                </li>
                <li>
                  <a href="#"> Our Creator </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6 col-lg-2">
            <div className="widgets">
              <h5>Resources</h5>
              <ul>
                <li>
                  <a href="#"> About Us </a>
                </li>
                <li>
                  <a href="#"> Event </a>
                </li>
                <li>
                  <a href="#"> Tutorial </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-2">
            <div className="widgets">
              <h5>Company</h5>
              <ul>
                <li>
                  <a href="#"> Media </a>
                </li>
                <li>
                  <a href="#"> Blog </a>
                </li>
                <li>
                  <a href="#"> Pricing </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6 col-lg-2">
            <div className="widgets">
              <h5>Legal</h5>
              <ul>
                <li>
                  <a href="#"> Terms </a>
                </li>
                <li>
                  <a href="#"> Privacy </a>
                </li>
                <li>
                  <a href="#"> Support </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyRightArea">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p>© 2024 Media Creative Hub. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
