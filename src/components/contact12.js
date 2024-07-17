import React from 'react'

import PropTypes from 'prop-types'

import './contact12.css'

const Contact12 = (props) => {
  return (
    <div
      className={`contact12-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="contact12-max-width thq-section-max-width">
        <div className="contact12-content thq-flex-row">
          <div className="contact12-content1">
            <div className="contact12-content2">
              <svg
                viewBox="0 0 1024 1024"
                className="contact12-icon thq-icon-medium"
              >
                <path
                  d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"
                  className=""
                ></path>
              </svg>
              <div className="contact12-contact-info">
                <h3 className="contact12-text thq-heading-3">Email</h3>
                <span className="thq-body-small">{props.email1}</span>
              </div>
            </div>
            <div className="contact12-content3">
              <svg
                viewBox="0 0 1024 1024"
                className="contact12-icon2 thq-icon-medium"
              >
                <path
                  d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"
                  className=""
                ></path>
              </svg>
              <div className="contact12-contact-info1">
                <h3 className="contact12-text1 thq-heading-3">Phone</h3>
                <span className="thq-body-small">{props.phone1}</span>
              </div>
            </div>
            <div className="contact12-content4">
              <svg
                viewBox="0 0 1024 1024"
                className="contact12-icon4 thq-icon-medium"
              >
                <path
                  d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"
                  className=""
                ></path>
              </svg>
              <div className="contact12-contact-info2">
                <h3 className="contact12-text3 thq-heading-3">Office</h3>
                <span className="thq-body-small">{props.address1}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="contact12-content5">
          <iframe
            src={props.location1GoogleMap}
            title="Map"
            className="contact12-iframe thq-img-ratio-16-9"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

Contact12.defaultProps = {
  rootClassName: '',
  address1: 'Gulberg Business centre,  Gulberg Green, Islamabad, Pakistan',
  email1: 'info@ealamgroup.pk',
  heading1: 'Contact Us',
  location1GoogleMap:
    'https://maps.google.com/maps?q=Gulberg+Business+centre%2C+Gulberg+Green%2C+Islamabad&t=&z=13&ie=UTF8&iwloc=&output=embed',
  phone1: '+92-312-939-3165',
  content1: 'Feel free to reach out to us for any inquiries or collaborations.',
}

Contact12.propTypes = {
  rootClassName: PropTypes.string,
  address1: PropTypes.string,
  email1: PropTypes.string,
  heading1: PropTypes.string,
  location1GoogleMap: PropTypes.string,
  phone1: PropTypes.string,
  content1: PropTypes.string,
}

export default Contact12
