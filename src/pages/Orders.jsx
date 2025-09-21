import React, { useState, useMemo, useEffect } from "react";
import { ordersData, getStatusColor } from "../utils/OrderDataUtils";
import { useTheme } from "../context/ThemeContext";
import getSvgColor from "../utils/getSvgColor";

const Orders = () => {
  const { theme } = useTheme();
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const [isSorted, setIsSorted] = useState(false);
  const [allOrders] = useState(ordersData);

  const filteredOrders = allOrders.filter(
    (order) =>
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.project.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedOrders = useMemo(() => {
    if (!isSorted) return filteredOrders;

    return [...filteredOrders].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.timeline - b.timeline;
      } else {
        return b.timeline - a.timeline;
      }
    });
  }, [filteredOrders, sortOrder, isSorted]);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(sortedOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedOrders = sortedOrders.slice(startIndex, endIndex);

  const handleSelectAll = () => {
    if (selectedRows.size === paginatedOrders.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(paginatedOrders.map((_, index) => startIndex + index)));
    }
  };

  const handleSelectRow = (index) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(index)) {
      newSelected.delete(index);
    } else {
      newSelected.add(index);
    }
    setSelectedRows(newSelected);
  };

  const handleSort = () => {
    if (!isSorted) {
      setSortOrder("desc");
      setIsSorted(true);
    } else {
      setSortOrder(sortOrder === "desc" ? "asc" : "desc");
    }
    setCurrentPage(1); // Reset to first page when sorting
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const sortTooltip = !isSorted ? "Sort descending" : sortOrder === "desc" ? "Sort ascending" : "Sort descending";

  return (
    <div className="w-full flex flex-col gap-3 text-black-new-100 dark:text-white-new-100">
      <div className="text-text-md font-semibold px-2 py-1">Order List</div>
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-2 bg-black-new-5 dark:bg-white-new-5 rounded-lg">
        <div className="flex items-center gap-3 ">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.625 4.375C10.625 4.02982 10.3452 3.75 10 3.75C9.65482 3.75 9.375 4.02982 9.375 4.375V9.375H4.375C4.02982 9.375 3.75 9.65482 3.75 10C3.75 10.3452 4.02982 10.625 4.375 10.625H9.375V15.625C9.375 15.9702 9.65482 16.25 10 16.25C10.3452 16.25 10.625 15.9702 10.625 15.625V10.625H15.625C15.9702 10.625 16.25 10.3452 16.25 10C16.25 9.65482 15.9702 9.375 15.625 9.375H10.625V4.375Z"
              fill={getSvgColor(theme)}
            />
          </svg>

          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.625 10C15.625 10.1658 15.5592 10.3247 15.4419 10.4419C15.3247 10.5592 15.1658 10.625 15 10.625H5C4.83424 10.625 4.67527 10.5592 4.55806 10.4419C4.44085 10.3247 4.375 10.1658 4.375 10C4.375 9.83424 4.44085 9.67527 4.55806 9.55806C4.67527 9.44085 4.83424 9.375 5 9.375H15C15.1658 9.375 15.3247 9.44085 15.4419 9.55806C15.5592 9.67527 15.625 9.83424 15.625 10ZM18.125 5.625H1.875C1.70924 5.625 1.55027 5.69085 1.43306 5.80806C1.31585 5.92527 1.25 6.08424 1.25 6.25C1.25 6.41576 1.31585 6.57473 1.43306 6.69194C1.55027 6.80915 1.70924 6.875 1.875 6.875H18.125C18.2908 6.875 18.4497 6.80915 18.5669 6.69194C18.6842 6.57473 18.75 6.41576 18.75 6.25C18.75 6.08424 18.6842 5.92527 18.5669 5.80806C18.4497 5.69085 18.2908 5.625 18.125 5.625ZM11.875 13.125H8.125C7.95924 13.125 7.80027 13.1908 7.68306 13.3081C7.56585 13.4253 7.5 13.5842 7.5 13.75C7.5 13.9158 7.56585 14.0747 7.68306 14.1919C7.80027 14.3092 7.95924 14.375 8.125 14.375H11.875C12.0408 14.375 12.1997 14.3092 12.3169 14.1919C12.4342 14.0747 12.5 13.9158 12.5 13.75C12.5 13.5842 12.4342 13.4253 12.3169 13.3081C12.1997 13.1908 12.0408 13.125 11.875 13.125Z"
              fill={getSvgColor(theme)}
            />
          </svg>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleSort}
            className="cursor-pointer focus:outline-none"
            aria-label={sortTooltip}
            data-tooltip-id="header-tip"
            data-tooltip-content={sortTooltip}
          >
            <path
              d="M4.19194 13.3081C4.07473 13.1908 3.91576 13.125 3.75 13.125C3.58424 13.125 3.42527 13.1908 3.30806 13.3081C3.19085 13.4253 3.125 13.5842 3.125 13.75C3.125 13.9158 3.19085 14.0747 3.30806 14.1919L5.80806 16.6919C5.92527 16.8092 6.08424 16.875 6.25 16.875C6.41576 16.875 6.57473 16.8092 6.69194 16.6919L9.19171 14.1922C9.30892 14.075 9.375 13.9158 9.375 13.75C9.375 13.5842 9.30915 13.4253 9.19194 13.3081C9.07473 13.1908 8.91576 13.125 8.75 13.125C8.58424 13.125 8.42527 13.1908 8.30806 13.3081L6.25 15.3661L4.19194 13.3081Z"
              fill={getSvgColor(theme)}
            />
            <path
              d="M5.625 3.75V16.25C5.625 16.5952 5.90482 16.875 6.25 16.875C6.59518 16.875 6.875 16.5952 6.875 16.25V3.75C6.875 3.40482 6.59518 3.125 6.25 3.125C5.90482 3.125 5.625 3.40482 5.625 3.75Z"
              fill={getSvgColor(theme)}
            />
            <path
              d="M15.8077 6.69162C15.9249 6.80883 16.0842 6.875 16.25 6.875C16.4158 6.875 16.5747 6.80915 16.6919 6.69194C16.8092 6.57473 16.875 6.41576 16.875 6.25C16.875 6.08424 16.8092 5.92527 16.6919 5.80806L14.1919 3.30806C14.0747 3.19085 13.9158 3.125 13.75 3.125C13.5842 3.125 13.4253 3.19085 13.3081 3.30806L10.8081 5.80806C10.6908 5.92527 10.625 6.08424 10.625 6.25C10.625 6.26001 10.6252 6.27002 10.6257 6.28002C10.6332 6.43522 10.6982 6.58207 10.8081 6.69194C10.9253 6.80915 11.0842 6.875 11.25 6.875C11.4158 6.875 11.5747 6.80915 11.6919 6.69194L13.75 4.63388L15.8077 6.69162Z"
              fill={getSvgColor(theme)}
            />
            <path
              d="M14.375 16.25V3.75C14.375 3.40482 14.0952 3.125 13.75 3.125C13.4048 3.125 13.125 3.40482 13.125 3.75V16.25C13.125 16.5952 13.4048 16.875 13.75 16.875C14.0952 16.875 14.375 16.5952 14.375 16.25Z"
              fill={getSvgColor(theme)}
            />
          </svg>
        </div>

        {/* Search Bar */}

        <div className="relative">
          <div className="flex items-center bg-white-new-40 dark:bg-black-new-10 border border-black-new-10 dark:border-white-new-10 rounded-lg px-2 sm:px-3 py-1 w-32 sm:w-48 md:w-64 lg:w-40">
            <svg width="16" className="mr-2 sm:mr-3" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.3501 14.3562C14.2568 14.4481 14.1311 14.4998 14.0001 14.5C13.8673 14.4994 13.7398 14.448 13.6438 14.3562L10.9438 11.65C9.80671 12.6051 8.34474 13.0844 6.86285 12.9878C5.38095 12.8912 3.99355 12.2263 2.99 11.1316C1.98645 10.037 1.44424 8.59717 1.47645 7.11248C1.50867 5.62779 2.11282 4.21286 3.1629 3.16277C4.21298 2.11269 5.62791 1.50855 7.1126 1.47633C8.59729 1.44412 10.0371 1.98633 11.1317 2.98988C12.2264 3.99343 12.8913 5.38083 12.9879 6.86273C13.0845 8.34462 12.6052 9.80659 11.6501 10.9437L14.3501 13.6437C14.3973 13.6903 14.4349 13.7457 14.4605 13.8069C14.4861 13.868 14.4993 13.9337 14.4993 14C14.4993 14.0663 14.4861 14.1319 14.4605 14.1931C14.4349 14.2542 14.3973 14.3097 14.3501 14.3562ZM7.2501 12C8.18956 12 9.10792 11.7214 9.88906 11.1995C10.6702 10.6775 11.279 9.93567 11.6385 9.06772C11.998 8.19977 12.0921 7.24471 11.9088 6.3233C11.7255 5.40189 11.2732 4.55552 10.6089 3.89122C9.94455 3.22692 9.09819 2.77452 8.17678 2.59124C7.25537 2.40797 6.3003 2.50203 5.43235 2.86155C4.5644 3.22106 3.82255 3.82988 3.30062 4.61102C2.77868 5.39215 2.5001 6.31051 2.5001 7.24998C2.50175 8.50925 3.00273 9.71647 3.89317 10.6069C4.78361 11.4973 5.99083 11.9983 7.2501 12Z"
                fill={getSvgColor(theme)}
                fill-opacity="0.2"
              />
            </svg>

            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent w-full placeholder-black-new-20 dark:placeholder-white-new-20 outline-none flex-1 text-xs sm:text-text-sm"
            />
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className=" border-b border-black-new-20 dark:border-white-new-20 text-black-new-40 dark:text-white-new-20 text-text-sm font-normal">
              <tr>
                <th className="px-2 sm:px-3 py-2 text-left">
                  <input
                    type="checkbox"
                    checked={selectedRows.size === paginatedOrders.length && paginatedOrders.length > 0}
                    onChange={handleSelectAll}
                    // className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                    className="w-4 h-4 rounded-xl text-[#C6C7F8] dark:border-white-new-40 border-black-new-40 focus:ring-blue-500 cursor-pointer"
                  />
                </th>
                <th className="px-2 sm:px-3 py-2 text-left font-normal tracking-wider">Order ID</th>
                <th className="px-2 sm:px-3 py-2 text-left font-normal tracking-wider">User</th>
                <th className="px-2 sm:px-3 py-2 text-left font-normal tracking-wider">Project</th>
                <th className="px-2 sm:px-3 py-2 text-left font-normal tracking-wider">Address</th>
                <th className="px-2 sm:px-3 py-2 text-left font-normal tracking-wider">Date</th>
                <th className="px-2 sm:px-3 py-2 text-left font-normal tracking-wider">Status</th>
                <th className="px-2 sm:px-3 py-2 text-left font-normal tracking-wider">{/* Actions column */}</th>
              </tr>
            </thead>
            <tbody className=" divide-y text-text-sm">
              {paginatedOrders.map((order, index) => (
                <tr key={startIndex + index} className="hover:bg-black-new-5 dark:hover:bg-white-new-5 transition-colors border-b border-black-new-5 dark:border-white-new-10">
                  <td className="px-2 sm:px-3 py-2 whitespace-nowrap">
                    <input
                      type="checkbox"
                      checked={selectedRows.has(startIndex + index)}
                      onChange={() => handleSelectRow(startIndex + index)}
                      className="w-4 h-4 text-blue-600 dark:border-white-new-40 border-black-new-40 rounded focus:ring-blue-500 cursor-pointer"
                    />
                  </td>
                  <td className="px-2 sm:px-3 py-2 whitespace-nowrap  ">{order.id}</td>
                  <td className="px-2 sm:px-3 py-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <img className="h-6 w-6 rounded-full object-cover" src={order.user.avatar} alt={order.user.name} />
                      <div className="ml-3">
                        <div className=" ">{order.user.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 sm:px-3 py-2 whitespace-nowrap  ">{order.project}</td>
                  <td className="px-2 sm:px-3 py-2 whitespace-nowrap  ">
                    <div className="flex items-center">
                      <span>{order.address}</span>
                      {typeof order.address === "string" && order.address.toLowerCase().includes("nest lane olivette".toLowerCase()) && (
                        <svg className="ml-1 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      )}
                    </div>
                  </td>
                  <td className="px-2 sm:px-3 py-2 whitespace-nowrap  ">
                    <div className="flex items-center">
                      <svg className="mr-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M13 2H11.5V1.5C11.5 1.36739 11.4473 1.24021 11.3536 1.14645C11.2598 1.05268 11.1326 1 11 1C10.8674 1 10.7402 1.05268 10.6464 1.14645C10.5527 1.24021 10.5 1.36739 10.5 1.5V2H5.5V1.5C5.5 1.36739 5.44732 1.24021 5.35355 1.14645C5.25979 1.05268 5.13261 1 5 1C4.86739 1 4.74021 1.05268 4.64645 1.14645C4.55268 1.24021 4.5 1.36739 4.5 1.5V2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V13C2 13.2652 2.10536 13.5196 2.29289 13.7071C2.48043 13.8946 2.73478 14 3 14H13C13.2652 14 13.5196 13.8946 13.7071 13.7071C13.8946 13.5196 14 13.2652 14 13V3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2ZM4.5 3V3.5C4.5 3.63261 4.55268 3.75979 4.64645 3.85355C4.74021 3.94732 4.86739 4 5 4C5.13261 4 5.25979 3.94732 5.35355 3.85355C5.44732 3.75979 5.5 3.63261 5.5 3.5V3H10.5V3.5C10.5 3.63261 10.5527 3.75979 10.6464 3.85355C10.7402 3.94732 10.8674 4 11 4C11.1326 4 11.2598 3.94732 11.3536 3.85355C11.4473 3.75979 11.5 3.63261 11.5 3.5V3H13V5H3V3H4.5ZM13 13H3V6H13V13Z"
                          fill={getSvgColor(theme)}
                        />
                      </svg>

                      {order.date}
                    </div>
                  </td>
                  <td className="px-2 sm:px-3 py-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ background: getStatusColor(theme, order.status.text) }}></div>
                      <span style={{ color: getStatusColor(theme, order.status.text) }}>{order.status.text}</span>
                    </div>
                  </td>
                  <td className="px-2 sm:px-3 py-2 whitespace-nowrap">
                    {order.status.text === "Rejected" && (
                      <svg className="cursor-pointer" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 7C4.55228 7 5 7.44772 5 8C5 8.55229 4.55228 9 4 9C3.44772 9 3 8.55229 3 8C3 7.44772 3.44772 7 4 7Z" fill={getSvgColor(theme)} />
                        <path d="M8 7C8.55228 7 9 7.44772 9 8C9 8.55229 8.55228 9 8 9C7.44772 9 7 8.55229 7 8C7 7.44772 7.44772 7 8 7Z" fill={getSvgColor(theme)} />
                        <path d="M13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9C12.5523 9 13 8.55228 13 8Z" fill={getSvgColor(theme)} />
                      </svg>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-4 py-3 border-t border-black-new-5 dark:border-white-new-5  sm:px-6">
          <div className="flex items-center justify-center sm:justify-end">
            <nav className="flex items-center space-x-1">
              <button
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                className="p-2 text-gray-400 hover:text-black-new-100 dark:hover:text-white-new-100 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentPage === 1}
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-2 text-text-sm font-medium rounded-md ${
                    currentPage === page ? "bg-black-new-5 dark:bg-white-new-5" : " hover:bg-black-new-5 dark:hover:bg-white-new-5"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                className="p-2 text-gray-400 hover:text-black-new-100 dark:hover:text-white-new-100 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentPage === totalPages}
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
