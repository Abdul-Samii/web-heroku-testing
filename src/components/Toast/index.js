import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
 const Toast=({  message })=>{
  toast(message)
    return (
      <div>
      
			
		
        <ToastContainer />
      </div>
    );
  }


  
export default Toast
