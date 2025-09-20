import XIcon from './icons/XIcon';

const RightSidebar = ({ isOpen, toggleSidebar }) => (
  <aside
    className={`
      fixed top-0 right-0 z-40 w-64 bg-zinc-100 shadow-xl
      lg:relative lg:translate-x-0 lg:w-64 lg:shrink-0 lg:z-auto
      transform transition-transform duration-300 ease-in-out
      dark:bg-zinc-800 h-auto
      ${isOpen ? 'translate-x-0' : 'translate-x-full'}
    `}
  >
    <div className="flex justify-between items-center p-4">
      <h2 className="text-lg font-bold">Quick Actions</h2>
      <button
        onClick={toggleSidebar}
        className="lg:hidden p-2 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
        aria-label="Close right sidebar"
      >
        <XIcon />
      </button>
    </div>
    <div className="p-4 space-y-4">
      <div className="p-4 rounded-lg bg-zinc-200 dark:bg-zinc-700">
        <h3 className="font-semibold mb-2">Recent Activity</h3>
        <ul className="text-sm space-y-1">
          <li>• New order #1234 received</li>
          <li>• Product "Widget A" updated</li>
          <li>• Customer inquiry resolved</li>
        </ul>
      </div>
      <div className="p-4 rounded-lg bg-zinc-200 dark:bg-zinc-700">
        <h3 className="font-semibold mb-2">Quick Actions</h3>
        <button className="w-full px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors mb-2">
          Add New Product
        </button>
        <button className="w-full px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 transition-colors">
          View Orders
        </button>
      </div>
    </div>
  </aside>
);

export default RightSidebar;