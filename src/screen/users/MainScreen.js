import React,{useState,useEffect} from 'react'
import { WithStyles,makeStyles } from '@material-ui/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from'@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Button, createTheme, Grid,Switch as Switchh } from '@material-ui/core'
import { COLORS, IMAGES } from '../../constants'
import { connect } from 'react-redux'
import { userList } from '../../store/actions'
import { SWITCH } from '../../components'
import { routes } from '../../components/routes/routeList'
import { UserDetail, UserInfo } from '.'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import createHistory from 'history/createBrowserHistory'
   const history = createHistory()
  // history.go()
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
    header: {
        backgroundColor:COLORS.btn1
      },
    headerText:{
        color:COLORS.white1
    },
    
    table:{
        
        [theme.breakpoints.down('xs')]:{
            width:'49vh',
            marginLeft:'1vh',
            marginRight:'1vh',
            marginTop:'5vh'
        },
        [theme.breakpoints.up('md')]:{
            width:'100vh',
            marginLeft:'25%',
            marginTop:'10vh'
        },
        [theme.breakpoints.between('sm','md')]:{
            width:'80vh',
            marginLeft:'40vh'
        },
        [theme.breakpoints.between('xs','sm')]:{
            width:'67vh',
            marginLeft:'1vh',
            marginTop:'7vh'
        }
    },
    userDP:{
        height:'5vh',
        width:'5vh',
        borderRadius:'2.5vh'
    }
    
}));

const MainScreen=(props)=>{
    // console.log("Data "+props.user)
    useEffect(()=>{
        props.userList()
    })
    const [modal,setModal]=useState(false)
    const [selectData,setSelectData]=useState([])
    const [status,setStatus] = useState()
    const [checked,setChecked] = useState(true)
    const modalHandler=()=>{
        console.log()
        setModal(!modal)
    }
    const classes=useStyles()
    // const data=[
    //     {name:'Ortan',email:'abc@example.com',phone:'+92340510XXXX',address:'Islamabad, Pak'},
    //     {name:'John',email:'abc@example.com',phone:'+92340510XXXX',address:'Islamabad, Pak'},
    //     {name:'Peter',email:'abc@example.com',phone:'+92340510XXXX',address:'Islamabad, Pak'},
    //     {name:'Oliver',email:'abc@example.com',phone:'+92340510XXXX',address:'Islamabad, Pak'},
    //     {name:'Ben',email:'abc@example.com',phone:'+92340510XXXX',address:'Islamabad, Pak'},
    //     {name:'Kevin',email:'abc@example.com',phone:'+92340510XXXX',address:'Islamabad, Pak'},
    // ]
    const data = props.user
    return(
        <Router>
        <Grid xs={3} xl={6} lg={12} visibility>
            <TableContainer className={classes.table} component={Paper}>
                <Table >
                    <TableHead className={classes.header}>
                        <TableRow>
                            <TableCell className={classes.headerText}>ID</TableCell>
                            <TableCell className={classes.headerText}>Profile Image</TableCell>
                            <TableCell className={classes.headerText}>Name</TableCell>
                            <TableCell className={classes.headerText}>Email</TableCell>
                            <TableCell className={classes.headerText}>Contact</TableCell>
                            <TableCell className={classes.headerText}>Status</TableCell>
                            <TableCell className={classes.headerText}>View Detail</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            data.map((item,index)=>{
                                console.log(item.status)
                                
                                
                                return(
                                   

                                <TableRow>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell><img src={IMAGES.profile} className={classes.userDP}/></TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.contact_number}</TableCell>
                                    <TableCell><Switchh checked={item.status == 'active'&&checked}/></TableCell>
                                    <TableCell onClick={()=>{
                                        history.push({
                                            pathname: '/userinfo',
                                            state: { detail: item }
                                        });
                                    }}><Button style={{backgroundColor:COLORS.inactive}}>View</Button></TableCell>
                                </TableRow>
                                )
                            })
                        }
                        
                        
                    </TableBody>

                </Table>
            </TableContainer>
            
        <Switch>
              <Route
                path="/userinfo"
                exact={true}
                children={<UserInfo/>}
              />
            </Switch>
          
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
export default connect(mapStateToProps, { userList })(MainScreen)
// export default MainScreen