import { types } from "../actionTypes";

const initialState = {
    isLoading: false,
    pkgType: [],
    pkgs:[]
  };
  
  export const  packageReducer = (state = initialState, {type,payload}) => {
    switch (type) {
      case types.GET_PKGTYPE_LIST_START:
        return { ...state, isLoading: true }
      case types.GET_PKGTYPE_LIST_SUCCESS:
          return { ...state, isLoading: false , pkgType:payload}
      case types.GET_PKGTYPE_LIST_FAILED:
          return { ...state, isLoading: false }

      case types.GET_PACKAGES_START:
        return { ...state, isLoading: true }
      case types.GET_PACKAGES_SUCCESS:
          return { ...state, isLoading: false , pkgs:payload}
      case types.GET_PACKAGES_FAILED:
          return { ...state, isLoading: false }


      case types.ADD_PKG_TYPE_START:
        return {...state,isLoading:true}
      case types.ADD_PKG_TYPE_SUCCESS:
        return {...state,isLoading:false}
      case types.ADD_PKG_TYPE_FAILED:
        return {...state,isLoading:false}
      default:
        return state;
        
    }
    
  };