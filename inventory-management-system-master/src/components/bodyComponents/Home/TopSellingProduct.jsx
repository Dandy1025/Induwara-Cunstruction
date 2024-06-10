import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
export default function TopSellingProduct() {
  const products = [
    { name: "Gloves", price: 600, quantity: 75, amount: 1.828 },
    {
      name: "Cement",
      price: 100,
      quantity: 84,
      amount: 7.144,
    },
    { name: "Hammers", price: 200, quantity: 94, amount: 9.028 },
    { name: "Chisels", price: 800, quantity: 51, amount: 1.585 },
    { name: "Steel", price: 400, quantity: 78, amount: 2.113 },
  ];
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
      <Typography variant="h6" fontWeight={"bold"} sx={{ mx: 3 }}>
        Top selling products
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bolder" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>Price</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>Quantity</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, id) => {
              return (
                <TableRow key={id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                  <TableCell>{product.amount}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
