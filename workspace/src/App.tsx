import React from 'react';
import { FrappeProvider } from 'frappe-react-sdk';
import { Outlet, useLocation } from 'react-router-dom';
import MainLayout from './layout/MainLayout';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="App">
      <FrappeProvider
        siteName={import.meta.env.VITE_SITE_NAME}
        socketPort={import.meta.env.VITE_SOCKET_PORT}
      >
        {isLoginPage ? (
          <Outlet />
        ) : (
          <MainLayout>
            <Outlet />
          </MainLayout>
        )}
      </FrappeProvider>
    </div>
  );
}

export default App;
