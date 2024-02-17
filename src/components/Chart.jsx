import { BarChart, } from "@mui/x-charts";
// import DataChart from "./DataChart";
import dataChart from "./DataChart";
import { axisClasses } from '@mui/x-charts';
import { useEffect, useState} from "react";
import axios from "axios";


const chartSetting = {
  yAxis: [
    {
      label: 'rainfall (mm)',
    },
  ],
   
  height: 350,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};

const valueFormatter = (value) => `${value}g`;

const Chart = () => {
  const [data, setData] = useState([1,2,3])

  
// Function to filter dates for the last 5 days
function filterDatesLast5Days(data) {
  const currentDate = new Date();
  const last5Days = new Date(currentDate.getTime() - (5 * 24 * 60 * 60 * 1000)); // Calculate timestamp for 5 days ago

  return data.filter(item => {
      const dateParts = item.date.split('/');
      const itemDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]); // Creating date object from the date string
      return itemDate >= last5Days;
  });
}

// Function to group data by date and calculate sum of calories
function groupByDateAndSumNutrients(data) {
  const groupedData = {};

  data.forEach(item => {
      const dateParts = item.date.split('/');
      const itemDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
      const day = itemDate.toLocaleDateString('en-US', { weekday: 'long' }); // Get day name
      if (!groupedData[day]) {
          groupedData[day] = {
              carbohydrates: 0,
              fats: 0,
              proteins: 0,
              day: day
          };
      }
      item.mealItemList.forEach(mealItem => {
          groupedData[day].carbohydrates += parseInt(mealItem.carbohydrate);
          groupedData[day].fats += parseInt(mealItem.fat);
          groupedData[day].proteins += parseInt(mealItem.protein);
      });
  });

  return Object.values(groupedData);
}

  useEffect(() => {
    axios.get("http://localhost:8080/meals/").then(function (response) {
      // Filter data for the last 5 days
    const filteredData = filterDatesLast5Days(response.data);

// Group filtered data by date and sum calories
    const groupedData = groupByDateAndSumNutrients(filteredData);
    console.log(groupedData)
    setData(groupedData)
    });
  }, [])

  useEffect(() => {
    axios.get("http://localhost:8080/meals/").then(function (response) {
      // Filter data for the last 5 days
    const filteredData = filterDatesLast5Days(response.data);

// Group filtered data by date and sum calories
    const groupedData = groupByDateAndSumNutrients(filteredData);
    console.log(groupedData)
    setData(groupedData)
    });
  }, [data])

    
    return(
        <div >
          <BarChart
            dataset={data}
            xAxis={[{ scaleType: "band", dataKey: "day" }]}
            series={[
              { dataKey: "carbohydrates",label: "carbohydrates", valueFormatter },
              { dataKey: "fats", label: "fats", valueFormatter },
              { dataKey: "proteins", label: "proteins", valueFormatter },
            ]}
            {...chartSetting}
          />
        </div>
    )
};
export default Chart;