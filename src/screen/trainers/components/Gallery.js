import React from 'react'
import { Grid,makeStyles,createTheme } from '@material-ui/core'
import { IMAGES } from '../../../constants'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 420,
        sm: 600,
        md: 700,
        lg: 1200,
        xl: 1536,
      },
    },
  });
const Gallery=()=>{
    const classes = useStyles()
    return(
        <Carousel style={{height:'auto',width:'auto'}} className={classes.container} showArrows={true}>
                <div>
                    <img  style={{height:'20vh',width:'23vh'}} src={IMAGES.img1} />
                </div>
                <div>
                    <img style={{height:'20vh',width:'23vh'}} src={IMAGES.img2} />
                </div>
                <div>
                    <img style={{height:'20vh',width:'23vh'}} src={IMAGES.profile} />
                </div>
                <div>
                    <img style={{height:'20vh',width:'23vh'}} src={IMAGES.img2} />
                </div>
                <div>
                    <img style={{height:'20vh',width:'23vh'}} src={IMAGES.img1} />
                </div>
                <div>
                    <img style={{height:'20vh',width:'23vh'}} src={IMAGES.img2} />
                </div>
            </Carousel>
    )
}

export default Gallery

const useStyles = makeStyles(()=>({
container:{
    container:{
        
    }
}
}))