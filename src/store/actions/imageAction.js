import { types } from "../actionTypes";
import { httpRequest } from "../../config";


export const UploadImage=(data)=>async dispatch=> {
    try{
        // console.log(data.photo)
            dispatch({type:types.UPLOAD_IMAGE_START})
            // const formData = new FormData();
            // //     formData.append('key', 'photo');
            // //     formData.append('type','file');
            // //     formData.append('src',data);
            // //     console.log("FM ",formData)
            // console.log("Before ",formData)
            // formData.append('photo',data.photo)
            // formData.append('name','Sami')
            // console.log("test=================",formData,"_________________________",data.photo)
            const token =  window.localStorage.getItem('token')
        //Temporarily using hard coded token
        const Token = 'Bearer '+token 
            const response = await httpRequest.post(
                 'uploadIMG', 
                 data,
                 { headers:
                     {
                        "content-type": 'multipart/form-data',
                        "Authorization" : Token
                    }
                 })

            console.log("RESPONSE",response.data.url)
            const result = response.data.url
            if(result){
            dispatch({type:types.UPLOAD_IMAGE_SUCCESS, payload:result})
        }
    }
    catch(error)
    {
        console.log(error)
    }
}