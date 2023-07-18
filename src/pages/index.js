import React from 'react'
import Responsive from 'react-responsive'

const Button = ({ isPrimary, ...props}) => (
  <a className={isPrimary ? "button" : "button button-primary"} {...props} />
)

const Today = new Date()

const IndexPage = () => (
  <div style={{color: '#222' }} id="me" typeof="foaf:Person">
    <header id="header">
      <h1 style={{ fontSize: '3em', fontWeight: 800, color: '#E91E63' }}>BrandedCode</h1>
      <h2 style={{ fontSize: '1em', fontWeight: 800 }}>The online presence of <span property="foaf:name"><span property="foaf:givenName">Emelia</span> <span property="foaf:familyName">Smith</span></span></h2>
    </header>
    <section style={{ color: '#666' }}>
      <p>Hi, I'm Emelia, a highly experienced software engineer and founder based in <span property="schema:homeLocation">Berlin, Germany</span></p>
      <p>I'm perhaps most known for my voice on <strike><a href="https://twitter.com/thisismissem" rel="me" title="Follow Emelia on Twitter">Twitter</a></strike> <a href="https://hachyderm.io/@thisismissem" rel="me" title="Follow Emelia on Mastodon">Mastodon</a>, where I talk about Tech, Politics, Distributed Web, rights for sex workers and equality. You can find my writing on <a href="https://medium.com/@thisismissem" rel="me" title="Read articles by Emelia on Medium">Medium</a>, when I publish it.</p>
      <p>You may also know me as the <a href="https://www.instagram.com/p/B6B4vVRIA22/" title="Photo of Emelia dressed as a princess at React Day Berlin 2020">tech princess</a>, or the <a href="https://medium.com/@thisismissem/tech-this-is-good-bye-19b88b2a760f" title="Read the article about Emelia leaving tech">trans woman who left tech</a> (I'm back).</p>
      <p>For the past {Today.getFullYear() - 2017} years, I have been bootstrapping my own company called <a href="https://unobvious.technology" title="Learn more about Unobvious Technology">Unobvious Technology UG</a>, dedicated to bringing <span title="(like those I've built in the tech industry)">modern, safe, and secure services</span> to sex workers and the adult industry.</p>

      <Button href="https://unobvious.technology" isPrimary title="Learn more about Unobvious Technology">Unobvious Technology</Button>
      <Button href="https://www.linkedin.com/in/thisismissem/" rel="me">Hire Emelia*</Button>

      <p><small>* If she is available</small></p>
    </section>
    <footer id="footer">
      <p>
        <a href="https://github.com/thisismissem" rel="me" title="Emelia on Github">Github</a> / <a href="https://hachyderm.io/@thisismissem" rel="me" title="Follow on Mastodon" style={{color: '#aaa'}}>Mastodon</a> / <a href="https://www.linkedin.com/in/thisismissem" rel="me" title="See my previous work on LinkedIn" style={{color: '#aaa'}}>LinkedIn</a> / <a href="#" title="Contact Emelia for non-recruitment matters" style={{color: '#aaa'}} onClick={(e) => {
          e.preventDefault();
          if(window.confirm('Is this about recruitment or hiring? (press ok)')) {
            window.alert("Please use the 'Hire Emelia' button instead");
          } else {
            window.location.href = 'mailto:emelia@brandedcode.com?subject=Hi'
          }
        }}>Email</a>
        <span id="updatedAt">Last Updated 11th November 2022</span>
      </p>
    </footer>
  </div>
)

export default IndexPage
