import React from 'react';
import Link from 'next/link';


const Header = () => {
  return (
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <Link className="navbar-brand" href="/">
            <span>Finexo</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=""></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/service">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/why">
                  Why Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/team">
                  Team
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/login">
                  <i className="fa fa-user" aria-hidden="true"></i> Login
                </Link>
              </li>
              <form className="form-inline">
                <button className="btn my-2 my-sm-0 nav_search-btn" type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
