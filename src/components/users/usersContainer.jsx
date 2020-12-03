import React from "react";
import Users from "./users";
import {
  actionCreatorFollow,
  actionCreatorUnfollow,
  actionCreatorSetUser
} from "./../../redux/users-reducer.js";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }

}
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(actionCreatorFollow(userId))
    },
    unfollow: (userId) => {
      dispatch(actionCreatorUnfollow(userId))
    },
    setUsers: (users) => {
      dispatch(actionCreatorSetUser(users))
    }
  }
}

const usersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default usersContainer;
