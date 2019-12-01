import React from "react"
import { Link } from "gatsby"
import headerStyles from "../styles/header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <nav>
        <ul className={headerStyles.list}>
          <li>
            <Link
              to="/"
              className={headerStyles.item}
              activeClassName={headerStyles.activeItem}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className={headerStyles.item}
              activeClassName={headerStyles.activeItem}
            >
              {" "}
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              className={headerStyles.item}
              activeClassName={headerStyles.activeItem}
            >
              {" "}
              Menu
            </Link>
          </li>
          <Link
            to="/contact"
            className={headerStyles.item}
            activeClassName={headerStyles.activeItem}
          >
            {" "}
            Contact
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header
