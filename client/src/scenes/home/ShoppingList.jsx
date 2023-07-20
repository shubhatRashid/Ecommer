import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from "react-redux"
import{Box,Typography,Tab,Tabs,useMediaQuery}from "@mui/material"
import Item from "../../components/Item"
import {setItems} from "../../state"

const ShoppingList = () => {
    const dispatch = useDispatch()
    const items = useSelector((state) => state.cart.items)
    const [value,setValue] = useState("all")
    const isNonMobile = useMediaQuery("(min-width:600px)")
    console.log("items",items)
    const handleChange = (event,newValue) =>{
        setValue(newValue);
    }
async function getItems()  {
    const items = await fetch(
        "http://localhost:1337/api/items?populate=image",
        {method:"GET"}
    )
    const itemsJson = await items.json()
    dispatch(setItems(itemsJson.data))
}
useEffect(() => {
    getItems() 
},[]) //eslint-disable-line react-hooks/exhaustive-deps

const topRatedItems = items.filter(
    (item) => item.attributes.catagory === "topRated"
)
const bestSellerItems = items.filter(
    (item) => item.attributes.catagory === "bestSellers"
)
const newArrivalItems = items.filter(
    (item) => item.attributes.catagory === "newArrivals"
)
  return (
    <Box
    width = "80%"
    margin = "80px auto"
    >
        <Typography variant="h3" align='center'>
            Our Featured <b>Products</b>
        </Typography>
        <Tabs
        textColor='primary'
        indicatorColor='primary'
        value = {value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{sx:{display:isNonMobile?"block":"none"}}}
        sx={{
            m:"25px",
            "& .MuiTabs-flexContainer":{
                flexWrap:"wrap"
            }}}
        >
            <Tab label = "All" value = "all"></Tab>
            <Tab label = "New Arrivals" value = "newArrivals"></Tab>
            <Tab label = "Best Sellers" value = "bestSellers"></Tab>
            <Tab label = "Top Rated" value = "topRated"></Tab>
        </Tabs>
        <Box
        margin = "0 auto"
        display = "grid"
        gridTemplateColumns="repeat(auto-fill,300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%">

        {value === "all" && items.map((item) =>(
            <Item item={item} key={`${item.name}-${item.id}`}/>
        ))}

        {value === "newArrivals" && newArrivalItems.map((item) =>(
            <Item item={item} key={`${item.name}-${item.id}`}/>
        ))}

        {value === "bestSellers" && bestSellerItems.map((item) =>(
            <Item item={item} key={`${item.name}-${item.id}`}/>
        ))}

        {value === "topRated" && topRatedItems.map((item) =>(
            <Item item={item} key={`${item.name}-${item.id}`}/>
        ))}
        </Box>
       
    </Box>
  )
}

export default ShoppingList