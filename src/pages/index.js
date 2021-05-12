import React from 'react'
import Link from 'gatsby-link'
import Responsive from 'react-responsive'

const Button = ({ isPrimary, ...props}) => (
  <a style={{
    display: "inline-block",
    marginRight: "20px",
    marginBottom: "20px",
    padding: "10px 26px",
    background: isPrimary ? '#6833DD' : '#aaa',
    color: 'white',
    borderRadius: '5px',
    fontSize: '1.1875rem',
    lineHeight: '24px',
    cursor: 'pointer',
    textAlign: 'center',
    outline: 'none',
    textDecoration: 'none'
  }} {...props} />
)

const IndexPage = () => (
  <div style={{color: '#222' }}>
    <Responsive minDeviceWidth={600}>
      {(matches) => {
        return (
          <header>
            <h1 style={{ fontSize: matches ? '60px' : '48px', fontWeight: 800, color: '#6833DD' }}>BrandedCode</h1>
            <h2 style={{ fontSize: matches ? '24px' : '20px', fontWeight: 800 }}>The online presence of Emelia Smith</h2>
          </header>
        )
      }}
    </Responsive>
    <section style={{ color: '#666' }}>
      <p>Hi, I'm Emelia, a highly experienced software engineer and founder based in Berlin, Germany</p>
      <p>I'm perhaps most known for my voice on <a href="https://twitter.com/thisismissem" title="Follow Emelia on Twitter">Twitter</a>, where I talk about Tech, Politics, Distributed Web, rights for sex workers and equality. You can find my writing on <a href="https://medium.com/@thisismissem" title="Read articles by Emelia on Medium">Medium</a>, when I publish it. You may also know me as the <a href="https://www.instagram.com/p/B6B4vVRIA22/" title="Photo of Emelia dressed as a princess at React Day Berlin 2020">tech princess</a>, or the <a href="https://medium.com/@thisismissem/tech-this-is-good-bye-19b88b2a760f" title="Read the article about Emelia leaving tech">trans woman who left tech</a> (I'm back)</p>
      <p>For the past three years, I have been bootstrapping a company called <a href="https://unobvious.technology" title="Learn more about Unobvious Technology">Unobvious Technology</a>, dedicated to bringing <span title="(like those I've built in the tech industry)">modern, safe, and secure services</span> to sex workers and the adult industry</p>

      <Button href="https://unobvious.technology" isPrimary title="Learn more about Unobvious Technology">Unobvious Technology</Button>
      <Button href="https://www.linkedin.com/in/thisismissem/">Hire Emelia</Button>
    </section>
    <footer style={{ marginTop: '60px', borderTop: '1px solid #ccc', padding: '6px 0 0', color: '#666', fontSize: 'smaller'}}>
      <p>
        <a href="https://github.com/thisismissem" title="Emelia on Github" style={{color: '#aaa'}}>Github</a> / <a href="https://twitter.com/thisismissem" title="Follow on Twitter" style={{color: '#aaa'}}>Twitter</a> / <a href="https://www.linkedin.com/in/thisismissem" title="See my previous work on LinkedIn" style={{color: '#aaa'}}>LinkedIn</a>
        <span style={{ float: 'right' }}>Last Updated 8th June 2020</span>
      </p>
    </footer>
  </div>
)

export default IndexPage
