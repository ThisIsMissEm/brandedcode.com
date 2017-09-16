import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>BrandedCode – Emelia Smith</title>
      <meta name='description' content='BrandedCode, the former freelance identity of Emelia Smith' />
      <meta name='keywords' content='emelia, smith, emelia smith, freelance, brandedcode, thisismissem, miksago, github, tech, startups, react, graphql, unobvious technology'/>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,800" rel="stylesheet" />
    </Helmet>
    <div
      style={{
        margin: '0 auto',
        maxWidth: '600px',
        padding: '4rem 1.0875rem 1rem',
        fontFamily: '"Open Sans", sans-serif'
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
