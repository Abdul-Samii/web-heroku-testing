import React,{useState} from 'react'
import InputBase from '@mui/material/InputBase';
import { Button, Grid,makeStyles,createTheme } from '@material-ui/core'
import { COLORS } from '../../../constants';
import { connect } from 'react-redux';
import { UpdatePackageType } from '../../../store/actions';

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
    const [description,setDesc] = useState(props.data.description)
    const [image, setImg] = useState('img')
    const [id,setId] = useState(props.data.id)

    const handleEdit=()=>{
        if(!name || !description)
        {
            alert('Please fill all fields')
        }
        if(!image)
        {
            alert('Upload an Image')
        }

        let obj={
            name,
            description,
            image,
            id
        }
        console.log(obj)
        props.UpdatePackageType(obj)
        props.edit()
    }

   

    return(

        <div>   
            <Grid >
            <div className={classes.upper}>
                <h3 style={{fontFamily:'Poppins'}}>Package List</h3>
                <h4 style={{fontFamily:'Poppins'}}>Edit Package type:</h4>
             </div>
             </Grid>
            <Grid container >
                
                <Grid lg={3} md={3} sm={11} className={classes.upper} style={{backgroundColor:'transparent'}}>
                    <p style={{fontFamily:'Poppins'}}>Type Name <InputBase
                        value={name}
                        placeholder="Type name"
                        style={{backgroundColor:'#F0F0F0',borderRadius:4,borderColor:'#F0F0F0'}}                        
                        inputProps={{ 'aria-label': 'Type name' }}
                        onChange={(event)=>setName(event.target.value)}
                    /></p>

                    <p style={{fontFamily:'Poppins'}}>About Type <InputBase
                        value={description}
                        maxRows={6}
                        aria-label="about type"
                        multiline
                        placeholder="About type ..."
                        minRows={6}
                        onChange={(event)=>setDesc(event.target.value)}
                        className={classes.txtField}
                    /></p>
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
export default connect(mapStateToProps,{UpdatePackageType})(EditPackage)



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
    }
}))