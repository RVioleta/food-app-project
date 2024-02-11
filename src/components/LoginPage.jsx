import { Grid, Box, Typography, Button, TextField } from "@mui/material";
import img from "./food.png";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if(username.includes("@") ) {
      axios.post('http://localhost:8080/login/', {
        email:username,
        password:password,
       
      })
      .then(function (response) {
        console.log(response);
        localStorage.setItem("token", response.data.token)
        navigate("/")
      })
      .catch(function (error) {
        console.log(error);
      });
      
    }
  };

  return (
    <div sx={{ display: "flex" }}>
      <div>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Box sx={{ background: "lightgreen" }}>
              <Typography
                variant="h2"
                sx={{ paddingTop: "50px", color: "white" }}
              >
                New here?
              </Typography>
              <Button
                variant="contained"
                sx={{
                  marginTop: "50px",
                  padding: "10px 30px",
                  borderRadius: "25px",
                  background: "green",
                  color: "white",
                }}
              >
                <Link
                  to={"/register/"}
                  className="signUp-button"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Sing Up
                </Link>
              </Button>
              <Box style={{ zIndex: 3, position: "relative" }}>
                <img
                  src={img}
                  style={{ width: "1000px", height: "510px" }}
                ></img>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box>
              <Typography
                variant="h2"
                sx={{ paddingTop: "50px", color: "lightgreen" }}
              >
                {" "}
                Healthy food{" "}
              </Typography>
              <Typography variant="h4" sx={{ paddingTop: "60px" }}>
                {" "}
                Sing In{" "}
              </Typography>
              <Box sx={{ marginTop: "60px" }}>
                <TextField
                  label="username"
                  variant="outlined"
                  InputProps={{ sx: { borderRadius: "55px" } }}
                  onChange={(event) => handleUsernameChange(event)}
                />
                <br /> <br />
                <TextField
                  type="password"
                  label="password"
                  variant="outlined"
                  InputProps={{ sx: { borderRadius: "55px" } }}
                  onChange={(event) => handlePasswordChange(event)}
                />
              </Box>
              <Button
                variant="contained"
                sx={{
                  marginTop: "50px",
                  padding: "10px 30px",
                  borderRadius: "25px",
                  background: "green",
                }}
                onClick={() => handleLogin()}
              >
                Log In
              </Button>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default LoginPage;
