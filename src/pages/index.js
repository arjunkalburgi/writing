import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location}>
        <SEO title="Arjun Kalburgi" />
        <div className="section">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
              <article key={node.fields.slug} style={{padding: '1em', margin: '0.5em'}}>
                <small>{node.frontmatter.date}</small>
                <h3
                  style={{
                    marginTop: rhythm(1 / 4),
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link className="blog-link" to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
            </article>
          )
        })}
        </div>
        < Bio />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { draft: { eq: false } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
