import React,{useState,useEffect} from 'react'
import { Button, Grid,Input,makeStyles,createTheme ,TabPanel} from '@material-ui/core'
import { COLORS,IMAGES } from '../../constants'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from'@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import TablePagination from '@mui/material/TablePagination';
import { connect } from 'react-redux'
import { TrainersList,updateTrainerStatus } from '../../store/actions'
import { Loader } from '../../components/Loader/Loader'
import { SWITCH } from '../../components'
import createHistory from 'history/createBrowserHistory'
import { Switch } from '@mui/material'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

   const history = createHistory()
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
const Trainers = (props) =>{
    const classes = useStyles()
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [isEdit,setIsedit] = useState(false)
    const [checked,setChecked] =useState(true)
    const [approved,setApproved] = useState(true)
    const [request,setRequest] = useState(false)
    // const [USER_ID,setUserid] = useState()
    // const [status,setStatus] = useState()

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };
      const handleToogle=()=>{
        setIsedit(!isEdit)
      }
      const handleDelete=(id)=>{
        if(window.confirm("Press button")){
            let obj={
                id
            }
            props.DeleteWorkout(obj)
        }
        else{
            console.log("NO")
        }
    }
      useEffect(()=>{
          props.TrainersList()
      },[])
      useEffect(()=>{
        setChecked(true)
    })
      
    
      const handleStatusChange = (TRAINER_ID,status) =>{
          let obj={
              TRAINER_ID,
              status
          }
        props.updateTrainerStatus(obj)
      }

     const data = [
          {id:1, name:'Yasin', desc:'Available to work',rating:3,timings:'9AM - 10AM',status:'Active'},
          {id:2, name:'Yasin', desc:'Available to work',rating:3,timings:'9AM - 10AM',status:'Inactive'},
          {id:3, name:'Yasin', desc:'Available to work',rating:3,timings:'9AM - 10AM',status:'Active'},
          {id:4, name:'Yasin', desc:'Available to work',rating:3,timings:'9AM - 10AM',status:'Inactive'},
          {id:5, name:'Yasin', desc:'Available to work',rating:3,timings:'9AM - 10AM',status:'Active'},
          {id:6, name:'Yasin', desc:'Available to work',rating:3,timings:'9AM - 10AM',status:'Inactive'},
          {id:7, name:'Yasin', desc:'Available to work',rating:3,timings:'9AM - 10AM',status:'Inactive'},
          {id:8, name:'Yasin', desc:'Available to work',rating:3,timings:'9AM - 10AM',status:'Active'},
          {id:9, name:'Yasin', desc:'Available to work',rating:3,timings:'9AM - 10AM',status:'Active'},
          {id:10, name:'Yasin', desc:'Available to work',rating:3,timings:'9AM - 10AM',status:'Active'},

        ]
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
        
    return(
        <div className={classes.container}>
            {props.isLoading && <Loader/> }
            
            <Grid>
            <Grid container className={classes.tabs}>
            <Button style={approved ? {color:COLORS.btn1,textDecorationLine:'underline',textDecoration:'none',backgroundColor:COLORS.btn1,color:'white'}:{color:'black'}} 
            onClick={()=>{
                setApproved(true)
                setRequest(false)
                
            }}>Approved</Button>

            <Button  style={request ? {color:COLORS.btn1,textDecoration:'none',backgroundColor:COLORS.btn1,color:'white'}:{color:'black'}}
            onClick={()=>{
                setApproved(false)
                setRequest(true)
            }}
            >Requested</Button>

            
        </Grid>
        <TabPanel  value={approved} index={true} style={{color:'red'}}>
            <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
            <TableContainer component={Paper}>
                <Table TableRow={2} >
                    <TableHead className={classes.header}>
                        <TableRow>
                            <TableCell className={classes.headerText}>Id</TableCell>
                            <TableCell className={classes.headerText}>Name</TableCell>
                            <TableCell className={classes.headerText}>Description</TableCell>
                            <TableCell className={classes.headerText}>Rating</TableCell>
                            <TableCell className={classes.headerText}>Timmings</TableCell>
                            <TableCell className={classes.headerText}>Status</TableCell>
                            <TableCell className={classes.headerText}>Action</TableCell>
                            <TableCell classNam={classes.headerText}></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            props.trainersList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item,index)=>{
                                // let obj = JSON.parse(item.timing)
                                // alert(item.name)

                                console.log("test====",item)
                                // console.log('hy',JSON.parse(item.timing))
                                return(

                                item.status != 'pending' && item.status!='inactive' && <TableRow style={item.status=='Inactive'?{backgroundColor:COLORS.active}:{}}>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.desc}</TableCell>
                                    <TableCell>{item.rating}</TableCell>
                                    <TableCell>{item.timing}</TableCell>
                                    <TableCell>{item.status}</TableCell>
                                    
                                    <TableCell>
                                       
                                            <Switch onChange={()=>{
                                                
                                                handleStatusChange(item.id,'pending')
                                            }}/>    
                                    

                                    </TableCell>
                                    <TableCell><Button variant='outlined'
                                    onClick={()=>{
                                        history.push({
                                            pathname: '/viewtrainer',
                                            state: { detail: item }
                                        })
                                    }
                                    }
                                    >View</Button></TableCell>
                                </TableRow>
                                )
                            })
                        }
                        
                        
                    </TableBody>

                </Table>
            </TableContainer>
                        </TabPanel>




                        <TabPanel  value={request} index={true} style={{color:'red'}}>
            <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
            <TableContainer component={Paper}>
                <Table TableRow={2} >
                    <TableHead className={classes.header}>
                        <TableRow>
                            <TableCell className={classes.headerText}>Id</TableCell>
                            <TableCell className={classes.headerText}>Name</TableCell>
                            <TableCell className={classes.headerText}>Description</TableCell>
                            <TableCell className={classes.headerText}>Rating</TableCell>
                            <TableCell className={classes.headerText}>Timmings</TableCell>
                            <TableCell className={classes.headerText}>Status</TableCell>
                            <TableCell className={classes.headerText}>Action</TableCell>
                            <TableCell classNam={classes.headerText}></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            props.trainersList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item,index)=>{
                                // let obj = JSON.parse(item.timing)
                                // alert(item.name)

                                console.log("test====",item)
                                // console.log('hy',JSON.parse(item.timing))
                                return(

                                item.status == 'pending'&& <TableRow style={item.status=='Inactive'?{backgroundColor:COLORS.active}:{}}>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.desc}</TableCell>
                                    <TableCell>{item.rating}</TableCell>
                                    <TableCell>{item.timing}</TableCell>
                                    <TableCell>{item.status}</TableCell>
                                    
                                    <TableCell>
                                        {item.status == 'pending'?
                                            <Grid container className={classes.buttons}><Button size='small' style={{backgroundColor:COLORS.btn1,color:'white'}}
                                            onClick={()=>{
                                                
                                                handleStatusChange(item.id,'active')
                                            }}
                                            >Approve</Button>
                                            <Button size='small' style={{backgroundColor:COLORS.active,color:'white',marginLeft:'0.5vh'}}
                                            onClick={()=>{
                                                handleStatusChange(item.id,'inactive')
                                            }}
                                            >Reject</Button></Grid>:
                                            <Switch/>    
                                    }

                                    </TableCell>
                                    <TableCell><Button variant='outlined'
                                    onClick={()=>{
                                        history.push({
                                            pathname: '/viewtrainer',
                                            state: { detail: item }
                                        })
                                    }
                                    }
                                    >View</Button></TableCell>
                                </TableRow>
                                )
                            })
                        }
                        
                        
                    </TableBody>

                </Table>
            </TableContainer>
                        </TabPanel>
            </Grid>


        </div>
    )
}
const mapStateToProps = props => {
    return {
        isLoading:  props.trainer.isLoading,
        trainersList : props.trainer.trainers,
        
    }
}
export default connect(mapStateToProps, { TrainersList,updateTrainerStatus })(Trainers)




const useStyles = makeStyles(()=>({
   
   userDP:{
    height:'5vh',
    width:'5vh',
    borderRadius:'2.5vh'
    },
    header: {
        backgroundColor:COLORS.btn1
      },
    headerText:{
        color:COLORS.white1
    },
    container:{
        marginLeft:0,
        [theme.breakpoints.between('mdL','xl')]:{
            marginLeft:'33vh',
            width:'83%',
        },
        
    },
    buttons:{
        [theme.breakpoints.up('md')]:{
            marginLeft:'-20vh'
        }
    },
    edit:{
        backgroundColor:COLORS.btn1,
        color:'white',
        [theme.breakpoints.up(1000)]:{
        marginLeft:'-5vh'
        }
    },
    delete:{
        backgroundColor:COLORS.active,
        color:'white',
        [theme.breakpoints.up(1000)]:{
        marginLeft:'0.5vh'
        }
    },
    buttons:{
        [theme.breakpoints.up('md')]:{
            marginLeft:'-3vh'
        }
    }
}))