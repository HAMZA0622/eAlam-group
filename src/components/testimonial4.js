import React from 'react'

import PropTypes from 'prop-types'

import './testimonial4.css'

const Testimonial4 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial4-max-width thq-section-max-width">
        <div className="testimonial4-section-title">
          <h2 className="testimonial4-title thq-heading-2">{props.heading1}</h2>
          <p className="testimonial4-subtitle thq-body-large">
            {props.content1}
          </p>
        </div>
        <div className="testimonial4-content thq-flex-row">
          <div className="testimonial4-column thq-card thq-flex-column">
            <div className="testimonial4-stars">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
            </div>
            <span className="testimonial4-text thq-body-small">
              {props.review1}
            </span>
            <div className="testimonial4-avatar">
              <img
                alt={props.author1Alt}
                src={props.author1Src}
                className="testimonial4-avatar-image thq-img-ratio-1-1 thq-img-round"
              />
              <div className="testimonial4-avatar-content">
                <span className="testimonial4-text1 thq-body-small">
                  {props.author1Name}
                </span>
                <span className="thq-body-small">{props.author1Position}</span>
              </div>
            </div>
          </div>
          <div className="testimonial4-column1 thq-card thq-flex-column">
            <div className="testimonial4-stars1">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
            </div>
            <span className="testimonial4-text3 thq-body-small">
              {props.review2}
            </span>
            <div className="testimonial4-avatar1">
              <img
                alt={props.author2Alt}
                src={props.author2Src}
                className="testimonial4-avatar-image1 thq-img-ratio-1-1 thq-img-round"
              />
              <div className="testimonial4-avatar-content1">
                <span className="testimonial4-text4 thq-body-small">
                  {props.author2}
                </span>
                <span className="thq-body-small">{props.author2Position}</span>
              </div>
            </div>
          </div>
          <div className="testimonial4-column2 thq-card thq-flex-column">
            <div className="testimonial4-stars2">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
            </div>
            <span className="testimonial4-text6 thq-body-small">
              {props.review3}
            </span>
            <div className="testimonial4-avatar2">
              <img
                alt={props.author3Alt}
                src={props.author3Src}
                className="testimonial4-avatar-image2 thq-img-ratio-1-1 thq-img-round"
              />
              <div className="testimonial4-avatar-content2">
                <span className="testimonial4-text7 thq-body-small">
                  {props.author3}
                </span>
                <span className="thq-body-small">{props.author3Position}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial4.defaultProps = {
  content1:
    "At eAlam, we pride ourselves on building strong, lasting relationships with our clients. Here's what some of our satisfied clients have to say about our services:",
  author3Src:
    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDYxNTAzM3w&ixlib=rb-4.0.3&q=80&w=1080',
  author3: 'Moin',
  author1Name: 'Asad Shabbir',
  review2:
    'The team at eAlam delivered a stunning, responsive website that exceeded our expectations. Their attention to detail and commitment to creating a seamless user experience have significantly boosted our online presence and customer engagement.',
  author1Src: '/video-1400w.webp',
  review3:
    "eAlam's IT consulting services have been invaluable to our organization. They provided strategic guidance and implemented a secure, scalable IT infrastructure that supports our growing needs. Their expertise and professionalism are second to none.",
  author2Src:
    'https://images.unsplash.com/photo-1533228876829-65c94e7b5025?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDYxNTAzM3w&ixlib=rb-4.0.3&q=80&w=1080',
  author3Position: '',
  author2Position: '',
  heading1: 'Our Client',
  review1:
    'Working with eAlam has been a game-changer for our business. Their team developed a custom software solution that perfectly addressed our unique challenges. The level of innovation and dedication they brought to the project was truly impressive.',
  author2Alt: 'Image of Emily Johnson, Marketing Director',
  author1Position: '',
  author1Alt: 'Image of John Smith, CEO',
  author3Alt: 'Image of David Lee, CTO',
  author2: 'Shariq Saifat',
}

Testimonial4.propTypes = {
  content1: PropTypes.string,
  author3Src: PropTypes.string,
  author3: PropTypes.string,
  author1Name: PropTypes.string,
  review2: PropTypes.string,
  author1Src: PropTypes.string,
  review3: PropTypes.string,
  author2Src: PropTypes.string,
  author3Position: PropTypes.string,
  author2Position: PropTypes.string,
  heading1: PropTypes.string,
  review1: PropTypes.string,
  author2Alt: PropTypes.string,
  author1Position: PropTypes.string,
  author1Alt: PropTypes.string,
  author3Alt: PropTypes.string,
  author2: PropTypes.string,
}

export default Testimonial4
