import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import img from "./food_left.png";
import { Link, redirect, useNavigate  } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

//const axios = require('axios');



const Register = () => {

  const [firstName, setFirstName] = useState('');
  const [lasttName, setLastName] =  useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();


  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);  
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };





  const validateRegister = () => {
    if(email.includes("@") ) {
      axios.post('http://localhost:8080/signup/', {
        firstName:firstName,
        lasttName:lasttName,
        username:userName,
        email:email,
        password:password,
        age:age
      })
      .then(function (response) {
        console.log(response);
        navigate('/login')
      })
      .catch(function (error) {
        console.log(error);
      });
      
    }
    

  }
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <Box>
            <Typography
              variant="h4"
              sx={{ paddingTop: "50px", color: "lightgreen" }}
            > 
             
              You haven't account?
            </Typography>
            <Box sx={{ marginTop: "60px" }}>
              <TextField
                label="first name"
                variant="outlined"
                InputProps={{ sx: { borderRadius: "55px" } }}
                onChange={(event) => handleFirstNameChange(event) } 
              />
              <br /> <br />
              <TextField
                label="last name"
                variant="outlined"
                InputProps={{ sx: { borderRadius: "55px" } }}
                onChange={(event) => handleLastNameChange(event)}
              />
              <br /> <br />
              <TextField
                required
                label="username"
                variant="outlined"
                InputProps={{ sx: { borderRadius: "55px" } }}
                onChange={(event) =>handleUserNameChange(event) }
              />
              <br /> <br />
              <TextField
                required
                label="email"
                InputProps={{ sx: { borderRadius: "55px" } }}
                onChange={(event) =>handleEmailChange(event) }
              />
              <br /> <br />
              <TextField
                required
                label="password"
                variant="outlined"
                InputProps={{ sx: { borderRadius: "55px" } }}
                //    {showPassword ? <VisibilityOff /> : <Visibility />}
                onChange={(event) => handlePasswordChange(event)}
              />{" "}
              <br /> <br />
              <TextField
                required
                label="age"
                variant="outlined"
                InputProps={{ sx: { borderRadius: "55px" } }}
                onChange={(event) =>handleAgeChange(event) }
              />
            </Box>
            <Button onClick={()=>validateRegister()}
              variant="contained"
              sx={{
                marginTop: "50px",
                padding: "10px 30px",
                borderRadius: "25px",
                background: "green",
              }}
            >
              {" "}
             Register
            </Button>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box sx={{ background: "lightgreen" }}>
            <Typography
              variant="h2"
              sx={{ paddingTop: "50px", color: "white" }}
            >
              Alredy have an account?
            </Typography>
            <Button
              variant="contained"
              sx={{
                marginTop: "50px",
                padding: "10px 30px",
                borderRadius: "25px",
                background: "green",
              }}
            >
             <Link to={"/login/"}>Sing In</Link>
            </Button>
            <Box style={{ zIndex: 3, position: "relative", right:"300px", paddingTop: "30px"}}>
              <img src={img} style={{ width: "1000px", height: "600px", }}></img>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Register;
