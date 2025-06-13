import React from 'react'
import NavList from './NavList'
import ToggleSearch from './ToggleSearch'
import BrandTitle from './BrandTitle'

export default function Header() {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <BrandTitle />

        <nav id="navmenu" className="navmenu">
          <NavList />
          <i className="mobile-nav-toggle d-xl-none bi bi-list" />
        </nav>
        <ToggleSearch />
      </div>
    </header>
  )
}
