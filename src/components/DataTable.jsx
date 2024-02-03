import { DataGrid } from '@mui/x-data-grid';import dataTable from "./Table";


const DataTable = () => {
    const columns = [
        { field: "id", headerName: "ID", width: 50 },
        { field: "name", headerName: "name", width: 170 },
        { field: "calories", headerName: "calories", width: 170 },
        { field: "carbonati", headerName: "carbonati", width: 170 },
        { field: "masti", headerName: "masti", width: 170 },
        { field: "proteini", headerName: "proteini", width: 170 },
        { field: "colicina", headerName: "colicina", width: 170 },
      ];
      

    return (
        <div>
            <div>
          <DataGrid
            rows={dataTable}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 3 },
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