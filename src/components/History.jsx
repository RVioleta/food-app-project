import {
  Grid,
  Typography,
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
} from "@mui/material";
import Menu from "./Menu";
import React, { useEffect, useState } from "react";
import { Stack } from "rsuite";
import axios from "axios";

const History = () => {
  const [dateRange, setDateRange] = useState({ start: null, end: null });
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([])
  

  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  const handleDateChange = (event, key) => {
    const newDate = new Date(event.target.value);
    console.log(formatDate(newDate))
    setDateRange((prev) => ({ ...prev, [key]: newDate }));
  };

 
  


  useEffect(() => {
    axios.get("http://localhost:8080/meals/").then(function (response) {
      setData(response.data);
    });

    const tmp = data.filter((item) => {
      var parts = item.date.split("/");
      const itemDate = new Date(parts[2], parts[1] - 1, parts[0]);
      //console.log(parts)
      //console.log(dateRange)
      return (
        (!dateRange.start || itemDate >= dateRange.start) &&
        (!dateRange.end || itemDate <= dateRange.end)
      );
    });
    setFilteredData(tmp)
  }, [dateRange]);

  
  

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Menu page="history" />
        </Grid>

        <Grid item xs={10}>
          

          <div className="container">
            <Typography variant="h4" style={{marginBottom:"25px", marginTop:"30px"}}>History</Typography>
            <div sx={{display:'inline-block'}}>
            <div sx={{marginRight:'10px'}}>
              <label className="start-date-label">Start Date : </label>
              <input
                type="date"
                className="start-date-input"
                onChange={(e) => handleDateChange(e, "start")}
              />
            </div>
            <br/>
            <div>
              <label className="end-date-label">End Date :  </label>
              <input
                type="date"
                className="end-date-input"
                onChange={(e) => handleDateChange(e, "end")}
              />
            </div>
            </div>

            <div >
            <Box sx={{ display: "flex", "flex-wrap": "wrap"}}>
              {filteredData.length === 0 ? (
                <p style={{textAlign:"center"}}>No data for the selected period. Please select a range</p>
              ) : (
                filteredData.map((item) => (
                  <Card  key= {item.id} sx={{ width: "25%", margin: "25px", background: "#EDEFED", borderRadius:'15px' }}
            >
              <CardContent>
                <Typography>Date : {item.date}</Typography>
                <Typography variant="h5">Meal name : {item.name}</Typography>
                <Typography variant="body1">Category : Lunch</Typography>
                <Box sx={{ marginTop:'10px', background:'#E2E5E2', borderRadius:'15px', padding:'10px 0'}}>
                  <Typography variant="body2">Total calories : 500g</Typography>
                  <Typography variant="body2">Total carbohidrates : 500g</Typography>
                  <Typography variant="body2">Total fats : 500g</Typography>
                  <Typography variant="body2">Total proteins : 500g</Typography>
                </Box>
              </CardContent>
            </Card>
                ))
              )}
              </Box>
            </div>
          </div> 
        </Grid>
      </Grid>

    </div>
  );
};

export default History;
