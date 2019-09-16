/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

const Bio = () => {
  return (
    <footer class="bio-footer">
      <ul class="bio-footer-ul">
        <li class="bio-footer-li">
          <a title="about arjun kalburgi" class="bio-footer-titletext" href="https://www.arjunkalburgi.com">About </a>
        </li>
        <li class="bio-footer-li">
          <a title="writing about my projects, lessons, ideas + art."
            class="bio-footer-titletext" href="https://www.arjunkalburgi.com/writing"> Writing </a>
        </li>
      </ul>
      <ul class="bio-footer-ul">
        <li class="bio-footer-li">
          <a class="bio-footer-linktext" title="arjun kalburgi on twitter" href="http://twitter.com/winkerVSbecks">Twitter</a>
        </li>
        <li class="bio-footer-li">
          <a class="bio-footer-linktext" title="arjun kalburgi on github" href="http://github.com/winkerVSbecks">Github</a>
        </li>
        <li class="bio-footer-li">
          <a class="bio-footer-linktext" title="arjun kalburgi on CodePen" href="http://codepen.io/winkerVSbecks">CodePen</a>
        </li>
        <li class="bio-footer-li">
          <a class="bio-footer-linktext" title="email arjun kalburgi" href="mailto:askalburgi@gmail.com">Email</a>
        </li>
      </ul>
    </footer>
  )
}

export default Bio
