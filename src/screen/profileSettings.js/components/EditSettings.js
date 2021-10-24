import { createTheme, Grid, Button, Paper,Hidden } from '@material-ui/core'
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
        height:'60vh',
        marginLeft:'0vh',
        [theme.breakpoints.up('xs')]:{
            marginLeft:'10vh'
        },
        [theme.breakpoints.up('md')]:{
            marginLeft:theme.spacing(48),
            marginTop:'5vh'
        },
        [theme.breakpoints.up('lg')]:{
            marginLeft:'38vh',
            marginTop:'5vh'
        },
        [theme.breakpoints.down('xs')]:{
            height:'70vh'
        }
        
    },
    container2:{
        [theme.breakpoints.up('md')]:{
        marginLeft:'2vh',
        marginRight:'2vh',
        marginTop:'5vh',
        height:'60vh'
        },
        [theme.breakpoints.down('xs')]:{
            marginLeft:'1vh',
            marginRight:'1vh'
        }
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
        
        borderRadius:'1vh',
            height: '13vh',
            width:'13vh',
            marginTop:'2vh'
    },
    input1:{
        [theme.breakpoints.down('xs')]:{
            marginLeft:'3%',
            marginRight:'3%',
            marginTop:'-15%'
        },
        [theme.breakpoints.up('md')]:{
            marginLeft:'2%',
            marginTop:'-6%'
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
        },
        [theme.breakpoints.up('md')]:{
            marginLeft:'8%'
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
            marginRight:'3%',
            marginTop:'-15%'
        },
        [theme.breakpoints.up('md')]:{
            paddingLeft:'3.5%',
            marginTop:'-5%',
            marginRight:'3%'
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
            marginLeft:'3%',
            marginTop:'-3%'
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
            width:600
        },
        [theme.breakpoints.down('xs')]:{
            width:370
        },
        [theme.breakpoints.between('xs','sm')]:{
            width:440
        }
    },
    bmi:{
        [theme.breakpoints.down('xs')]:{
            marginTop:'7vh'
        }
    }

}))

const EditSettings=(props)=>{
    const classes=useStyles();
    return(
        <Grid container>
        <Grid md={7} lg={7} sm={12}>
        <Paper  className={classes.container}>

            {/* HEADER OF EDIT PAGE */}
            <Grid container className={classes.header} justifyContent="center">
                <Grid lg={3} xs={3} md={3} ><img src = {IMAGES.profile} className={classes.image}/></Grid>
                <Grid class={classes.uploadbtn} lg={4} xs={7} tb={4}>
                    <Button variant="contained" color="secondary">Change Profile</Button>
                </Grid>
                <Grid class={classes.removebtn} lg={2} xs={4} md={2}>
                    <Button variant="contained" color="success"
                        onClick={()=>props.edit()}
                    >Save</Button>
                </Grid>
            </Grid>

                <Grid className={classes.textLine} lg={12} xs={12} md={12}> 
                    <p>Image should be atleast 400x400 pixel as per JPEG or PNG file</p>
                </Grid>
            
        {/* ALL THE INPUTS ARE TAKEN HERE */}
        <Grid container justifyContent='center'>
                    <Grid lg={5} xs={12} md={5} className={classes.input1}>
                        <Grid style={{marginTop:'7vh'}}><p><b>Name :</b> </p></Grid>
                        <Grid style={{marginTop:'-1vh'}}><INPUT.required variant="outlined" placeholder="Name" fullWidth={true}/></Grid>
                    </Grid>

                    <Grid lg={5} xs={12} md={5} className={classes.input1}>
                        <Grid style={{marginTop:'7vh'}}><p><b>Contact Number :</b> </p></Grid>
                        <Grid style={{marginTop:'-1vh'}}><INPUT.required variant="outlined" placeholder="Name" fullWidth={true}/></Grid>
                    </Grid>

        </Grid>

        {/* EMAIL */}
        <Grid className={classes.email} lg={12} xs={12} md={12}> 
                        <Grid style={{marginTop:'7vh'}}><p><b>Email :</b> </p></Grid>
                        <Grid style={{marginTop:'-1vh'}}><INPUT.required variant="outlined" placeholder="Email" fullWidth={true}/></Grid>
        </Grid>

        

        {/* ADDRESS */}
        <Grid className={classes.email} lg={12} xs={12} md={12}> 
                        <Grid style={{marginTop:'8vh'}}><p><b>Address :</b> </p></Grid>
                        <Grid style={{marginTop:'-1vh'}}>
                            <TextareaAutosize
                                    aria-label="minimum height"
                                    minRows={6}
                                    placeholder="Minimum 3 rows"
                                    className={classes.txtArea}
                            />
                        </Grid>
        </Grid>

        </Paper>
        </Grid>
                        
        <Grid md={4} lg={4} sm={12}>
            <Paper className={classes.container2}>
            <Hidden mdUp><Grid className={classes.textLine} lg={12} xs={12} md={12}> 
                    <p>Image should be atleast 400x400 pixel as per JPEG or PNG file</p>
                </Grid></Hidden>
                <h3 style={{marginLeft:'2vh',marginTop:'1vh'}}>Password</h3>
               <Grid style={{marginTop:'4vh',marginLeft:'1vh',marginRight:'1vh'}}><INPUT.required variant="outlined" placeholder="Current Password" fullWidth={true}/></Grid>
               <Grid style={{marginTop:'4vh',marginLeft:'1vh',marginRight:'1vh'}}><INPUT.required variant="outlined" placeholder="New Password" fullWidth={true}/></Grid>
               <Grid style={{marginTop:'4vh',marginLeft:'1vh',marginRight:'1vh'}}><INPUT.required variant="outlined" placeholder="Confirm New Password" fullWidth={true}/></Grid>
                <Grid style={{marginTop:'4vh',marginLeft:'1vh',marginRight:'1vh'}}><Button fullWidth variant='contained' color="secondary">Change</Button></Grid>
            </Paper>
        </Grid>

        </Grid>
    )
}
export default EditSettings;