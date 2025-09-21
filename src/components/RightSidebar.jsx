// import XIcon from './icons/XIcon';
import { notificationsData, activitiesData, contactsData } from "../utils/SidebarUtils";
import BugBeetle from "../assets/BugBeetle.png";
import Broadcast from "../assets/Broadcast.png";
import User from "../assets/User.png";

// Helper component for notification icons
const NotificationIcon = ({ iconType }) => {
  switch (iconType) {
    case "bug":
      return <img src={BugBeetle} alt={iconType} />;
    case "user":
      return <img src={User} alt={iconType} />;
    case "subscription":
      return <img src={Broadcast} alt={iconType} />;
    default:
      return null;
  }
};

// Helper component for activity avatars
const ActivityAvatar = ({ avatar }) => (
  <div className="relative z-10 p-1">
    <img className="h-6 w-6 rounded-full object-cover" src={avatar} alt="avtar" />
    {/* <div className={`w-8 h-8 bg-gradient-to-br ${avatar.gradient} rounded-full flex items-center justify-center flex-shrink-0`}>
      <span className="text-xs font-medium text-white">{avatar.initials}</span>
    </div>
    {avatar.hasOnlineIndicator && <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>} */}
  </div>
);

// Helper component for contact avatars
const ContactAvatar = ({ avatar }) => (
  <img className="h-6 w-6 rounded-full object-cover" src={avatar} alt="avtar" />
  // <div className={`w-8 h-8 bg-gradient-to-br ${gradient} rounded-full flex items-center justify-center flex-shrink-0`}>
  //   <span className="text-xs font-medium text-white">{initials}</span>
  // </div>
);

const RightSidebar = ({ isOpen, toggleSidebar }) => (
  <aside
    className={`
      fixed top-0 right-0 z-40 w-[17.5rem] sm:w-80 bg-new-black-10 shadow-xl border-l
      lg:relative lg:translate-x-0 lg:w-80 lg:shrink-0 lg:z-auto
      transform transition-transform duration-300 ease-in-out
      h-full overflow-y-auto p-5
      ${isOpen ? "translate-x-0" : "translate-x-full"}
    `}
  >
    {/* Header */}
    {/* <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200">
      <button
        onClick={toggleSidebar}
        className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
        aria-label="Close right sidebar"
      >
        <XIcon />
      </button>
    </div> */}

    {/* Content */}
    <div className="flex flex-col gap-6">
      {/* Notifications Section */}
      <div className="flex flex-col gap-2">
        <div className="text-text-md font-semibold text-black-new-100 py-2 px-1 flex items-center">Notifications</div>
        <div className="space-y-4">
          {notificationsData.map((notification) => (
            <div key={notification.key} className="flex items-start space-x-2 p-1">
              <div className=" bg-[#E5ECF6] p-1 rounded-full flex items-center justify-center flex-shrink-0">
                <NotificationIcon iconType={notification.icon} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-text-md text-black-new-100">{notification.text}</p>
                <p className="text-text-sm text-black-new-40">{notification.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activities Section */}
      <div className="flex flex-col gap-2">
        <div className="text-text-md font-semibold text-black-new-100 py-2 px-1 flex items-center">Activities</div>
        <div className="relative">
          {/* Timeline connector line */}
          <div className="absolute left-4 top-8 bottom-10 w-px bg-black-new-10"></div>

          <div className="space-y-4">
            {activitiesData.map((activity) => (
              <div key={activity.key} className="flex items-start space-x-2">
                <ActivityAvatar avatar={activity.avatar} />
                <div className="flex-1 min-w-0">
                  <p className="text-text-md text-black-new-100">{activity.text}</p>
                  <p className="text-text-sm text-black-new-40">{activity.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contacts Section */}
      <div className="flex flex-col gap-2">
        <div className="text-text-md font-semibold text-black-new-100 py-2 px-1 flex items-center">Contacts</div>
        <div className="space-y-2">
          {contactsData.map((contact) => (
            <div key={contact.key} className="flex items-center space-x-2 py-1 px-1">
              <ContactAvatar avatar={contact.avatar} />
              <span className="text-sm text-gray-700">{contact.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </aside>
);

export default RightSidebar;
