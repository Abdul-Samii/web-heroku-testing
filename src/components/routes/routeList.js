import { Users } from "../../screen";
import { Packages } from "../../screen/packages";
import Package from "../../screen/packages/Package";
import { PackageType } from "../../screen/packageType";
import { ProfileSettings } from "../../screen/profileSettings.js";
import { Trainers } from "../../screen/trainers";
import ViewTrainer from "../../screen/trainers/ViewTrainer";
import { UserDetail, UserInfo } from "../../screen/users";
import { Workout } from "../../screen/workout";
import { Logout } from "../Logout/Logout";


export const routes = [
    {
        path:'/pkgTypes',
        exact: true,
        component: Packages
    },
    {
        path:'/users',
        exact:true,
        component: Users
    },
    {
        path:'/packages',
        exact:true,
        component: Packages
    },
    {
        path:'/logout',
        exact:true,
        component: Logout
    },
    {
        path:'/userinfo',
        exact:true,
        component: UserInfo
    },
    {
        path:'/packagetypes',
        exact:true,
        component: PackageType
    },
    {
        path:'/packages',
        exact:true,
        component: Package
    },
    {
        path:'/workout',
        exact:true,
        component:Workout
    },
    {
        path:'/settings',
        exact:true,
        component:ProfileSettings
    },
    {
        path:'/trainer',
        exact:true,
        component:Trainers
    },
    {
        path:'/viewtrainer',
        exact:true,
        component:ViewTrainer
    }

]
