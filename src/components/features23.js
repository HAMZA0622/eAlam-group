import React from 'react'

import PropTypes from 'prop-types'

import './features23.css'

const Features23 = (props) => {
  return (
    <div className="features23-layout349 thq-section-padding">
      <div className="features23-max-width thq-section-max-width">
        <div className="features23-container">
          <h2 className="thq-heading-2">{props.heading1}</h2>
        </div>
        <div className="thq-grid-3">
          <div className="features23-container2 thq-card">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="features23-image thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature1Title}</h2>
            <span className="features23-text02 thq-body-small">
              {props.feature1Description}
            </span>
          </div>
          <div className="features23-container3 thq-card hover">
            <img
              alt={props.feature2ImageAlt}
              src="https://images.unsplash.com/photo-1484651890318-ca4110437e20?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDYwNjk4OHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1400"
              className="features23-image1 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature2Title}</h2>
            <span className="features23-text04 thq-body-small">
              {props.feature2Description}
            </span>
          </div>
          <div className="features23-container4 thq-card">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="features23-image2 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature3Title}</h2>
            <span className="features23-text06 thq-body-small">
              {props.feature3Description}
            </span>
          </div>
          <div className="features23-container5 thq-card hover">
            <img
              alt={props.feature4ImageAlt}
              src={props.feature4ImageSrc}
              className="features23-image3 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature4Title}</h2>
            <span className="features23-text08 thq-body-small">
              {props.feature4Description}
            </span>
          </div>
          <div className="features23-container6 thq-card">
            <img
              alt={props.feature5ImageAlt}
              src={props.feature5ImageSrc}
              className="features23-image4 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature5Title}</h2>
            <span className="features23-text10 thq-body-small">
              {props.feature5Description}
            </span>
          </div>
          <div className="features23-container7 thq-card hover">
            <img
              alt={props.feature6ImageAlt}
              src={props.feature6ImageSrc}
              className="features23-image5 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature6Title}</h2>
            <span className="features23-text12 thq-body-small">
              {props.feature6Description}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Features23.defaultProps = {
  feature2Title: 'Responsive',
  feature1ImageAlt: 'Efficiency Boost Image Alt Text',
  feature3Title: 'E-Commerce Solutions',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1484651890318-ca4110437e20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDYwNjk4OHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature4Description:
    'Tailored solutions to meet your specific business needs and challenges.',
  feature5Title: 'Data Security',
  feature6Description:
    'Our dedicated support team is available round the clock to assist you whenever you need help.',
  feature5ImageAlt: 'Data Security Image Alt Text',
  feature4Title: 'Custom Solutions',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature3Description:
    'Unlock new opportunities and drive business growth with our scalable solutions.',
  feature3ImageAlt: 'SEO-Friendly Architecture',
  action1: 'Learn More',
  feature5Description:
    'Protect your valuable data with our robust security measures and protocols.',
  feature1Title: 'Custom Web Design',
  feature6Title: 'Support',
  feature6ImageAlt: 'Support Image Alt Text',
  feature4ImageAlt: 'Custom Solutions Image Alt Text',
  feature1Description:
    'Streamline your processes and increase productivity with our efficient solutions.',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1529868782747-9e8bb9111742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDYwNjk5MHw&ixlib=rb-4.0.3&q=80&w=1400',
  feature5ImageSrc:
    'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDYwNjk4OXw&ixlib=rb-4.0.3&q=80&w=1400',
  feature2ImageAlt: 'Innovation Drive Image Alt Text',
  feature6ImageSrc:
    'https://images.unsplash.com/photo-1626427223333-183395267453?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDYwNjk5MHw&ixlib=rb-4.0.3&q=80&w=1400',
  heading1: 'eAlam Web Development Services',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1574009513170-57f65572dd3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDYwNjk4OXw&ixlib=rb-4.0.3&q=80&w=1400',
  feature2Description:
    'Stay ahead of the curve by embracing innovation through our cutting-edge technologies.',
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDYwNjk4OHw&ixlib=rb-4.0.3&q=80&w=1400',
}

Features23.propTypes = {
  feature2Title: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature4Description: PropTypes.string,
  feature5Title: PropTypes.string,
  feature6Description: PropTypes.string,
  feature5ImageAlt: PropTypes.string,
  feature4Title: PropTypes.string,
  content1: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  action1: PropTypes.string,
  feature5Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature6Title: PropTypes.string,
  feature6ImageAlt: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature5ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature6ImageSrc: PropTypes.string,
  heading1: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
}

export default Features23
