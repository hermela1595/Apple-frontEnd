import React from 'react'
import logo from "../images1/logo.png";
import search from "../images1/search-icon.png";
import cart from "../images1/cart.png";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top header-wrapper">
        <div className="container">
          <Link className="logo-link navbar-brand js-scroll-trigger" to="/">
            <img src={logo} alt="/" />
          </Link>
          

          <button
            class="navbar-toggler navbar-toggler-right humburger"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            ☰
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive ">
            <ul className="navbar-nav nav-fill w-100">
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger " to="/store/">
                  Store
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger " to="/mac/">
                  Mac
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/iphone/">
                  iphone
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/ipad/">
                  ipad
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/watch/">
                  watch
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/vision/">
                  Vision
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/tv/">
                  Tv & Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/Music/">
                  Music
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/accssories/">
                  Accessories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/Support/">
                  Support
                </Link>
              </li>
              <li>
                <Link className="search-link nav-link js-scroll-trigger" to="/">
                  <img src={search} alt="/" />
                </Link>
              </li>
              <li>
                <a
                  className="cart-link nav-link js-scroll-trigger"
                  href="/cart/"
                >
                  <img src={cart} alt="/" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header