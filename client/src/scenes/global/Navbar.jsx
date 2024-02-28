import React, { useState } from 'react'
import {useDispatch,useSelector} from "react-redux"
import {Badge,Box,IconButton,TextField} from "@mui/material"
import Close from "@mui/icons-material/Close"
import {
  headContainerAnimation,
  slideAnimation
       } from "../../configs/motion"

import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined
} from "@mui/icons-material"
import {useNavigate} from "react-router-dom"
import {shades} from "../../theme"
import{ motion} from "framer-motion"
import {setIsCartOpen} from "../../state"
import Profile from "./Profile"

const Navbar = () => {
  const [clickProfile,setClickProfile] = useState(false)
  const [clickSearch,setClickSearch] = useState(false)
  const [search,setSearch] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart.cart)
  
  return (
    <Box
     display = "flex"
     alignItems = "center"
     width = "100%"
     height = '60px'
     backgroundColor = "rgba(255,255,255,0.95"
     color ="black"
     position = "fixed"
     top = "0"
     left = "0"
     zIndex = "1"
     >
      <Box
      width="80%"
      margin="auto"
      display="flex"
      justifyContent="space-between"
      alignItems="center">

            <motion.Box
            {...headContainerAnimation}
            onClick = {() => navigate("/")}
            sx={{'&:hover':{cursor:"pointer"}}}
            color ={shades.secondary[500]}>
              ECOMMER
            </motion.Box>

            {clickSearch && 
            <Box width="90%" display="flex" justifyContent="center" alignItems="center">
              <TextField 
                  fullWidth
                  size='small'
                  type='text'
                  placeholder='search ...'
                  name='search'
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
              />
              <IconButton onClick={() => setClickSearch(false)}>
                <Close/>
              </IconButton>
            </Box>
            }

            {!clickSearch && <motion.Box
            {...slideAnimation("down")}
             display={'flex'}
             justifyContent="space-between"
             columnGap="20px"
             zIndex="2"
            >       
                  {!clickSearch && <IconButton sx={{color:"black"}} onClick={() => setClickSearch(true)}>
                    <SearchOutlined/>
                  </IconButton>}

                  <IconButton sx={{color:"black"}} onClick={() => setClickProfile(true)} >
                    <PersonOutline/>
                  </IconButton>

                  <Badge 
                  badgeContent={cart.length}
                  color = "secondary" 
                  invisible= {cart.length === 0}
                  sx={{
                    "& .MuiBadge-badge" :{
                      right : 5,
                      top : 5,
                      padding : "0 4px",
                      height : "14px"
                    }
                  }}>
                  <IconButton onClick = {() => dispatch(setIsCartOpen({}))} sx={{color:"black"}}>
                    <ShoppingBagOutlined/>
                  </IconButton>
                  </Badge>

                  <IconButton sx={{color:"black"}}>
                    <MenuOutlined/>
                  </IconButton>

            </motion.Box>}
      </Box>
      {clickProfile && (
              <Profile setClick = {() => setClickProfile(false)}/>
            )}
    </Box>
  )
}

export default Navbar