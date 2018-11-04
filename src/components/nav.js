import React from 'react';
import { Link } from 'gatsby';

import 'bootstrap/dist/css/bootstrap.min.css';

const ListLink = props => (
  <li
    style={{
      display: `inline-block`,
      marginRight: `1rem`,
      marginTop: '12px',
    }}
  >
    <Link
      to={props.to}
      style={{
        fontSize: '1.2rem',
        color: 'white',
        textDecoration: 'none',
      }}
    >
      {props.children}
    </Link>
  </li>
);

const Nav = () => (
  <ul
    style={{
      listStyle: `none`,
      float: `right`,
    }}
  >
    <ListLink to="/">Home</ListLink>
    <ListLink to="/about/">About</ListLink>
    <ListLink to="/formation/">Formation</ListLink>
    <ListLink to="/contact/">Contact</ListLink>
  </ul>
);

export default Nav;
