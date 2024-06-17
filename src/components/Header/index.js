import { useState } from "react";
import { Link, withRouter } from "react-router-dom";

import Cookies from "js-cookie";

import logo from "../../images/comrade.png";

// import { BsCartCheckFill } from "react-icons/bs";
// import { CgProfile } from "react-icons/cg";

import "./index.css";

const Header = (props) => {
  const [showPop, setShowPop] = useState(false);

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
      </div>
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
