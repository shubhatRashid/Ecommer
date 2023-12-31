import React from 'react'
import { useState } from 'react'
import {useDispatch} from "react-redux"
import {IconButton, Box, Typography, useTheme, Button} from "@mui/material"
import RemoveIcon from "@mui/icons-material/Remove"
import AddIcon from "@mui/icons-material/Add"
import {shades} from "../theme"
import {addToCart} from "../state"
import {useNavigate} from "react-router-dom"

const Item = ({item,width}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [count,setCount] = useState(1)
  const [isHovered,setIsHovered] =useState(false)
  const {
    palette : {neutral},
  } = useTheme()
  console.log(item)
  const {catagory,price,name,image} = item.attributes
  const {
    data : {
      attributes : {url}
    }
  } = image
 
  return (
    <Box  width = {width}>
          <Box 
            position = "relative"
            onMouseOver = {() => setIsHovered(true)}
            onMouseOut = {() => setIsHovered(false)}
            >
              <img 
                alt = {item.name}
                width = "250px"
                height = "250px"
                src = {url}
                onClick={() => navigate(`/item/${item.id}`)}
                style = {{cursor:"pointer"}}
              />
              <Box
              display={isHovered?"block":"none"}
              width="100%"
              position = "absolute"
              bottom= "10%"
              left = "0"
              padding = '0 5%'
              >
                    <Box display = "flex" justifyContent="space-between">
                          
                          {/* AMOUNT */}

                          <Box 
                          display = "flex"  
                          alignItems="center" 
                          backgroundColor={shades.neutral[100]} 
                          borderRadius="3px"
                          >
                          <IconButton
                          onClick={() =>
                            setCount(Math.max(count-1,1))
                          }
                            >
                              <RemoveIcon />
                            </IconButton>
                            <Typography color = {shades.primary[300]}>{count}</Typography>
                            <IconButton
                              onClick={() =>
                                setCount(count + 1)
                              }
                            >
                              <AddIcon />
                            </IconButton>
                          </Box>

                          {/* BUTTON */}
                              <Button
                              onClick = {() => dispatch(addToCart({item : {...item,count}}))}
                              sx={{backgroundColor:shades.primary[300],
                                  color : "white"}}>
                                Add to cart
                              </Button>
                    
                    </Box>
              </Box>
          </Box>

          <Box mt = "3px">
                <Typography variant= "subtitle2" color = {neutral.dark}>
                {
                  catagory
                .replace(/([A-Z])/g, " $1")
                .charAt(0).toUpperCase() + catagory.slice(1)
                }
                </Typography>
                <Typography>{name}</Typography>
                <Typography fontWeight="bold">${price}</Typography>
          </Box>
    </Box>
  )
}

export default Item