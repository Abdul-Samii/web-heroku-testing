import React from 'react'
import { Button } from '@material-ui/core';
const button=({btnStyle,label,onClick})=>{
    return(
        <Button fullWidth onClick={()=>onClick()} style={btnStyle} variant="contained">{label}</Button>
        )
}
export default button;