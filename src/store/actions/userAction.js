import { types } from '../actionTypes'
import { httpRequest } from '../../config'
import { setToast } from '.'


export const userList = ()=> async dispatch=>{
    try {

        dispatch({type:types.GET_USERS_LIST_START})
        const token =  window.localStorage.getItem('token')
        //Temporarily using hard coded token
        const Token = 'Bearer '+token 
        const response = await httpRequest.get('users', { headers: {"Authorization" : Token} })
        const result = response.data
        console.log("response")
        if(result){
            dispatch({type:types.GET_USERS_LIST_SUCCESS, payload:result.users})
        }
        
        
    } catch (error) {
        console.log(error)
        dispatch({type:types.GET_USERS_LIST_FAILED})
    }
}