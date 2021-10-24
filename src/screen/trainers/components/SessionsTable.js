import React,{useState,useEffect} from 'react'
import { WithStyles,makeStyles } from '@material-ui/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from'@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Button, createTheme, Grid } from '@material-ui/core'
import { COLORS, IMAGES } from '../../../constants'
import { connect } from 'react-redux'
import { userList } from '../../../store/actions'
import { SWITCH } from '../../../components'
import { routes } from '../../../components/routes/routeList'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
// import { UserDetail } from '.'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


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


const useStyles=makeStyles(()=>({
    container:{
        marginLeft:0,
        [theme.breakpoints.between('md','xl')]:{
            marginLeft:'32vh',
            width:'83%',
        },
        
    },
    header: {
        backgroundColor:COLORS.btn1
      },
    headerText:{
        color:COLORS.white1
    },
    
    table:{
        marginLeft:'2vh',
        
    },
    userDP:{
        height:'5vh',
        width:'5vh',
        borderRadius:'2.5vh'
    },
    tabs:{
        borderBottom: 1, 
        borderColor: 'divider',
        position:'absolute',
        [theme.breakpoints.up('md')]:{
            marginLeft:'4vh',
        marginTop:'-2vh',
        width:'50vh',
        },
        [theme.breakpoints.down('xs')]:{
            marginLeft:'8vh',
            width:'50vh'
        },
        [theme.breakpoints.between('sm','md')]:{
            marginLeft:'43vh'
        }
    }
    
}));





function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }




