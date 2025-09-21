import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import { useTheme } from "../context/ThemeContext";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Layout = () => {
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const toggleLeftSidebar = () => setIsLeftSidebarOpen(!isLeftSidebarOpen);
  const toggleRightSidebar = () => setIsRightSidebarOpen(!isRightSidebarOpen);

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

  // Keep <html> element in sync with current theme so `dark:` classes work globally
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-300 ${theme === "dark" ? "dark" : ""}`}>
      <div className="flex h-screen overflow-hidden bg-white dark:bg-black-new-100">
        {/* Global tooltip instance to serve header tooltips */}
        <ReactTooltip
          id="header-tip"
          place="bottom"
          offset={8}
          anchorSelect='[data-tooltip-id="header-tip"]'
          positionStrategy="fixed"
          style={{ zIndex: 9999 }}
        />
        {/* Left Sidebar - Always visible on desktop */}
        <LeftSidebar isOpen={isLeftSidebarOpen} toggleSidebar={toggleLeftSidebar} theme={theme} />

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
            theme={theme}
            toggleTheme={toggleTheme}
          />
          <main className="flex-1 overflow-y-auto p-6 transition-all duration-300">
            {/* <div className="bg-white dark:bg-black-new-100"> */}
            <Outlet />
            {/* </div> */}
          </main>
        </div>

        {/* Right Sidebar - Responsive behavior */}
        {isRightSidebarOpen && <RightSidebar isOpen={isRightSidebarOpen} toggleSidebar={toggleRightSidebar} />}
      </div>
    </div>
  );
};

export default Layout;
