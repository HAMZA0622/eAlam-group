import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar3 from '../components/navbar3'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import FeatureCard from '../components/feature-card'
import Contact12 from '../components/contact12'
import Footer3 from '../components/footer3'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>eAlam Group</title>
        <meta property="og:title" content="Soft UI Pro" />
      </Helmet>
      <Navbar3></Navbar3>
      <div className="home-hero">
        <div id="Home" className="home-container01">
          <div className="home-card">
            <h1 className="home-text">Well Come To eAlam</h1>
            <h1 className="home-text01 HeadingOne">Choose the best</h1>
            <span className="home-text02 Lead">
              <span>
              Where others falter, we excel. In the face of challenges, our resilience and determination set us apart.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
              Our commitment to excellence drives us to not only meet expectations but to surpass them, consistently delivering outstanding results.
              </span>
            </span>
            <div className="home-container02">
              <div className="home-container03">
                <a href="#contact us" className="home-link">
                  <PrimaryPinkButton
                    button="contact us"
                    className="home-component1"
                  ></PrimaryPinkButton>
                </a>
              </div>
              {/* <OutlineGrayButton button="read more"></OutlineGrayButton> */}
            </div>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxjb21wdXRlciUyMHByb2dyYW1pbmd8ZW58MHx8fHwxNzIxMTMyNjg0fDA&amp;ixlib=rb-4.0.3&amp;h=1500"
        className="home-image"
      />
      <section className="home-container04">
        <div className="home-container05">
          <h1 className="home-text05 HeadingOne">From nothing to something</h1>
          <span className="home-text06">
            <span className="home-text07">
              The highest status people in human history are those that asked
              for nothing and gave everything
            </span>
          </span>
        </div>
        <div className="home-container06">
          <div className="home-container07">
            <img
              alt="image"
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/laptop.jpg"
              className="home-image1"
            />
            <div className="home-container08">
              <img
                alt="image"
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/coding.jpg"
                className="home-image2"
              />
            </div>
          </div>
          <div className="home-container09">
            <img
              alt="image"
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/tasks.jpg"
              className="home-image3"
            />
          </div>
        </div>
      </section>
      <section id="services" className="home-features">
        <FeatureCard
          text="Development, testing, maintenance, and documentation tailored to your needs."
          text1="Development, testing, maintenance, and documentation tailored to your needs."
          title="Components"
          newProp="Web Apps"
          imageSrc="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDgyfHxtb25pdG9yJTIwaWNvbnxlbnwwfHx8fDE3MjExOTkyMzJ8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
          rootClassName="feature-card-root-class-name4"
        ></FeatureCard>
        <h1 className="home-text08 HeadingTwo">Our Services</h1>
        <FeatureCard
          text="Consulting, customization, development, training, and implementation services."
          text1="Consulting, customization, development, training, and implementation services."
          newProp="Salesforce Partner"
          imageSrc="/my img/icon/image-1500w.png"
          rootClassName="feature-card-root-class-name6"
        ></FeatureCard>
        <FeatureCard
          text="Consulting, customization, development, training, and implementation services."
          text1="Consulting, customization, development, training, and implementation services."
          newProp="Odoo"
          imageSrc="/my img/odoo-1500w.png"
          rootClassName="feature-card-root-class-name7"
        ></FeatureCard>
      </section>
      <div id="contact us" className="home-container10">
        <h1 className="home-text09">Contact Us</h1>
      </div>
      <Contact12 rootClassName="contact12-root-class-name"></Contact12>
      <Footer3></Footer3>
    </div>
  )
}

export default Home
