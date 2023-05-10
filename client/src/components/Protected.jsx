import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
export const Protected = ({ children, isLoggedIn }) => {
  const navigate = useNavigate();
  return (
    <Fragment>{isLoggedIn ? children : navigate("/create-account")}</Fragment>
  );
};

Protected.propTypes = {
  children: PropTypes.node.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
