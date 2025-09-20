const ProductTable = ({ products, title = "Top Selling Products", loading = false }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const defaultProducts = [
    {
      name: "ASOS Ridley High Waist",
      price: 79.49,
      quantity: 82,
      amount: 6518.18,
    },
    {
      name: "Marco Lightweight Shirt",
      price: 128.5,
      quantity: 37,
      amount: 4754.5,
    },
    {
      name: "Half Sleeve Shirt",
      price: 39.99,
      quantity: 64,
      amount: 2559.36,
    },
    {
      name: "Lightweight Jacket",
      price: 20.0,
      quantity: 184,
      amount: 3680.0,
    },
    {
      name: "Marco Shoes",
      price: 79.49,
      quantity: 64,
      amount: 1965.81,
    },
  ];

  const displayProducts = products || defaultProducts;

  if (loading) {
    return (
      <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{title}</h2>
        <div className="animate-pulse space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex space-x-4">
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded flex-1"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-20"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-16"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-24"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F7F9FB] dark:bg-zinc-800 p-6 rounded-lg h-full flex flex-col space-y-1">
      <div className="text-text-md font-semibold text-black-new-100 dark:text-white">{title}</div>
      <div className="overflow-x-auto flex-1">
        <table className="w-full">
          <thead>
            <tr className="border-b border-black-new-20 dark:border-gray-700 text-black-new-40 text-left text-text-sm">
              <th className="py-2 text-xs font-medium dark:text-gray-400 tracking-wider">Name</th>
              <th className="py-2 text-xs font-medium dark:text-gray-400 tracking-wider">Price</th>
              <th className="py-2 text-xs font-medium dark:text-gray-400 tracking-wider">Quantity</th>
              <th className="py-2 text-xs font-medium dark:text-gray-400 tracking-wider">Amount</th>
            </tr>
          </thead>
          <tbody>
            {displayProducts.map((product, index) => (
              <tr key={index} className=" text-black-new-100 text-text-sm dark:text-gray-400">
                <td className="py-2">{product.name}</td>
                <td className="py-2">{formatCurrency(product.price)}</td>
                <td className="py-2">{product.quantity}</td>
                <td className="py-2">{formatCurrency(product.amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
