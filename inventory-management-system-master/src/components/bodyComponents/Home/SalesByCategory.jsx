import React from "react";
import { Box } from "@mui/material";
import ApexCharts from "react-apexcharts";

export default function SalesByCategory() {
  const donutOption = {
    labels: ["Consumables", "Building Materials", "Tools", "Equipment"],
    legend: {
      position: "right",
      fontSize: "12",

      customLegendItems: [
        "Consumables <b>30.3%</b>",
        "Building Materials <b>37.9%</b>",
        "Tools <b>9.0%</b>",
        "Equipment <b>22.8%</b>",
      ],
      //   const total = data.reduce((sum, value) => sum + value, 0);
      // const percentages = data.map(value => ((value / total) * 100).toFixed(2) + '%');
    },
    title: {
      text: "Sales By category",
    },
  };
  const donutcategory = [44, 55, 13, 33];

  return (
    <Box
      sx={{
        margin: 3,
        bgcolor: "white",
        borderRadius: 2,
        padding: 3,
        height: "105%",
      }}
    >
      <ApexCharts
        options={donutOption}
        series={donutcategory}
        type="pie"
        width="105%"
      />
    </Box>
  );
}
