import { types } from "../actionTypes";

const initialState={
    isLoading:false,
    url:''
}


export const ImageReducer= (state=initialState, {type, payload})=>{
    switch(type)
    {
        case types.UPLOAD_IMAGE_START:
            return  {...state, isLoading:true}
        case types.UPLOAD_IMAGE_SUCCESS:
           return {...state, isLoading:false, url:payload}
        case types.UPLOAD_IMAGE_FAILED:
            return {...state, isLoading:false}

        default:
            return state

    }
}