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

const ItemDetails = () => {
  const dispatch = useDispatch()
  const itemId = useParams()
  const [value,setValue] = useState("description")
  const [count,setCount] = useState(1)
  const [item,setItem] = useState(null)
  const [items,setItems] =useState([])
  const handleChange = (event,newValue) =>(
    setValue(newValue)
  )
  async function getItem(){
    const items = await fetch(
      `http://localhost:1337/items${itemId}?populate=image`,
      {method:"GET"}
      )
      const itemJson = await items.json()
      setItem(itemJson.data)
  }

  async function getItems(){
    const items = await fetch(
      "http://localhost:1337/items?populate=image",
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
   margin="80px"
   >
    <Box display="flex" flex="wrap" columnGap="40px"> 
          {/* IMAGES */}
          <Box flex = "1 1 40%">

          </Box>
    </Box>
   </Box>
  )
}

export default ItemDetails