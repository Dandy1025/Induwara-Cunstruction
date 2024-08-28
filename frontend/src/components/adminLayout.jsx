import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import SideBarComponent from './SideBarComponent';

const AdminLayout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <SideBarComponent />
      <main style={{ flexGrow: 1, padding: '16px' }}>
        <Outlet /> {/* Render the nested routes here */}
      </main>
    </div>
  );
};

export default AdminLayout;
