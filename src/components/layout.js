import React from "react"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    library.add(fab, faEnvelope);

    if (location.pathname === rootPath) {
      header = (
        <section className="hero section">
          <img className="hero_nameImg b-lazy" alt="Arjun Kalburgi to the right of a sharp leaf" src="https://cdn.jsdelivr.net/gh/askalburgi/styleguide@fcd922db42282219a7ba68996c404f41578c8416/Logo/Main/BlackFull.svg" title="Arjun Kalburgi" />
          <p className="hero_text--tag">learning, finding, designing, developing impact</p>
          <p className="hero_text--intro">
            My blog is for me to share my projects, lessons, art + ideas.
          </p>
          <ul className="hero_Links">
            <li><a className="hero_button" href="https://www.arjunkalburgi.com" title="Main">ABOUT</a></li>
            <li><a href="https://twitter.com/arjunkalburgi" className="hero_link-icon"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
            <li><a href="https://github.com/arjunkalburgi" className="hero_link-icon"><FontAwesomeIcon icon={['fab', 'github']} /></a></li>
            <li><a href="mailto:me@arjunkalburgi.com" className="hero_link-icon"><FontAwesomeIcon icon={['far', 'envelope']} /></a></li>
          </ul>
        </section>
      )
    } else {
      header = (
        <section className="hero section" style={{marginTop: '10vh'}}>
          <img className="hero_nameImg b-lazy" alt="Arjun Kalburgi to the right of a sharp leaf" src="https://cdn.jsdelivr.net/gh/askalburgi/styleguide@fcd922db42282219a7ba68996c404f41578c8416/Logo/Main/BlackFull.svg" title="Arjun Kalburgi" />
          <p className="hero_text--tag">learning, finding, designing, developing impact</p>
        </section>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: '100%',
          padding: `0 ${rhythm(3 / 4)} ${rhythm(1.5)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
      </div>
    )
  }
}

export default Layout
