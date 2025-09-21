import MenuIcon from "./icons/MenuIcon";
import XIcon from "./icons/XIcon";
import Bell from "../assets/Bell.png";
import Star from "../assets/Star.png";
import ClockCounterClockwise from "../assets/ClockCounterClockwise.png";
import Sidebar from "../assets/Sidebar.png";
import Sun from "../assets/Sun.png";
import Search from "../assets/Search.png";

const Header = ({ toggleLeftSidebar, isLeftSidebarOpen, toggleRightSidebar, isRightSidebarOpen, toggleTheme }) => (
  <header className="flex items-center justify-between px-3 sm:px-4 md:px-7 py-3 sm:py-4 md:py-5 bg-white text-gray-600 border-b border-gray-200">
    {/* Left side - Breadcrumb Navigation */}
    <div className="flex items-center space-x-2 sm:space-x-3">
      {/* Mobile menu toggle */}
      <button
        onClick={toggleLeftSidebar}
        className="lg:hidden p-1.5 sm:p-2 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Toggle left sidebar"
      >
        {isLeftSidebarOpen ? <XIcon /> : <MenuIcon />}
      </button>

      {/* Navigation Icons and Breadcrumb */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        <img src={Sidebar} alt="sidebar" className="cursor-pointer" />
        <img src={Star} alt="star" />

        {/* Breadcrumb text - Hidden on very small screens, shown on sm and up */}
        <div className="hidden sm:flex items-center space-x-2 text-text-xs sm:text-text-md">
          <span className="text-black-new-40">Dashboards</span>
          <span className="text-black-new-20">/</span>
          <span className="text-black-new-100">Default</span>
        </div>
      </div>
    </div>

    {/* Right side - Search and Utility Icons */}
    <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-5">
      <div className="relative">
        <div className="flex items-center bg-[#1C1C1C0D] rounded-lg px-2 sm:px-3 py-1 w-32 sm:w-48 md:w-64 lg:w-40">
          <img src={Search} className="mr-2 sm:mr-3" alt="search" />
          <input type="text" placeholder="Search" className="bg-transparent w-full text-black-new-100 placeholder-black-new-20 outline-none flex-1 text-xs sm:text-sm" />
          <span className="text-text-xs text-gray-400 ml-1 sm:ml-2 hidden sm:inline">⌘/</span>
        </div>
      </div>

      {/* Utility Icons - Responsive spacing and sizing */}
      <div className="flex items-center space-x-1 sm:space-x-2">
        <img src={Sun} alt="theme" onClick={toggleTheme} className="cursor-pointer" title="Theme" />
        <img src={ClockCounterClockwise} alt="history" title="History" />
        <img src={Bell} alt="notifications" className="cursor-pointer" title="Notifications" />
        <img src={Sidebar} alt="rightSideBar" className="cursor-pointer" title="Right Side Bar" onClick={toggleRightSidebar} />
      </div>
    </div>
  </header>
);

export default Header;
