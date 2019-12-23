import React from 'react'
import { Link } from 'gatsby'
import { SiteURL } from './Config';
import logo from '../img/logo.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav className="st-nav navbar main-nav navigation fixed-top dark-link no-dropdown-transition navbar-sticky" role="navigation" aria-label="main-navigation">
        <div className="container px-0">
          <ul className="st-nav-menu nav navbar-nav">
            <li className="st-nav-section nav-item">
              <a href={SiteURL} className="navbar-brand">
                <img src={logo} alt="Grootan Technologies" className="logo logo-sticky" />
              </a>
            </li>
            <li className={`st-nav-section st-nav-primary nav-item navbar-menu ${this.state.navBarActiveClass}`}>
              <a className="st-root-link nav-link" href={SiteURL} target="_blank">Home</a>
              <a className="st-root-link nav-link" href={SiteURL + "#built-tech"} target="_blank">Services</a>
              <a className="st-root-link nav-link" href={SiteURL + "#case-studies"} target="_blank">Case Studies</a>
              <a className="st-root-link nav-link" href={SiteURL + "opensource"} target="_blank">Open Source</a>
              <Link className="st-root-link nav-link" to="/blog">Blog</Link>
              <a className="st-root-link nav-link" href={SiteURL + "team"} target="_blank">Team</a>
              <a className="st-root-link nav-link" href={SiteURL + "careers"} target="_blank">Careers</a>
              <a className="st-root-link nav-link" href={SiteURL + "contactus"} target="_blank">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
