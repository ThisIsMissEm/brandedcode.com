import React from 'react'
import Link from 'gatsby-link'

const Button = ({ isPrimary, ...props}) => (
  <a style={{
    display: "inline-block",
    marginRight: "20px",
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
    <header>
      <h1 style={{ fontSize: '60px', fontWeight: 800, color: '#6833DD' }}>BrandedCode</h1>
      <h2 style={{ fontSize: '24px', fontWeight: 800 }}>The former brand of Emelia Smith</h2>
    </header>
    <section style={{ color: '#666' }}>
      <p>After almost a decade as a software engineer, I have decided to stop working in the tech industry.</p>
      <p>On April 4th 2017, I published <a href="https://medium.com/@thisismissem/tech-this-is-good-bye-19b88b2a760f" title="Read the article “Tech, This Is Good Bye.”">an article</a> detailing my story of working in the tech industry, and stating that I'd be leaving the industry. Over twenty thousand people viewed the article, and ten thousand people read it, according to Medium. People tried to encourage me to stay in the tech industry, but I knew that it was time for a new chapter in my life.</p>
      <p>After choosing to no longer work in tech, I've decided to work in the Adult Industry. Occasionally I still do the odd bit of consulting within the tech industry, as it does still pay money, but overall, I've left the tech industry.</p>
      <p>I've started a company called <a href="https://unobvious.technology" title="Learn more about Unobvious Technology">Unobvious Technology</a>, dedicated to bringing <span title="(like those I used to build in the tech industry)">modern, safe, and secure services</span> to the adult industry and the sex workers within it.</p>

      <Button href="https://unobvious.technology" isPrimary title="Learn more about Unobvious Technology">Unobvious Technology</Button>
      <Button href="mailto:emelia@brandedcode.com?subject=Hi!">Contact Emelia</Button>
    </section>
    <footer style={{ marginTop: '60px', borderTop: '1px solid #ccc', padding: '6px 0 0', color: '#666', fontSize: 'smaller'}}>
      <p><a href="https://github.com/thisismissem" title="Emelia on Github" style={{color: '#aaa'}}>Github</a> / <a href="https://twitter.com/thisismissem" title="Follow on Twitter" style={{color: '#aaa'}}>Twitter</a> / <a href="https://www.linkedin.com/in/thisismissem" title="See my previous work on LinkedIn" style={{color: '#aaa'}}>LinkedIn</a></p>
    </footer>
  </div>
)

export default IndexPage
