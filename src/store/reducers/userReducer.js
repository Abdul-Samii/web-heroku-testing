import { types } from "../actionTypes";

const initialState = {
    isLoading: false,
    users: [],
    msg:''
  };
  
  export const  userReducer = (state = initialState, {type,payload}) => {
    switch (type) {
      case types.GET_USERS_LIST_START:
        return { ...state, isLoading: true }
      case types.GET_USERS_LIST_SUCCESS:
        return { ...state, isLoading: false , users:payload}
      case types.GET_USERS_LIST_FAILED:
        return { ...state, isLoading: false }

        case types.UPDATE_USER_DETAILS_START:
          return { ...state, isLoading: true }
        case types.UPDATE_USER_DETAILS_SUCCESS:
          return { ...state, isLoading: false , msg:payload}
        case types.UPDATE_USER_DETAILS_FAILED:
          return { ...state, isLoading: false }
      default:
        return state;
        
    }
    
  };