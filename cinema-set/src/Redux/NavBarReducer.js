const defaultState = { 
    cinemasList: null
}

const NavBarReducer = (state = defaultState, action) => {
    switch(action.type){
        
        case "GET-CINEMAS":
            return({
                ...state,
                cinemasList: action.cinemasList
            })
        
        default:
            return state
             


    }
}

export default NavBarReducer;

