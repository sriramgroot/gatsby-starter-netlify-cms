import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { BlogAuthors } from '../templates/authors';

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <div className="row">
        {posts &&
          posts.map(({ node: post }) => (
            !post.frontmatter.featuredpost ? (<div className={`col-lg-4 post-${post.id}`} key={post.id}>
              <article
                className={`blog-list-item row tile is-child ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <div className="col-lg-12 blogroll-image px-0">
                  {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                </div>
                <div className="col-lg-12">
                  <ul>
                    <li className="category"><strong>Category: </strong>{post.frontmatter.category}</li>
                    <li>
                      <img src={BlogAuthors[post.frontmatter.author].profileImage} alt={BlogAuthors[post.frontmatter.author].name} />
                    </li>
                  </ul>
                  <h3 className="title has-text-primary"><Link to={post.fields.slug}>{post.frontmatter.title}</Link></h3>
                  <p className="post-description">{post.frontmatter.description}</p>
                  <div className="row post-meta">
                    <span className="post-date col-lg-6">
                      {post.frontmatter.date}
                    </span>
                    <Link className="post-link col-lg-6" to={post.fields.slug}>Keep Reading ></Link>
                  </div>
                </div>
              </article>
            </div>) : ""
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 100)
              id
              fields {
                slug
              }
              frontmatter {
                title
                author
                templateKey
                category
                description
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 350, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
