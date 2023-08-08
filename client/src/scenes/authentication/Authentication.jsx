import React, { useState } from 'react'
import {Box,Typography,Tabs,Tab,useMediaQuery,Button} from "@mui/material"
import {Formik} from "formik"
import {shades} from "../../theme"
import Login from "./Login"
import Register from "./Register"
import * as yup from "yup"
import {storeUser} from "../../helper"

const initialValues = {
    email:"",
    password : "",
    userName : "",
} 

const authSchema = yup.object().shape({
    password: yup
    .string()
    .min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol'),
    email:yup.string().email().required("Please enter an email"),
    userName :yup.string()
  });


const Authentication = () => {
  const [value,setValue] = useState("login")
  const isNonMobile = useMediaQuery("(min-width:600px)")

  const handleTabChange = (event,newValue) =>{
      setValue(newValue);
  }
  
  const handleFormSubmit = async (values,actions) => {
    
    if (value === "register"){
      // SETTING THE REGISTERING LOGIC
      register(values)
    }else{
      // SETTING THE LOGIN LOGIC
      login(values)

    }
  }

  async function register(values) {
    const url = `${process.env.REACT_APP_STRAPI_URL}/api/auth/local/register`
    const user = {
      username : values.userName,
      email : values.email,
      password : values.password
    }
    
    const response = await fetch(url,{
      method:"POST",
      headers : {"Content-Type":"application/json"},
      body: JSON.stringify(user)
    })
    const res = await response.json()
    if (!res.error) {
      window.alert("successfully registered")
      setValue("login")
    }else{
      window.alert(res.error.message)
    }
    
  }
  async function login(values) {
    const url = `${process.env.REACT_APP_STRAPI_URL}/api/auth/local`
    const user = {
      identifier : values.email,
      password : values.password
    }
    const response = await fetch(url,{
      method:"POST",
      headers : {"Content-Type":"application/json"},
      body: JSON.stringify(user)
    })
    const res = await response.json()
    if (!res.error) {
      storeUser(res)
      window.location.reload(true);
    }else{
      window.alert(res.error.message)
    }
    
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
        onChange={handleTabChange}
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
            validationSchema={authSchema}
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
                      type = "register"
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
                      type = "login"
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