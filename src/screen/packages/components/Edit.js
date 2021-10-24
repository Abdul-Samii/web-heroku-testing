import { createTheme, Grid, Paper } from '@material-ui/core'
import React,{useState} from 'react'
import { INPUT } from '../../../components/forms';
import { makeStyles } from '@material-ui/styles';
import {ICONS} from '../../../constants'
const theme = createTheme();
const useStyles=makeStyles(()=>({
    header:{
        textAlign:'center',
    },
    container:{
        width:'50vh',
        height:'50vh',
        marginLeft:'75vh',
        marginTop:'20vh',
        [theme.breakpoints.up('xs')]:{
            marginLeft:'1.5vh'
        },
        [theme.breakpoints.up('sm')]:{
            marginLeft:theme.spacing(50)
        },
        [theme.breakpoints.up('lg')]:{
            marginLeft:'75vh'
        }
    },
    input:{
       marginLeft:'5vh',
       marginRight:'5vh'
    },
    inner:{
        paddingTop:'5vh'
    },
    close:{
        marginLeft:'45vh',
        marginTop:'-4vh'
    }
}))

const Edit=({setmodal,user})=>{
    const classes=useStyles();
    return(
        <Grid component={Paper} className={classes.container}>
            <Grid className={classes.inner}>
                <Grid onClick={()=>setmodal()} className={classes.close}>
                <ICONS.Cross/>
                </Grid>
            <Grid className={classes.header}>
                <h3>Edit Details</h3>
            </Grid>
            <Grid className={classes.input}>
            <INPUT.required placeholder="Name" value={user[0].name} label="Edit Name" inputStyle={{marginTop:'1vh'}}/>
            <INPUT.required placeholder="Email" value={user[0].email} label="Edit Email" inputStyle={{marginTop:'1vh'}}/>
            <INPUT.required placeholder="Phone" value={user[0].phone} label="Edit Phone" inputStyle={{marginTop:'1vh'}}/>
            <INPUT.required placeholder="Address" value={user[0].address} label="Edit Address" inputStyle={{marginTop:'1vh'}}/>
            </Grid>
            </Grid>
        </Grid>
    )
}
export default Edit;