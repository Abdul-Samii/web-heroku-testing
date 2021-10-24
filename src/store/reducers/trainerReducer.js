import { types } from "../actionTypes";

const initialState = {
    isLoading: false,
    trainers: [],
  };
  
  export const  trainerReducer = (state = initialState, {type,payload}) => {
    switch (type) {
      case types.GET_TRAINERS_START:
        return { ...state, isLoading: true }
      case types.GET_TRAINERS_SUCCESS:
        return { ...state, isLoading: false , trainers:payload}
      case types.GET_TRAINERS_FAILED:
        return { ...state, isLoading: false }
      
        case types.UPDATE_TRAINER_STATUS_START:
          return { ...state, isLoading: true }
        case types.UPDATE_TRAINER_STATUS_SUCCESS:
          return { ...state, isLoading: false }
        case types.UPDATE_USER_DETAILS_FAILED:
          return { ...state, isLoading: false }
        default:
            return {...state,isLoading:false}
    }
  }