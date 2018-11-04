import React from 'react';
import { Link } from 'gatsby';
import Nav from './nav';

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#4477a3',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1260,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <Nav />
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
);

export default Header;
