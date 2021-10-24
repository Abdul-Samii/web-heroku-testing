import React from "react";
import { Grid,createTheme,Paper, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

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
        elevation:'10%',
        backgroundColor:'white',
        overflow: 'auto',
        [theme.breakpoints.up('md')]:{
            width:'60vh',
            height: 300,
        },
        [theme.breakpoints.down('xs')]:{
            width:'47vh'
        }
        
    },
    
    trianerName:{
        marginTop:'-2vh',
        color:'pink'
    },
    inner:{
        marginLeft:'3vh',
        
    }
}))

const SessionDetail = ()=>{
    const classes = useStyles()
    return(
        <Grid container>
            <Grid md={6} xs={12}>
        <Grid className={classes.container}>
        <Grid className={classes.inner} >
            <Grid><h3>Sessions</h3></Grid>
            <Grid>
                <Grid>Package bought : 4</Grid>
                <Grid>Active Package Name : Solo 45 Session</Grid>
                <Grid>Sessions bought : 45</Grid>
                <Grid>Sessions Remaining : 15</Grid>
                <Grid>Sessions Canceled : 5</Grid>
                <Grid>Sessions Completed : 15</Grid>
            </Grid>
            
            <Grid>
                <Grid><p>Sessions Reserved : 5</p>
                <p className={classes.trianerName}>By trainer john smith</p></Grid>

                <Grid><p>Sessions Reserved : 5</p>
                <p className={classes.trianerName}>By trainer john smith</p></Grid>


                <Grid><p>Sessions Reserved : 5</p>
                <p className={classes.trianerName}>By trainer john smith</p></Grid>


                <Grid><p>Sessions Reserved : 5</p>
                <p className={classes.trianerName}>By trainer john smith</p></Grid>

                <Grid><p>Sessions Reserved : 5</p>
                <p className={classes.trianerName}>By trainer john smith</p></Grid>

                <Grid><p>Sessions Reserved : 5</p>
                <p className={classes.trianerName}>By trainer john smith</p></Grid>

            </Grid>

        </Grid>
        </Grid>
        </Grid>

        
        </Grid>

    )
}

export default SessionDetail


