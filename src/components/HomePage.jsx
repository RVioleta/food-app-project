import { MenuItem, Button, Grid, Link, Chip, Stack } from "@mui/material";
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
           <Button variant="contained" sx={{
                  marginTop: "20px",
                  padding: "10px 30px",
                  borderRadius: "25px",
                  background:'green',                  
                }}               
                >               
                <Link to={"/addMeal/"} sx={{color:'white', textDecoration:'none', fontSize:"15px"}} >add new meal</Link>
                </Button>        
          <Chart />
          <DataTable /> 
        </Grid>

      </Grid>      
    </div>
  );
};

export default HomePage;
