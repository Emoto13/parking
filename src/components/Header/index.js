import React from "react";

import logo from "../../images/logo.png";
import { Navbar, Nav } from "react-bootstrap";
import styles from "./styles.module.css";
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className={styles.navigationHeader}
      >
        <Nav className="mr-auto">
          <Navbar.Brand as={Link} to="/home" className={styles.navTitle}>
            <img src={logo} alt="logo" className={styles.logo} />
            Parking
          </Navbar.Brand>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className={styles.navLinkGroup}
        >
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/home" className={styles.navLink}>
              <Icon name="home" size="big"/>
            </Nav.Link>
            <Nav.Link as={Link} to="/floors" className={styles.navLink}>
              <Icon name="car" size="big"/>
            </Nav.Link>
            <Nav.Link as={Link} to="/profile" className={styles.navLink}>
              <Icon name="user outline" size="big"/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
