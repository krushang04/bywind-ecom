// import XIcon from './icons/XIcon';

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
          {/* Bug Notification 1 */}
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-700">You have a bug that needs...</p>
              <p className="text-xs text-gray-500 mt-1">Just now</p>
            </div>
          </div>

          {/* New User Registration */}
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-700">New user registered</p>
              <p className="text-xs text-gray-500 mt-1">59 minutes ago</p>
            </div>
          </div>

          {/* Bug Notification 2 */}
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-700">You have a bug that needs...</p>
              <p className="text-xs text-gray-500 mt-1">12 hours ago</p>
            </div>
          </div>

          {/* Subscription Notification */}
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-700">Andi Lane subscribed to you</p>
              <p className="text-xs text-gray-500 mt-1">Today, 11:59 AM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Activities Section */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-4">Activities</h3>
        <div className="relative">
          {/* Timeline connector line */}
          <div className="absolute left-4 top-4 bottom-4 w-px bg-gray-300"></div>
          
          <div className="space-y-4">
            {/* Activity 1 */}
            <div className="flex items-start space-x-3">
              <div className="relative z-10">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-medium text-white">A</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-700">You have a bug that needs...</p>
                <p className="text-xs text-gray-500 mt-1">Just now</p>
              </div>
            </div>

            {/* Activity 2 */}
            <div className="flex items-start space-x-3">
              <div className="relative z-10">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-medium text-white">B</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-700">Released a new version</p>
                <p className="text-xs text-gray-500 mt-1">59 minutes ago</p>
              </div>
            </div>

            {/* Activity 3 */}
            <div className="flex items-start space-x-3">
              <div className="relative z-10">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-medium text-white">C</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-700">Submitted a bug</p>
                <p className="text-xs text-gray-500 mt-1">12 hours ago</p>
              </div>
            </div>

            {/* Activity 4 */}
            <div className="flex items-start space-x-3">
              <div className="relative z-10">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-medium text-white">D</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-700">Modified A data in Page X</p>
                <p className="text-xs text-gray-500 mt-1">Today, 11:59 AM</p>
              </div>
            </div>

            {/* Activity 5 */}
            <div className="flex items-start space-x-3">
              <div className="relative z-10">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-medium text-white">E</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-700">Deleted a page in Project X</p>
                <p className="text-xs text-gray-500 mt-1">Feb 2, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contacts Section */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-4">Contacts</h3>
        <div className="space-y-3">
          {/* Contact 1 */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-medium text-white">NC</span>
            </div>
            <span className="text-sm text-gray-700">Natali Craig</span>
          </div>

          {/* Contact 2 */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-medium text-white">DC</span>
            </div>
            <span className="text-sm text-gray-700">Drew Cano</span>
          </div>

          {/* Contact 3 */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-medium text-white">OD</span>
            </div>
            <span className="text-sm text-gray-700">Orlando Diggs</span>
          </div>

          {/* Contact 4 */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-medium text-white">AL</span>
            </div>
            <span className="text-sm text-gray-700">Andi Lane</span>
          </div>

          {/* Contact 5 */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-medium text-white">KM</span>
            </div>
            <span className="text-sm text-gray-700">Kate Morrison</span>
          </div>

          {/* Contact 6 */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-medium text-white">KO</span>
            </div>
            <span className="text-sm text-gray-700">Koray Okumus</span>
          </div>
        </div>
      </div>
    </div>
  </aside>
);

export default RightSidebar;