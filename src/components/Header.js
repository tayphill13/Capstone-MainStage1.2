import React from 'react';
import { Link } from 'react-router-dom';
import headerStyles from './Header.module.scss';
import styled from 'styled-components';
import '../styles/index.scss';

const MainStageHeader = styled.h1`
  font-size: 60px;
  text-align: center;
  color: lime;
`;

function Header() {
  return (
    <React.Fragment>
      <MainStageHeader className={headerStyles.header}>
        Main Stage
      </MainStageHeader>
      <nav className={headerStyles.navBar}>
      <ul>
        <li className={headerStyles.navItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={headerStyles.navItem}>
          <Link to="/signin">Sign In</Link>
        </li>
        <li className={headerStyles.navItem}>
          <Link to="/messagelist">MessageBoard</Link>
        </li>
        <li className={headerStyles.navItem}>
          <Link to="/music">MusicPlaylist</Link>
        </li>
        <li className={headerStyles.navItem}>
          <Link to="/about">About</Link>
        </li>
        <li className={headerStyles.navItem}>
          <Link to="/contact">ContactMe</Link>
        </li>
      </ul>
      </nav>
    </React.Fragment>
  );
}

export default Header;
