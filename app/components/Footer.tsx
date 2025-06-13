import React from 'react'
import BrandTitle from './BrandTitle'
import BrandDiscription from './BrandDiscription'
import NavList from './NavList'
import SocialLinks from './SocialLinks'
import Copyright from './Copyright'

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-about">
            <BrandTitle />
            <BrandDiscription />
            <SocialLinks />
          </div>
          <div className="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <NavList />
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  )
}
