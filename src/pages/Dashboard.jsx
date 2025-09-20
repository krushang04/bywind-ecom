const Dashboard = () => (
  <>
    <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300">Total Sales</h3>
        <p className="text-3xl font-bold text-green-600">$12,345</p>
        <p className="text-sm text-green-500">+12% from last month</p>
      </div>
      <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300">Orders</h3>
        <p className="text-3xl font-bold text-blue-600">156</p>
        <p className="text-sm text-blue-500">+8% from last month</p>
      </div>
      <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300">Customers</h3>
        <p className="text-3xl font-bold text-purple-600">1,234</p>
        <p className="text-sm text-purple-500">+15% from last month</p>
      </div>
      <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300">Products</h3>
        <p className="text-3xl font-bold text-orange-600">89</p>
        <p className="text-sm text-orange-500">+3% from last month</p>
      </div>
    </div>
    <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Order ID</th>
              <th className="text-left py-2">Customer</th>
              <th className="text-left py-2">Amount</th>
              <th className="text-left py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">#1234</td>
              <td className="py-2">John Doe</td>
              <td className="py-2">$299.99</td>
              <td className="py-2"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">Completed</span></td>
            </tr>
            <tr className="border-b">
              <td className="py-2">#1235</td>
              <td className="py-2">Jane Smith</td>
              <td className="py-2">$149.99</td>
              <td className="py-2"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Processing</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </>
);

export default Dashboard;