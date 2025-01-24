import React from "react";

const Customer = () => {
  return (
    <>
      <section className="client_section">
        <div className="container">
          <div className="heading_container">
            <h2>WHAT CUSTOMERS SAY</h2>
          </div>
          <div className="carousel-wrap">
            <div className="owl-carousel">
              <div className="item">
                <div className="box">
                  <div className="img-box">
                    <img src="images/c-1.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>
                      Tempor incididunt <br />
                      <span> Dipiscing elit </span>
                    </h5>
                    <img src="images/quote.png" alt="" />
                    <p>
                      Dipiscing elit, sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua. Ut enim ad minim
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box">
                  <div className="img-box">
                    <img src="images/c-2.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>
                      Tempor incididunt <br />
                      <span> Dipiscing elit </span>
                    </h5>
                    <img src="images/quote.png" alt="" />
                    <p>
                      Dipiscing elit, sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua. Ut enim ad minim
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box">
                  <div className="img-box">
                    <img src="images/c-3.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>
                      Tempor incididunt <br />
                      <span> Dipiscing elit </span>
                    </h5>
                    <img src="images/quote.png" alt="" />
                    <p>
                      Dipiscing elit, sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua. Ut enim ad minim
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="target_section layout_padding2">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="detail-box">
                <h2>1000+</h2>
                <h5>Years of Business</h5>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="detail-box">
                <h2>20000+</h2>
                <h5>Projects Delivered</h5>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="detail-box">
                <h2>10000+</h2>
                <h5>Satisfied Customers</h5>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="detail-box">
                <h2>1500+</h2>
                <h5>Cups of Coffee</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Customer;
