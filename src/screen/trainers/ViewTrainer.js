import React from 'react'
import { Grid,makeStyles,createTheme } from '@material-ui/core'
import TrainerDetails from './components/TrainerDetails'
import Gallery from './components/Gallery'
import SessionsTable from './components/SessionsTable'
import { SessionDetail } from '.'
import { useLocation } from "react-router-dom";

const theme = createTheme()
const ViewTrainer=(props)=>{
    const location = useLocation()

    const classes = useStyles()
    const item = location.state.detail
    return(
        <>
        <Grid container className={classes.container}>
            <Grid md={6} lg={6} sm={12}><TrainerDetails item={item}/></Grid>
            <Grid md={6} lg={6} container>
            <Grid md={6} lg={6} sm={2}><Gallery item={item}/></Grid>
            <Grid className={classes.sessionCard}><SessionDetail item={item}/></Grid>
            </Grid>
            
        </Grid>
        <Grid container >
            <Grid md={12} lg={12} sm={4}><SessionsTable/></Grid>
        </Grid>
        </>
    )
}

export default ViewTrainer

const useStyles = makeStyles(()=>({
    container:{
        [theme.breakpoints.up('md')]:{
            marginLeft:'5vh'
        }
    },
    sessionCard:{
        marginLeft:'4vh'
    }
}))