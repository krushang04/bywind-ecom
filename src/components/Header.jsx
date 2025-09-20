import MenuIcon from './icons/MenuIcon';
import XIcon from './icons/XIcon';

const Header = ({ toggleLeftSidebar, isLeftSidebarOpen, toggleRightSidebar, isRightSidebarOpen, toggleTheme }) => (
  <header className="flex items-center justify-between px-3 sm:px-4 md:px-6 py-3 sm:py-4 bg-white text-gray-600 border-b border-gray-200">
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
        {/* Square icon with inner square */}
        <div className="w-5 h-5 sm:w-6 sm:h-6 border border-gray-400 rounded-sm flex items-center justify-center">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-sm"></div>
        </div>
        
        {/* Star icon */}
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        
        {/* Breadcrumb text - Hidden on very small screens, shown on sm and up */}
        <div className="hidden sm:flex items-center space-x-2 text-xs sm:text-sm">
          <span className="text-gray-600">Dashboards</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">Default</span>
        </div>
      </div>
    </div>
    
    {/* Right side - Search and Utility Icons */}
    <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4">
      {/* Search Bar - Responsive sizing */}
      <div className="relative">
        <div className="flex items-center bg-gray-100 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 w-32 sm:w-48 md:w-64 lg:w-80">
          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-gray-700 placeholder-gray-500 outline-none flex-1 text-xs sm:text-sm"
          />
          <span className="text-xs text-gray-400 ml-1 sm:ml-2 hidden sm:inline">⌘K</span>
        </div>
      </div>
      
      {/* Utility Icons - Responsive spacing and sizing */}
      <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3">
        {/* Sun Icon - Hidden on very small screens */}
        <button
          onClick={toggleTheme}
          className="hidden sm:block p-1.5 sm:p-2 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Light mode"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        </button>
        
        {/* Moon Icon - Hidden on very small screens */}
        <button
          onClick={toggleTheme}
          className="hidden sm:block p-1.5 sm:p-2 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Dark mode"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </button>
        
        {/* Bell Icon */}
        <button
          className="p-1.5 sm:p-2 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Notifications"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
        </button>
        
        {/* Profile Icon */}
        <button
          onClick={toggleRightSidebar}
          className="p-1.5 sm:p-2 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Profile menu"
        >
          <div className="w-5 h-5 sm:w-6 sm:h-6 border border-gray-400 rounded-sm"></div>
        </button>
      </div>
    </div>
  </header>
);

export default Header;