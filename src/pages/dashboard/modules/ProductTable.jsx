import SectionCard from "../../../components/common/SectionCard";
import { formatCurrency } from "../../../utils/formatters";
import { defaultProducts as defaultProductsData } from "../../../utils/data";

const ProductTable = ({ products, title = "Top Selling Products", loading = false }) => {
  const displayProducts = products || defaultProductsData;

  if (loading) {
    return (
      <SectionCard title={title}>
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
      </SectionCard>
    );
  }

  return (
    <SectionCard title={title} className="h-full flex flex-col gap-1">
      <div className="overflow-x-auto flex-1">
        <table className="w-full">
          <thead>
            <tr className="border-b border-black-new-20 dark:border-white-new-20 text-black-new-40 dark:text-white-new-40 text-left text-text-sm">
              <th className="py-2 font-medium tracking-wider">Name</th>
              <th className="py-2 font-medium tracking-wider">Price</th>
              <th className="py-2 font-medium tracking-wider">Quantity</th>
              <th className="py-2 font-medium tracking-wider">Amount</th>
            </tr>
          </thead>
          <tbody>
            {displayProducts.map((product, index) => (
              <tr key={index} className=" text-black-new-100 dark:text-white-new-100 text-text-sm">
                <td className="py-2">{product.name}</td>
                <td className="py-2">{formatCurrency(product.price)}</td>
                <td className="py-2">{product.quantity}</td>
                <td className="py-2">{formatCurrency(product.amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionCard>
  );
};

export default ProductTable;