const SessionsTable=(props)=>{
    // console.log("Data "+props.user)
    useEffect(()=>{
        props.userList()
    })
    const [modal,setModal]=useState(false)
    const [selectData,setSelectData]=useState([])
    const [status,setStatus] = useState()
    const [upcomming,setUpcomming] = useState(true)
    const [completed,setCompleted] = useState(false)
    const [canceled,setCanceled] = useState(false)

    
    const modalHandler=()=>{
        console.log()
        setModal(!modal)
    }
    const classes=useStyles()
    const data=[
        {type:'Monthly',name:'Super Fit',location:'Dubai',date:'05/09/22',time:'10:00 am',comments:'accepted'},
        {type:'Monthly',name:'Super Fit',location:'Dubai',date:'05/09/22',time:'10:00 am',comments:'accepted'},
        {type:'Monthly',name:'Super Fit',location:'Dubai',date:'05/09/22',time:'10:00 am',comments:'accepted'},
        {type:'Monthly',name:'Super Fit',location:'Dubai',date:'05/09/22',time:'10:00 am',comments:'accepted'},
        {type:'Monthly',name:'Super Fit',location:'Dubai',date:'05/09/22',time:'10:00 am',comments:'accepted'},
        {type:'Monthly',name:'Super Fit',location:'Dubai',date:'05/09/22',time:'10:00 am',comments:'accepted'},
    ]
    // const data = props.user
    return(
        <Router>
        <Grid className={classes.container}>


        
        
        <Grid container className={classes.tabs}>
            <Button style={upcomming ? {color:COLORS.btn1,textDecorationLine:'underline',backgroundColor:COLORS.btn1,color:'white'}:{color:'black'}} 
            onClick={()=>{
                setUpcomming(true)
                setCompleted(false)
                setCanceled(false)
                
            }}>Upcomming</Button>

            <Button  style={completed ? {color:COLORS.btn1,textDecorationLine:'underline',backgroundColor:COLORS.btn1,color:'white'}:{color:'black'}}
            onClick={()=>{
                setUpcomming(false)
                setCompleted(true)
                setCanceled(false)
                
            }}
            >Completed</Button>

            <Button style={canceled ? {color:COLORS.btn1,textDecorationLine:'underline',backgroundColor:COLORS.btn1,color:'white'}:{color:'black'}}
            onClick={()=>{
                setUpcomming(false)
                setCompleted(false)
                setCanceled(true)
                
            }}
            >Canceled</Button>
        </Grid>

      <TabPanel  value={upcomming} index={true} style={{color:'red'}}>
      <TableContainer component={Paper}>
                <Table  >
                    <TableHead className={classes.header}>
                        <TableRow>
                            <TableCell className={classes.headerText}>Id</TableCell>
                            <TableCell className={classes.headerText}>Image</TableCell>
                            <TableCell className={classes.headerText}>Name</TableCell>
                            <TableCell className={classes.headerText}>Type Name</TableCell>
                            <TableCell className={classes.headerText}>Price</TableCell>
                            <TableCell className={classes.headerText}>Discount</TableCell>
                            <TableCell className={classes.headerText}>Sessions</TableCell>
                            <TableCell className={classes.headerText}>Timming</TableCell>
                            <TableCell className={classes.headerText}>Action</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            data.map((item,index)=>{
                                return(
                                   

                                <TableRow>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell><img src={IMAGES.profile} className={classes.userDP}/></TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.packagetypename}</TableCell>
                                    <TableCell>{item.price}</TableCell>
                                    <TableCell>{item.discount}</TableCell>
                                    <TableCell>{item.sessions}</TableCell>
                                    <TableCell>{item.timing}</TableCell>
                                    
                                    <TableCell className={classes.buttons}><Button className={classes.edit} color="secondary" size="small"
                                        
                                    
                                    >Edit</Button> 
                                       <Button className={classes.delete} size="small"
                                       >Delete</Button>
                                    
                                    </TableCell>
                                </TableRow>
                                )
                            })
                        }
                        
                        
                    </TableBody>

                </Table>
            </TableContainer>

      </TabPanel>


      {/* CANCELLED SESSION */}
      <TabPanel  value={canceled} index={true}>
      <TableContainer component={Paper}>
                <Table TableRow={2} >
                    <TableHead className={classes.header}>
                        <TableRow>
                            <TableCell className={classes.headerText}>Package Type</TableCell>
                            <TableCell className={classes.headerText}>Workout Name</TableCell>
                            <TableCell className={classes.headerText}>Location</TableCell>
                            <TableCell className={classes.headerText}>Date</TableCell>
                            <TableCell className={classes.headerText}>Time</TableCell>
                            <TableCell className={classes.headerText}>Comments</TableCell>
                            <TableCell className={classes.headerText}>Cancelation Date</TableCell>
                            <TableCell className={classes.headerText}>Reason</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            data.map((item,index)=>{
                                return(
                                   

                                <TableRow>
                                    <TableCell>{item.type}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.location}</TableCell>
                                    <TableCell>{item.date}</TableCell>
                                    <TableCell>{item.time}</TableCell>
                                    <TableCell>{item.comments}</TableCell>
                                    <TableCell>12/08/21</TableCell>
                                    <TableCell>Injury</TableCell>
                                </TableRow>
                                )
                            })
                        }
                        
                        
                    </TableBody>

                </Table>
            </TableContainer>
      </TabPanel>


      {/* #COMPLETED SESSION */}
      <TabPanel value={completed} index={true} >
      <TableContainer component={Paper}>
                <Table TableRow={2} >
                    <TableHead className={classes.header}>
                        <TableRow>
                            <TableCell className={classes.headerText}>Package Type</TableCell>
                            <TableCell className={classes.headerText}>Workout Name</TableCell>
                            <TableCell className={classes.headerText}>Location</TableCell>
                            <TableCell className={classes.headerText}>Date</TableCell>
                            <TableCell className={classes.headerText}>Time</TableCell>
                            <TableCell className={classes.headerText}>Comments</TableCell>
                            <TableCell className={classes.headerText}>Completion Date</TableCell>
                            <TableCell className={classes.headerText}>Outcome</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            data.map((item,index)=>{
                                return(
                                   

                                <TableRow>
                                    <TableCell>{item.type}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.location}</TableCell>
                                    <TableCell>{item.date}</TableCell>
                                    <TableCell>{item.time}</TableCell>
                                    <TableCell>{item.comments}</TableCell>
                                    <TableCell>14/06/20</TableCell>
                                    <TableCell>User is Satisfied</TableCell>
                                </TableRow>
                                )
                            })
                        }
                        
                        
                    </TableBody>

                </Table>
            </TableContainer>
      </TabPanel>

           
            
        {/* <Switch>
              <Route
                path="profile"
                exact={true}
                children={<UserDetail/>}
              />
            </Switch> */}
          
          </Grid>
        </Router>
    )
}


const mapStateToProps = props => {
    // console.log("HERE "+props.user.users)
    return {
        user:  props.user.users,
      
    }
}
export default connect(mapStateToProps, { userList })(SessionsTable)
// export default MainScreen