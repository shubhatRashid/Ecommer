import React, { useState } from 'react'
import {Box,useMediaQuery,TextField} from "@mui/material"
import { getIn } from 'formik'
import {InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";


const Register = (
  {
    type ,
    values ,
    errors ,
    touched ,
    handleBlur ,
    handleChange , 
}
) => {
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const [showPassword,setShowPassword] = useState(false)
  const IsNonMobile = useMediaQuery("(min-width:600px)")
  const formattedName = (field) => `${type}.${field}`;
  const formattedError = (field) => (
      Boolean(
          getIn(touched,formattedName(field)) &&
          getIn(errors,formattedName(field))
      ))
  const formattedHelper = (field) =>
          getIn(touched,formattedName(field)) &&
          getIn(errors,formattedName(field))
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
        type='userName'
        label = "User Name"
        onBlur={handleBlur}
        value = {values.userName}
        onChange={handleChange}
        name = {formattedName("userName")}
        errors = {formattedError("userName")}
        helperText = {formattedHelper("userName")}
        sx={{gridColumn:"span 4"}}
    />
    <TextField 
        fullWidth
        type='email'
        label = "Email"
        onBlur={handleBlur}
        value = {values.email}
        onChange={handleChange}
        name = {formattedName("email")}
        errors = {formattedError("email")}
        helperText = {formattedHelper("email")}
        sx={{gridColumn:"span 4"}}
    />

    <TextField 
        fullWidth
        type={showPassword?"text":"password"}
        label = "Password"
        onBlur={handleBlur}
        onChange={handleChange}
        value = {values.password}
        name = {formattedName("password")}
        errors = {formattedError("password")}
        helperText = {formattedHelper("password")}
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

    </Box>
  )
}

export default Register