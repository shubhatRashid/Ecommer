import React, { useState } from 'react'
import {Box,Typography,TextField,Tabs,Tab,useMediaQuery,Button} from "@mui/material"
import {Formik} from "formik"
import {shades} from "../../theme"
import Login from "./Login"
import Register from "./Register"
import * as yup from "yup"

const initialValues = {
  login:{
    email:"",
    password : ""
  },
  register:{
    email:"",
    password : "",
    userName : "",
    confirmPassword : ""
  },
} 

const authSchema = [
  yup.object().shape({
    login : yup.object().shape({
      email:yup.string().required("required"),
      password :yup.string().required("required"),
    }),
    register : yup.object().shape({
      email:yup.string().required("required"),
      password :yup.string().required("required"),
      userName :yup.string().required("required"),
      confirmPassword : yup.string().required("required")
    })
  })
]

const Authentication = ({setLoggedIn}) => {
  const [value,setValue] = useState("login")
  const isNonMobile = useMediaQuery("(min-width:600px)")
  const handleChange = (event,newValue) =>{
      setValue(newValue);
  }
  const handleFormSubmit = () => {

  }
  return (
    <Box
    width = "80%"
    margin = "80px auto"
    > 
       <Typography variant="h1" align='center'>
           <b>Hi</b> 
        </Typography>

        <Typography variant="h3" align='center'>
        Welcome to <b>Ecommer</b>
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
            <Tab label = "Login" value = "login"></Tab>
            <Tab label = "Register" value = "register"></Tab>
        </Tabs>
        <Box
        margin = "0 auto"
        >
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={authSchema[0]}
          > 
            {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue
          }) => (
            <form 
             onSubmit={handleSubmit}
             >

            {value === "register" && (
              <Box>
                    <Register 
                      values = {values}
                      errors = {errors}
                      touched = {touched}
                      handleBlur = {handleBlur}
                      handleChange = {handleChange}
                      setFieldValue = {setFieldValue}
                    />
              </Box>
            )}

            {value === "login" && (
              <Box>
                    <Login 
                      values = {values}
                      errors = {errors}
                      touched = {touched}
                      handleBlur = {handleBlur}
                      handleChange = {handleChange}
                      setFieldValue = {setFieldValue}
                    />
              </Box>
            )}

              <Box 
              marginTop="20px"
              display="flex"
              justifyContent="space-between"
              gap="50px"
              >
              <Button
                fullWidth
                type='submit'
                color='primary'
                variant='contained'
                sx={{backgroundColor:shades.primary[400],
                      boxShadow:"none",
                      color:"white",
                      borderRadius: "0",
                      padding : "15px 40px"}}  
                    
              >
                    {value === "login"? "Login" : "Register"}
              </Button>
                   
              </Box>
            </form>
            ) }
          </Formik>
        </Box>
       
    </Box>
  )
}

export default Authentication