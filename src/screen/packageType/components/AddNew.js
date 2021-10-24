import React,{useState} from 'react'
import InputBase from '@mui/material/InputBase';
import { Button, Grid,makeStyles,createTheme } from '@material-ui/core'
import { COLORS, IMAGES } from '../../../constants';
import { connect } from 'react-redux';
import { UploadImage,AddPackageType } from '../../../store/actions';
import { Loader } from '../../../components/Loader/Loader';

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
const AddNew = (props) =>{
    const classes = useStyles()
    const [name,setName] = useState()
    const [photo,setPhoto] = useState(IMAGES.logo)
    const [image,setImage] = useState()
    const [description,setDescription] = useState()
    const [count,setCount] = useState(0)
const handleUploadImage=(e)=>{
    console.log(e.target.files[0])
    let file = e.target.files[0]
    const data = new FormData() 
    data.append('photo', file)
    for(var pair of data.entries()) {
        console.log(pair[0]+ ', '+ JSON.stringify(pair[1]));
     }
     props.UploadImage(data)
}
if(props.urll)
{
    if(count==0)
    {
    console.log("TTTTTTTTTTTTTTTTTTTTTT",props.urll)
    setImage(props.urll)
    setCount(1)
    }
}

const handleAddNew= ()=>{
    let count=0
    if(!name || !description)
    {
        count=10
        alert("Please fill all fields")
    }
    if(!image)
    {
        count=5
        alert("Upload an image")
    }
    if(count===0)
    {
        let obj={
            name,
            description,
            image
        }
         props.AddPackageType(obj)
        
    }
    
} 

return(

        <div>
            {props.isloadingImg && <Loader/>}
            {/* {props.isloadingAdd && <Loader/>} */}
            <Grid >
            <div className={classes.upper}>
                <h3 style={{fontFamily:'Poppins'}}>Package List</h3>
                <h4 style={{fontFamily:'Poppins'}}>Create new Package type:</h4>
             </div>
             </Grid>
            <Grid container >
                
                <Grid lg={3} md={3} sm={11} className={classes.upper} style={{backgroundColor:'transparent'}}>
                    <p style={{fontFamily:'Poppins'}}>Type Name <InputBase
                        value={name}
                        onChange={(event)=>setName(event.target.value)}
                        placeholder="Type name"
                        style={{backgroundColor:'#F0F0F0',borderRadius:4,borderColor:'#F0F0F0'}}                        
                        inputProps={{ 'aria-label': 'Type name' }}
                    /></p>

                    <p style={{fontFamily:'Poppins'}}>About Type <InputBase
                        value={description}
                        onChange={(event)=>setDescription(event.target.value)}
                        maxRows={6}
                        aria-label="about type"
                        multiline
                        placeholder="About type ..."
                        minRows={6}
                        className={classes.txtField}
                    /></p>
                    {/* <p style={{fontFamily:'Poppins'}}><Button className={classes.btn} size="small"
                        onClick={()=>handleUploadImage()}
                    >Upload</Button> Upload an image</p> */}

                <div className="form-group col-md-6">
                    <label className="text-white">Select File :</label>
                    <input type="file" className="form-control" name="upload_file" onChange={handleUploadImage} />
                </div>

                </Grid>
                <Grid lg={6} md={6} sm={12}>
                    <div className={classes.imgPreview}>
                    {image?<img src={image}/>:<p style={{paddingTop:'10vh',paddingLeft:'1vh',fontSize:18,opacity:0.5,fontFamily:'Poppins'}}>
                        Image Preview will show here when the image is selected</p>}
                    </div>  
                </Grid> 
                
            </Grid>
            <Button size="small" style={{backgroundColor:COLORS.btn1,color:'white'}}
            onClick={()=>{
                
                handleAddNew()
            }}
            >Add</Button>
        </div>
)
}
const mapStateToProps = props => {
    // console.log("MAPPPPPPPPPPPPP",props.img.url)
    return {
        urll:  props.img.url,
        isloadingImg:props.img.isLoading,
        isloadingAdd:props.pkg.isLoading
      
    }
}
export default connect(mapStateToProps,{UploadImage,AddPackageType})(AddNew)


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