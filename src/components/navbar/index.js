import { Link } from "gatsby"
import React from "react"

import styles from './navbar.module.css';

const Navbar = () => (
  <div className={styles.navbar}>
    <Link to="/" className={styles.link}>About</Link>
    <Link to="/" className={styles.link}>Awards</Link>
    <Link to="/" className={styles.link}>Team</Link>
    <Link to="/" className={styles.link}>Projects</Link>
    <Link to="/" className={styles.link}>Publications</Link>
    <Link to="/" className={styles.link}>News</Link>
    <Link to="/" className={styles.link}>Theses</Link>
    <Link to="/" className={styles.link}>Teaching</Link>
    <Link to="/" className={styles.link}>Partners</Link>
    <Link to="/" className={styles.link}>Contact</Link>
  </div>
)
export default Navbar
