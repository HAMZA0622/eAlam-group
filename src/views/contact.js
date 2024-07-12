import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Contact4 from '../components/contact4'
import Footer3 from '../components/footer3'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Medica template</title>
        <meta property="og:title" content="Contact - Medica template" />
      </Helmet>
      <header data-thq="thq-navbar" className="contact-navbar">
        <div className="contact-left">
          <Link to="/" className="contact-navlink">
            <img
              alt="image"
              src="https://chat.google.com/u/0/api/get_attachment_url?url_type=FIFE_URL&amp;content_type=image%2Fpng&amp;attachment_token=AOo0EEXHwWgbMd5ypj1gyBfa8QQB6fRujDtuFx3D5TpcIQJuzJ89bgA3HFIi3zneqz0GdvJfPco50Jxvy2Uc%2Fz9BlRyBtSmpJz9APPTlK4cWZy2TiyjF9j5EqHs7LCTDOrepdkFxVf2RLyik8CyXRKHseVQYYSRQ89SmzZN6kWcehjAkbDK6H5t1F2N3UEJDQA%2FrqBuk56QbOUABLcJlQFUDdaGJfzjQN1GVABiTt0z4ul9%2BFupYzaq%2FFJFMVyA1cz0WWnvvgjQBrFCfaqNBxIAqNRSahjrLm7jxYv6kM86Z3ekh%2B5SwZJNIRv%2FBzb2w538QBqflibPsC1kHD5wFbWHlsEOsA%2B6ibKX0tEbUlkEHkN8j7jwLgpbIz6fqnv89YgYErETwmoy9vcYaCgEbChBWpT0wytJ4oPmAFRImwUgBT9cb3HL2ifuE9OCn1Wcouz%2F0%2Bk6QhHVuMkeWwj%2BJpQkm3RWHNakhRbvcwlmaogH35a50MEBHpciTMTxDR078XpGUzwq%2B3D8hy9YWg1BbYMQy6OdefInFFc7AWZQrXCeGA2qUmMjbxAeKDxMUY1bHz3Wz%2F1GtfNYGp3YfvQCCkyu%2FoL%2FTareerC1L&amp;sz=w512"
              className="contact-logo"
            />
          </Link>
          <nav className="contact-links">
            <Link to="/" className="contact-link">
              Home
            </Link>
            <Link to="/about-us" className="contact-link1">
              About Us
            </Link>
            <Link to="/company" className="contact-link2">
              Company
            </Link>
            <Link to="/contact" className="contact-link3">
              Contact
            </Link>
          </nav>
        </div>
        <div data-thq="thq-navbar-btn-group" className="contact-right">
          <Link to="/login" className="contact-book button button-main">
            <span className="contact-text">Login</span>
          </Link>
        </div>
        <div data-thq="thq-burger-menu" className="contact-burger-menu">
          <svg viewBox="0 0 1024 1024" className="contact-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="contact-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="contact-nav"
          >
            <div className="contact-container1">
              <Link to="/" className="contact-navlink1">
                <img
                  alt="image"
                  sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                  src="/external/logo-1500h-1500h.webp"
                  srcSet="Branding//logo-1500h.webp 1200w, Branding/logo-tablet.webp 800w, Branding/logo-mobile.webp 480w"
                  className="contact-image"
                />
              </Link>
              <div data-thq="thq-close-menu" className="contact-menu-close">
                <svg viewBox="0 0 1024 1024" className="contact-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="contact-nav1"
            >
              <Link to="/" className="contact-navlink2">
                Home
              </Link>
              <span className="contact-text1">About Us</span>
              <Link to="/company" className="contact-navlink3">
                Company
              </Link>
              <span className="contact-text2">Contact</span>
              <a href="#book" className="contact-book1 button button-main">
                <span className="contact-text3">Login</span>
              </a>
            </nav>
          </div>
        </div>
      </header>
      <Contact4></Contact4>
      <Footer3></Footer3>
    </div>
  )
}

export default Contact
