import Lock from '@material-ui/icons/LockOutlined';
import User from '@material-ui/icons/PersonAddOutlined';
import AccessibilityNewOutlined from '@material-ui/icons/AccessibilityNewOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import FitnessCenterOutlinedIcon from '@material-ui/icons/FitnessCenterOutlined';
import SportsHandballOutlinedIcon from '@material-ui/icons/SportsHandballOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import CloseIcon from '@material-ui/icons/Close';
import FormatSizeOutlinedIcon from '@material-ui/icons/FormatSizeOutlined';

const LockOutlinedIcon = (props) => <Lock {...props}/>
const PersonAddOutlined = (props) => <User {...props}/>
const Trainer = (props) => <AccessibilityNewOutlined {...props}/>
const Location = (props) => <LocationOnOutlinedIcon {...props}/>
const Gym = (props) => <FitnessCenterOutlinedIcon {...props}/>
const Workout = (props) => <SportsHandballOutlinedIcon {...props}/>
const Plan = (props) => <StorefrontOutlinedIcon {...props}/>
const Logout = (props) => <ExitToAppOutlinedIcon {...props}/>
const Cross = (props) => <CloseIcon {...props}/>
const T = (props) => <FormatSizeOutlinedIcon {...props}/>

export default{
    LockOutlinedIcon,
    PersonAddOutlined,
    Trainer,
    Location,
    Gym,
    Workout,
    Plan,
    Logout,
    Cross,
    T
}