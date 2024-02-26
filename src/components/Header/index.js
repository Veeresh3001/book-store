import { Link, withRouter, useHistory } from "react-router-dom";

import Cookies from "js-cookie";

import logo from "../../images/comrade.png";

import { BsCartCheckFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

import "./index.css";

const Header = () => {
  const history = useHistory();

  const onClickLogout = () => {
    Cookies.remove("jwt_token");
    // const { history } = props;
    history.replace("/login");
  };

  return (
    <div className="header-main">
      <Link to="/">
        <img className="header-logo" src={logo} alt="website-logo" />
      </Link>
      <div className="icons-card">
        <CgProfile className="icons" color="#5f5858" size={30} />
        <BsCartCheckFill className="icons" color="#5f5858" size={20} />
        <button onClick={onClickLogout} className="logout-btn" type="button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default withRouter(Header);
