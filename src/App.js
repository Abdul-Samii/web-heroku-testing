import React,{useState,useEffect} from 'react'
import { Login } from './auth';
import { Sidebar } from './components';
import { Grid } from '@material-ui/core';
import { Toast } from './components';
import {connect} from 'react-redux'
import {clearToast} from './store/actions'
import { UserDetail,SessionsDetail } from './screen/users/components';
import { COLORS } from './constants';
import { UserInfo } from './screen/users';
import { PackageType } from './screen/packageType';
import { Packages } from './screen/packages';
import Workout from './screen/workout/Workout';
import { ProfileSettings } from './screen/profileSettings.js';
import { Edit } from './screen/users';
import { TrainerDetails, Trainers } from './screen/trainers';
import ViewTrainer from './screen/trainers/ViewTrainer';

function App(props) {
  const [auth,setAuth] = useState(false)
    
  useEffect(()=>{
    window.localStorage.getItem('userid')&& setAuth(true)
  })
  
  
  return (
    

    <Grid >  
       {props.isToastShowing && <Toast 
                    {...props.toastConfig} 
                    isToastShowing={props.isToastShowing}
                    clearToast={() => props.clearToast()} 
                    />}
        

       {auth? <Grid><Sidebar/></Grid>:
       <Login/>}
       {/* <Sidebar/> */}

       {/* <ViewTrainer/> */}
       {/* <TrainerDetails/> */}
       {/* <Trainers/> */}
       {/* <ProfileSettings/> */}
       {/* <Workout/> */}
    {/* <PackageType/>        */}
       {/* <Packages/> */}
       {/* <UserInfo/> */}
       {/* <UserDetail/> */}
       {/* <SessionsDetail/> */}  
       {/* <Edit/> */}
    </Grid>
  );
}
const mapStateToProps = props =>{
  // console.log(" props===========================", props)
  return{
    isToastShowing :props.toast.isToastShowing,
    toastConfig:props.toast.config

  }
}

export default connect(mapStateToProps, {clearToast})(App)

