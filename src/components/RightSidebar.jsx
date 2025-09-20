// import XIcon from './icons/XIcon';
import { notificationsData, activitiesData, contactsData } from '../utils/SidebarUtils';

// Helper component for notification icons
const NotificationIcon = ({ iconType }) => {
  const iconProps = { className: "w-4 h-4 text-blue-600", fill: "currentColor", viewBox: "0 0 20 20" };
  
  switch (iconType) {
    case "bug":
      return <svg {...iconProps}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
    case "user":
      return <svg {...iconProps}><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>;
    case "subscription":
      return <svg {...iconProps}><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" /></svg>;
    default:
      return null;
  }
};

// Helper component for activity avatars
const ActivityAvatar = ({ avatar }) => (
  <div className="relative z-10">
    <div className={`w-8 h-8 bg-gradient-to-br ${avatar.gradient} rounded-full flex items-center justify-center flex-shrink-0`}>
      <span className="text-xs font-medium text-white">{avatar.initials}</span>
    </div>
    {avatar.hasOnlineIndicator && (
      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
    )}
  </div>
);

// Helper component for contact avatars
const ContactAvatar = ({ initials, gradient }) => (
  <div className={`w-8 h-8 bg-gradient-to-br ${gradient} rounded-full flex items-center justify-center flex-shrink-0`}>
    <span className="text-xs font-medium text-white">{initials}</span>
  </div>
);

const RightSidebar = ({ isOpen, toggleSidebar }) => (
  <aside
    className={`
      fixed top-0 right-0 z-40 w-72 sm:w-80 bg-new-black-10 shadow-xl border-l
      lg:relative lg:translate-x-0 lg:w-80 lg:shrink-0 lg:z-auto
      transform transition-transform duration-300 ease-in-out
      h-full overflow-y-auto
      ${isOpen ? 'translate-x-0' : 'translate-x-full'}
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
    <div className="p-4 sm:p-6 space-y-6">
      {/* Notifications Section */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-4">Notifications</h3>
        <div className="space-y-4">
          {notificationsData.map((notification) => (
            <div key={notification.key} className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <NotificationIcon iconType={notification.icon} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-700">{notification.text}</p>
                <p className="text-xs text-gray-500 mt-1">{notification.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activities Section */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-4">Activities</h3>
        <div className="relative">
          {/* Timeline connector line */}
          <div className="absolute left-4 top-4 bottom-4 w-px bg-gray-300"></div>
          
          <div className="space-y-4">
            {activitiesData.map((activity) => (
              <div key={activity.key} className="flex items-start space-x-3">
                <ActivityAvatar avatar={activity.avatar} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-700">{activity.text}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contacts Section */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-4">Contacts</h3>
        <div className="space-y-3">
          {contactsData.map((contact) => (
            <div key={contact.key} className="flex items-center space-x-3">
              <ContactAvatar initials={contact.initials} gradient={contact.gradient} />
              <span className="text-sm text-gray-700">{contact.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </aside>
);

export default RightSidebar;