import React from 'react'
import {Box,Typography,IconButton,useMediaQuery} from "@mui/material"
import {Carousel} from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"
import {shades} from "../../theme"

// IMPORTING ALL IMAGES FROM ASSETS

const importAll = (r) => 
r.keys().reduce((acc,item) =>{
  acc[item.replace("./","")] = r(item);
  return acc
},{})
const heroTextureImports = importAll(
  require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
)


const MainCarousel = () => {
  const IsNonMobile = useMediaQuery("(min-width:600px)")
  return (
    <Carousel
    infiniteLoop = {true}
    showThumbs = {false}
    showIndicators = {false}
    showStatus = {false}
    renderArrowPrev={(onClickHandler,hasPrev,label) =>(
      <IconButton
      onClick={onClickHandler}
      sx={{
        position:"absolute",
        top: "50%",
        left: "0",
        color : "white",
        padding:"5px",
        zIndex:"10",
        backgroundColor:"black"
        }}>
        <NavigateBeforeIcon sx={{fontSize: "40"}}/>
      </IconButton>
    )}
    renderArrowNext={(onClickHandler,hasNext,label) =>(
      <IconButton
      onClick={onClickHandler}
      sx={
        {position:"absolute",
        top: "50%",
        right: "0",
        color : "white",
        padding:"5px",
        zIndex:"10",
        backgroundColor:"black"}
      }>
        <NavigateNextIcon sx={{fontSize: "40"}}/> 
      </IconButton>
    )}
    >
      {Object.values(heroTextureImports).map((texture,index) =>(
        <Box key = {`carousel-image-${index}`}>
              <img 
                src = {texture}
                alt = {`carousel-${index}`}
                style = {{
                  width : "80%",
                  height : IsNonMobile?"600px":"400px",
                  backgroundAttachment : "fixed"
                }}
              />
              <Box
              color = "white"
              padding = "20px"
              borderRadius='1px'
              textAlign="left"
              backgroundColor="rgba(0,0,0,0.4)"
              position = "absolute"
              top = "46%"
              left = {IsNonMobile? "10%" : "0"}
              right = {IsNonMobile? undefined : "0"}
              margin = {IsNonMobile? undefined : "0 auto"}
              maxWidth = {IsNonMobile? undefined : "240px"}
              >
                <Typography
                color = {shades.secondary[200]}
                >
                  -- NEW ITEMS
                </Typography>

                <Typography variant='h1'>SUMMER SALE</Typography>
                
                <Typography 
                fontWeight="bold" 
                color = {shades.secondary[300]}
                sx = {{textDecoration:"underline"}}
                >
                Discover More
                </Typography>
              </Box>
        </Box>
      ))}
    </Carousel>
  )
}

export default MainCarousel