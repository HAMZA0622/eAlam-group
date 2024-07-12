import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SignIn8 from '../components/sign-in8'
import Footer3 from '../components/footer3'
import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Login - Medica template</title>
        <meta property="og:title" content="Login - Medica template" />
      </Helmet>
      <header data-thq="thq-navbar" className="login-navbar">
        <div className="login-left">
          <Link to="/" className="login-navlink">
            <img
              alt="image"
              src="https://chat.google.com/u/0/api/get_attachment_url?url_type=FIFE_URL&amp;content_type=image%2Fpng&amp;attachment_token=AOo0EEXHwWgbMd5ypj1gyBfa8QQB6fRujDtuFx3D5TpcIQJuzJ89bgA3HFIi3zneqz0GdvJfPco50Jxvy2Uc%2Fz9BlRyBtSmpJz9APPTlK4cWZy2TiyjF9j5EqHs7LCTDOrepdkFxVf2RLyik8CyXRKHseVQYYSRQ89SmzZN6kWcehjAkbDK6H5t1F2N3UEJDQA%2FrqBuk56QbOUABLcJlQFUDdaGJfzjQN1GVABiTt0z4ul9%2BFupYzaq%2FFJFMVyA1cz0WWnvvgjQBrFCfaqNBxIAqNRSahjrLm7jxYv6kM86Z3ekh%2B5SwZJNIRv%2FBzb2w538QBqflibPsC1kHD5wFbWHlsEOsA%2B6ibKX0tEbUlkEHkN8j7jwLgpbIz6fqnv89YgYErETwmoy9vcYaCgEbChBWpT0wytJ4oPmAFRImwUgBT9cb3HL2ifuE9OCn1Wcouz%2F0%2Bk6QhHVuMkeWwj%2BJpQkm3RWHNakhRbvcwlmaogH35a50MEBHpciTMTxDR078XpGUzwq%2B3D8hy9YWg1BbYMQy6OdefInFFc7AWZQrXCeGA2qUmMjbxAeKDxMUY1bHz3Wz%2F1GtfNYGp3YfvQCCkyu%2FoL%2FTareerC1L&amp;sz=w512"
              className="login-logo"
            />
          </Link>
          <nav className="login-links">
            <Link to="/" className="login-link">
              Home
            </Link>
            <Link to="/about-us" className="login-link1">
              About Us
            </Link>
            <Link to="/company" className="login-link2">
              Company
            </Link>
            <Link to="/contact" className="login-link3">
              Contact
            </Link>
          </nav>
        </div>
        <div data-thq="thq-navbar-btn-group" className="login-right">
          <Link to="/login" className="login-book button button-main">
            <span className="login-text">Login</span>
          </Link>
        </div>
        <div data-thq="thq-burger-menu" className="login-burger-menu">
          <svg viewBox="0 0 1024 1024" className="login-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="login-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="login-nav"
          >
            <div className="login-container1">
              <Link to="/" className="login-navlink1">
                <img
                  alt="image"
                  sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                  src="/external/logo-1500h-1500h.webp"
                  srcSet="Branding//logo-1500h.webp 1200w, Branding/logo-tablet.webp 800w, Branding/logo-mobile.webp 480w"
                  className="login-image"
                />
              </Link>
              <div data-thq="thq-close-menu" className="login-menu-close">
                <svg viewBox="0 0 1024 1024" className="login-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="login-nav1"
            >
              <Link to="/" className="login-navlink2">
                Home
              </Link>
              <Link to="/about-us" className="login-navlink3">
                About Us
              </Link>
              <Link to="/company" className="login-navlink4">
                Company
              </Link>
              <Link to="/contact" className="login-navlink5">
                Contact
              </Link>
              <Link to="/login" className="login-book1 button button-main">
                <span className="login-text1">Login</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <SignIn8></SignIn8>
      <Footer3></Footer3>
    </div>
  )
}

export default Login
