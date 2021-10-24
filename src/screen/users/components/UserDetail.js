import React from "react";
import { createTheme, Grid, Button } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles";
import { COLORS, IMAGES } from "../../../constants";

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 420,
        sm: 600,
        md: 700,
        lg: 1200,
        xl: 1536,
      },
    },
  });
const useStyles = makeStyles(()=>({
    container:{
        paddingLeft:'5vh',
        paddingTop:'5vh',
        paddingBottom:'5vh',
        marginTop:'12vh',
        elevation:'10%',
        backgroundColor:'white',
        [theme.breakpoints.up('xs')]:{
            marginLeft:'10vh'
        },
        [theme.breakpoints.up('md')]:{
            marginLeft:theme.spacing(60),
            width:'80vh',
            height:'35vh'
        },
        [theme.breakpoints.between('sm','md')]:{
            marginLeft:'37vh',
            width:'50vh'
        },
        [theme.breakpoints.down('xs')]:{
            height:'60vh',
            width:'47vh'
        }
        
    },
    inner:{
        [theme.breakpoints.up('sm')]:{
            marginTop:'-3vh'
        }
    },
    dp:{
        height:'11vh',
        width:'11vh',
        borderRadius:'5.5vh',
        
    },
    detail:{
        
        [theme.breakpoints.up('md')]:{
            paddingLeft:'30%',
            marginTop:'-28%'
        },
        [theme.breakpoints.between('sm','md')]:{
            marginTop:'-22vh',
            
        }
    },
    heading:{
       
        [theme.breakpoints.down('xs')]:{
            marginTop:'-5vh'
        }
    },
    first:{
        backgroundColor:COLORS.inactive,width:'15vh',marginTop:'0.5vh',
        [theme.breakpoints.between('sm','md')]:{
            width:'16vh',
            height:'3vh'
        }
    },
    second:{
        backgroundColor:COLORS.inactive,
        marginTop:'0.5vh',
        [theme.breakpoints.up('md')]:{
            width:'15vh',
            marginLeft:'10vh'
        },
        [theme.breakpoints.down('xs')]:{
            marginLeft:'1vh'
        },
        [theme.breakpoints.between('sm','md')]:{
            width:'16vh',
            height:'3vh'
        }
    },
    third:{
        backgroundColor:COLORS.inactive,width:'15vh',marginTop:'0.5vh',
        [theme.breakpoints.between('sm','md')]:{
            width:'16vh',
            height:'3vh'
        }
    },
    last:{
        backgroundColor:COLORS.inactive,
        marginTop:'0.5vh',
        [theme.breakpoints.up('md')]:{
            width:'15vh',
            marginLeft:'10vh',
        },
        [theme.breakpoints.down('xs')]:{
            marginLeft:'1vh'
        },
        [theme.breakpoints.between('sm','md')]:{
            width:'16vh',
            height:'3vh'
        }
    },
    goals:{
        marginTop:'-4vh',
        [theme.breakpoints.down('xs')]:{
            marginTop:'1vh',
        },
        [theme.breakpoints.between('sm','md')]:{
            marginTop:'-5vh'
        }
    }

}))
const UserDetail=(props)=>{
    const classes = useStyles()
    return(
        <Grid className={classes.container}>
        <Grid className={classes.inner}> 
            <Grid><h4 className={classes.heading}>Profile</h4></Grid>
            <Grid container>
                <img src = {props.data.profile_img} alt={props.data.name} className={classes.dp}/>
            </Grid>
            <Grid className={classes.detail}>
                <Grid lg={12}><p>Name : {props.data.name}</p></Grid>
                <Grid lg={12}><p>Email : {props.data.email}</p></Grid>
                <Grid lg={12}><p>Contact : {props.data.contact_number}</p></Grid>
                <Grid lg={12}><p>Address : {props.data.address}</p></Grid>
                <Grid lg={12}><p>City : Islamabad</p></Grid>
                <Grid container>
                    <Grid>Weight : {props.data.weight}</Grid>
                    <Grid style={{marginLeft:'3%'}}>Height : {props.data.height}</Grid>
                </Grid>
            </Grid>

            {/* GOALS */}
            <Grid className={classes.goals}>
            <Grid><h4>Goals</h4></Grid>
            <Grid container>
                <Grid lg={2}><Button className={classes.first} size="small">Get Leaner</Button></Grid>
                <Grid lg={2}><Button  className={classes.second} size="small">Get Healthies</Button></Grid>
            </Grid>
            <Grid container>
                <Grid lg={2}><Button  className={classes.third} size="small">Get Muscles</Button></Grid>
                <Grid lg={2}><Button  className={classes.last} size="small">Get Stronger</Button></Grid>
            </Grid>
            </Grid>

        </Grid>
        </Grid>
    )
}
export default UserDetail