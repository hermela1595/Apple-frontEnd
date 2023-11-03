import React from "react";
import tradein from "./images1/tradein.png";
import card from "./images1/cardlogo.png";
import watch from './images1/wachserie8.png'
import logoo from './images1/vision logo.png'
import YoutubeFeb from "./Youtube/YoutubeFeb";


function Main() {
  return (
    <div>
      <section className="main-highlight-wrapper">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12 first">
              <div className="saveon pt-5">
                Save on Mac or iPhad <br /> for college
              </div>

              <div className="brife">
                Plus get fift card up to $ 150. <span></span>
              </div>

              <div className="links-wrapper">
                <ul>
                  <li>
                    <a href="/">Shop now</a>
                  </li>
                </ul>
              </div>

              <div className="main-image-wrapper"></div>
            </div>
          </div>
      </section>

      <section className="second-hightlight-wrapper container-fluid mt-2">
          <div className="row h-100 align-items-center justify-content-center text-center ">
            <div className="col-12 air pt-5 bg">
              <div className="saveon">MacBook Air 15"</div>

              <div className="brife">impressively big. Impossibly thin.</div>

              <div className="links-wrapper">
                <ul>
                  <li>
                    <a href="/">Learn more</a>
                  </li>
                  <li>
                    <a href="/">Buy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </section>

      <section className="third-highlight-wrapper mt-2">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-6 col-12">
              <div className="title-wraper"></div>
              <div className="saveon">iPhone 14</div>
              <div className="/">
                <h5> Wonderfull.</h5>
              </div>
              <div className="links-wrapper">
                <ul>
                  <li>
                    <a href="/">Learn more</a>
                  </li>
                  <li>
                    <a href="/">Buy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fourth-heghlight-wrapper">
        <div className="row">
          <div className="col-12 col-sm-12 col-m-6 col-lg-6 left-side-wrapper">
            <div className="left-side-inner-wrapper">
              <div className="top-logo-wrapper"></div>
              <div className="saveon">iPhone 14 Pro.</div>
              <h5>Pro.Beyond</h5>
              <div className="links-wrapper fourthLink">
                <ul>
                  <li>
                    <a href="/">Learn more</a>
                  </li>
                  <li>
                    <a href="/">Buy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-m-6 col-lg-6 right-side-wrapper">
            <div className="right-side-inner-wrapper">
              <div className="top-logo-wrapper"></div>
              <div className="saveon">iPad Pro</div>
              <h5>Supercharged by</h5>
              <div className="links-wrapper fourthLink">
                <ul>
                  <li>
                    <a href="/">Learn more</a>
                  </li>
                  <li>
                    <a href="/">Buy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fifth-heghlight-wrapper">
      <div className="row">
        <div className="col-sm-12 col-m-6 col-lg-6 left-side-wrapper">
          <div className="left-side-inner-wrapper">
            <div className="top-logo-wrapper">
               <div className="logo-wrapper">
                <img src={watch} alt='/'/>
              </div>
            </div>
                <h5>A healthy leap ahead</h5>

            <div className="links-wrapper center fourthLink">
              <ul className="center">
                <li><a href="/">Learn more</a></li>
                <li><a href="/">Buy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-m-6 col-lg-6 right-side-wrapper">
          <div className="right-side-inner-wrapper">
            <div className="vision">
              <img src={logoo} alt="/"/>
            </div>
            <div className="">
              <h6>Welcome to the era of <br/> spatial computing</h6>
            </div>

            <h6>Available early next year in the U.S.</h6>

            <div className="links-wrapper">
              <ul>
                <li><a href="/">Learn more</a></li>
                <li><a href="/">Buy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
      
      <section className="sixth-heghlight-wrapper">
        <div className="row">
          <div className="col-sm-12 col-m-6 col-lg-6 left-side-wrapper">
            <div className="left-side-inner-wrapper">
              <div className="mb-3">
                <img src={tradein} alt="/" />
              </div>

              <h5>Upgrade and save.It's that easy.</h5>

              <div className="links-wrapper">
                <ul>
                  <li className="center">
                    <a href="/">See what your device is worth</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-m-6 col-lg-6 right-side-wrapper mb-sm-3">
            <div className="right-side-inner-wrapper">
              <div className="top-logo-wrapper">
                <div className="logo-wrapper">
                  <img src={card} alt="/" />
                </div>
              </div>

              <div className="mt-3">
                <h5>
                  Get up to 3% Daily Cash back <br /> with every purchase.
                </h5>
              </div>

              <div className="links-wrapper">
                <ul>
                  <li>
                    <a href="/">Learn more</a>
                  </li>
                  <li>
                    <a href="/">Buy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <YoutubeFeb />
      </section>

    </div>
  );
}

export default Main;
