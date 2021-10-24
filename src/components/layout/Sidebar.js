import React,{useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {COLORS, ICONS, IMAGES} from '../../constants'
import { Grid } from '@material-ui/core';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { routes } from '../routes/routeList';
const drawerWidth=240;

const useStyles=makeStyles((theme)=>({
    root:{
        display:'flex,'
    },
    drawer:{
        [theme.breakpoints.up('sm')]:{
            width:drawerWidth,
            flexShrink:0,
        },
    },
    appBar:{
        [theme.breakpoints.up('sm')]:{
            width:`calc(100%-${drawerWidth}px)`,
            marginLeft:drawerWidth,
            height:'9vh'
        },
        backgroundColor:'white',
        
    },
    menuButton:{
        marginRight:theme.spacing(2),
        [theme.breakpoints.up('sm')]:{
            display:'none',
        },
    },
    toolbar:theme.mixins.toolbar,
    drawerPaper:{
        width:drawerWidth,
    },
    content:{
        flexGrow:1,
        padding:theme.spacing(),
    },
    img:{
        height:'12vh',
        width:'12vh'
    },
    sideImg:{
        height:'6vh',
        width:'6vh',
        borderRadius:'6vh'
    },
    leftLogo:{
        position:'absolute',
        [theme.breakpoints.up('md')]:{
            marginLeft:'28vh'
        },
        [theme.breakpoints.between('sm','md')]:{
            marginLeft:'26vh'
        }
    },
    leftLogoText:{
        color:COLORS.btn1,
        [theme.breakpoints.up('md')]:{
            marginTop:'5vh',
            marginLeft:'-22vh'
        },
        [theme.breakpoints.between('sm','md')]:{
            marginLeft:'-10vh'
        }
    },
    rightProfile:{
        float:'right',
        postion:'absolute',
        marginTop:'1vh',
        [theme.breakpoints.up('md')]:{
        marginLeft:'87%'
        },
        [theme.breakpoints.between('sm','md')]:{
            marginLeft:'80%'
        }
    },
    rightProfileText:{
        color:COLORS.btn1,
        [theme.breakpoints.up('md')]:{
            marginTop:'1.5vh',
            marginLeft:'-4vh'
        },
        
    }
}));


const Sidebar=(props)=>{
    const {window} = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen,setMobileOpen] = useState(false);
    const [active,setActive] = useState()

    const topMenu=[
        {name:'Users',to:'users',icon:<ICONS.PersonAddOutlined/>},
        {name:'Trainers',to:'trainer',icon:<ICONS.Trainer/>},
        {name:'Package Types',to:'packagetypes',icon:<ICONS.T/>},
        {name:'Packages',to:'packages',icon:<ICONS.Location/>},
        {name:'Gyms',to:'#',icon:<ICONS.Gym/>},
        
    ];    

    const lastMenu=[
        {name:'Workouts',to:'workout',icon:<ICONS.Workout/>},
        {name:'Plan',to:'#',icon:<ICONS.Plan/>},
        {name:'Settings',to:'settings',icon:<ICONS.Plan/>},
        {name:'Logout',to:'logout',icon:<ICONS.Logout/>},
        
    ];   
    const drawerChanger=()=>{
        setMobileOpen(!mobileOpen);
    }

    const drawer=(
        <div style={{backgroundColor:COLORS.btn1,height:'100vh'}}>
            <div className={classes.toolbar}/>
            <Divider/>
            <List>
                {
                    topMenu.map((text,index)=>(
                        <ListItem  key={text.name} >
                            <div onClick={()=>setActive(text.name)} style={text.name === active ? {backgroundColor:'red',width:'100vh'} : {color:'white',width:340}}>
                            <Link to={text.to}><ListItemIcon style={{color:'white',float:'left'}}>{text.icon}</ListItemIcon></Link>
                            <Link to={text.to} style={{textDecoration:'none'}}><ListItemText style={{color:'white'}} primary={text.name}/></Link>
                            </div>
                        </ListItem> 
                            ))
                }
            </List>
            <Divider/>
            <List>
                {
                    lastMenu.map((text,index)=>(
                        <ListItem button key={text.name}>
                            <div onClick={()=>setActive(text.name)} style={text.name === active ? {backgroundColor:'red',width:340} : {color:'white',width:340}}>
                            <Link to={text.to}><ListItemIcon style={{color:'white',float:'left'}}>{text.icon}</ListItemIcon></Link>
                            <Link to={text.to} style={{textDecoration:'none'}}><ListItemText style={{color:'white'}} primary={text.name}/></Link>
                            </div>
                        </ListItem> 
                            ))
                }
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return(
        <Router>
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton onClick={drawerChanger} className={classes.menuButton}>
                        <MenuIcon/>
                    </IconButton>
                    <Hidden smDown>
                        <Grid container className={classes.leftLogo}>
                            <Grid md={2} sm={2}><img src={IMAGES.logo} className={classes.img}/></Grid>
                            <Grid md={10} sm={10}><h3 className={classes.leftLogoText}>PT ANYWHERE</h3></Grid>
                        </Grid>

                        <Grid container className={classes.rightProfile}>
                            <Grid md={6}><img src={IMAGES.profile} className={classes.sideImg}/></Grid>
                            <Grid md={6}><h3 className={classes.rightProfileText}>Elbert Einstien</h3></Grid>
                        </Grid>
                    </Hidden>
                    
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer 
                        container={container}
                        variant="temporary"
                        anchor={theme.direction==='rtl'?'right':'left'}
                        open={mobileOpen}
                        onClose={drawerChanger}
                        classes={{
                            paper:classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted:true,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        classes={{
                            paper:classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                    <div className={classes.toolbar}/>
            </main>
            <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.component />}
              />
            ))}
          </Switch>
        </div>
        </Router>
    )
}


export default Sidebar;