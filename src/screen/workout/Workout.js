import React,{useState,useEffect} from 'react'
import { Button, Grid,Input,makeStyles,createTheme } from '@material-ui/core'
import { COLORS,IMAGES } from '../../constants'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from'@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import TablePagination from '@mui/material/TablePagination';
import AddNew from './components/AddNew'
import EditPackage from './components/EditWorkout'
import { connect } from 'react-redux'
import { workoutList,DeleteWorkout } from '../../store/actions/'
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
const Workout = (props) =>{
    const classes = useStyles()
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [isEdit,setIsedit] = useState(false)
    const [editData,setEditdata] =useState()

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
          props.workoutList()
      })
    
    return(
        <div className={classes.container}>
            
            <Grid>
                <div className={classes.upper}>
                    
                    {isEdit?<EditPackage data={editData} edit={handleToogle}/> : <AddNew/>}
                </div>
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
                            <TableCell className={classes.headerText}>Image</TableCell>
                            <TableCell className={classes.headerText}>Workout Name</TableCell>
                            <TableCell className={classes.headerText}>Package Name</TableCell>
                            <TableCell className={classes.headerText}>Action</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            props.workout.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item,index)=>{
                                return(
                                   

                                <TableRow>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell><img src={item.image} className={classes.userDP}/></TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.packagetype}</TableCell>
                                    
                                    <TableCell className={classes.buttons}><Button className={classes.edit} size="small"
                                        onClick={()=>{
                                            setIsedit(true)
                                            setEditdata(item)
                                        }}
                                    
                                    >Edit</Button> 
                                       <Button className={classes.delete} size="small"
                                        onClick={()=>handleDelete(item.id)}
                                       >Delete</Button>
                                    
                                    </TableCell>
                                </TableRow>
                                )
                            })
                        }
                        
                        
                    </TableBody>

                </Table>
            </TableContainer>

            </Grid>


        </div>
    )
}
const mapStateToProps = props => {
    return {
        workout:  props.wrkout.workout,
    }
}
export default connect(mapStateToProps, { workoutList,DeleteWorkout })(Workout)




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
            marginLeft:'32vh',
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
    
}))