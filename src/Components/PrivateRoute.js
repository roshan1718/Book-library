import { connect } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const { isUserLoggedIn} = props;
  if (isUserLoggedIn) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};
const mapStateToProps = (state) => {
  return {
    isUserLoggedIn: state.isUserLoggedIn,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
