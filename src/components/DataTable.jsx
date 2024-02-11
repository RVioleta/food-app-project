import { DataGrid } from '@mui/x-data-grid';import dataTable from "./Table";
import axios from 'axios';
import { useState, useEffect } from 'react';

const DataTable = () => {
    const columns = [
      { field: "id", headerName: "id", width: 170 },
        { field: "name", headerName: "name", width: 170 },
        { field: "category", headerName: "Category", width: 170 },
        { field: "totalCalories", headerName: "Total Calories", width: 170 },
        { field: "totalCarbohydrates", headerName: "Total Carbohydrates", width: 170 },
        { field: "totalFat", headerName: "Total Fats", width: 170 },
        { field: "totalProtein", headerName: "Total Proteins", width: 170 },
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
          
          console.log(formattedData)
          setData(formattedData)
        })
        .catch(function (error) {
          console.log(error);
        });
      }, []);

    return (
        <div>
            <div>
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
          />
        </div>
        </div>
    )
};
export default DataTable;