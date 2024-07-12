import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './hero1.css'

const Hero1 = (props) => {
  return (
    <div className="hero1-header1 thq-section-padding">
      <div className="hero1-max-width thq-section-max-width">
        <div className="thq-flex-row hero1-container">
          <div className="hero1-column">
            <div className="hero1-content">
              <h1 className="thq-heading-1 hero1-heading1">{props.heading1}</h1>
              <p className="thq-body-large hero1-content1">{props.content1}</p>
            </div>
            <div className="hero1-actions">
              <Link to="/about-us" className="hero1-button thq-button-filled">
                <span className="thq-body-small">{props.action1}</span>
              </Link>
            </div>
          </div>
          <div className="hero1-container1">
            <img
              alt={props.image1Alt}
              src="https://chat.google.com/u/0/api/get_attachment_url?url_type=FIFE_URL&amp;content_type=image%2Fpng&amp;attachment_token=AOo0EEUNICc%2FF0BqlfPBoX27e9jmwBUcj8uul9qimZD%2B4f1WlbwmkkBZrdeuWyoce97p4lICmeD0UDacyqs48h2U6dEwqUnr6TM9yF%2B2DS0AYAuirXZYf5rQNFoD2olum0LawPuDFbQZcPc5wyTEHgwOsDUKluxgc8LYRyzzr4RuUgMXweSosyN9OTzOSfmp1KS6GgJi8ZWhQ%2FubF48u2hg3UxvNFqg%2FoX6e1PJpq37sBaGYE16grc9nyqarjXtD7Z2Fvh7qPnllxjB%2F%2Fdc%2FwY8EdN2b253hSB69A274nDuhE9hRrGfrsTWg90f91Gemg26242Td4MDVVVjd%2BB3z7XbTfEaXzQcsTyuTgNkzJCAdDXmaRGkMyEuaWQ5ZwTKxaLOHyzNxtmybN3Q5tZMuiA1kyep8lQjB88UgBjjnwB6jYDUarmSZH4X6SJUW%2FNjo2IW3vdX%2FoDdj7a6rK6PHVhr%2FXGyICpk5TG7RQYOdDomnnT3EdyzHdApShDHL%2BH7nL3oGRBa6pZyS7JI4c2DxLloNYGslUe3MtwHDih6l9NvhwgPmnOnnTA%2F6qKL3%2F5eZ2cA%3D&amp;sz=w512"
              className="hero1-image1 thq-img-ratio-4-3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Hero1.defaultProps = {
  content1:
    'At eAlam, we are dedicated to revolutionizing the way businesses operate in the digital age. Our mission is to empower organizations with cutting-edge technology solutions that drive efficiency, innovation, and growth.',
  action2: 'Secondary action',
  image1Src:
    'https://images.unsplash.com/photo-1618004912476-29818d81ae2e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDc2fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA5Mjg2MTV8MA&ixlib=rb-4.0.3&w=1400',
  heading1: 'Welcome to eAlam',
  image1Alt: 'PlaceholderImage1314',
  action1: 'About Us',
}

Hero1.propTypes = {
  content1: PropTypes.string,
  action2: PropTypes.string,
  image1Src: PropTypes.string,
  heading1: PropTypes.string,
  image1Alt: PropTypes.string,
  action1: PropTypes.string,
}

export default Hero1
