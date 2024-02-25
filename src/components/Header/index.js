import { Link, withRouter, useHistory } from "react-router-dom";

import Cookies from "js-cookie";

import logo from "../../logo/comrade.png";

import { FiSearch } from "react-icons/fi";
import { BsCartCheckFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

import "./index.css";

const Header = (props) => {
  const { inputVal, changeInputValue } = props;
  const changeInput = (event) => {
    changeInputValue(event.target.value);
  };

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
      <div className="search-card">
        <FiSearch size={20} />
        <input
          value={inputVal}
          onChange={changeInput}
          type="search"
          placeholder="Search book here"
        />
      </div>
      <div className="icons-card">
        <CgProfile color="#5f5858" size={30} />
        <BsCartCheckFill color="#5f5858" size={20} />
        <button onClick={onClickLogout} className="logout-btn" type="button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default withRouter(Header);
