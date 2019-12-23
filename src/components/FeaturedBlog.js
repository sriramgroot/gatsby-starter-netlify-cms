import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import { BlogAuthors } from '../templates/authors';

class FeaturedBlog extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <div className="row">
        {posts &&
          posts.map(({node: post}) => (
            post.frontmatter.featuredpost ? (<div className={`col-lg-12 featuredpost-${post.id}`} key={post.id}>
              <article className="blog-list-item row tile is-child justify-content-center">
                <div className="col-lg-9">
                  <h5 className="postType">Featured Post <span className="dot"></span> {post.frontmatter.category} <span className="dot"></span> {BlogAuthors[post.frontmatter.author].name}</h5>
                  <h3 className="title has-text-primary"><Link to={post.fields.slug}>{post.frontmatter.title}</Link></h3>
                  <p className="post-description">{post.frontmatter.description}</p>
                  <div className="row post-meta">
                    <Link className="post-link text-left col-lg-2" to={post.fields.slug}>Keep Reading ></Link>
                  </div>
                </div>
              </article>
            </div>) : ""
          ))}
      </div>
    )
  }
}

FeaturedBlog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query FeaturedBlogQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                author
                templateKey
                description
                category
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
    render={(data, count) => <FeaturedBlog data={data} count={count} />}
  />
)