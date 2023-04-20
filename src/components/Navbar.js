import React from 'react'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-bg-dark" href="/">{props.NavbarTitle}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-bg-dark">
        <li className="nav-item">
          <a className="nav-link text-bg-dark active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-bg-dark" href="/">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-bg-dark" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {props.DropdownMenu}
          </a>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><a className="dropdown-item" href="/">{props.DropdownMenu1}</a></li>
            <li><a className="dropdown-item" href="/">{props.DropdownMenu2}</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">{props.DropdownMenu3}</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> 
  )
}
Navbar.defaultProps = {
    NavbarTitle: "Anurag Srivastava",
    DropdownMenu: "Portfolio",
    DropdownMenu1: "Prototype",
    DropdownMenu2: "Case Studies",
    DropdownMenu3: "Graphic Design",
}