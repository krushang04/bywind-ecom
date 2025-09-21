import React, { useState, useMemo, useEffect } from "react";
import ArrowsDownUp from "../assets/ArrowsDownUp.png";
import FunnelSimple from "../assets/FunnelSimple.png";
import Add from "../assets/Add.png";
import Search from "../assets/Search.png";
import { ordersData } from "../utils/OrderDataUtils";
import DotsThreeOutlineVertical from "../assets/DotsThreeOutlineVertical.png";
import CalendarBlank from "../assets/CalendarBlank.png";

const Orders = () => {
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("desc"); // 'asc' or 'desc'
  const [isSorted, setIsSorted] = useState(false);

  const allOrders = [...ordersData];

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

  // Reset to first page when search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <div className=" bg-white w-full flex flex-col gap-3">
      <div className="text-text-md text-black-new-100 font-semibold px-2 py-1">Order List</div>
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-2 bg-[#F7F9FB] rounded-lg">
        <div className="flex items-center gap-3 ">
          <img src={Add} alt="Add" />
          <img src={FunnelSimple} alt="sorting" />
          <img
            src={ArrowsDownUp}
            alt="filter"
            className={`cursor-pointer transition-opacity ${isSorted ? "opacity-100" : "opacity-60 hover:opacity-100"}`}
            onClick={handleSort}
            title={`Sort by date ${isSorted ? (sortOrder === "desc" ? "(Newest first)" : "(Oldest first)") : "(Click to sort)"}`}
          />
        </div>

        {/* Search Bar */}

        <div className="relative">
          <div className="flex items-center bg-[#FFFFFF66] border border-black-new-10 rounded-lg px-2 sm:px-3 py-1 w-32 sm:w-48 md:w-64 lg:w-40">
            <img src={Search} className="mr-2 sm:mr-3" alt="search" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent w-full text-black-new-100 placeholder-black-new-20 outline-none flex-1 text-xs sm:text-text-sm"
            />
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className=" border-b border-black-new-20 text-black-new-40 text-text-sm font-normal">
              <tr>
                <th className="px-2 sm:px-3 py-2 text-left">
                  <input
                    type="checkbox"
                    checked={selectedRows.size === paginatedOrders.length && paginatedOrders.length > 0}
                    onChange={handleSelectAll}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
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
            <tbody className="bg-white divide-y divide-gray-200 text-black-new-100 text-text-sm">
              {paginatedOrders.map((order, index) => (
                <tr key={startIndex + index} className="hover:bg-[#F7F9FB] transition-colors border-b border-black-new-5">
                  <td className="px-2 sm:px-3 py-2 whitespace-nowrap">
                    <input
                      type="checkbox"
                      checked={selectedRows.has(startIndex + index)}
                      onChange={() => handleSelectRow(startIndex + index)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                    />
                  </td>
                  <td className="px-2 sm:px-3 py-2 whitespace-nowrap  ">{order.id}</td>
                  <td className="px-2 sm:px-3 py-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <img className="h-8 w-8 rounded-full object-cover" src={order.user.avatar} alt={order.user.name} />
                      <div className="ml-3">
                        <div className=" ">{order.user.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 sm:px-3 py-2 whitespace-nowrap  ">{order.project}</td>
                  <td className="px-2 sm:px-3 py-2 whitespace-nowrap  ">
                    <div className="flex items-center">
                      <span>{order.address}</span>
                      {order.id === "#CM9805" && (
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
                      <img src={CalendarBlank} alt="calendar" className="mr-1" />
                      {order.date}
                    </div>
                  </td>
                  <td className="px-2 sm:px-3 py-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ background: order.status.color }}></div>
                      <span style={{ color: order.status.color }}>{order.status.text}</span>
                    </div>
                  </td>
                  <td className="px-2 sm:px-3 py-2 whitespace-nowrap">
                    {order.status.text === "Rejected" && <img src={DotsThreeOutlineVertical} alt="action" className="cursor-pointer" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="bg-white px-4 py-3 border-t border-black-new-5  sm:px-6">
          <div className="flex items-center justify-center sm:justify-end">
            <nav className="flex items-center space-x-1">
              <button
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                className="p-2 text-gray-400 hover:text-black-new-100 disabled:opacity-50 disabled:cursor-not-allowed"
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
                  className={`px-3 py-2 text-text-sm font-medium rounded-md text-black-new-100 ${currentPage === page ? "bg-black-new-5 " : " hover:bg-black-new-5"}`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                className="p-2 text-gray-400 hover:text-black-new-100 disabled:opacity-50 disabled:cursor-not-allowed"
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
