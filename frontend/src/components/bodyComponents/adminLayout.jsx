// AdminLayout.jsx
import React from 'react';
import SideBarComponent from '../SideBarComponent';

const AdminLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <SideBarComponent />
      <main style={{ flexGrow: 1, padding: '16px' }}>
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
