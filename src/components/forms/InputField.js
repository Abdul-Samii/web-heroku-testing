import React from 'react'
import { TextField } from '@material-ui/core'

const required=({label,placeholder,value,inputStyle,changeText,variant,fullWidth,maxRows,multiline,rows,color})=>{
    return(
        <TextField 
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={()=>changeText()}
        variant={variant}
        fullWidth = {fullWidth}
        required
        color={color}
        multiline={multiline}
        maxRows={maxRows}
        rows={rows}
        style={{inputStyle}}
        />
    )
}
const password=({label,placeholder,variant,fullWidth})=>{
    return(
        <TextField 
        label={label}
        placeholder={placeholder}
        type="password"
        variant={variant}
        fullWidth = {fullWidth}
        required
        />
    )
}
export default {
    required,
    password,

};