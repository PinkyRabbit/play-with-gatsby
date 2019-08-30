import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Navbar from "../navbar"
import styles from './header.module.css';

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.headerWrap}>
      <img
        className={styles.image} src="https://dice-research.org/fileadmin/template/img/DICE.svg"
        alt="hello world" />
      <h1 className={styles.h1}>
        <Link
          to="/"
          className={styles.link}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <Navbar />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
