import { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";

import Cookies from "js-cookie";

import logo from "../../images/comrade.png";

import { FaHome, FaBook, FaCartPlus, FaUser } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";

import "./index.css";

const Header = (props) => {
  const [showPop, setShowPop] = useState(false);
  const [showMobileNav, setMobileNav] = useState(false);

  const onClickLogout = () => {
    Cookies.remove("jwt_token");
    const { history } = props;
    history.replace("/login");
  };

  const onClickLogoutBtn = () => {
    setShowPop((prev) => !prev);
  };

  const { navActive } = props;

  return (
    <div className="header">
      <div className="header-main">
        <Link to="/" className="nav-link">
          <img className="header-logo" src={logo} alt="website-logo" />
        </Link>
        <ul className="nav-card">
          <Link to="/" className="nav-link">
            <li className={`nav ${navActive === "Home" ? "active" : ""}`}>
              Home
            </li>
          </Link>
          <Link to="/books" className="nav-link">
            <li className={`nav ${navActive === "Books" ? "active" : ""}`}>
              Books
            </li>
          </Link>
          <Link to="/cart" className="nav-link">
            <li className={`nav ${navActive === "Cart" ? "active" : ""}`}>
              Cart
            </li>
          </Link>
          <Link to="/profile" className="nav-link">
            <li className={`nav ${navActive === "Profile" ? "active" : ""}`}>
              Profile
            </li>
          </Link>
        </ul>
        <button className="logout-btn" type="button" onClick={onClickLogoutBtn}>
          Logout
        </button>
        {showMobileNav ? (
          <MdClose
            className="mobile-menu-icon"
            onClick={() => setMobileNav((prev) => !prev)}
            size={30}
          />
        ) : (
          <MdMenu
            className="mobile-menu-icon"
            onClick={() => setMobileNav((prev) => !prev)}
            size={30}
          />
        )}
      </div>
      {showMobileNav && (
        <div className="mobile-navbar">
          <ul className="mobile-nav-card">
            <Link to="/" className="nav-link">
              <li className={`nav ${navActive === "Home" ? "active" : ""}`}>
                <FaHome size={20} />
              </li>
            </Link>
            <Link to="/books" className="nav-link">
              <li className={`nav ${navActive === "Books" ? "active" : ""}`}>
                <FaBook size={20} />
              </li>
            </Link>
            <Link to="/cart" className="nav-link">
              <li className={`nav ${navActive === "Cart" ? "active" : ""}`}>
                <FaCartPlus size={20} />
              </li>
            </Link>
            <Link to="/profile" className="nav-link">
              <li className={`nav ${navActive === "Profile" ? "active" : ""}`}>
                <FaUser size={20} />
              </li>
            </Link>
            <li onClick={onClickLogoutBtn}>
              <LuLogOut size={20} />
            </li>
          </ul>
        </div>
      )}
      {showPop && (
        <div className="popup-container">
          <div className="popup">
            <h1>Do You Want To Logout</h1>
            <div className="pop-btns">
              <button onClick={onClickLogout} type="button">
                Yes
              </button>
              <button onClick={onClickLogoutBtn} type="button">
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(Header);
