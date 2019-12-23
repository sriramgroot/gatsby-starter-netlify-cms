import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { BlogAuthors } from './authors';
require("prismjs/themes/prism-tomorrow.css")

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  authors,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section singlepost">
      {helmet || ''}
      <div className="container content">
        <div className="row justify-content-between">
          <div className="col-lg-2 leftsidebar">
            <ul>
              <li className="single-category">{category}</li>
              <li className="single-date">{date}</li>
              <li className="single-tags">
                {tags && tags.length ? (
                  <div>
                    <h4>Tags</h4>
                    <ul className="taglist">
                      {tags.map(tag => (
                        <li key={tag + `tag`}>
                          <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </li>
            </ul>
          </div>
          <div className="col-lg-8">
            <h1 className="single-title is-size-2 has-text-weight-bold is-bold-light">{title}</h1>
            <PostContent className="single-description" content={content} />
          </div>
          <div className="col-lg-2 rightsidebar">
            <ul className="single-author">
              <li><img src={BlogAuthors[author].profileImage} alt={BlogAuthors[author].name}/></li>
              <li>
                <h5>{BlogAuthors[author].name}</h5>
                <p>{BlogAuthors[author].designation}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        author={post.frontmatter.author}
        category={post.frontmatter.category}
        date={post.frontmatter.date}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        author
        description
        tags
      }
    }
  }
`