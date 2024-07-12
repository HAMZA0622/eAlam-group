import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Hero9 from '../components/hero9'
import Features21 from '../components/features21'
import Testimonial17 from '../components/testimonial17'
import Footer3 from '../components/footer3'
import './about-us.css'

const AboutUs = (props) => {
  return (
    <div className="about-us-container">
      <Helmet>
        <title>About-Us - Medica template</title>
        <meta property="og:title" content="About-Us - Medica template" />
      </Helmet>
      <header data-thq="thq-navbar" className="about-us-navbar">
        <div className="about-us-left">
          <Link to="/" className="about-us-navlink">
            <img
              alt="image"
              src="https://chat.google.com/u/0/api/get_attachment_url?url_type=FIFE_URL&amp;content_type=image%2Fpng&amp;attachment_token=AOo0EEXHwWgbMd5ypj1gyBfa8QQB6fRujDtuFx3D5TpcIQJuzJ89bgA3HFIi3zneqz0GdvJfPco50Jxvy2Uc%2Fz9BlRyBtSmpJz9APPTlK4cWZy2TiyjF9j5EqHs7LCTDOrepdkFxVf2RLyik8CyXRKHseVQYYSRQ89SmzZN6kWcehjAkbDK6H5t1F2N3UEJDQA%2FrqBuk56QbOUABLcJlQFUDdaGJfzjQN1GVABiTt0z4ul9%2BFupYzaq%2FFJFMVyA1cz0WWnvvgjQBrFCfaqNBxIAqNRSahjrLm7jxYv6kM86Z3ekh%2B5SwZJNIRv%2FBzb2w538QBqflibPsC1kHD5wFbWHlsEOsA%2B6ibKX0tEbUlkEHkN8j7jwLgpbIz6fqnv89YgYErETwmoy9vcYaCgEbChBWpT0wytJ4oPmAFRImwUgBT9cb3HL2ifuE9OCn1Wcouz%2F0%2Bk6QhHVuMkeWwj%2BJpQkm3RWHNakhRbvcwlmaogH35a50MEBHpciTMTxDR078XpGUzwq%2B3D8hy9YWg1BbYMQy6OdefInFFc7AWZQrXCeGA2qUmMjbxAeKDxMUY1bHz3Wz%2F1GtfNYGp3YfvQCCkyu%2FoL%2FTareerC1L&amp;sz=w512"
              className="about-us-logo"
            />
          </Link>
          <nav className="about-us-links">
            <Link to="/" className="about-us-link">
              Home
            </Link>
            <Link to="/about-us" className="about-us-link1">
              About Us
            </Link>
            <Link to="/company" className="about-us-link2">
              Company
            </Link>
            <a href="#schedule" className="about-us-link3">
              Contact
            </a>
          </nav>
        </div>
        <div data-thq="thq-navbar-btn-group" className="about-us-right">
          <a href="#book" className="about-us-book button button-main">
            <span className="about-us-text">Login</span>
          </a>
        </div>
        <div data-thq="thq-burger-menu" className="about-us-burger-menu">
          <svg viewBox="0 0 1024 1024" className="about-us-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="about-us-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="about-us-nav"
          >
            <div className="about-us-container1">
              <img
                alt="image"
                sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                src="/My Images/icons/5c53016f89a210fd4169381f528cb2ad-1500h.webp"
                srcSet="Branding//logo-1500h.webp 1200w, Branding/logo-tablet.webp 800w, Branding/logo-mobile.webp 480w"
                className="about-us-image"
              />
              <div data-thq="thq-close-menu" className="about-us-menu-close">
                <svg viewBox="0 0 1024 1024" className="about-us-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="about-us-nav1"
            >
              <span className="about-us-text1">Home</span>
              <span className="about-us-text2">About Us</span>
              <span className="about-us-text3">Company</span>
              <span className="about-us-text4">Contact</span>
              <a href="#book" className="about-us-book1 button button-main">
                <span className="about-us-text5">Login</span>
              </a>
            </nav>
          </div>
        </div>
      </header>
      <Hero9 image1Src="/My Images/gemini_generated_image_6scdwy6scdwy6scd%20(3)-1500w.webp"></Hero9>
      <Features21></Features21>
      <Testimonial17></Testimonial17>
      <Footer3></Footer3>
    </div>
  )
}

export default AboutUs
