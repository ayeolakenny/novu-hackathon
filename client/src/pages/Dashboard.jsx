import { Fragment } from "react";
import PropTypes from "prop-types";

function Dashboard({ email }) {
  return (
    <Fragment>
      <h1 className="h-screen">hello {email}</h1>
    </Fragment>
  );
}

Dashboard.propTypes = {
  email: PropTypes.string,
};

export default Dashboard;
