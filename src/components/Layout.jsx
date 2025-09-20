import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

const Layout = () => {
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleLeftSidebar = () => setIsLeftSidebarOpen(!isLeftSidebarOpen);
  const toggleRightSidebar = () => setIsRightSidebarOpen(!isRightSidebarOpen);
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsLeftSidebarOpen(false);
        setIsRightSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-300 ${theme === "dark" ? "dark" : ""}`}>
      <div className="flex h-screen overflow-hidden">
        {/* Left Sidebar - Always visible on desktop */}
        <LeftSidebar isOpen={isLeftSidebarOpen} toggleSidebar={toggleLeftSidebar} />

        {/* Mobile overlay */}
        {(isLeftSidebarOpen || isRightSidebarOpen) && (
          <div
            onClick={() => {
              setIsLeftSidebarOpen(false);
              setIsRightSidebarOpen(false);
            }}
            className="lg:hidden fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
          ></div>
        )}

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <Header
            toggleLeftSidebar={toggleLeftSidebar}
            isLeftSidebarOpen={isLeftSidebarOpen}
            toggleRightSidebar={toggleRightSidebar}
            isRightSidebarOpen={isRightSidebarOpen}
            toggleTheme={toggleTheme}
          />
          <main className="flex-1 overflow-y-auto p-6 transition-all duration-300">
            <div className="bg-white">
              <Outlet />
            </div>
          </main>
        </div>

        {/* Right Sidebar - Always visible on desktop */}
        <RightSidebar isOpen={isRightSidebarOpen} toggleSidebar={toggleRightSidebar} />
      </div>
    </div>
  );
};

export default Layout;
