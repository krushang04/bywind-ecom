const Customers = () => (
  <>
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">Customers</h1>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
        Add New Customer
      </button>
    </div>
    
    <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Customer List</h2>
          <div className="flex space-x-2">
            <input 
              type="text" 
              placeholder="Search customers..." 
              className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
              Search
            </button>
          </div>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Phone</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Orders</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Total Spent</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
            {[
              { name: 'John Doe', email: 'john@example.com', phone: '+1-555-0123', orders: 5, total: '$1,299.95' },
              { name: 'Jane Smith', email: 'jane@example.com', phone: '+1-555-0124', orders: 3, total: '$449.97' },
              { name: 'Bob Johnson', email: 'bob@example.com', phone: '+1-555-0125', orders: 8, total: '$639.92' },
              { name: 'Alice Brown', email: 'alice@example.com', phone: '+1-555-0126', orders: 2, total: '$199.98' },
            ].map((customer, index) => (
              <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                      <span className="text-sm font-medium">{customer.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium">{customer.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{customer.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{customer.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{customer.orders}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">{customer.total}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                  <button className="text-green-600 hover:text-green-900 mr-3">Edit</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </>
);

export default Customers;