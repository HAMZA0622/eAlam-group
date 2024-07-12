import React from 'react'

import PropTypes from 'prop-types'

import './cta7.css'

const CTA7 = (props) => {
  return (
    <div className="cta7-container thq-section-padding">
      <div className="cta7-max-width thq-section-max-width">
        <div className="cta7-column">
          <div className="cta7-content">
            <span className="thq-heading-2">{props.heading1}</span>
            <p className="cta7-text1 thq-body-large">{props.content1}</p>
            <div className="cta7-actions"></div>
          </div>
        </div>
      </div>
      <img
        alt={props.backgroundImageAlt}
        src={props.backgroundImageSrc}
        className="cta7-background-image thq-img-ratio-16-9"
      />
    </div>
  )
}

CTA7.defaultProps = {
  heading1: 'Our Mission',
  action2: 'Contact Us',
  action1: 'Learn More',
  backgroundImageAlt: 'CTA Background Image',
  content1:
    'At eAlam, our mission is to empower businesses with cutting-edge technology solutions that drive efficiency, innovation, and growth. We are committed to delivering exceptional value through our expertise in web development, software development, IT consulting, and digital transformation.',
  backgroundImageSrc:
    'https://images.unsplash.com/photo-1587497366757-beefb6fa1f42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDY4MzgzOXw&ixlib=rb-4.0.3&q=80&w=1080',
}

CTA7.propTypes = {
  heading1: PropTypes.string,
  action2: PropTypes.string,
  action1: PropTypes.string,
  backgroundImageAlt: PropTypes.string,
  content1: PropTypes.string,
  backgroundImageSrc: PropTypes.string,
}

export default CTA7
