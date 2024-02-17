import { Button, Grid, Link,  Stack, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CheckToken from "./utils/CheckLogin";
import { styled } from "@mui/material/styles";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts";
import Menu from "./Menu";
import Chart from "./Chart";
import DataTable from "./DataTable";
import { DataGrid } from "@mui/x-data-grid";
import AddMeal from "./AddMeal";
import CalendarMeal from "./CalendarMeal";
import "./Menu/Menu.css";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = CheckToken();
    if (isLoggedIn === false) {
      navigate("/login/");
    }
  });

  

  return (
    <div>
      <Grid container spacing={3}>

        <Grid item xs={2}>
          <Menu page="home" />
        </Grid>

        <Grid item xs={10}>    
        <Box sx={{textAlign:'right', marginRight:'50px', marginTop:'50px'}}>
        {/* <Button variant="contained" sx={{
                  marginTop: "20px",
                  padding: "10px 30px",
                  borderRadius: "25px",                
                  background:'#A8DF8E',                  
                }}               
                >               
                <Link to={"/addMeal/"} sx={{color:'black', textDecoration:'none', fontSize:"15px"}} >add new meal</Link>
                </Button>   */}
                <a href="/addMeal/" style={{marginTop: "20px",
                  padding: "10px 30px",
                  borderRadius: "25px",                
                  background:'#A8DF8E',  
                  textDecoration:'none',
                  color:'black',
                  fontSize:'20px'}}>Add new meal</a>
          </Box>       
         
                      
                    
          <Chart />
          <Box sx={{textAlign:'right', marginRight:'50px', marginBottom:'50px', marginTop:'20px'}}>
        {/* <Button variant="contained" sx={{
                  marginTop: "20px",
                  padding: "10px 30px",
                  borderRadius: "25px",                
                  background:'#A8DF8E',                  
                }}               
                >               
                <Link to={"/addMeal/"} sx={{color:'black', textDecoration:'none', fontSize:"15px"}} >add new meal</Link>
                </Button>   */}
                <a href="/addMeal/" style={{
                  padding: "10px 30px",
                  borderRadius: "25px",                
                  background:'#A8DF8E',  
                  textDecoration:'none',
                  color:'black',
                  fontSize:'20px'}}>Delete meal</a>
          </Box>       

          <DataTable /> 
        </Grid>

      </Grid>      
    </div>
  );
};

export default HomePage;
