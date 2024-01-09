import React,{useState} from 'react';
import OverviewCard from './OverviewCard';
import { transactionData } from '../../constants';
import { FaRegQuestionCircle } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { GoTriangleDown } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { BiSortAlt2 } from "react-icons/bi";
import { FaDownload } from "react-icons/fa6";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

const PaymentDashboard = () => {
  const [page, setPage] = useState(1);
  const [transactions, setTransaction] = useState(transactionData);
  const [search,setSearch]=useState('');

  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage < (transactions.length / 5 + 1) && selectedPage !== page) {
      setPage(selectedPage)
    }
  }

  const handleSearch = (user) => {
    return (
      user.orderId.toLowerCase().includes(search.toLowerCase())
    );
  };

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className='w-full flex flex-col'>
      <div className='w-full flex justify-between items-center px-4 py-2'>
        <div className='flex justify-center items-center gap-3'>
          <p className='font-semibold'>Payments</p>
          <div className='flex justify-center items-center gap-1 text-slate-600'>
            <FaRegQuestionCircle />
            <p className='text-base'>How it works</p>
          </div>
        </div>
        <div className='flex justify-start items-center bg-[#f2f2f2] px-2 rounded-lg w-[40%]'>
          <IoSearch />
          <input type='text' placeholder='Search features,tutorials,etc' className='bg-[#f2f2f2] focus:outline-none p-2'/>
        </div>
        <div className='flex justify-center items-center gap-2'>
          <RiMessage2Fill className='bg-slate-300 rounded-full p-1 text-3xl cursor-pointer'/>
          <GoTriangleDown className='bg-slate-300 rounded-full p-1 text-3xl cursor-pointer'/>
        </div>
      </div>
      <div className='bg-[#fafafa] p-4'>
        <div className='flex justify-between items-center p-2'>
          <p className='text-2xl font-semibold'>Overview</p>
          <select id="options" className='focus:outline-none bg-white rounded-md p-1'>
            <option value="Last Month">Last Month</option>
            <option value="Last Week">Last Week</option>
            <option value="Last Day">Last Day</option>
            <option value="Last Year">Last Year</option>
          </select>
        </div>
        <div className='grid grid-cols-2 gap-2'>
          <OverviewCard title="Online orders" value="231" money={false}/>
          <OverviewCard title="Amount received" value="23,92,312.19" money={true}/>
        </div>
      </div>
      <div className='p-4 flex flex-col justify-center'>
        <p className='text-2xl font-semibold p-2'>Transactions | This Month</p>
        <div className='flex flex-col bg-[#ffffff] shadow mt-2 p-2'>
          <div className='flex justify-between items-center mb-2'>
            <div className='flex justify-start items-center bg-[#ffffff] px-2 rounded-lg border border-slate-400'>
              <IoSearch />
              <input
                type='text'
                placeholder='Search by order ID...'
                className='focus:outline-none p-2'
                value={search}
                onChange={handleInputChange}
              />
            </div>
            <div className='flex justify-center items-center gap-3 text-xl'>
              <p className='flex justify-center items-center text-lg px-2 py-1 border border-slate-400 rounded-md'>
                Sort
                <BiSortAlt2 />
              </p>
              <FaDownload className='border border-slate-400 rounded-md'/>
            </div>
          </div>
          <table className="min-w-full divide-y divide-gray-200 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transaction Fees
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {transactions.filter((user) => {
                return handleSearch(user)
              }
              ).slice(page * 5 - 5, page * 5).map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.orderId}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.orderDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.orderAmount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.transactionFees}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {transactions.length > 0 && (
            <div className="flex justify-center items-center my-5">
              <div
                onClick={() => selectPageHandler(page - 1)}
                className={`flex justify-center items-center px-4 py-2 border border-gray-300 cursor-pointer ${page > 1 ? "" : "text-slate-400"}`}
              >
                <GrFormPrevious />
                <p>Previous</p>
              </div>

              <div className='flex flex-wrap'>
                {[...Array(Math.ceil(transactions.filter((data) => handleSearch(data)).length / 5))].map((_, i) => (
                  <div
                    key={i}
                    onClick={() => selectPageHandler(i + 1)}
                    className={`px-4 py-2 border border-gray-300 rounded-md cursor-pointer mx-1 ${page === i + 1 ? "bg-blue-500" : ""}`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>

              <div
                onClick={() => selectPageHandler(page + 1)}
                className={`flex justify-center items-center px-4 py-2 border border-gray-300 cursor-pointer ${
                  page < transactions.filter((data) => handleSearch(data)).length / 5 ? "" : "text-slate-400"
                }`}
              >
                  <p>Next</p>
                  <MdNavigateNext />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PaymentDashboard