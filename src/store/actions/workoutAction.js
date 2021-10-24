import { types } from "../actionTypes";
import { httpRequest } from "../../config";
import qs from 'qs'


export const workoutList = ()=> async dispatch=>{
    try {

        dispatch({type:types.GET_WORKOUT_START})
        const token =  window.localStorage.getItem('token')
        //Temporarily using hard coded token
        const Token = 'Bearer '+token 
        const response = await httpRequest.get('workoutList', { headers: {"Authorization" : Token} })
        const result = response.data
        // console.log(result)
        if(result){
            dispatch({type:types.GET_WORKOUT_SUCCESS, payload:result.workouts})
        }
        
        
    } catch (error) {
        console.log(error)
        dispatch({type:types.GET_WORKOUT_FAILED})
    }
}


export const AddWorkout = (data)=> async dispatch=>{
    try {
        
        dispatch({type:types.ADD_WORKOUT_START})
        const token =  window.localStorage.getItem('token')
        //Temporarily using hard coded token
        const Token = 'Bearer '+token 
        const querydata = qs.stringify(data)
        const response = await httpRequest.post('createWorkout', querydata,{ headers: {"Authorization" : Token} })
        const result = response.data
        console.log(response)
        if(result.status){
            dispatch({type:types.ADD_WORKOUT_SUCCESS, payload:result.packagetype})
        }
        
        
    } catch (error) {
        console.log(error)
        dispatch({type:types.ADD_WORKOUT_FAILED})
    }
}

export const UpdateWorkout = (data)=> async dispatch=>{
    try {
        
        dispatch({type:types.UPDATE_PKG_TYPE_START})
        const token =  window.localStorage.getItem('token')
        //Temporarily using hard coded token
        const Token = 'Bearer '+token 
        const querydata = qs.stringify(data)
        console.log('DDD',querydata)

        const response = await httpRequest.post('updateWorkout', querydata,{ headers: {"Authorization" : Token} })
        const result = response.data
        console.log(result)
        if(result){
            dispatch({type:types.UPDATE_PKG_TYPE_SUCCESS, payload:result.packagetype})
        }
        
        
    } catch (error) {
        console.log(error)
        dispatch({type:types.UPDATE_PKG_TYPE_FAILED})
    }
}


export const DeleteWorkout = (data)=> async dispatch=>{
    try {
        
        dispatch({type:types.DELETE_PKG_TYPE_START})
        const token =  window.localStorage.getItem('token')
        //Temporarily using hard coded token
        const Token = 'Bearer '+token 
        const querydata = qs.stringify(data)
        console.log('DDD',querydata)

        const response = await httpRequest.post('deleteWorkout', querydata,{ headers: {"Authorization" : Token} })
        const result = response.data
        console.log(result)
        if(result){
            dispatch({type:types.DELETE_PKG_TYPE_SUCCESS, payload:result.packagetype})
        }
        
        
    } catch (error) {
        console.log(error)
        dispatch({type:types.DELETE_PKG_TYPE_FAILED})
    }
}