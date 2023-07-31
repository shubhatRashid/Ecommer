import React,{useState} from 'react'
import { useTheme } from '@mui/material'
import {Box,Typography} from "@mui/material"
import {shades} from "../../theme"

const Footer = () => {
    const {palette: {neutral}} = useTheme()
  return (
    <Box
    mt = "70px"
    p = "40px 0"
    backgroundColor = {neutral.light}
    >
        <Box
        width = "80%"
        m = "auto"
        display = "flex"
        justifyContent="space-between"
        flexWrap = "wrap"
        rowGap = "30px"
        columnGap="clamp(20px,30px,40px)"
        >
                <Box width = "clamp(20% 30% 40%)">
                    <Typography 
                    variant='h4' 
                    fontWeight="bold"
                    mb = "30px"
                    color = {shades.secondary[500]}
                    >
                      Ecommer
                    </Typography>
                    <div>
                        Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and 
                        scrambled it to make a type specimen book.
                    </div>
                </Box>
                <Box>
                    <Typography variant='h4' fontWeight="bold" mb = "30px">
                        About Us
                    </Typography>
                    <Typography mb = "30px">Careers</Typography>
                    <Typography mb = "30px">Our Stories</Typography>
                    <Typography mb = "30px">Terms and Conditions</Typography>
                    <Typography mb = "30px">Privacy Policy</Typography>
                </Box>
                <Box>
                    <Typography variant='h4' fontWeight="bold" mb = "30px">
                        Customer Care
                    </Typography>
                    <Typography mb = "30px">Help center</Typography>
                    <Typography mb = "30px">Track Your Order</Typography>
                    <Typography mb = "30px">Corporate and Bulk Purchasing</Typography>
                    <Typography mb = "30px">Returns and Refunds</Typography>
                </Box>
                <Box width = "clamp(20% 25% 30%)">
                <Typography variant='h4' fontWeight="bold" mb = "30px">
                        Contact Us
                    </Typography>
                    <Typography mb = "30px">50 North Fake Address, Fake Country 184685 </Typography>
                    <Typography mb = "30px">Email : rashidshubhat@outlook.com</Typography>
                    <Typography mb = "30px">(222)333-4444</Typography>
                </Box>
        </Box>
    </Box>
  )
}

export default Footer