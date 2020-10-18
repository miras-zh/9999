const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS="SET_USERS"

let initialState = {
  users: [
    { id: 1, photoUrl:'./../components/users/img/ava.jpg',followed:false,fullName: "Miko", status: 'I am DEVELOPER', location:{city:'Astana',country:'KZ'} },
    { id: 2, photoUrl:'./../components/users/img/ava.jpg',followed:false,fullName: "Anel", status: 'Home', location:{city:'KOstanay',country:'KZ'} },
    { id: 3, photoUrl:'./../components/users/img/ava.jpg',followed:false,fullName: "Nargiz", status: 'Sadik', location:{city:'Almaty',country:'KZ'} },
    { id: 4, photoUrl:'./../components/users/img/ava.jpg',followed:false,fullName: "Rasul", status: 'Milk', location:{city:'Moskow',country:'RU'} },
    { id: 5, photoUrl:'./../components/users/img/ava.jpg',followed:false,fullName: "User JS", status: 'I am DEVELOPER', location:{city:'Astana',country:'KZ'} },
  ],
  newPostText: "",
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:{
     return {
        ...state,
        users: state.users.map((u) => {
          if(u.id === action.userId){
            return {...u,folowed:true}
          }
          return u;
        })
      }
      }
    case UNFOLLOW:{
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return {...u, folowed:false}
          }
          return u;
        })
      }
    }
    case SET_USERS: {
      return {...state, users:[...state.users, ...action.users]}
    }
    default:
      return state;
  }
};

export const actionCreatorFollow = (userId) => {
  return {
    type: FOLLOW,
    userId
  };
};

export const actionCreatorUnfollow = (userId) => {
  return {
    type: UNFOLLOW,userId
  };
};

export const actionCreatorSetUser = (userId) => {
  return {
    type:SET_USERS, userId
  }
}


export default usersReducer;
