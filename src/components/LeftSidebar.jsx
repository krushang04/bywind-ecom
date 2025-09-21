import ByWindLogo from "../assets/ByeWind.png";
import { dashboardEnums, favEnums, pagesEnums } from "../utils/SidebarUtils";
import getSvgColor from "../utils/getSvgColor";
import { useNavigate } from "react-router-dom";

const LeftSidebar = ({ isOpen, toggleSidebar, theme }) => {
  const navigate = useNavigate();

  const handleNavigate = (keyOrLabel) => {
    const k = String(keyOrLabel || "").toLowerCase();
    if (k === "overview" || k === "projects") {
      navigate("/orders");
    } else {
      navigate("/");
    }
  };

  const getTooltip = (keyOrLabel) => {
    const k = String(keyOrLabel || "").toLowerCase();
    return k === "overview" || k === "projects" ? "Go to Orders" : "Go to Dashboard";
  };

  return (
    <aside
      className={`
      fixed top-0 left-0 z-40 w-[212px] bg-white-new-100 shadow-xl
      lg:relative lg:translate-x-0 lg:w-[212px] lg:shrink-0 lg:z-auto
      transform transition-transform duration-300 ease-in-out
      dark:bg-black-new-100 h-full overflow-y-auto px-4 py-5 space-y-4
      ${isOpen ? "translate-x-0" : "-translate-x-full"} space-y-4 border-r dark:border-white-new-10 border-black-new-10
    `}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2 justify-center">
          <img src={ByWindLogo} alt="ByWind Logo" className="w-6 h-6" />
          <div className="text-text-md text-black-2 dark:text-white mt-1">ByWind</div>
        </div>
        <button onClick={toggleSidebar} className="lg:hidden p-2 rounded-md hover:bg-black-new-5 dark:hover:bg-white-new-5 transition-colors" aria-label="Close left sidebar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L18 18M6 18L18 6" stroke={theme === "dark" ? "#FFFFFF" : "#1C1C1C"} strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <div>
        <div className="flex gap-1">
          <div className="text-text-md text-black-new-40 dark:text-white-new-40 py-1 px-2">Favorites</div>
          <div className="text-text-md text-black-new-20 dark:text-white-new-20 py-1 px-2">Recently</div>
        </div>
        <ul className="list-disc pl-5 text-black-new-20 dark:text-white-new-20">
          {favEnums.map((item) => (
            <li key={item.key}>
              <button
                onClick={() => handleNavigate(item.key || item.label)}
                className="text-left w-full text-text-md text-black-new-100 dark:text-white-new-100 py-1 px-2 hover:bg-black-new-5 dark:hover:bg-white-new-5 rounded-md"
                data-tooltip-id="header-tip"
                data-tooltip-content={getTooltip(item.key || item.label)}
                data-tooltip-place="right"
                aria-label={getTooltip(item.key || item.label)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="text-text-md text-black-new-40 dark:text-white-new-40 py-1 px-3 space-y-1">Dashboard</div>
        {dashboardEnums.map((item) => {
          return (
            <div
              key={item.key}
              onClick={() => handleNavigate(item.key || item.label)}
              className={`cursor-pointer text-text-md text-black-new-100 dark:text-white-new-100 pr-2 py-1 flex items-center gap-1 mt-1 ${
                item.isHighlighted ? "bg-black-new-5 dark:bg-white-new-5 rounded-lg" : ""
              }`}
              data-tooltip-id="header-tip"
              data-tooltip-content={getTooltip(item.key || item.label)}
              data-tooltip-place="right"
              role="button"
              aria-label={getTooltip(item.key || item.label)}
            >
              {item.isHighlighted ? (
                <div className="h-4 w-4">
                  <div className="bg-black-new-100 dark:bg-[#C6C7F8] rounded-lg w-1 h-full"></div>
                </div>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1C1C1C33">
                  <path d="M522-480 333-669l51-51 240 240-240 240-51-51 189-189Z" />
                </svg>
              )}

              {item.icon}
              <div className="text-text-md">{item.label}</div>
            </div>
          );
        })}
      </div>
      <div className="space-y-1">
        <div className="text-text-md text-black-new-40 dark:text-white-new-40 py-1 px-3 space-y-1">Pages</div>
        {pagesEnums.map((item) => {
          return (
            <div key={item.key} className="space-y-1">
              <div
                onClick={() => handleNavigate(item.key || item.label)}
                className="cursor-pointer text-text-md text-black-new-100 dark:text-white-new-100 px-2 py-1 flex items-center gap-1 mt-1"
                data-tooltip-id="header-tip"
                data-tooltip-content={getTooltip(item.key || item.label)}
                data-tooltip-place="right"
                role="button"
                aria-label={getTooltip(item.key || item.label)}
              >
                {item.hasChildren ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.64645 5.65967C3.84171 5.44678 4.15829 5.44678 4.35355 5.65967L7.64645 9.25C7.84171 9.4629 8.15829 9.4629 8.35355 9.25L11.6464 5.65968C11.8417 5.44678 12.1583 5.44678 12.3536 5.65968C12.5488 5.87257 12.5488 6.21775 12.3536 6.43065L9.06066 10.021C8.47487 10.6597 7.52513 10.6597 6.93934 10.021L3.64645 6.43065C3.45118 6.21775 3.45118 5.87257 3.64645 5.65967Z"
                      fill={getSvgColor(theme)}
                      fill-opacity="0.2"
                    />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.65967 12.3536C5.44678 12.1583 5.44678 11.8417 5.65967 11.6464L9.25 8.35355C9.4629 8.15829 9.4629 7.84171 9.25 7.64645L5.65968 4.35355C5.44678 4.15829 5.44678 3.84171 5.65968 3.64645C5.87257 3.45118 6.21775 3.45118 6.43065 3.64645L10.021 6.93934C10.6597 7.52513 10.6597 8.47487 10.021 9.06066L6.43065 12.3536C6.21775 12.5488 5.87257 12.5488 5.65967 12.3536Z"
                      fill={getSvgColor(theme)}
                      fill-opacity="0.2"
                    />
                  </svg>
                )}

                {item.icon}
                <div>{item.label}</div>
              </div>

              {item.hasChildren && item.children && (
                <div className="ml-12 space-y-1">
                  {item.children.map((child) => (
                    <div
                      key={child.key}
                      onClick={() => handleNavigate(child.key || child.label)}
                      className="cursor-pointer text-text-md text-black-new-100 dark:text-white-new-100 px-2 py-1 hover:bg-black-new-5 dark:hover:bg-white-new-5 rounded-md"
                      data-tooltip-id="header-tip"
                      data-tooltip-content={getTooltip(child.key || child.label)}
                      data-tooltip-place="right"
                      role="button"
                      aria-label={getTooltip(child.key || child.label)}
                    >
                      {child.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default LeftSidebar;
