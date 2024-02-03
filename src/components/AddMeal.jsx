import React, { useState } from "react";
import { Stack, Chip, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Grid,
  Box,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  OutlinedInput,
} from "@mui/material";
import Menu from "./Menu";
import FormHelperText from "@mui/material/FormHelperText";
import { Button } from "rsuite";
import { Remove } from "@mui/icons-material";

const AddMeal = () => {
  const [curentDate, setCurentDate] = useState();
  const [typeMeal, setTypeMeal] = useState();
  const [nameMeal, setNameMeal] = useState();
  const [nameMealItem, setNameMealItem] = useState();
  const [calories, setCalories] = useState();
  const [carbohydrates, setcarbohydrates] = useState();
  const [fats, setFats] = useState();
  const [proteins, setProteins] = useState();
  const [mealItems, setMealItems] = useState([]);


  
  const handleDelete = (itemIndex) => {
    console.info(itemIndex);
    let arr =  [...mealItems]
    arr.splice(itemIndex, 1)
    setMealItems(arr)
  };

  const handleCurentDate = (event) => {
    let date = new Date(event);
    let day = date.getDate(); // get the Date part
    let month = date.getMonth() + 1; // Get the Month (Months are zero-based)
    let year = date.getFullYear(); // Get the year
      
    // Pad single digits with leading zeros to make 2 digits, 
    let formattedDay = day < 10 ? "0" + day : day;
    let formattedMonth = month < 10 ? "0" + month : month;
  
    // Concatenate (join) the formatted date components
    setCurentDate(formattedDay + "/" + formattedMonth + "/" + year);
    //setCurentDate(event.target.value);
  };

  const handleTypeMeal = (event) => {
    setTypeMeal(event.target.value);
  };

  const handleNameMeal = (event) => {
    setNameMeal(event.target.value);
  };

  const handleNameMealItem = (event) => {
    setNameMealItem(event.target.value)
  };

  const handleCalories = (event) => {
    setCalories(event.target.value);
  };

  const handlecarbohydrates = (event) => {
    setcarbohydrates(event.target.value);
    
  };

  const handleFats = (event) => {
    setFats(event.target.value);
    
  };

  const handleProteins = (event) => {
    setProteins(event.target.value);
    
  };
 
  const resetDataInput = () => {
    setCurentDate("");
    setTypeMeal("");
    setNameMeal("");
    setNameMealItem("");
    setCalories("");
    setcarbohydrates("");
    setFats("");
    setProteins("");
   
  };
  const addItemToList = () => {
    const mealItem= {
      calories:calories,
      proteins:proteins,
      fats:fats,
      carbohydrates:carbohydrates,
      name:nameMealItem
    }
    setMealItems((prevMealItems) => [...prevMealItems, mealItem]);

    setNameMealItem("");
    setCalories("");
    setcarbohydrates("");
    setFats("");
    setProteins("");
    setTimeout(() => {
      console.log(mealItems);
    }, 0);
  };

  const completeMealBtn = () => {
    const completeMealObj = {
      "date":curentDate ,
      "type":typeMeal,
      "name":nameMeal,
      mealItemList:[...mealItems]
    }
    console.log(completeMealObj);
    //-----------------------------------------------
  
  
  
  //-----------------------------------------------------
  }


  


  return (
    <div style={{ textAlign: "left" }}>
      <Grid container spacing={0}>
        <Grid item xs={2} sx={{ textAlign: "center" }}>
          <Menu />
        </Grid>

        <Grid item xs={1}></Grid>

        <Grid item xs={5}>
          <Box sx={{ marginTop: "25px" }}>
            <Typography variant="h5">Please choose date</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker onChange={(event) => handleCurentDate(event)} />
            </LocalizationProvider>

            <Box sx={{ marginTop: "30px" }}>
              <FormControl>
                <Typography variant="h5">My meal today is...</Typography>
                {/* <FormLabel id="demo-row-radio-buttons-group-label">My meal today is...</FormLabel> */}
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={(event)=>handleTypeMeal(event)}
                >
                  <FormControlLabel
                    value="breakfast"
                    control={<Radio />}
                    label="breakfast"
                    
                  />
                  <FormControlLabel
                    value="lunch"
                    control={<Radio />}
                    label="lunch"
                  />
                  <FormControlLabel
                    value="dinner"
                    control={<Radio />}
                    label="dinner"
                  />
                  <FormControlLabel
                    value="snack"
                    control={<Radio />}
                    label="snack"
                  />
                </RadioGroup>
              </FormControl>
            </Box>

            <Box sx={{ display: "flex", marginTop: "30px" }}>
              <Typography sx={{ paddingTop: "15px", marginRight: "20px" }}>
                The whole meal was
              </Typography>
              <form noValidate autoComplete="off">
                <FormControl sx={{ width: "150px" }}>
                  <OutlinedInput
                    placeholder="meal's name"
                    onChange={(event) => handleNameMeal(event)}
                    value={nameMeal}
                  />
                  <FormHelperText />
                </FormControl>
              </form>
              </Box>
             

            <Box sx={{ marginTop: "25px" }}>
              <Stack direction="row" spacing={1}>
              {mealItems.map((item) => 
                <Chip
                  label={item.name}
                  variant="outlined"
                  //onClick={handleClick}
                  onDelete={() => handleDelete(mealItems.indexOf(item))}
                  key={mealItems.indexOf(item)}
                />
                )}
               
              </Stack>
            </Box>

            <Box sx={{ display: "flex", marginTop: "30px" }}>
               <Typography
                sx={{
                  paddingTop: "15px",
                  marginLeft: "20px",
                  marginRight: "20px",
                }}
              >
                is made of
              </Typography> 
               <form noValidate autoComplete="off">
                <FormControl sx={{ width: "150px" }}>
                  <OutlinedInput placeholder="meal item " 
                  value={nameMealItem}
                  onChange={(event) => handleNameMealItem(event)}/>
                  
                  <FormHelperText />
                </FormControl>
              </form> 
            </Box>

            <Box>
              <Typography variant="h5" sx={{ marginTop: "30px" }}>
                And from those...
              </Typography>
            </Box>

            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="calories"
                label="calories"
                variant="outlined"
                type="number"
                onChange={(event) => handleCalories(event)}
                value={(calories)}
              />
              <br />
              <TextField
                id="carbohydrates"
                label="carbohydrates"
                variant="outlined"
                type="number"
                onChange={(event) => handlecarbohydrates(event)}
                value={carbohydrates}
              />
              <br />
              <TextField
                id="fats"
                label="fats"
                variant="outlined"
                type="number"
                onChange={(event) => handleFats(event)}
                value={fats}
              />
              <br />
              <TextField
                id="proteins"
                label="proteins"
                variant="outlined"
                type="number"
                onChange={(event) => handleProteins(event)}
                value={proteins}
              />
            </Box>
          </Box>
        </Grid>
        {/* <Grid item xs={1}></Grid> */}
        <Grid item xs={3}>
          <Box sx={{ marginTop: "25px" }}>
            <Button
              variant="contained"
              style={{
                color: "white",
                background: "red",
                padding: "10px 20px",
                borderRadius: "20px",
                marginRight: "20px",
                fontSize: "20px",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => resetDataInput()}
            >
              Reset
            </Button>

            <Button
              variant="contained"
              color="success"
              style={{
                color: "white",
                background: "green",
                padding: "10px 20px",
                borderRadius: "20px",
                marginRight: "20px",
                fontSize: "20px",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => completeMealBtn()}
            >
              Complete meal
            </Button>
          </Box>
          <Box style={{ marginTop: "550px" }}>
            <Button
              variant="contained"
              color="success"
              style={{
                color: "white",
                background: "green",
                padding: "10px 20px",
                borderRadius: "20px",
                marginRight: "20px",
                fontSize: "20px",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => addItemToList()}
            >
              Add
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
export default AddMeal;

/*

- ZAVRSENO - State za site polinja poseben
- Funkcii koi ke zacuvuvat promeni na polinjata vo state
- Funkcija povrzana so on click nastan na kopce Reset koe ke gi "brise" site states

*/
