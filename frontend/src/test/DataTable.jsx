import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Typography } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "avatar",
    headerName: "avatar",
    width: 130,
    //same here we have the cell data which i will get the value of the cells in the tables cellData.row.fieldName
    renderCell: (cellData) => {
      return <Typography variant="h5">Hello</Typography>;
    },
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    width: 160,
    valueGetter: (
      params //we use this valueGetter to set a combining value use the names of the fields as row name
    ) => `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  {
    id: 1,
    lastName: <Typography variant="h6">De Silva</Typography>,
    firstName: "Ridmi",
    age: 35,
  },
  { id: 2, lastName: "Dhananjaya", firstName: "Rukshan", age: 42 },
  { id: 3, lastName: "Bagya", firstName: "Shayani", age: 45 },
  { id: 4, lastName: "Sandaruwan", firstName: "Amila", age: 16 },
  { id: 5, lastName: "Pulsara", firstName: "Dhanuka", age: 16 },
  { id: 6, lastName: "Wathsala", firstName: "Sajani", age: 50 },
  { id: 7, lastName: "Pahan", firstName: "Sithila", age: 44 },
  { id: 8, lastName: "Yahansa", firstName: "Sanuki", age: 36 },
  { id: 9, lastName: "Aloka", firstName: "Shashini", age: 65 },
];
//for images refres to https://mui.com/material-ui/react-image-list/
export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 20, 30]}
        checkboxSelection
      />
    </div>
  );
}
