import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
const checkbox=({name,checkStyle,label})=>{
    return(
        <FormControlLabel
            control={
                <Checkbox 
                name={name}
                style={checkStyle}
                />
            }
            label={label}
        />
    )
}
export default checkbox;