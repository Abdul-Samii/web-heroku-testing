import { types } from "../actionTypes";
import { httpRequest } from "../../config";
import qs from 'qs'


export const packageTypeList = ()=> async dispatch=>{
    try {

        dispatch({type:types.GET_PKGTYPE_LIST_START})
        const token =  window.localStorage.getItem('token')
        //Temporarily using hard coded token
        const Token = 'Bearer '+token 
        const response = await httpRequest.get('packageTypeList', { headers: {"Authorization" : Token} })
        const result = response.data
        console.log("66666666666666666666",result)
        if(result){
            dispatch({type:types.GET_PKGTYPE_LIST_SUCCESS, payload:result.packagetype})
        }
        
        
    } catch (error) {
        console.log(error)
        dispatch({type:types.GET_PKGTYPE_LIST_FAILED})
    }
}


export const AddPackageType = (data)=> async dispatch=>{
    try {
        
        dispatch({type:types.ADD_PKG_TYPE_START})
        const token =  window.localStorage.getItem('token')
        //Temporarily using hard coded token
        const Token = 'Bearer '+token 
        const querydata = qs.stringify(data)
        const response = await httpRequest.post('createPackageType', querydata,{ headers: {"Authorization" : Token} })
        const result = response.data
        console.log(result)
        if(result){
            dispatch({type:types.ADD_PKG_TYPE_SUCCESS, payload:result.packagetype})
        }
        
        
    } catch (error) {
        console.log(error)
        dispatch({type:types.ADD_PKG_TYPE_FAILED})
    }
}

export const UpdatePackageType = (data)=> async dispatch=>{
    try {
        
        dispatch({type:types.UPDATE_PKG_TYPE_START})
        const token =  window.localStorage.getItem('token')
        //Temporarily using hard coded token
        const Token = 'Bearer '+token 
        const querydata = qs.stringify(data)
        console.log('DDD',querydata)

        const response = await httpRequest.post('updatePackageType', querydata,{ headers: {"Authorization" : Token} })
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


export const DeletePackageType = (data)=> async dispatch=>{
    try {
        
        dispatch({type:types.DELETE_PKG_TYPE_START})
        const token =  window.localStorage.getItem('token')
        //Temporarily using hard coded token
        const Token = 'Bearer '+token 
        const querydata = qs.stringify(data)
        console.log('DDD',querydata)

        const response = await httpRequest.post('deletePackageType', querydata,{ headers: {"Authorization" : Token} })
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



export const packages = ()=> async dispatch=>{
    try {

        dispatch({type:types.GET_PACKAGES_START})
        const token =  window.localStorage.getItem('token')
        //Temporarily using hard coded token
        const Token = 'Bearer '+token 
        const response = await httpRequest.get('packageList', { headers: {"Authorization" : Token} })
        const result = response.data
        console.log(result)
        if(result){
            dispatch({type:types.GET_PACKAGES_SUCCESS, payload:result.packages})
        }
        
        
    } catch (error) {
        console.log(error)
        dispatch({type:types.GET_PACKAGES_FAILED})
    }
}


export const UpdatePackage = (data)=> async dispatch=>{
    try {
        
        dispatch({type:types.UPDATE_PKG_START})
        const token =  window.localStorage.getItem('token')
        //Temporarily using hard coded token
        const Token = 'Bearer '+token 
        const querydata = qs.stringify(data)
        console.log('DDD',querydata)

        const response = await httpRequest.post('updatePackage', querydata,{ headers: {"Authorization" : Token} })
        const result = response.data
        console.log(result)
        if(result){
            dispatch({type:types.UPDATE_PKG_SUCCESS, payload:result.packagetype})
        }
        
        
    } catch (error) {
        console.log(error)
        dispatch({type:types.UPDATE_PKG_FAILED})
    }
}


export const DeletePackage = (data)=> async dispatch=>{
    try {
        
        dispatch({type:types.DELETE_PKG_START})
        const token =  window.localStorage.getItem('token')
        //Temporarily using hard coded token
        const Token = 'Bearer '+token 
        const querydata = qs.stringify(data)
        const response = await httpRequest.post('deletePackage', querydata,{ headers: {"Authorization" : Token} })
        const result = response.data
        console.log(result)
        if(result){
            dispatch({type:types.DELETE_PKG_SUCCESS, payload:result.packagetype})
        }
        
        
    } catch (error) {
        console.log(error)
        dispatch({type:types.DELETE_PKG_FAILED})
    }
}


export const AddPackage = (data)=> async dispatch=>{
    try {
        
        dispatch({type:types.ADD_PKG_START})
        const token =  window.localStorage.getItem('token')
        //Temporarily using hard coded token
        const Token = 'Bearer '+token 
        const querydata = qs.stringify(data)
        const response = await httpRequest.post('createPackage', querydata,{ headers: {"Authorization" : Token} })
        const result = response.data
        console.log(result)
        if(result){
            dispatch({type:types.ADD_PKG_SUCCESS, payload:result.packagetype})
        }
        
        
    } catch (error) {
        console.log(error)
        dispatch({type:types.ADD_PKG_FAILED})
    }
}