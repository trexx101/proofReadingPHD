import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { v4 } from 'uuid'

import banner from '../img/prphd_banner_small.jpg'


export default class IndexPage extends React.Component {
  render() {

    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      
        <div className="container">

        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div
                className="full-width-image-container margin-top-0"
                style={{ backgroundImage: `url(${banner})` }}
              >
              </div>
            </div>
          </div>
        </div>

          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">Testimonials</h1>
          </div>
          <article key={v4()} className="message">
            <div className="message-body">
              Big Thanks to Proofreading by a UK PhD. I send my measurement items for proofread and editing service. My supervisor is VERY satisfied with the quality work. It is noticeable the questionnaire is easy to read and understand after they done the improvement. Dr Thava and and the team members also very patient to answer my inquiry and send back the work to me in timeliness manner. Thus, i would strongly recommended others to use their service. It is top tier service :) Great Job
              <br />
              <cite> – Lom Hui Shan</cite>
            </div>
          </article>
          {/* comment out posts, perform query to get content of testimonials dynamicly from services markdown. rather than staticly as in above
          {posts
            .map(({ node: post }) => (
              <div
                className="content"
                style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                key={post.id}
              >
                <p>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <small>{post.frontmatter.date}</small>
                </p>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button is-small" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </div>
            ))}
            */}
        </div>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
