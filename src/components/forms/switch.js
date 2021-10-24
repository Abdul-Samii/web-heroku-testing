import React,{useState} from "react";
import Switch from '@mui/material/Switch'

export const SWITCH =({checked,setChecked})=>{
    const [s,setS] = useState(checked)
    
    return(
        <Switch
            checked = {s}
            onChange={(event)=>{
                setS(!s)
                setChecked()
            }}
            inputProps={{ 'aria-label': 'controlled' }}
        />
    )
    
}