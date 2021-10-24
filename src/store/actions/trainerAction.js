import { types } from "../actionTypes";
import { httpRequest } from "../../config";
import qs from 'qs'


export const TrainersList = ()=> async dispatch=>{
    try {

        dispatch({type:types.GET_TRAINERS_START})
        const token =  window.localStorage.getItem('token')
        //Temporarily using hard coded token
        const Token = 'Bearer '+token 
        const response = await httpRequest.get('trainers', { headers: {"Authorization" : Token} })
        const result = response.data
        console.log("RESPONSE ",result)
        if(result){
            dispatch({type:types.GET_TRAINERS_SUCCESS, payload:result.trainers})
        }
        
        
    } catch (error) {
        console.log(error)
        dispatch({type:types.GET_TRAINERS_FAILED})
    }
}

export const updateTrainerStatus = (data)=> async dispatch=>{
    try {

        dispatch({type:types.UPDATE_TRAINER_STATUS_START})
        const token =  window.localStorage.getItem('token')
        //Temporarily using hard coded token
        const Token = 'Bearer '+token 
        let queryData= qs.stringify(data)
        console.log("ATATATATTTTTTTTTTTTTTTTT",queryData)
        const response = await httpRequest.post('updatetrainerstatus',queryData, { headers: {"Authorization" : Token} })
        const result = response.data
        console.log("RESPONSE ",result)
        if(result){
            dispatch({type:types.UPDATE_TRAINER_STATUS_SUCCESS, payload:result.trainers})
        }
        
        
    } catch (error) {
        console.log(error)
        dispatch({type:types.UPDATE_TRAINER_STATUS_FAILED})
    }
}