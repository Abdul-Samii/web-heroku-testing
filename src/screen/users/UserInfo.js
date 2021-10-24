import React from 'react'
import { Grid,makeStyles,createTheme, Hidden } from '@material-ui/core'
import { SessionsDetail, SessionsTable, UserDetail } from '.'
import { useLocation } from "react-router-dom";

const theme = createTheme({
    breakpoints:{
        values:{
            xs: 420,
        sm: 600,
        md: 700,
        lg: 1200,
        xl: 1536,
        },
    },
})

const useStyles = makeStyles(()=>({
    container:{

    },
    sessions:{
        [theme.breakpoints.up('md')]:{
            marginLeft:'-10vh',
            marginTop:'1vh'
        },
        [theme.breakpoints.down('xs')]:{
            marginTop:'23vh',
            marginLeft:'2vh', 
        },
        [theme.breakpoints.between('xs','sm')]:{
            marginTop:'23vh',
            marginLeft:'12vh', 
        },
        [theme.breakpoints.between('sm','md')]:{
            marginLeft:'-30vh'
        }
    },
    userdetail:{
        [theme.breakpoints.up('md')]:{
            marginTop:'-11vh',
            marginLeft:'-20vh'
        },
        [theme.breakpoints.down('xs')]:{
            marginLeft:'2vh',
            width:'3vh',
            height:'50vh',
            marginTop:'-12vh'
        },
       [theme.breakpoints.between('sm','md')]:{
           marginLeft:'2vh'
       }
    },
    table:{
        position:'absolute',
        [theme.breakpoints.up('md')]:{
            marginTop:'5vh',
            marginLeft:'33vh'
        },
        [theme.breakpoints.down('xs')]:{
            marginTop:'2vh',
            marginLeft:'-6vh',
        },
        [theme.breakpoints.between('xs','sm')]:{
            marginLeft:'7vh',
        },
        [theme.breakpoints.between('sm','md')]:{
            marginTop:'10vh',
            marginLeft:'-2vh'
        }
    },
    heading:{
        marginLeft:'19%',
        [theme.breakpoints.down('xs')]:{
            marginTop:'-1vh',
            marginLeft:40
        },
        [theme.breakpoints.between('sm','md')]:{
            marginLeft:'35vh'
        }
    },
    heading2:{
        position:'absolute',
        marginLeft:'19%',
        marginTop:'2vh',
        [theme.breakpoints.down('xs')]:{
            marginLeft:40
        },
        [theme.breakpoints.between('sm','md')]:{
            marginLeft:'35vh'
        }
    }
}))

const UserInfo = (props)=>{
    const classes = useStyles()
    const location = useLocation();
   const data = location.state.detail
   console.log(data)
    return(
        <Grid>
            <h4 className={classes.heading}>User Dashboard</h4>
        <Grid container>
            <Grid lg={6} sm={12} xs={12} md={6} className={classes.userdetail}><UserDetail data = {data}/></Grid>
            <Grid lg={6} sm={12} xs={12} md={6} className={classes.sessions}><SessionsDetail/></Grid>
        </Grid>
        <Hidden xsDown><h4 className={classes.heading2}>Sessions</h4></Hidden>
        <Grid className={classes.table}><SessionsTable/></Grid>
        </Grid>
    )
}

export default UserInfo