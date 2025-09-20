import MenuIcon from './icons/MenuIcon';
import XIcon from './icons/XIcon';

const Header = ({ toggleLeftSidebar, isLeftSidebarOpen, toggleRightSidebar, isRightSidebarOpen, toggleTheme }) => (
  <header className="flex items-center justify-between p-4 shadow-md bg-white/70 backdrop-blur-md dark:bg-zinc-800/70 transition-colors duration-300">
    {/* Left sidebar toggle button (visible on small screens) */}
    <button
      onClick={toggleLeftSidebar}
      className="lg:hidden p-2 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label="Toggle left sidebar"
    >
      {isLeftSidebarOpen ? <XIcon /> : <MenuIcon />}
    </button>
    
    {/* Logo or App Title */}
    <div className="flex-grow text-center text-xl font-bold tracking-tight">
      ByWind E-commerce
    </div>
    
    {/* Right-side buttons in the header */}
    <div className="flex items-center space-x-4">
      {/* Right sidebar toggle button */}
      <button
        onClick={toggleRightSidebar}
        className="p-2 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Toggle right sidebar"
      >
        {isRightSidebarOpen ? <XIcon /> : <MenuIcon />}
      </button>

      {/* Theme button */}
      <button
        onClick={toggleTheme}
        className="hidden sm:block px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors duration-200"
      >
        Toggle Theme
      </button>
    </div>
  </header>
);

export default Header;