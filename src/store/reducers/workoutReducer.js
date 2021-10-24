import {types} from '../actionTypes'
const initialState = {
    isLoading: false,
    workout:[]
  };
  
  export const  workoutReducer = (state = initialState, {type,payload}) => {
    switch (type) {
      case types.GET_WORKOUT_START:
        return { ...state}
      case types.GET_WORKOUT_SUCCESS:
          return { ...state, workout:payload}
      case types.GET_WORKOUT_FAILED:
          return { ...state}

      case types.UPDATE_WORKOUT_START:
            return { ...state, isLoading: true }
      case types.UPDATE_WORKOUT_SUCCESS:
              return { ...state, isLoading: false }
      case types.UPDATE_WORKOUT_FAILED:
              return { ...state, isLoading: false }


      case types.DELETE_WORKOUT_START:
            return { ...state, isLoading: true }
      case types.DELETE_WORKOUT_SUCCESS:
              return { ...state, isLoading: false }
      case types.DELETE_WORKOUT_FAILED:
              return { ...state, isLoading: false }

        // case types.ADD_WORKOUT_START:
        //         return {...state,isLoading:true}
        //         console.log('Trueeeeee')
        // case types.ADD_WORKOUT_SUCCESS:
        //         return {...state,isLoading:false}
        //         console.log('Falseeeeeeee 1')
        // case types.ADD_WORKOUT_FAILED:
        //         return {...state,isLoading:false}
        //         console.log('Falseeeeeeee 2')
        case types.ADD_WORKOUT_START:
            return  {...state, isLoading:true}
        case types.ADD_WORKOUT_SUCCESS:
           return {...state, isLoading:false, url:payload}
        case types.ADD_WORKOUT_FAILED:
            return {...state, isLoading:false}

       


    default:
             return state
        
        
    }
        }