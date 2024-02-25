import { Redirect, Route } from "react-router-dom";

import Cookies from "js-cookie";

const CheckUser = (props) => {
  const jwt = Cookies.get("jwt_token");
  if (jwt === undefined) {
    return <Redirect to="/login" />;
  }
  return <Route {...props} />;
};

export default CheckUser;
