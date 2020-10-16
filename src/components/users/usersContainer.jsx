import React from "react";
import users from "./users";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }

}
let mapDispatchToProps = (dispatch) => {
  return {

  }
}

const usersContainer = connect(mapStateToProps, mapDispatchToProps)(users);

export default usersContainer;
