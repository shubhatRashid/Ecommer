import React,{useState} from 'react'
import {Box,useMediaQuery,TextField} from "@mui/material"
import {InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = ({
    type ,
    values ,
    errors ,
    touched ,
    handleBlur ,
    handleChange , 
}) => {
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const [showPassword,setShowPassword] = useState(false)
  const IsNonMobile = useMediaQuery("(min-width:600px)")

  return (
    <Box
    display="grid"
    gap="15px"
    width="100%"
    gridTemplateColumns= "repeat(4,minmax(0,1fr))"
    sx={{
       " & > div" : {gridColumn : IsNonMobile ?undefined : "span 4"}
    }}>
    <TextField 
        fullWidth
        type='email'
        label = "Email"
        onBlur={handleBlur}
        value = {values.email}
        onChange={handleChange}
        name = "email"
        errors = {errors}
        sx={{gridColumn:"span 4"}}
    />
     {errors.email && <p style={{color:"red"}}>{errors.email}</p>}

    <TextField 
        fullWidth
        type= {showPassword?"text":"password"}
        label = "Password"
        onBlur={handleBlur}
        onChange={handleChange}
        value = {values.password}
        name = "password"
        errors = {errors}
        sx={{gridColumn:"span 4"}}
        InputProps={{ // <-- This is where the toggle button is added.
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
    )
  }}
    />
    {errors.password && <p style={{color:"red"}}>{errors.password}</p>}

    </Box>
  )
}

export default Login