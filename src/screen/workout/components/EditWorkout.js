import React,{useState} from 'react'
import InputBase from '@mui/material/InputBase';
import { Button, Grid,makeStyles,createTheme } from '@material-ui/core'
import { COLORS } from '../../../constants';
import { connect } from 'react-redux';
import { UpdateWorkout } from '../../../store/actions';
import Dropdown from 'react-dropdown';

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

  

const EditPackage = (props) =>{
    const classes = useStyles()
    const [name,setName] = useState(props.data.name)
    const [packagetype,setPkgtype] = useState()
    const [image, setImg] = useState('img')
    const [id,setId] = useState(props.data.id)

    const handleEdit=()=>{
        if(!name || !packagetype)
        {
            alert('Please fill all fields')
        }
        if(!image)
        {
            alert('Upload an Image')
        }

        let obj={
            name,
            packagetype,
            image,
            id
        }
        console.log(obj)
        props.UpdateWorkout(obj)
        props.edit()
    }

    const options = [
        'SOLO', 'DUO', 'Discount three'
      ];
      const defaultOption = options[0];

    return(

        <div>   
            <Grid >
            <div className={classes.upper}>
                <h3 style={{fontFamily:'Poppins'}}>Workout List</h3>
                <h4 style={{fontFamily:'Poppins'}}>Edit Workout :</h4>
             </div>
             </Grid>
            <Grid container >
                
                <Grid lg={3} md={3} sm={11} className={classes.upper} style={{backgroundColor:'transparent'}}>
                    <p style={{fontFamily:'Poppins'}}>Workout Name <InputBase
                        value={name}
                        placeholder="Type name"
                        style={{backgroundColor:'#F0F0F0',borderRadius:4,borderColor:'#F0F0F0'}}                        
                        inputProps={{ 'aria-label': 'workout name' }}
                        onChange={(event)=>setName(event.target.value)}
                    /></p>

                    <p style={{fontFamily:'Poppins'}}>Package type<Dropdown options={options}  
                            value={packagetype} 
                            style={{color:'yellow'}}
                            className={classes.one}
                            onChange={(event)=>{
                                setPkgtype(event.value)
                            }}  
                    placeholder="Select type" /> </p>
                <Grid container>
                    <Grid md={4} lg={4} sm={2}><Button className={classes.btn} size="small">Upload Image</Button></Grid>
                    <Grid md={3} lg={3} sm={2} className={classes.btns}><Button className={classes.btn} size="small"
                    onClick={()=>handleEdit()}
                    
                    >Submit</Button></Grid>
                    <Grid md={3} lg={3} sm={2} className={classes.btns} ><Button className={classes.btn} size="small">New</Button></Grid>
                </Grid>

                </Grid>
                <Grid lg={6} md={6} sm={12}>
                    <div className={classes.imgPreview}>
                    <p style={{paddingTop:'10vh',paddingLeft:'1vh',fontSize:18,opacity:0.5,fontFamily:'Poppins'}}>Image Preview will show here when the image is selected</p>
                    </div>  
                </Grid> 
            </Grid>
        </div>
)
}
const mapStateToProps = props => {
    return {
      isLoading: props.pkg.isLoading
    }
  }
export default connect(mapStateToProps,{UpdateWorkout})(EditPackage)



const useStyles = makeStyles(()=>({
    imgPreview:{
        height:'25vh',
        width:'50vh',
        backgroundColor:'#F0F0F0',
        [theme.breakpoints.up('md')]:{
            marginLeft:'2vh',
            marginTop:'-2.5vh'
        }
        
    },
    btn:{
        backgroundColor:COLORS.btn1,
        color:'white',
        fontSize:11,
        fontFamily:'Poppins'
    },
    btns:{
    },
    txtField:{
        backgroundColor:'#F0F0F0',
        borderRadius:4,
        borderColor:'#F0F0F0',
        [theme.breakpoints.up('md')]:{
            width:'55%'
        },
        [theme.breakpoints.down('sm')]:{
            width:'72%'
        }
    },
    upper:{
        [theme.breakpoints.down('sm')]:{
            marginLeft:'4vh'
        }
    },
    one:{
        backgroundColor:'#F0F0F0',
        borderRadius:4,borderColor:'#F0F0F0',
       
        [theme.breakpoints.up('md')]:{
            marginLeft:'13vh', 
            width:'23vh',
            marginTop:'-3vh'
        },
        [theme.breakpoints.down('sm')]:{
            marginLeft:'13vh',
            width:'23vh',
            marginTop:'-3vh'
        }
        
    },
}))