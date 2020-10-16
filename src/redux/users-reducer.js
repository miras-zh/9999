const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initialState = {
  usersData: [
    { id: 1, followed:false,fullName: "Miko", status: 'I am DEVELOPER', location:{city:'Astana',country:'KZ'} },
    { id: 2, followed:false,fullName: "Anel", status: 'Home', location:{city:'KOstanay',country:'KZ'} },
    { id: 3, followed:false,fullName: "Nargiz", status: 'Sadik', location:{city:'Almaty',country:'KZ'} },
    { id: 4, followed:false,fullName: "Rasul", status: 'Milk', location:{city:'Moskow',country:'RU'} },
    { id: 5, followed:false,fullName: "User JS", status: 'I am DEVELOPER', location:{city:'Astana',country:'KZ'} },
  ],
  newPostText: "",
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
     return {
        ...state,
        users: state.users.map((u) => {
          if(u.id === action.id){
            return {...u,folowed:true}
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return {...u, folowed:false}
          }
          return u;
        })
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
    userId:userId
  };
};

export const actionCreatorUnfollow = (userId) => {
  return {
    type: UNFOLLOW,userId:userId
  };
};

export const actionCreatorSetUser = (userId) => {
  return {
    type:SET_USERS, userId:userId
  }
}


export default usersReducer;
