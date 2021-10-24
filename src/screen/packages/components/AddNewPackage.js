import React,{useState,useEffect} from 'react'
import InputBase from '@mui/material/InputBase';
import { Button, Grid,makeStyles,createTheme } from '@material-ui/core'
import { COLORS, IMAGES } from '../../../constants';
import { connect } from 'react-redux';
import { UploadImage,AddPackage } from '../../../store/actions';
import { packageTypeList } from '../../../store/actions';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


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
const AddNewPackage = (props) =>{
    const classes = useStyles()
    const [name,setName] = useState()
    const [packagetypename,setPkgtype] = useState()
    const [price,setPrice] = useState()
    const [discount,setDiscount] = useState()
    const [sessions, setSessions] = useState()
    const [timing,setTiming] = useState()

    const clearStates=()=>{
        setName(null)
        setPkgtype(null)
        setPrice(null)
        setDiscount(null)
        setSessions(null)
        setTiming(null)
    }
console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",props.pkgtype[0])
const handleAddRecord=()=>{
    let count=0
        if(!name || !packagetypename || !price || !discount || !sessions || !timing )
        {
            alert('Please fill all fields')
            count = 10
        }

        if(count === 0)
        {
            let obj={
                name,
                packagetypename,
                price,
                discount,
                sessions,
                timing
            }
            console.log(obj)
            props.AddPackage(obj)
            setName(null)
            clearStates()
        }
}
useEffect(()=>{
    props.packageTypeList()
})
const options =props.pkgtype[1]
//   const defaultOption = options[0];
return(

        <div>   
            <Grid >
            <div className={classes.upper}>
                <h3 style={{fontFamily:'Poppins'}}>All Packages</h3>
                <h4 style={{fontFamily:'Poppins'}}>Create new Package:</h4>
             </div>
             </Grid>
            <Grid container >
               <Grid md={6} lg={6} sm={12}>
                    <p style={{fontFamily:'Poppins'}}>Select Package type<Dropdown options={options}  
                    value={packagetypename} 
                    style={{color:'yellow'}}
                    className={classes.one}
                    onChange={(event)=>{
                        setPkgtype(event.value)
                    }}  
                    placeholder="Select type" /> </p>
                    

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

            <Button size="small" color="secondary" style={{backgroundColor:COLORS.btn1}} variant="contained"
                onClick={()=>handleAddRecord()}
            >Add</Button>

        </div>
)
}

const mapStateToProps = props => {
    console.log('9099090909090909090',props.pkg.pkgType)
    return {
        pkgtype:props.pkg.pkgType
    }
}
export default connect(mapStateToProps,{UploadImage,packageTypeList,AddPackage})(AddNewPackage)


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
    },

    one:{
        backgroundColor:'#F0F0F0',
        borderRadius:4,borderColor:'#F0F0F0',
       
        [theme.breakpoints.up('md')]:{
            marginLeft:'20.5vh', 
            width:'23vh',
            marginTop:'-3vh'
        },
        [theme.breakpoints.down('sm')]:{
            marginLeft:'20vh',
            width:'28vh',
            marginTop:'-3vh'
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