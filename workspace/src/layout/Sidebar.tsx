// Sidebar.tsx
import React from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface SidebarProps {
  isExpanded: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isExpanded, toggleSidebar }) => {
  return (
    <aside
      className={`fixed left-0 top-0 h-screen  transition-all duration-300 flex flex-col justify-between p-2 ${
        isExpanded ? 'w-64' : 'w-[53px]'
      }`}
    >
      <button
        onClick={toggleSidebar}
        className="self-end rounded-lg p-2 hover:bg-zinc-900  transition-all duration-300 focus:outline-none"
      >
        {isExpanded ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
      </button>
      <div className="flex-grow bg-zinc-900 mt-2 rounded-lg"></div>
      <div className="h-20 bg-gray-300 mt-2 rounded-lg"></div>
    </aside>
  );
};

export default Sidebar;
