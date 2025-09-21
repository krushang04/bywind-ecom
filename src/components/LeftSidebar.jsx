import XIcon from "./icons/XIcon";
import ByWindLogo from "../assets/ByeWind.png";
import { dashboardEnums, favEnums, pagesEnums } from "../utils/SidebarUtils";

const LeftSidebar = ({ isOpen, toggleSidebar }) => (
  <aside
    className={`
      fixed top-0 left-0 z-40 w-[212px] bg-new-black-10 shadow-xl
      lg:relative lg:translate-x-0 lg:w-[212px] lg:shrink-0 lg:z-auto
      transform transition-transform duration-300 ease-in-out
      dark:bg-zinc-800 h-full overflow-y-auto px-4 py-5 space-y-4
      ${isOpen ? "translate-x-0" : "-translate-x-full"} space-y-4
    `}
  >
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-2 justify-center">
        <img src={ByWindLogo} alt="ByWind Logo" className="w-6 h-6" />
        <div className="text-text-md text-black-2 dark:text-white mt-1">ByWind</div>
      </div>
      <button onClick={toggleSidebar} className="lg:hidden p-2 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors" aria-label="Close left sidebar">
        <XIcon />
      </button>
    </div>
    <div>
      <div className="flex gap-1">
        <div className="text-text-md text-black-new-40 dark:text-white py-1 px-2">Favorites</div>
        <div className="text-text-md text-black-new-20 dark:text-white py-1 px-2">Recently</div>
      </div>
      <ul className="list-disc pl-5 text-black-new-20">
        {favEnums.map((item) => (
          <li key={item.key}>
            <div className="text-text-md text-black-new-100 dark:text-white py-1 px-2">{item.label}</div>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <div className="text-text-md text-black-new-40 py-1 px-3 space-y-1">Dashboard</div>
      {dashboardEnums.map((item) => {
        return (
          <div key={item.key} className={`text-text-md text-black-new-100 pr-2 py-1 flex items-center gap-1 mt-1 ${item.isHighlighted ? "bg-[#1C1C1C0D] rounded-lg" : ""}`}>
            {item.isHighlighted ? (
              <div className="h-4 w-4">
                <div className="bg-[#1C1C1C] rounded-lg w-1 h-full"></div>
              </div>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1C1C1C33">
                <path d="M522-480 333-669l51-51 240 240-240 240-51-51 189-189Z" />
              </svg>
            )}

            <img src={item.icon} alt={item.label} />
            <div className="text-text-md">{item.label}</div>
          </div>
        );
      })}
    </div>
    <div className="space-y-1">
      <div className="text-text-md text-black-new-40 py-1 px-3 space-y-1">Pages</div>
      {pagesEnums.map((item) => {
        return (
          <div key={item.key} className="space-y-1">
            <div className="text-text-md text-black-new-100 px-2 py-1 flex items-center gap-1 mt-1">
              {item.hasChildren ? (
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1C1C1C33">
                  <path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1C1C1C33">
                  <path d="M522-480 333-669l51-51 240 240-240 240-51-51 189-189Z" />
                </svg>
              )}

              <img src={item.icon} alt={item.key} />
              <div>{item.label}</div>
            </div>

            {item.hasChildren && item.children && (
              <div className="ml-12 space-y-1">
                {item.children.map((child) => (
                  <div key={child.key} className="text-text-md text-black-new-100 px-2 py-1">
                    {child.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
    {/* <SidebarNav /> */}
  </aside>
);

export default LeftSidebar;
