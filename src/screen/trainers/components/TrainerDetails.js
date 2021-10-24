import { Grid,makeStyles,Paper,createTheme, Button } from '@material-ui/core'
import React from 'react'
import { COLORS, IMAGES } from '../../../constants'
import Gallery from './Gallery';


const theme = createTheme({
    breakpoints: {
      values: {
        xs: 420,
        sm: 600,
        md: 700,
        mdL:800,
        lg: 1200,
        xl: 1536,
      },
    },
  });
const TrainerDetails=(props)=>{
    const classes = useStyles()
    const data = props.item
    return(
        <Grid  className={classes.container}>
            <Grid container>
            <Grid md={1} lg={1}><img src={IMAGES.profile} className={classes.img}/></Grid>
            <Grid md={4} className={classes.details}>
                <p>Name : {data.name}</p>
                <p>Email : {data.email}</p>
                <p>Contact : 03405108383</p>
                <p>Address : Islamabad , Pakistan</p>
                <p>City : Islamabad</p>
            </Grid>
            </Grid>

            <div>
                <h3>Workout Types</h3>
                <Grid container>
                    <Button variant='outlined'>{data.catagories}</Button>
                    <Button variant='outlined'>Type2</Button>
                    <Button variant='outlined'>Type3</Button>
                    <Button variant='outlined'>Type4</Button>
                </Grid>
                <Grid container>
                    <Button variant='outlined'>Type5</Button>
                    <Button variant='outlined'>Type6</Button>
                    <Button variant='outlined'>Type7</Button>
                    <Button variant='outlined'>Type8</Button>
                </Grid>
            </div>
                <div >
                    <h3>About</h3>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <h3>Certificates</h3>
                
                    <div >
                        <p>Certificate of Yoga expert 2021 : <Button variant='contained' style={{backgroundColor:COLORS.btn1,color:'white'}} size='small'>View Document</Button></p>
                        <p>Certificate of Yoga expert 2021 : <Button variant='contained' style={{backgroundColor:COLORS.btn1,color:'white'}} size='small'>View Document</Button></p>
                        <p>Certificate of Yoga expert 2021 : <Button variant='contained' style={{backgroundColor:COLORS.btn1,color:'white'}} size='small'>View Document</Button></p>
                        <p>Certificate of Yoga expert 2021 : <Button variant='contained' style={{backgroundColor:COLORS.btn1,color:'white'}} size='small'>View Document</Button></p>
                    </div>
               
                
        </Grid>
    )
}

export default TrainerDetails

const useStyles = makeStyles(()=>({
    container:{
        elevation:'10%',
        backgroundColor:'white',
        
        [theme.breakpoints.up('md')]:{
            marginLeft:'35vh'
        }
    },
    img:{
        height:'12vh',
        width:'12vh',
        borderRadius:'6vh'
    },
    details:{
        [theme.breakpoints.up('md')]:{
            marginTop:'-2vh',
            marginLeft:'10vh'
        }
    }
}))