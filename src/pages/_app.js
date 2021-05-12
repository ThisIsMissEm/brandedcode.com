import React from 'react'
import Head from 'next/head'

import '../style.css'

const App = ({ Component, pageProps }) => (
  <div>
    <Head>
      <title>BrandedCode – Emelia Smith</title>
      <meta name='description' content='BrandedCode, the former freelance identity of Emelia Smith' />
      <meta name='keywords' content='emelia, smith, emelia smith, freelance, brandedcode, thisismissem, miksago, github, tech, startups, react, graphql, unobvious technology'/>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,800" rel="stylesheet" />
    </Head>
    <div
      style={{
        margin: '0 auto',
        maxWidth: '600px',
        padding: '4rem 1.0875rem 1rem',
        fontFamily: '"Open Sans", sans-serif'
      }}
    >
      <Component {...pageProps} />
    </div>
  </div>
);
export default App;