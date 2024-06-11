import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Homepage from './pages/Home';
import PaymentMethod from './pages/PaymentMethod';
import PaymentWallet from './pages/PaymentWallet';
import Cartpage from './pages/Cartpage';
import Inter from "./static/fonts/Inter.ttf";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import RootComponent from "./components/RootComponent";
import RootPage from "./components/RootPage";
import Home from "./components/bodyComponents/Home/Home";
import Inventory from "./components/bodyComponents/inventory/Inventory";
import Customer from "./components/bodyComponents/customer/Customer";
import Revenue from "./components/bodyComponents/revenue/Revenue";
import Growth from "./components/bodyComponents/growth/Growth";
import Report from "./components/bodyComponents/report/Report";
import Setting from "./components/bodyComponents/Settings/Setting";
import Order from "./components/bodyComponents/order/Order";
import SideBarComponent from './components/SideBarComponent';
import AboutUs from './pages/AboutUs';
import AccountSelect from './pages/Accountselect';
import CustomerProfile from './pages/CustomerProfilepage';
import EmployeeProfile from './pages/EmployeeProfile';
import SupplierProfile from './pages/SupplierProfile';
import Login from './pages/Login';
import Services from './pages/Services';
import SignupCustomers from './pages/SignUpCustomer';
import SignupEmployees from './pages/SignUpEmployee';
import SignupSuppliers from './pages/SignUpSupplier';


const theme = createTheme({
  spacing: 4,
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: "Inter",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Raleway'), local('Raleway-Regular'), url(${Inter}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Homepage />} />
      <Route path="/cartpage" element={<Cartpage />} />
      <Route path="/paymentmethod" element={<PaymentMethod />} />
      <Route path="/paymentwallet" element={<PaymentWallet />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path='/accountSelect' element={<AccountSelect />} />
      <Route path='/customerProfile' element={<CustomerProfile />} />
      <Route path='/employeeProfile' element={<EmployeeProfile />} />
      <Route path='/login' element={<Login />} />
      <Route path='/services' element={<Services />} />
      <Route path='/signupCustomers' element={<SignupCustomers />} />
      <Route path='/signupEmployees' element={<SignupEmployees />} />
      <Route path='/signupSuppliers' element={<SignupSuppliers />} />
      <Route path='/supplierProfile' element={<SupplierProfile />} />
      <Route path="/Admin" element={<RootComponent />}>
        <Route index element={<RootPage />} />
        <Route path="home" element={<Home />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="orders" element={<Order />} />
        <Route path="customers" element={<Customer />} />
        <Route path="revenue" element={<Revenue />} />
        <Route path="growth" element={<Growth />} />
        <Route path="reports" element={<Report />} />
        <Route path="settings" element={<Setting isAdmin={true} />} /> {/* Ensure isAdmin prop is passed */}
      </Route>
    </>
  )
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router}>
        <div style={{ display: 'flex' }}>
          <SideBarComponent />
          <main style={{ flexGrow: 1, padding: '16px' }}>
            {/* Content will be rendered here */}
          </main>
        </div>
      </RouterProvider>
    </ThemeProvider>
  );
}

export default App;