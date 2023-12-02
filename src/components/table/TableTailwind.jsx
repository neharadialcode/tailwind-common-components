import React from "react";
import { tabledata } from "../common/Helper";
import BackToTop from "../common/BackToTop";

const TableTailwind = () => {
  return (
    <>
      <BackToTop />
      <a
        href="/"
        className="bg-blue my-8 mx-3 h-48px w-120px flex justify-center items-center sm:text-sm text-xs rounded-xl text-white font-Inter font-semibold"
      >
        home
      </a>
      <div className="bg-[#040426] min-h-screen">
        <div className="container mx-auto px-4 py-10">
          <div className=" overflow-x-auto lg:overflow-x-hidden min-w-full lg:min-w-0  rounded-xl ">
            <table className="w-[736px] mg:w-full lg:w-full taiwindtable bg-[#212148] ">
              <thead className="font-inter text-[#68688E] text-[12px] lg:text-xs">
                <tr>
                  <th className="text-start p-4">DOWNLOAD LIST</th>
                  <th className="text-start p-4">ORDER ID</th>
                  <th className="text-start p-4">PROXY TYPE</th>
                  <th className="text-start p-4">PROXY USERNAME</th>
                  <th className="text-start p-4">QUANTITY</th>
                  <th className="text-start p-4">EXPIRY DATE</th>
                  <th className="text-start p-4">RENEW LIST</th>
                </tr>
              </thead>
              <tbody className="font-inter text-[12px] lg:text-xs text-white ">
                {tabledata.map((item, index) => (
                  <tr
                    key={index}
                    className={`text-start ${
                      index % 2 === 1 ? "even:bg-gray-200" : "bg-[#151536]"
                    }`}
                  >
                    <td className="p-4">{item.orderId}</td>
                    <td className="p-4">{item.proxyType}</td>
                    <td className="p-4">{item.proxyUsername}</td>
                    <td className="p-4">{item.quantity}</td>
                    <td className="p-4">{item.expiryDate}</td>
                    <td className="p-4">{item.renewList}</td>
                    <td className="p-4">{item.someOtherColumn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableTailwind;
