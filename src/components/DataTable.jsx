import { DataGrid } from '@mui/x-data-grid';import dataTable from "./Table";
import axios from 'axios';
import { useState, useEffect } from 'react';


// Function to format the date as DD/MM/YYYY
function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}


const DataTable = () => {
    const columns = [
      { field: "id", headerName: "id", width: 100 },
      {field: "date", headerName: "date", width: 100},
        { field: "name", headerName: "name", width: 150 },
        { field: "category", headerName: "Category", width: 150 },
        { field: "totalCalories", headerName: "Total Calories", width: 150 },
        { field: "totalCarbohydrates", headerName: "Total Carbohydrates", width: 150 },
        { field: "totalFat", headerName: "Total Fats", width: 150 },
        { field: "totalProtein", headerName: "Total Proteins", width: 150 },
        //{ field: "colicina", headerName: "colicina", width: 170 },
      ];
      
      const [data, setData] = useState([])
      useEffect(() => {
        const formattedData = []
        axios.get("http://localhost:8080/meals/") 
        .then(function (response) {          
          for (let index = 0; index < response.data.length; index++) {

            const element = response.data[index];
               
            let totalCalories = 0
            let totalFat = 0
            let totalCarbohydrates = 0
            let totalProtein = 0
            for(let index_item = 0; index_item< element.mealItemList.length; index_item++){
              //console.log(element.mealItemList[index_item])
               totalCalories+= parseInt(element.mealItemList[index_item].calories)
               totalFat += parseInt(element.mealItemList[index_item].fat)
               totalCarbohydrates += parseInt(element.mealItemList[index_item].carbohydrate)
               totalProtein += parseInt(element.mealItemList[index_item].protein)
            }
            const format_element = {
              id:index,
              name:element.name,
              category:element.category,
              date:element.date,
              totalCalories:totalCalories,
              totalFat:totalFat,
              totalCarbohydrates:totalCarbohydrates,
              totalProtein:totalProtein
            }
            formattedData.push(format_element)
          }
          
          
          const today = new Date(); // Get today's date
          const yesterday = new Date(today); // Create a copy of today's date
          yesterday.setDate(yesterday.getDate() - 1); // Set it to yesterday

          const todayDate = formatDate(today);
          const yesterdayDate = formatDate(yesterday);
          const objectsWithYesterdayData = formattedData.filter(obj => obj.date === yesterdayDate || obj.date === todayDate);
         
          setData(objectsWithYesterdayData)
        })
        .catch(function (error) {
          console.log(error);
        });
      }, []);


    return (
        <div>
            <div>
            {data.length === 0 ? (
                <p className="no-data-message">No meals entered !</p>
              ) :(
          <DataGrid
            rows={data}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />)
}
        </div>
        </div>
    )
};
export default DataTable;