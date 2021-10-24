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
import { AddNewPackage } from './components'
import EditPackage from './components/EditPackage'
import { connect } from 'react-redux'
import { packages,packageTypeList,DeletePackage} from '../../store/actions/packageAction'
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
const Package = (props) =>{
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
        if(window.confirm("Are you sure you want to delete !!!")){
            let obj={
                id
            }
            props.DeletePackage(obj)
        }
        else{
            console.log("NO")
        }
    }
      useEffect(()=>{
          props.packages()
      })
    // const data = [
    //     {sr:1,name:'Solo',description:'Some dummy content show only upto one line that it not exceed'},
    //     {sr:1,name:'Solo',description:'Some dummy content show only upto one line that it not exceed'},
    //     {sr:1,name:'Solo',description:'Some dummy content show only upto one line that it not exceed'},
    //     {sr:1,name:'Solo',description:'Some dummy content show only upto one line that it not exceed'},
    //     {sr:1,name:'Solo',description:'Some dummy content show only upto one line that it not exceed'},
    //     {sr:1,name:'Solo',description:'Some dummy content show only upto one line that it not exceed'},
    //     {sr:1,name:'Solo',description:'Some dummy content show only upto one line that it not exceed'},
    // ]
    return(
        <div className={classes.container}>
            
            <Grid>
                <div className={classes.upper}>
                    
                    {isEdit?<EditPackage data={editData} edit={handleToogle}/> : <AddNewPackage/>}
                </div>
            <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={props.pkgs.length}
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
                            props.pkgs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item,index)=>{
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
        pkgs:  props.pkg.pkgs,
        pkgtype:props.pkg.pkgtype
    }
}
export default connect(mapStateToProps, { packages,packageTypeList,DeletePackage })(Package)




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