const Products = () => (
  <>
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">Products</h1>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
        Add New Product
      </button>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div key={item} className="bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">Product {item}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">Description of product {item}</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-green-600">$99.99</span>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">
                  Edit
                </button>
                <button className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default Products;