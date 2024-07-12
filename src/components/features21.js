import React from 'react'

import PropTypes from 'prop-types'

import './features21.css'

const Features21 = (props) => {
  return (
    <div className="features21-layout349 thq-section-padding">
      <div className="features21-max-width thq-section-max-width thq-grid-auto-300">
        <div className="features21-container thq-card thq-flex-column">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="features21-image thq-img-ratio-1-1 thq-img-round"
          />
          <h2 className="thq-heading-2">{props.feature1Title}</h2>
          <span className="features21-text1 thq-body-small">
            {props.feature1Description}
          </span>
        </div>
        <div className="features21-container1 thq-card thq-flex-column">
          <img
            alt={props.feature2ImageAlt}
            src={props.feature2ImageSrc}
            className="features21-image1 thq-img-ratio-1-1 thq-img-round"
          />
          <h2 className="thq-heading-2">{props.feature2Title}</h2>
          <span className="features21-text3 thq-body-small">
            {props.feature2Description}
          </span>
        </div>
        <div className="features21-container2 thq-card thq-flex-column">
          <img
            alt={props.feature3ImageAlt}
            src={props.feature3ImageSrc}
            className="features21-image2 thq-img-ratio-1-1 thq-img-round"
          />
          <h2 className="thq-heading-2">{props.feature3Title}</h2>
          <span className="features21-text5 thq-body-small">
            {props.feature3Description}
          </span>
        </div>
        <div className="features21-container3 thq-card thq-flex-column">
          <img
            alt={props.feature4ImageAlt}
            src={props.feature4ImageSrc}
            className="features21-image3 thq-img-ratio-1-1 thq-img-round"
          />
          <h2 className="thq-heading-2">{props.feature4Title}</h2>
          <span className="features21-text7 thq-body-small">
            {props.feature4Description}
          </span>
        </div>
      </div>
    </div>
  )
}

Features21.defaultProps = {
  feature1Title: 'Custom Web Design',
  feature2Description:
    'Robust security measures to protect your valuable data.',
  feature2Title: 'Data Security',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1516321497487-e288fb19713f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDYyMTI0MXw&ixlib=rb-4.0.3&q=80&w=1400',
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1569534108101-c29c57e3df89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDYyMTI0Mnw&ixlib=rb-4.0.3&q=80&w=1400',
  feature1ImageAlt: 'Custom Web Design Image',
  feature4ImageAlt: 'Tailored Technology Solutions Image',
  feature3Description:
    'Create seamless online shopping experiences for your customers.',
  feature3ImageAlt: 'E-commerce Solutions Image',
  feature3Title: 'E-commerce Solutions',
  feature4Title: 'Tailored Technology Solutions',
  feature4Description:
    'Customized technology solutions to meet your specific business needs.',
  feature1Description:
    'Tailored and visually appealing websites to showcase your brand.',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1676222490199-3bfe419c952b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDYyMTI0Mnw&ixlib=rb-4.0.3&q=80&w=1400',
  feature2ImageAlt: 'Data Security Image',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1580584126903-c17d41830450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDYyMTI0MXw&ixlib=rb-4.0.3&q=80&w=1400',
}

Features21.propTypes = {
  feature1Title: PropTypes.string,
  feature2Description: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature3Title: PropTypes.string,
  feature4Title: PropTypes.string,
  feature4Description: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
}

export default Features21
