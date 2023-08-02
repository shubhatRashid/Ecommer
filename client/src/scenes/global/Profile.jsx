import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";
import { shades } from "../../theme";
import {userData }from "../../helper"


const {username,email} = userData()
const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Profile = ({setClick}) => {
  const logout = () =>{
    localStorage.setItem("user","")
    window.location.reload(true);
  }
  return (
    <Box
      display="block"
      backgroundColor="rgba(0, 0, 0, 0.4)"
      position="fixed"
      zIndex={10}
      width="100%"
      height="100%"
      left="0"
      top="0"
      overflow="auto"
    >
      <Box
        position="fixed"
        right="0"
        bottom="0"
        width="max(400px, 30%)"
        height="100%"
        backgroundColor="white"
      >
        <Box padding="30px" overflow="auto" height="100%">
          {/* HEADER */}
          <FlexBox mb="15px">
            <Typography variant="h3">PROFILE</Typography>
            <IconButton onClick={() => setClick(false)}>
              <CloseIcon />
            </IconButton>
          </FlexBox>

          {/* Profile details*/}
          <Box>
              <Box>
                <FlexBox p="15px 0">
                  <Box flex="1 1 40%">
                    <img
                      alt={"error"}
                      width="123px"
                      height="164px"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI8DK8HCuvWNyHHg8enmbmmf1ue4AeeF3GDw&usqp=CAU"
                    />
                  </Box>
                  <Box flex="1 1 60%">
                    <FlexBox mb="5px">
                      <Typography fontWeight="bold">
                        {username}
                      </Typography>
                    </FlexBox>
                    <Typography>{email}</Typography>
                  </Box>
                </FlexBox>
                <Divider />
              </Box>
          </Box>

          {/* ACTIONS */}
          <Box m="20px 0">
            <Button
              sx={{
                backgroundColor: shades.primary[400],
                color: "white",
                borderRadius: 0,
                minWidth: "100%",
                padding: "20px 40px",
                m: "20px 0",
              }}
              onClick={() => {logout()}}
            >
              LOG OUT
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
