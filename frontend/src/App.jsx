import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Inter from './static/fonts/Inter.ttf';
import Header from './component/header';
import AdminLayout from './components/adminLayout';
import Cartpage from './pages/Cartpage';
import PaymentMethod from './pages/PaymentMethod';
import PaymentWallet from './pages/PaymentWallet';
import AboutUs from './pages/AboutUs';
import AccountSelect from './pages/Accountselect';
import Login from './pages/Login';
import Services from './pages/Services';
import SignupCustomers from './pages/SignUpCustomer';
import SignupEmployees from './pages/SignUpEmployee';
import SignupSuppliers from './pages/SignUpSupplier';
import AdminReview from './pages/AdminReview';
import Employee from './pages/Employee';
import Feedback from './pages/Feedback';
import Notification from './pages/Notification';
import Ongoing from './pages/Ongoing';
import Ourproject from './pages/Ourproject';
import Postproject from './pages/Postproject';
import Projectindetails from './pages/Projectindetails';
import Complete from './pages/Complete';
import Projectview from './pages/Projectview';
import Renovation from './pages/Renovationfm';
import Category from './pages/Category';
import CustomerProfilePage from './pages/CustomerProfilepage';
import SupplierProfilePage from './pages/SupplierProfile';
import EmployeeProfilePage from './pages/EmployeeProfile';
import Home from './components/bodyComponents/Home/Home';
import Inventory from './components/bodyComponents/inventory/Inventory';
import Customer from './components/bodyComponents/customer/Customer';
import Revenue from './components/bodyComponents/revenue/Revenue';
import Growth from './components/bodyComponents/growth/Growth';
import Report from './components/bodyComponents/report/Report';
import Setting from './components/bodyComponents/Settings/Setting';
import Order from './components/bodyComponents/order/Order';
import Shedulepage from './pages/ShedulePage';
import { getDecodedToken } from './utils/authUtils';
import Homepage from './pages/Homepage';
import InventoryPage from './pages/InventoryPage';

const theme = createTheme({
  spacing: 4,
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: 'Inter',
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

function App() {

  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const decodedToken = getDecodedToken();
    if (decodedToken) {
      setUserRole(decodedToken.role);
    }
  }, []);

  const handleLogin = (role) => {
    setUserRole(role);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header userRole={userRole} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cartpage" element={<Cartpage />} />
          <Route path="/paymentmethod" element={<PaymentMethod />} />
          <Route path="/paymentwallet" element={<PaymentWallet />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/accountSelect" element={<AccountSelect />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/signupCustomers" element={<SignupCustomers />} />
          <Route path="/signupEmployees" element={<SignupEmployees />} />
          <Route path="/signupSuppliers" element={<SignupSuppliers />} />
          <Route path="/adminReview" element={<AdminReview />} />
          <Route path="/Employee" element={<Employee />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/Notification" element={<Notification />} />
          <Route path="/category" element={<Category />} />
          <Route path="/complete" element={<Complete />} />
          <Route path="/ongoing" element={<Ongoing />} />
          <Route path="/ourproject" element={<Ourproject />} />
          <Route path="/postproject" element={<Postproject />} />
          <Route path="/projectindetails" element={<Projectindetails />} />
          <Route path="/projectview" element={<Projectview />} />
          <Route path="/renovation" element={<Renovation />} />
          <Route path="/shedulepage" element={<Shedulepage />} />
          <Route path="/inventory" element={<InventoryPage />} />


          {userRole === 'customer' && <Route path="/customer-profile" element={<CustomerProfilePage />} />}
          {userRole === 'employee' && <Route path="/employee-profile" element={<EmployeeProfilePage />} />}
          {userRole === 'supplier' && <Route path="/supplier-profile" element={<SupplierProfilePage />} />}

          <Route path="/Admin/*" element={<AdminLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="orders" element={<Order />} />
            <Route path="customers" element={<Customer />} />
            <Route path="revenue" element={<Revenue />} />
            <Route path="growth" element={<Growth />} />
            <Route path="reports" element={<Report />} />
            <Route path="settings" element={<Setting isAdmin={true} />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
