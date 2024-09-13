import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Button } from '@/components/ui/button';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleSidebar = (): void => setIsExpanded(!isExpanded);

  return (
    <div className="flex h-screen w-full">
      <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
      <div
        className={`flex flex-col flex-grow transition-all duration-300 ${
          isExpanded ? 'ml-64' : 'ml-16'
        }`}
      >
      <header className="p-4 border-b border-gray-800">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="font-bold">Demo Account</span>
            <span className="bg-yellow-500 text-black px-2 py-1 rounded text-xs">DEMO</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              {['DASHBOARD', 'TIMESHEETS', 'PROJECTS', 'REPORTS', 'SCHEDULE', 'TEAM', 'INVOICES', 'SETTINGS', 'HELP', 'ADMIN'].map((item) => (
                <li key={item} className={`${item === 'PROJECTS' ? 'text-blue-400' : 'text-gray-400'}`}><Button>{item}</Button></li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
        <main className="flex-grow p-4 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
