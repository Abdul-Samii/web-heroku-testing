import React,{useState} from 'react'
import InputBase from '@mui/material/InputBase';
import { Button, Grid,makeStyles,createTheme } from '@material-ui/core'
import { COLORS } from '../../../constants';
import { connect } from 'react-redux';
import { UpdatePackage } from '../../../store/actions';

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
    const [id,setId] = useState(props.data.id)
    const [image, setImg] = useState('img')
    const [name,setName] = useState(props.data.name)
    const [packagetypename,setPkgtype] = useState(props.data.packagetypename)
    const [price,setPrice] = useState(props.data.price)
    const [discount,setDiscount] = useState(props.data.discount)
    const [sessions, setSessions] = useState(props.data.sessions)
    const [timing, setTiming] = useState(props.data.timing)
    
    

    const handleEdit=()=>{
        let count=0
        if(!name || !id || !packagetypename || !price || !discount || !sessions || !timing )
        {
            alert('Please fill all fields')
            count = 10
        }
        if(!image)
        {
            alert('Upload an Image')
            count = 20
        }

        if(count === 0)
        {
            let obj={
                id,
                image,
                name,
                packagetypename,
                price,
                discount,
                sessions,
                timing
            }
            console.log(obj)
            props.UpdatePackage(obj)
            props.edit()
        }
    }

   

    return(

        <div>   
            <Grid >
            <div className={classes.upper}>
                <h3 style={{fontFamily:'Poppins'}}>All Packages</h3>
                <h4 style={{fontFamily:'Poppins'}}>Edit Package detail:</h4>
             </div>
             </Grid>
            <Grid container >
                
            <Grid container >
               <Grid md={6} lg={6} sm={12}>
                    <p style={{fontFamily:'Poppins'}}>Select Package type <InputBase
                        value={packagetypename}
                        onChange={(event)=>setPkgtype(event.target.value)}
                        placeholder="  Select"
                        className={classes.one}                        
                        inputProps={{ 'aria-label': 'select' }}
                    /></p>
                </Grid> 

                <Grid md={6} lg={6} sm={12}>
                    <p style={{fontFamily:'Poppins'}}>Price <InputBase
                        value={price}
                        onChange={(event)=>setPrice(event.target.value)}
                        placeholder="  Price"
                        className={classes.two}                        
                        inputProps={{ 'aria-label': 'price' }}
                    /></p>
                </Grid> 
               
            </Grid>



            <Grid container >
               <Grid md={6} lg={6} sm={12}>
                    <p style={{fontFamily:'Poppins'}}>Package Name <InputBase
                        value={name}
                        onChange={(event)=>setName(event.target.value)}
                        placeholder="  Package Name"
                        className={classes.three}                        
                        inputProps={{ 'aria-label': 'Package Name' }}
                    /></p>
                </Grid> 

                <Grid md={6} lg={6} sm={12}>
                    <p style={{fontFamily:'Poppins'}}>Discount <InputBase
                        value={discount}
                        onChange={(event)=>setDiscount(event.target.value)}
                        placeholder="  Discount"
                        className={classes.four}                        
                        inputProps={{ 'aria-label': 'Discount' }}
                    /></p>
                </Grid> 
               
            </Grid>


            <Grid container >
               <Grid md={6} lg={6} sm={12}>
                    <p style={{fontFamily:'Poppins'}}>Session <InputBase
                        value={sessions}
                        onChange={(event)=>setSessions(event.target.value)}
                        placeholder="  Session"
                        className={classes.five}                        
                        inputProps={{ 'aria-label': 'Session' }}
                    /></p>
                </Grid> 

                <Grid md={6} lg={6} sm={12}>
                    <p style={{fontFamily:'Poppins'}}>Timming <InputBase
                        value={timing}
                        onChange={(event)=>setTiming(event.target.value)}
                        placeholder="  Timming"
                        className={classes.four}                        
                        inputProps={{ 'aria-label': 'Timming' }}
                    /></p>
                </Grid> 
               
            </Grid>
            <Button size="small" color="secondary" style={{backgroundColor:COLORS.btn1}} variant="contained">Upload Image</Button>
            <Button size="small" color="secondary" style={{backgroundColor:COLORS.btn1,marginLeft:'2vh'}} variant="contained"
                onClick={()=>{
                    handleEdit()

                }}
            >Update</Button>
            <Button size="small" color="secondary" style={{backgroundColor:COLORS.btn1,marginLeft:'2vh'}} variant="contained"
                onClick={()=>props.edit()}
            >Reset</Button>
              
            </Grid>
        </div>
)
}
const mapStateToProps = props => {
    return {
      isLoading: props.pkg.isLoading
    }
  }
export default connect(mapStateToProps,{UpdatePackage})(EditPackage)



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
            marginLeft:'3vh', 
        },
        [theme.breakpoints.down('sm')]:{
            marginLeft:'1vh'
        }
        
    },
    two:{
        backgroundColor:'#F0F0F0',
        borderRadius:4,borderColor:'#F0F0F0',
        [theme.breakpoints.up('md')]:{
            marginLeft:'4vh', 
        },
        [theme.breakpoints.between('sm','md')]:{
            marginLeft:'17vh'    
        },
        [theme.breakpoints.down('sm')]:{
            marginLeft:'15vh'
        }
    },
    three:{
        backgroundColor:'#F0F0F0',
        borderRadius:4,
        borderColor:'#F0F0F0',
        [theme.breakpoints.up('md')]:{
            marginLeft:'7vh', 
        },
        [theme.breakpoints.down('sm')]:{
            marginLeft:'5vh'
        }

    },
    four:{
        backgroundColor:'#F0F0F0',
        borderRadius:4,
        borderColor:'#F0F0F0',
        [theme.breakpoints.up('md')]:{
            marginLeft:'1vh', 
        },
        [theme.breakpoints.between('sm','md')]:{
            marginLeft:'13vh'    
        },
        [theme.breakpoints.down('sm')]:{
            marginLeft:'11vh'
        }
    },
    five:{
        backgroundColor:'#F0F0F0',
        borderRadius:4,
        borderColor:'#F0F0F0',
        [theme.breakpoints.up('md')]:{
            marginLeft:'13.5vh', 
        },
        [theme.breakpoints.between('sm','md')]:{
            marginLeft:'13vh'    
        },
        [theme.breakpoints.down('sm')]:{
            marginLeft:'12vh'
        }
    }
}))