import React from "react";
import "./Nav.css";
export default function Nav() {
  const [burgerClass, setBurgerClass] = React.useState("bar unclicked");
  const [menuClass, setMenuClass] = React.useState("menu hidden");
  const [isOpened, setOpen] = React.useState(false);
  function updateMenu() {
    if (!isOpened) {
      setBurgerClass("bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("bar unclicked");
      setMenuClass("menu hidden");
    }
    setOpen(!isOpened);
  }
  return (
    <div className="nav">
      <nav>
        <img src="../../public/logo.svg" alt="easybank logo" />
        <button className="hamburger-nav" onClick={updateMenu}>
          <span className={burgerClass}></span>
          <span className={burgerClass}></span>
          <span className={burgerClass}></span>
        </button>
      </nav>

      <ul className={menuClass}>
        <li className="navList">
          <a href="#" className="navLink">
            Home
          </a>
        </li>
        <li className="navList">
          <a href="#" className="navLink">
            About
          </a>
        </li>
        <li className="navList">
          <a href="#" className="navLink">
            Contact
          </a>
        </li>
        <li className="navList">
          <a href="#" className="navLink">
            Blog
          </a>
        </li>
        <li className="navList">
          <a href="#" className="navLink">
            Careers
          </a>
        </li>
      </ul>
      <button className="requestInvite navInviteButton">Request Invite</button>
    </div>
  );
}
