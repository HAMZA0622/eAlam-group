import React from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial17-text01 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial17-card">
                <div className="testimonial17-container02">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image"
                  />
                  <div className="testimonial17-container03">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text04 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container04">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container05">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text07 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container06">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container07">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text10 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container08">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container09">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text13 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author3Src:
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDYxODgyNHw&ixlib=rb-4.0.3&q=80&w=1080',
  content1:
    'eAlam is home to a diverse team of skilled professionals, each bringing a unique perspective and expertise to the table. Our developers, designers, consultants, and strategists work together seamlessly to deliver comprehensive solutions that drive success. We are passionate about technology and dedicated to helping our clients achieve their goals.',
  author3Name: 'Atta Ullah Khattak',
  heading1: 'Our Teams',
  author3Position: 'Database Administrator , Ealam Groups',
  review4:
    "M Hamza is the creative mind behind our innovative and engaging designs. They focus on creating visually appealing and user-centric designs that align with our clients' brand identities and business goals. Their creativity and attention to detail ensure that every project we deliver is aesthetically pleasing and effective.",
  author2Alt: 'Image of Jane Smith',
  author4Name: 'M Hamza',
  author4Src:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDYxODgyM3w&ixlib=rb-4.0.3&q=80&w=1080',
  author4Alt: 'image',
  review3:
    'Atta Ullah Khattak ensures that our data is managed efficiently and securely. They are responsible for database design, performance tuning, and maintaining data integrity. Their meticulous attention to detail ensures that our systems run smoothly and data is always accessible when needed.',
  author2Position: 'Frontend Developer , Ealam Groups',
  review1:
    'Abubakar is a master of server-side logic and database integration. They specialize in creating robust, scalable, and secure backend systems that power our applications. Their expertise ensures that our solutions perform reliably and efficiently, handling complex functionalities with ease.',
  review2:
    'Sami Ullah Khattak brings our designs to life with stunning, interactive user interfaces. They are skilled in the latest frontend technologies, ensuring that our websites and applications are not only visually appealing but also highly functional and user-friendly.',
  author1Name: 'Abubakar',
  author4Position: 'Designer, Ealam Groups',
  author2Name: 'Sami Ullah Kkhattak',
  author1Alt: 'Image of John Doe',
  author3Alt: 'Image of David Johnson',
  author1Position: 'Backend Developer, Ealam Groups',
  author1Src:
    'https://images.unsplash.com/photo-1531547255897-f400dc1b7de2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDYxODgyM3w&ixlib=rb-4.0.3&q=80&w=1080',
  author2Src:
    'https://images.unsplash.com/photo-1492288991661-058aa541ff43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDYxODgyNHw&ixlib=rb-4.0.3&q=80&w=1080',
}

Testimonial17.propTypes = {
  author3Src: PropTypes.string,
  content1: PropTypes.string,
  author3Name: PropTypes.string,
  heading1: PropTypes.string,
  author3Position: PropTypes.string,
  review4: PropTypes.string,
  author2Alt: PropTypes.string,
  author4Name: PropTypes.string,
  author4Src: PropTypes.string,
  author4Alt: PropTypes.string,
  review3: PropTypes.string,
  author2Position: PropTypes.string,
  review1: PropTypes.string,
  review2: PropTypes.string,
  author1Name: PropTypes.string,
  author4Position: PropTypes.string,
  author2Name: PropTypes.string,
  author1Alt: PropTypes.string,
  author3Alt: PropTypes.string,
  author1Position: PropTypes.string,
  author1Src: PropTypes.string,
  author2Src: PropTypes.string,
}

export default Testimonial17
