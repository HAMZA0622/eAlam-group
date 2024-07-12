import React from 'react'

import PropTypes from 'prop-types'

import './gallery3.css'

const Gallery3 = (props) => {
  return (
    <div className="gallery3-gallery3 thq-section-padding">
      <div className="gallery3-max-width thq-section-max-width">
        <div className="gallery3-section-title">
          <h2 className="gallery3-text thq-heading-2">{props.heading1}</h2>
          <span className="gallery3-text1 thq-body-large">
            {props.content1}
          </span>
        </div>
        <div className="gallery3-container thq-grid-4">
          <div className="gallery3-container1">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="gallery3-image1 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container2">
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="gallery3-image2 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container3">
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="gallery3-image3 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container4">
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="gallery3-image4 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container5">
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="gallery3-image5 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container6">
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="gallery3-image6 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container7">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="gallery3-image7 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container8">
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="gallery3-image8 thq-img-ratio-16-9"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery3.defaultProps = {
  image5Alt: 'Client Relationships',
  image3Src:
    'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDY4MzAxMnw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Src:
    '/My Images/gemini_generated_image_6scdwx6scdwx6scd%20(2)-600w.webp',
  image6Alt: 'Innovative IT Consulting',
  image1Alt: 'Custom Web Design',
  image7Src:
    'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDY4MzAxM3w&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Our Company',
  image4Alt: 'Round-the-clock Support',
  image5Src:
    '/My Images/technology%20computer%20software%20software%20development%20web%20development%20business%2C%20technology%20transparent%20background%20png%20clipart-600w.webp',
  content1:
    'eAlam is a leading technology solutions provider dedicated to transforming businesses through innovation. Founded by a team of passionate tech enthusiasts, we specialize in web development, software development, IT consulting, and digital transformation.',
  image7Alt: 'Responsive Design',
  image2Src:
    'https://images.unsplash.com/photo-1506097425191-7ad538b29cef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDY4MzAxNHw&ixlib=rb-4.0.3&q=80&w=1080',
  image8Src:
    '/My Images/gemini_generated_image_40zrlg40zrlg40zr%20(1)-600w.webp',
  image4Src: '/My Images/gemini_generated_image_6scdwx6scdwx6scd-600w.webp',
  image2Alt: 'Data Security Solutions',
  image6Src:
    'https://images.unsplash.com/photo-1489486501123-5c1af10d0be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDY4MzAxNnw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Alt: 'E-commerce Solutions',
  image8Alt: 'Mobile Optimization',
}

Gallery3.propTypes = {
  image5Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image1Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image7Src: PropTypes.string,
  heading1: PropTypes.string,
  image4Alt: PropTypes.string,
  image5Src: PropTypes.string,
  content1: PropTypes.string,
  image7Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image8Src: PropTypes.string,
  image4Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image8Alt: PropTypes.string,
}

export default Gallery3
