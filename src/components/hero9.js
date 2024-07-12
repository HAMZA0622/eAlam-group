import React from 'react'

import PropTypes from 'prop-types'

import './hero9.css'

const Hero9 = (props) => {
  return (
    <div className="hero9-header30 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero9-image"
      />
      <div className="hero9-container"></div>
    </div>
  )
}

Hero9.defaultProps = {
  action2: 'Get in touch',
  content1: 'Empowering businesses with cutting-edge technology solutions',
  image1Alt: 'Image of a team working on digital solutions',
  heading: 'Welcome to eAlam',
  image1Src:
    'https://images.unsplash.com/photo-1487284122274-e864e9dec2bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDYxODI4MHw&ixlib=rb-4.0.3&q=80&w=1500',
  action1: 'Learn more',
  heading1: 'Welcome to eAlam',
}

Hero9.propTypes = {
  action2: PropTypes.string,
  content1: PropTypes.string,
  image1Alt: PropTypes.string,
  heading: PropTypes.string,
  image1Src: PropTypes.string,
  action1: PropTypes.string,
  heading1: PropTypes.string,
}

export default Hero9
