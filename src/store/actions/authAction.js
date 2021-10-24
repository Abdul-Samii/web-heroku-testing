import { types } from '../actionTypes'
import { httpRequest } from '../../config'
import { setToast } from '.'
import qs from 'qs'


export const login = (data) => async dispatch => {
    try {

        dispatch({type:types.LOGIN_START})
        let queryData= qs.stringify(data)
        const response = await httpRequest.post('loginAdmin', queryData)
        const result = response.data
        console.log(result)
        if(result.message === 'login Successfully'){
          
            dispatch({type:types.LOGIN_SUCCESS, payload:result})
          console.log(result)
            let token = result.token
            let id = String(result.profile.id)
          
             window.localStorage.setItem('token', token)
             window.localStorage.setItem('userid', id)
            let tokk = await window.localStorage.getItem('token')
            let userid= await window.localStorage.getItem('userid')

            console.log("userid ========================",tokk)
            dispatch(setToast('success', result.message))
			
            
        }
        else if(result.message){
            dispatch({type:types.LOGIN_FAILED})
            dispatch(setToast('error',result.message))
			
        }
        
        
    } catch (error) {
        console.log(error)
        dispatch({type:types.LOGIN_FAILED})
    }
   
}