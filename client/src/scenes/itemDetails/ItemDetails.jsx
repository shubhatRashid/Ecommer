import React from 'react'
import { useState,useEffect } from 'react'
import {useDispatch} from "react-redux"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import {IconButton, Box, Typography, Button, Tabs,Tab} from "@mui/material"
import RemoveIcon from "@mui/icons-material/Remove"
import AddIcon from "@mui/icons-material/Add"
import {shades} from "../../theme"
import {addToCart} from "../../state"
import {useParams} from "react-router-dom"
import Item from "../../components/Item"

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(100,100)
  }, [])
  return null
}

const ItemDetails = () => {
  const dispatch = useDispatch()
  const {itemId} = useParams()
  console.log(itemId)
  const [value,setValue] = useState("description")
  const [count,setCount] = useState(1)
  const [item,setItem] = useState(null)
  const [items,setItems] =useState([])
  const handleChange = (event,newValue) =>(
    setValue(newValue)
  )
  async function getItem(){
    const item = await fetch(
      `${process.env.REACT_APP_STRAPI_URL}/api/items/${itemId}?populate=image`,
      {method:"GET"}
      )
      const itemJson = await item.json()
      setItem(itemJson.data)
  }

  async function getItems(){
    const items = await fetch(
      `${process.env.REACT_APP_STRAPI_URL}/api/items?populate=image`,
      {method:"GET"}
      )
      const itemsJson = await items.json()
      setItems(itemsJson.data)
  }
  useEffect(() =>{
    getItem()
    getItems()
  },[itemId]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
   <Box
   width="80%"
   margin="80px auto"
   >
    <ScrollToTop />
    <Box display="flex" flexWrap="wrap" columnGap="40px"> 
        {/* IMAGES */}
        <Box flex = "1 1 40%" mb='40px'>
          <img
            alt = {item?.name}
            width="100%"
            height = "80%"
            src={`${process.env.REACT_APP_STRAPI_URL}${item?.attributes?.image?.data?.attributes?.formats?.small?.url}`}
            style={{objectFit:"contain"}}
          />
        </Box>

        {/* ACTIONS */}
        <Box flex = "1 1 50%" mb="40px">
              <Box
               display="flex"
               justifyContent="space-between"
               >
                <Box>Home/Next</Box>
                <Box>Prev/Next</Box>
              </Box>

              <Box m = "65px 0 25px 0">
                <Typography variant='h3'>{item?.attributes?.name}</Typography>
                <Typography>${item?.attributes?.price}</Typography>
                <Typography>{item?.attributes?.shortDescription}</Typography>
              </Box>

              {/* COUNT AND BUTTON */}
              <Box display="flex" alignItems="center" minHeight="50px">
                    <Box 
                    display="flex" 
                    alignItems="center" 
                    minHeight="50px" 
                    border={`1.5px solid ${shades.neutral[300]}`} 
                    mr = "20px" 
                    p="2px 5px"
                    >
                          <IconButton onClick={() => setCount(Math.max(count-1,1))}>
                              <RemoveIcon />
                          </IconButton>
                            <Typography sx={{p:"0 5px"}}>{count}</Typography>
                          <IconButton onClick={() =>setCount(count + 1)}>   
                            <AddIcon />
                          </IconButton>
                    </Box>
                    <Button
                    sx={{
                      backgroundColor : "#222222",
                      color : "white",
                      borderRadius: "0",
                      minWidth:"150px",
                      padding : "10px 40px",
                      ":hover":{
                        backgroundColor:shades.secondary[500]
                      }
                             
                    }}
                    onClick={() =>{dispatch(addToCart({item:{...item, count}}))}}>
                      ADD TO CART
                    </Button>
              </Box>
              <Box>
                <Box m='20px 0 5px 0' display="flex" >
                  <FavoriteBorderOutlinedIcon />
                  <Typography sx={{ml:"5px"}}>Add To Wishlist</Typography>
                </Box>
                <Typography>CATAGORIES : {item?.attributes?.catagory}</Typography>
              </Box>
        </Box>
    </Box>
    {/* INFORMATION */}
    <Box>
      <Tabs value={value} onChange={handleChange}>
              <Tab value="description" label = "DESCRIPTION" />
              <Tab value = "reviews" label = "REVIEW"/>
      </Tabs>
    </Box>
    <Box
    mt="50px"
    display="flex"
    flexWrap="wrap"
    gap = "15px"
    >
      {value === "description" && (
        <div>{item?.attributes?.longDescription}</div>
      )}
      {value === "reviews" && <div>reviews</div>}
    </Box>

    {/* RELATED ITEMS */}
      <Box mt="50px">
        <Typography variant='h3' fontWeight="bold"> Related Products</Typography>
        <Box 
        mt="20px" 
        rowGap="20px"
        display="flex" 
        flexWrap = "wrap"
        columnGap="1.33%"
        justifyContent="space-between"
        >
          {items.slice(0,4).map((item,i) =>(
            <Item key = {`${item.name}-${i}`} item = {item}/>
          ))}
        </Box>
      </Box>


   </Box>
  )
}

export default ItemDetails