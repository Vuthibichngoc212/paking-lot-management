import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import LOGIN_IMAGE from "./../../assets/images/bg-login.jpg";
import SignInScreen from "./Login/screens/SignInScreen";
import Register from "./Register/screens/Register";

const Auth: React.FC = () => {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName: string) => {
    setCurrentForm(formName);
  };

  return (
    <Box sx={{ maxHeight: "99vh" }}>
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              height: "100vh",
              width: "100%",
              "& img": {
                height: "100%",
                width: "100%",
              },
            }}
          >
            <img src={LOGIN_IMAGE} alt="Login Image" />
          </Box>
        </Grid>
        <Grid
          item
          md={6}
          sx={{
            position: "relative",
            placeItems: "center",
            display: "grid",
            padding: "0 6rem",
            height: "100vh",
          }}
        >
          {currentForm === "login" && (
            <SignInScreen onToggleForm={toggleForm} />
          )}{" "}
          {currentForm === "register" && <Register onToggleForm={toggleForm} />}{" "}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Auth;
