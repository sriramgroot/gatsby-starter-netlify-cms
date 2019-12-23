import React from 'react'
import Layout from '../../components/Layout'
import FeaturedBlog from '../../components/FeaturedBlog'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="full-width-image-container featuredblog margin-top-0" style={{ backgroundImage: `url('/img/featured.jpg')`}}>
          <FeaturedBlog />
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
