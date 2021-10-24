import React,{useState} from 'react';
import { Grid,Paper,Avatar, Typography, Link, TextField } from '@material-ui/core';
import {COLORS, ICONS} from '../constants'
import './Login.css'
import { Button, Checkbox } from '../components';
import {connect} from 'react-redux'
import {login,setToast} from '../store/actions'
import { Loader } from '../components/Loader/Loader';


const Login=(props)=>{
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    const handleLogin = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    
        if (email && !reg.test(email)) {
          return props.setToast('error', 'Invalid Email')
        }
        if (!email || !password) {
          return props.setToast('error', 'Required fields are missing')
        }
    
    
        let obj = {
          email,
          password
        }
        props.login(obj)
      }

    const paperstyle={
        height: '70vh',
        margin: "20px auto",
        width: 280,    
        padding: 20}
    const avatarStyle={
        backgroundColor:COLORS.active
    }
    const btn={
        backgroundColor:COLORS.active,
        marginTop:'2vh'
    }
    const chkbox={
        color:COLORS.active,
    }
    const footer={
        marginTop:'1vh'
    }
    const remember={
        marginTop:'1vh'
    }
    const container={
        marginTop:'10vh'
    }
    console.log(email)
    return(
        
        <Grid style={container}>
            {props.isLoading && <Loader/>}
            <Grid>
                <Paper elevation={10} style={paperstyle}>

                    <Grid align='center'>
                         <Avatar style={avatarStyle} align='center'>
                             <ICONS.LockOutlinedIcon/>
                        </Avatar>
                    <h2>Login to Panel</h2>
                    </Grid>

                    <Grid>
                        {/* <INPUT.required   label="Username or Email" placeholder="Enter Username or Email"
                        changeText={ (e) => console.log(e.target.value) }
                        /> */}

                    <TextField 
                            label="Username or Email"
                            placeholder="Enter username or Email"
                            value={email}
                            onChange={(event)=>setEmail(event.target.value)}
                            fullWidth
                            required
                        
                            />

                        {/* <INPUT.password value={password} label="Password" placeholder="Enter Password"/> */}
                        <TextField 
                            label="Password"
                            placeholder="Enter Password"
                            type="password"
                            value={password}
                            onChange={(event)=>setPassword(event.target.value)}
                            fullWidth
                            required
                        
                            />
                    </Grid>

                    <Grid style={remember}>
                        <Checkbox label="Remember Me" checkStyle={chkbox}/>
                    </Grid>

                    <Button btnStyle={btn} label="Login"
                    onClick={()=>handleLogin()}
                    />

                    <Grid style={footer}>
                    <Typography>
                        <Link ahref="#" style={{color:COLORS.active}}>
                        Forgot Password
                        </Link>
                    </Typography>
                    <Typography>
                    Dont have an account?
                        <Link ahref="#" style={{color:COLORS.active}}>
                        Signup
                        </Link>
                    </Typography>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
            
    )
}

const mapStateToProps = props => {
    return {
      isLoading: props.auth.isLoading
    }
  }
export default connect(mapStateToProps, { setToast, login })(Login)

