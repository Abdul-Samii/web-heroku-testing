import { createTheme, Grid, Button } from '@material-ui/core'
import React,{useState} from 'react'
import { INPUT,Checkbox } from '../../../components/';
import { makeStyles } from '@material-ui/styles';
import {ICONS, IMAGES} from '../../../constants'
import TextareaAutosize from '@mui/material/TextareaAutosize';


const theme = createTheme({
    breakpoints: {
      values: {
        xs: 420,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });
  
  const useStyles=makeStyles(()=>({

    container:{
        height:'80vh',
        marginLeft:'0vh',
        position:'absolute',
        [theme.breakpoints.up('xs')]:{
            marginLeft:'10vh'
        },
        [theme.breakpoints.up('md')]:{
            marginLeft:theme.spacing(50)
        },
        [theme.breakpoints.up('lg')]:{
            marginLeft:'50vh',
            
        },
        
    },

    header:{
        [theme.breakpoints.up('md')]:{
            marginLeft:'-10%'
        },
        [theme.breakpoints.down('xs')]:{
            marginLeft:'-2%'
        }
        
    },

    image:{
        
        borderRadius:'8vh',
            height: '16vh',
            width:'16vh',
            borderRadius:'8vh'
    },
    input1:{
        [theme.breakpoints.down('xs')]:{
            marginLeft:'3%',
            marginRight:'3%'
        },
        [theme.breakpoints.up('md')]:{
            marginLeft:'2%'
        },
        [theme.breakpoints.up('xs')]:{
            marginLeft:'5%'
        }
    },
    uploadbtn:{
        [theme.breakpoints.up('sm')]:{
            marginTop:'4%'
        },
        [theme.breakpoints.down('sm')]:{
            marginTop:'4%',
            marginLeft:'17%'
        }
    },
    removebtn:{
        [theme.breakpoints.down('xs')]:{
            marginTop:'-15%',
            marginLeft:'21%'
        },
        [theme.breakpoints.up('xs')]:{
            marginTop:'-5%',
            marginLeft:'21%'
        },
        [theme.breakpoints.up('sm')]:{
            marginTop:'-7%',
            marginLeft:'21%'
        },
        [theme.breakpoints.up('md')]:{
            marginTop:'4%',
            marginLeft:'2%'
        }
    },
    textLine:{
        [theme.breakpoints.down('xs')]:{
            marginLeft:'3%'
        },
        [theme.breakpoints.up('sm')]:{
            marginLeft:'10%'
        },
        
        [theme.breakpoints.up('md')]:{
            marginLeft:'33%',
            marginTop:'-8%'
        },
    
    },
    email:{
        [theme.breakpoints.down('xs')]:{
            marginLeft:'3%',
            marginRight:'3%'
        },
        [theme.breakpoints.up('md')]:{
            paddingLeft:'3%'
        },
        [theme.breakpoints.up('xs')]:{
            marginLeft:'5%'
        }
    
    },
    
    goal:{
        [theme.breakpoints.up('md')]:{
            marginLeft:'8%'
        },
        [theme.breakpoints.down('xs')]:{
            marginLeft:'3%'
        },
        [theme.breakpoints.up('sm')]:{
            marginLeft:'8%'
        },
        [theme.breakpoints.between('xs','sm')]:{
            marginLeft:'5%'
        }
    },

    txtArea:{
        [theme.breakpoints.up('md')]:{
            width:750
        },
        [theme.breakpoints.down('xs')]:{
            width:370
        },
        [theme.breakpoints.between('xs','sm')]:{
            width:440
        }
    }

}))

const Edit=({setmodal,user})=>{
    const classes=useStyles();
    return(
        <Grid  className={classes.container}>

            {/* HEADER OF EDIT PAGE */}
            <Grid container className={classes.header} justifyContent="center">
                <Grid lg={3} xs={3} md={3} ><img src = {IMAGES.profile} className={classes.image}/></Grid>
                <Grid class={classes.uploadbtn} lg={4} xs={7} tb={4}>
                    <Button variant="contained" color="secondary">Upload New Photo</Button>
                </Grid>
                <Grid class={classes.removebtn} lg={2} xs={4} md={2}>
                    <Button variant="contained" color="success">Remove</Button>
                </Grid>
            </Grid>

                <Grid className={classes.textLine} lg={12} xs={12} md={12}> 
                    <p>Image should be atleast 400x400 pixel as per JPEG or PNG file</p>
                </Grid>
            
        {/* ALL THE INPUTS ARE TAKEN HERE */}
        <Grid container justifyContent='center'>
                    <Grid lg={5} xs={12} md={5} className={classes.input1}>
                        <Grid style={{marginTop:'7vh'}}><h4>Name</h4></Grid>
                        <Grid style={{marginTop:'-1vh'}}><INPUT.required variant="outlined" placeholder="Name" fullWidth={true}/></Grid>
                    </Grid>

                    <Grid lg={5} xs={12} md={5} className={classes.input1}>
                        <Grid style={{marginTop:'7vh'}}><h4>Contact Number</h4></Grid>
                        <Grid style={{marginTop:'-1vh'}}><INPUT.required variant="outlined" placeholder="Name" fullWidth={true}/></Grid>
                    </Grid>

        </Grid>

        {/* EMAIL */}
        <Grid className={classes.email} lg={12} xs={12} md={12}> 
                        <Grid style={{marginTop:'7vh'}}><h4>Email</h4></Grid>
                        <Grid style={{marginTop:'-1vh'}}><INPUT.required variant="outlined" placeholder="Email" fullWidth={true}/></Grid>
        </Grid>

        {/* GOALS OR CHECKBOXES */}
        <Grid className={classes.goal}>
            <Grid><h4>Goals</h4></Grid>
            <Grid container>
                <Grid lg={4} xs={6}><Checkbox label="Get Leaner"/></Grid>
                <Grid lg={4} xs={6}><Checkbox label="Get Stronger"/></Grid>
                <Grid lg={4} xs={6}><Checkbox label="Learn new"/></Grid>
                <Grid lg={4} xs={6}><Checkbox label="Get Healthier"/></Grid>
                <Grid lg={4} xs={6}><Checkbox label="Dont know"/></Grid>
                <Grid lg={4} xs={6}><Checkbox label="All of the above"/></Grid>
            </Grid>

        </Grid> 

        {/* WEIGHT AND HEIGHT */}
        <Grid container justifyContent='center'>
                    <Grid lg={5} xs={12} md={5} className={classes.input1}>
                        <Grid style={{marginTop:'7vh'}}><h4>Weight</h4></Grid>
                        <Grid style={{marginTop:'-1vh'}}><INPUT.required variant="outlined" placeholder="Weight" fullWidth={true}/></Grid>
                    </Grid>

                    <Grid lg={5} xs={12} md={5} className={classes.input1}>
                        <Grid style={{marginTop:'7vh'}}><h4>Height</h4></Grid>
                        <Grid style={{marginTop:'-1vh'}}><INPUT.required variant="outlined" placeholder="Height" fullWidth={true}/></Grid>
                    </Grid>
        </Grid>           

        {/* ADDRESS */}
        <Grid className={classes.email} lg={12} xs={12} md={12}> 
                        <Grid style={{marginTop:'7vh'}}><h4>Address</h4></Grid>
                        <Grid style={{marginTop:'-1vh'}}>
                            <TextareaAutosize
                                    aria-label="minimum height"
                                    minRows={6}
                                    placeholder="Minimum 3 rows"
                                    className={classes.txtArea}
                            />
                        </Grid>
        </Grid>

        </Grid>
    )
}
export default Edit;