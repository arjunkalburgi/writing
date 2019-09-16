/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

const Bio = () => {
  return (
    <footer className="bio-footer">
      <ul className="bio-footer-ul">
        <li className="bio-footer-li">
          <a title="about arjun kalburgi" className="bio-footer-titletext" href="https://www.arjunkalburgi.com">About </a>
        </li>
        <li className="bio-footer-li">
          <a title="writing about my projects, lessons, ideas + art."
            className="bio-footer-titletext" href="https://www.arjunkalburgi.com/writing"> Writing </a>
        </li>
      </ul>
      <ul className="bio-footer-ul">
        <li className="bio-footer-li">
          <a className="bio-footer-linktext" title="arjun kalburgi on twitter" href="http://twitter.com/winkerVSbecks">Twitter</a>
        </li>
        <li className="bio-footer-li">
          <a className="bio-footer-linktext" title="arjun kalburgi on github" href="http://github.com/winkerVSbecks">Github</a>
        </li>
        <li className="bio-footer-li">
          <a className="bio-footer-linktext" title="arjun kalburgi on CodePen" href="http://codepen.io/winkerVSbecks">CodePen</a>
        </li>
        <li className="bio-footer-li">
          <a className="bio-footer-linktext" title="email arjun kalburgi" href="mailto:askalburgi@gmail.com">Email</a>
        </li>
      </ul>
    </footer>
  )
}

export default Bio
