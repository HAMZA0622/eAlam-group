import React from 'react'

import PropTypes from 'prop-types'

import './gallery5.css'

const Gallery5 = (props) => {
  return (
    <div className="gallery5-gallery3 thq-section-padding">
      <div className="gallery5-max-width thq-section-max-width">
        <div className="gallery5-section-title">
          <h2 className="gallery5-text thq-heading-2">{props.heading1}</h2>
          <span className="gallery5-text1 thq-body-large">
            {props.content1}
          </span>
        </div>
        <div className="gallery5-container">
          <div className="gallery5-content">
            <div className="gallery5-container1">
              <div className="gallery5-container2">
                <img
                  alt={props.image1Alt}
                  src={props.image1Src}
                  className="gallery5-image1 thq-img-ratio-4-3"
                />
              </div>
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="gallery5-image2 thq-img-ratio-1-1"
              />
            </div>
            <div className="gallery5-container3">
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="gallery5-image3 thq-img-ratio-1-1"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="gallery5-image4 thq-img-ratio-1-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery5.defaultProps = {
  image3Alt: 'E-commerce Solutions',
  image2Alt: 'Support Services',
  heading1: 'Our Work Showcase',
  image1Alt: 'Custom Web Design',
  image4Alt: 'Data Security Solutions',
  image3Src:
    '/My Images/gemini_generated_image_40zrlg40zrlg40zr%20(1)-1400w.webp',
  image4Src:
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDYxMjc0MXw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Src:
    '/My Images/gemini_generated_image_6scdwy6scdwy6scd%20(3)-1400w.webp',
  image1Src: '/My Images/gemini_generated_image_6scdwx6scdwx6scd-1400w.webp',
  content1:
    'Explore our gallery to see examples of our custom web design projects and data security solutions.',
}

Gallery5.propTypes = {
  image3Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  heading1: PropTypes.string,
  image1Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image4Src: PropTypes.string,
  image2Src: PropTypes.string,
  image1Src: PropTypes.string,
  content1: PropTypes.string,
}

export default Gallery5
