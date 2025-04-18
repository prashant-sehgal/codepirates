import Link from 'next/link'
import React from 'react'
import User from './User'

export default function Header() {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="/" className="logo d-flex align-items-center me-auto">
          <img src="assets/img/logo.png" alt="" />
          <h1 className="sitename">Code Pirates</h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="/#hero" className="active">
                Home
                <br />
              </a>
            </li>
            <li>
              <a href="/#about">About</a>
            </li>

            <li>
              <a href="/#videos">Videos</a>
            </li>

            <li>
              <a href="/#contact">Contact Us</a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list" />
        </nav>
        <User />
      </div>
    </header>
  )
}
