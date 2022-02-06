const defaultState = { 
    allUsers: null,
    userLogin: "Login In",
    isLogin: false,
    isAdmin: false,
  
  }
  
  export const UserReducer = (state = defaultState, action) => {
  
    switch (action.type) {

        case "GET-USERS":
            return({
                ...state,
                allUsers: action.users
            })
        
        case "SET-LOGIN":
          return({
            ...state,
            isLogin: true,
            userLogin: action.name
          })

        case "LOGIN-OUT":
          return({
            ...state,
            isLogin: false,
            userLogin: "Login In"
          })

  
        case "LOGIN-IN":
            return({...state, userLogin: action.login})
  
  
      default:
        return state;
    }
  
  }
  