import XIcon from './icons/XIcon';
import ByWindLogo from '../assests/ByeWind.png';
import { dashboardEnums, favEnums, pagesEnums } from '../utils/SidebarUtils';

const LeftSidebar = ({ isOpen, toggleSidebar }) => (
  <aside
    className={`
      fixed top-0 left-0 z-40 w-[212px] bg-new-black-10 shadow-xl
      lg:relative lg:translate-x-0 lg:w-[212px] lg:shrink-0 lg:z-auto
      transform transition-transform duration-300 ease-in-out
      dark:bg-zinc-800 h-auto px-4 py-5 space-y-4
      ${isOpen ? 'translate-x-0' : '-translate-x-full'} space-y-4
    `}
  >
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-2 justify-center">
        <img src={ByWindLogo} alt="ByWind Logo" className="w-6 h-6" />
        <div className="text-text-md text-black-2 dark:text-white mt-1">ByWind</div>
      </div>
      <button
        onClick={toggleSidebar}
        className="lg:hidden p-2 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
        aria-label="Close left sidebar"
      >
        <XIcon />
      </button>
    </div>
    <div>
      <div className='flex gap-1'>
        <div className='text-text-md text-black-new-40 dark:text-white py-1 px-2'>Favorites</div>
        <div className='text-text-md text-black-new-20 dark:text-white py-1 px-2'>Recently</div>
      </div>
      <ul className='list-disc pl-5 text-black-new-20'>
        {
          favEnums.map((item) => (
            <li key={item.key}>
              <div className='text-text-md text-black-new-100 dark:text-white py-1 px-2'>{item.label}</div>
            </li>
          ))
        }
      </ul>
    </div>

    <div>
      <div className='text-text-md text-black-new-40 py-1 px-3 space-y-1'>Dashboard</div>
      {
        dashboardEnums.map((item) => {
          return <div key={item.key} className='text-text-md text-black-new-100 px-2 py-1 flex items-center gap-1 space-y-1'>
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1C1C1C33"><path d="M522-480 333-669l51-51 240 240-240 240-51-51 189-189Z"/></svg>
            <img src={item.icon} alt={item.label} />
            <div>{item.label}</div>
          </div>
        })
      }
    </div>
    <div className='space-y-1'>
      <div className='text-text-md text-black-new-40 py-1 px-3 space-y-1'>Pages</div>
      {
        pagesEnums.map((item) => {
          return (
            <div key={item.key} className='space-y-1'>
              {/* Main item with icon */}
              <div className='text-text-md text-black-new-100 px-2 py-1 flex items-center gap-1 space-y-1'>
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1C1C1C33">
                  <path d="M522-480 333-669l51-51 240 240-240 240-51-51 189-189Z"/>
                </svg>
                {/* Icon based on type */}
                {item.icon === "user" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                )}
                {item.icon === "account" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    <path d="M12 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1z" />
                  </svg>
                )}
                {item.icon === "corporate" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                )}
                {item.icon === "blog" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                )}
                {item.icon === "social" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                )}
                <div>{item.label}</div>
              </div>
              
              {/* Children items (indented) */}
              {item.hasChildren && item.children && (
                <div className="ml-6 space-y-1">
                  {item.children.map((child) => (
                    <div key={child.key} className='text-text-md text-black-new-100 px-2 py-1'>
                      {child.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })
      }
    </div>
    {/* <SidebarNav /> */}
  </aside>
);

export default LeftSidebar;