import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <section class="hero section">
          <img class="hero_nameImg b-lazy" src="https://cdn.jsdelivr.net/gh/askalburgi/styleguide@fcd922db42282219a7ba68996c404f41578c8416/Logo/Main/BlackFull.svg" title="Arjun Kalburgi" />
          <p class="hero_text--tag">learning, finding, designing, developing impact</p>
          <p class="hero_text--intro">
            My blog is for me to share my projects, lessons, art + ideas.
          </p>
          <ul class="hero_Links">
            <li><a class="hero_button" href="https://www.arjunkalburgi.com" title="Main">ABOUT</a></li>
            <li><a href="https://twitter.com/arjunkalburgi"><span class="fab fa-twitter"></span></a></li>
            <li><a href="https://github.com/arjunkalburgi"><span class="fab fa-github"></span></a></li>
            <li><a href="mailto:me@arjunkalburgi.com"><span class="far fa-envelope"></span></a></li>
          </ul>
        </section>
      )
    } else {
      header = (
        <section class="hero section">
          <img class="hero_nameImg b-lazy" src="https://cdn.jsdelivr.net/gh/askalburgi/styleguide@fcd922db42282219a7ba68996c404f41578c8416/Logo/Main/BlackFull.svg" title="Arjun Kalburgi" />
          <p class="hero_text--tag">learning, finding, designing, developing impact</p>
        </section>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
