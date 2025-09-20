import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';

const Layout = () => {
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  const toggleLeftSidebar = () => setIsLeftSidebarOpen(!isLeftSidebarOpen);
  const toggleRightSidebar = () => setIsRightSidebarOpen(!isRightSidebarOpen);
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsLeftSidebarOpen(false);
        setIsRightSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-300 ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="flex flex-col lg:flex-row min-h-screen">
        <LeftSidebar 
          isOpen={isLeftSidebarOpen} 
          toggleSidebar={toggleLeftSidebar} 
        />
        
        {(isLeftSidebarOpen || isRightSidebarOpen) && (
          <div
            onClick={() => {
              setIsLeftSidebarOpen(false);
              setIsRightSidebarOpen(false);
            }}
            className="lg:hidden fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
          ></div>
        )}
        
        <div className="flex-1 flex flex-col">
          <Header
            toggleLeftSidebar={toggleLeftSidebar}
            isLeftSidebarOpen={isLeftSidebarOpen}
            toggleRightSidebar={toggleRightSidebar}
            isRightSidebarOpen={isRightSidebarOpen}
            toggleTheme={toggleTheme}
          />
          <main className="flex-grow p-6 transition-all duration-300">
            <div className="p-8 rounded-lg shadow-md bg-zinc-50 dark:bg-zinc-700 min-h-[calc(100vh-12rem)]">
              <Outlet />
            </div>
          </main>
        </div>
        
        <RightSidebar 
          isOpen={isRightSidebarOpen} 
          toggleSidebar={toggleRightSidebar} 
        />
      </div>
    </div>
  );
};

export default Layout;