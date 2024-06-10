import React, { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";
import { Box } from "@mui/material";
export default function BuildingMaterial() {
  //   const total = data.reduce((sum, value) => sum + value, 0);
  // const percentages = data.map(value => ((value / total) * 100).toFixed(2) + '%');
  const [materialData, setMaterialData] = useState([]);
  useEffect(() => {
    setMaterialData([
      {
        name: "Cement",
        data: [14, 25, 21, 17, 12, 13, 11],
      },
      {
        name: "Steel",
        data: [13, 23, 20, 8, 13, 27, 33],
      },
      {
        name: "Brick",
        data: [11, 17, 15, 15, 21, 14, 15],
      },
      {
        name: "Wood",
        data: [50, 27, 13, 19, 16, 10, 5],
      },
      {
        name: "Glass",
        data: [33, 4, 25, 20, 24, 11, 44],
      },
    ]);

    return () => {
      setMaterialData([]);
    };
  }, []);

  let totalArray = [];
  const total = materialData.forEach((value) => {
    const data = value.data;
    if (totalArray.length === 0) totalArray = [...data];
    else {
      data.forEach((val, index) => (totalArray[index] += val));
    }
  });

  const options3 = {
    chart: {
      id: "basic-bar",
      type: "bar",
      stacked: true,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "right",
      horizontalAlign: "center",
      offsetY: 0,
    },
    title: {
      text: "Building Material",
    },
    plotOptions: {
      bar: {
        columnWidth: "10%",
        horizontal: false,
      },
    },
    fill: {
      opacity: 1,
    },
    xaxis: {
      categories: ["Mon", "Thu", "Wed", "The", "Fri", "Sat", "Sun"],
    },
  };
  return (
    <Box
      sx={{
        margin: 3,
        bgcolor: "white",
        borderRadius: 2,
        padding: 3,
        height: "95%",
      }}
    >
      <ApexCharts
        options={options3}
        series={materialData}
        type="bar"
        width="100%"
        height="320"
      />
    </Box>
  );
}
