import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#f7f9fb] h-screen w-full flex flex-row">
      {/* Siderbar */}
      <div className="bg-white h-screen w-[237px] flex flex-col justify-between p-10">
        <Image src="/PsycheFinance-031.png" width={162} height={41} alt="logo" className="cursor-pointer" />
        <div className="bg-gray-200 border-2xl w-[170px] h-[48px] relative top-[-100px]"></div>
        {/* Icons list  */}
        <div className="flex flex-col relative top-[-200px]">
          <div className="flex flex-row jusitfy-between align-center items-center cursor-pointer mt-5">
            <Image src="/wallet.png" height={5} width={20} alt="icon" />
            <p className="text-gray-400 ml-5 font-Aeonik-Regular">Wallets</p>
          </div>
          <div className="flex flex-row jusitfy-between align-center items-center cursor-pointer mt-5">
            <Image src="/bank.png" height={5} width={20} alt="icon" />
            <p className="text-gray-400 ml-5 font-Aeonik-Regular">Accounts</p>
          </div>
          <div className="flex flex-row jusitfy-between align-center items-center cursor-pointer mt-5">
            <Image src="/link-circle.png" height={5} width={20} alt="icon" />
            <p className="text-gray-400 ml-5 font-Aeonik-Regular">Payment Link</p>
          </div>
          <div className="flex flex-row jusitfy-between align-center items-center cursor-pointer mt-5">
            <Image src="/setting-3.png" height={5} width={20} alt="icon" />
            <p className="text-gray-400 ml-5 font-Aeonik-Regular">Settings</p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-row justify-evely align-middle items-center cursor-pointer">
            <Image src="/logout.png" height={5} width={20} alt="icon" />
            <p className="text-red-300 ml-5">Logout</p>
          </div>
          <div className="flex flex-row justify-evenly align-middle items-center mt-2">
            <Image src="/Ellipse25.png" height={45} width={45} alt="icon" />
            <p className="text-gray-600 font-Aeonik-Regular ml-2 ">Boluwatife Oluwafemi</p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="w-full overflow-y-scroll">
        {/* Navbar */}
        <div className="flex flex-row justify-between items-center align-middle bg-white p-2 h-[77px]">
          <div className="font-Aeonik-Light ml-5 text-gray-600">Dashboard</div>
          <div className="flex flex-row justify-evenly align-baseline items-center mr-6">
            <div className="w-[45px] h-[45px] rounded-[50%] bg-[#EBEDF0] flex flex-row items-center justify-center">
              <Image src="/notification.png" width={24} height={24} alt="logo" className="cursor-pointer" />
            </div>
            <div className="bg-[#E7EFF6] w-[135px] h-[40px] rounded-2xl ml-5"></div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col justify-start p-6">
          <span className="flex flex-row ">
            <p className="font-Aeonik-Light text-gray-800">Hi Boluwatife</p>
            <Image src="/emoji _smilingfacewith sunglasses_.png" width={24} height={24} alt="logo" className="ml-5" />
          </span>
          <div className="w-[997px] h-[147px] bg-[#FCEABB] mt-10 border-t-[3px] border-[#E5AE40] p-4">
            <p className="text-black font-Aeonik-Bold">Complete your Account Verification</p>
            <p className="text-black font-Aeonik-Light mt-3">Verify your Account by submitting a valid ID Card and BVN to access all our features and protect </p>
            <p className="text-black font-Aeonik-Light ">your account.</p>
            <span className="flex flex-row justify-start items-center mt-3">
              <div className="flex flex-row justify-evenly items-center text-gray-200 font-Aeonik-Regular">
                <Image src="/tick-circle.png" width={24} height={24} alt="logo" className="ml-5" />
                <p className="text-black font-Aeonik-Regular ml-3">Bank Verification Number (BVN)</p>
              </div>
              <div className="bg-black w-[40px] h-[1px] ml-5"></div>
              <div className="flex flex-row justify-evenly items-center text-gray-200 font-Aeonik-Regular">
                <Image src="/tick-circle.png" width={24} height={24} alt="logo" className="ml-5" />
                <p className="text-black font-Aeonik-Regular ml-3">Valid Identification card</p>
              </div>
            </span>
          </div>

          <div className="flex flex-row justify-start gap-[60px] mt-[60px] items-center align-middle">
            <div className="w-[400px] h-[182px] flex flex-row justify-between items-start bg-gradient-to-r from-blue-900 to-blue-300 rounded-2xl py-8 px-5 ">
              <div>
                <p className="font-Aeonik-Bold text-white text-[32px]">N 0.00</p>
                <p className="font-Aeonik-Light text-white text-[14px]">Nigerian Naira Wallet</p>
              </div>
              <Image src="/eye-slash.png" width={20} height={20} alt="logo" className="w-[25px] h-[25px]" />
            </div>
            <div className="w-[400px] h-[182px] flex flex-row justify-between items-start bg-gradient-to-r from-purple-900 to-purple-300 rounded-2xl py-8 px-5 ">
              <div>
                <p className="font-Aeonik-Bold text-white text-[32px]">$ 0.00</p>
                <p className="font-Aeonik-Light text-white text-[14px]">USDC Wallet</p>
              </div>
              <Image src="/eye-slash.png" width={20} height={20} alt="logo" className="w-[25px] h-[25px]" />
            </div>
          </div>

          <div className="flex flex-col mt-[40px]">
            <p className="text-black font-Aeonik-Bold">Quick Access</p>
            <div className="flex flex-row mt-4 gap-5">
              <div className="bg-white w-[147px] h-[48px] rounded-sm cursor-pointer p-2 shadow-xl shadow-gray-200"></div>
              <div className="bg-white w-[147px] h-[48px] rounded-sm flex flex-row items-center cursor-pointer p-2  shadow-xl shadow-gray-200">
                <Image src="/add-circle.svg" width={20} height={20} alt="logo" className="w-[25px] h-[25px]" />
                <p className="text-[#008000] text-[16px] ml-3">Add Money</p>
              </div>
              <div className="bg-white w-[147px] h-[48px] rounded-sm flex flex-row items-center cursor-pointer p-2  shadow-xl shadow-gray-200">
                <Image src="/convert.svg" width={20} height={20} alt="logo" className="w-[25px] h-[25px]" />
                <p className="text-[#008080] text-[16px] ml-3">Swap</p>
              </div>
              <div className="bg-white w-[147px] h-[48px] rounded-sm flex flex-row items-center cursor-pointer p-2  shadow-xl shadow-gray-200">
                <Image src="/link-circle.svg" width={20} height={20} alt="logo" className="w-[25px] h-[25px]" />
                <p className="text-[#A146A1] text-[16px] ml-1">Payment Link</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-[40px]">
            <p className="text-black font-Aeonik-Bold">Transaction History</p>
            <div className="relative overflow-x-auto mt-3">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs uppercase bg-black text-white">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Time
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Amount
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Reference Number
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-200 text-black font-Aeonik-Regular">
                    <th scope="row" className="px-6 py-4 ">
                      1 Feb, 2020
                    </th>
                    <td className="px-6 py-4">
                      07:24.33
                    </td>
                    <td className="px-6 py-4 flex flex-row items-center">
                      <Image src="/add-circle.svg" width={20} height={20} alt="logo" className="w-[25px] h-[25px]" />
                      <p className="text-[#008000] text-[16px] ml-3">Add Money</p>
                    </td>
                    <td className="px-6 py-4">
                      N100,000
                    </td>
                    <td className="px-6 py-4">
                      USMK6UEDMT
                    </td>
                    <td className="">
                      <span className="text-center p-2 rounded-2xl h-[40px]my-10 bg-[#D1FADF] text-[#12B76A]">Completed</span>
                    </td>
                  </tr>
                  <tr className="bg-white text-black font-Aeonik-Regular">
                    <th scope="row" className="px-6 py-4 ">
                      22 Oct, 2020
                    </th>
                    <td className="px-6 py-4">
                      07:24.33
                    </td>
                    <td className="px-6 py-4 flex flex-row items-center">
                      <p className="text-[#008000] text-[16px] ml-3">Send Money</p>
                    </td>
                    <td className="px-6 py-4">
                      N70,000
                    </td>
                    <td className="px-6 py-4">
                      USFJMWKW7J
                    </td>
                    <td className="">
                      <span className="text-center p-2 rounded-2xl h-[40px]my-10 bg-[#FEE4E2] text-[#F04438]">Cancelled</span>
                    </td>
                  </tr>
                  <tr className="bg-gray-200 text-black font-Aeonik-Regular">
                    <th scope="row" className="px-6 py-4 ">
                      24 May, 2020
                    </th>
                    <td className="px-6 py-4">
                      07:24.33
                    </td>
                    <td className="px-6 py-4 flex flex-row items-center">
                      <Image src="/convert.svg" width={20} height={20} alt="logo" className="w-[25px] h-[25px]" />
                      <p className="text-[#008000] text-[16px] ml-3">Swap</p>
                    </td>
                    <td className="px-6 py-4">
                      $2,000
                    </td>
                    <td className="px-6 py-4">
                      USB8X66J8A
                    </td>
                    <td className="">
                      <span className="text-center p-2 rounded-2xl h-[40px]my-10 bg-[#D1FADF] text-[#12B76A]">Completed</span>
                    </td>
                  </tr>
                  <tr className="bg-white text-black font-Aeonik-Regular">
                    <th scope="row" className="px-6 py-4 ">
                      21 Sep, 2020
                    </th>
                    <td className="px-6 py-4">
                      07:24.33
                    </td>
                    <td className="px-6 py-4 flex flex-row items-center">
                      <Image src="/add-circle.svg" width={20} height={20} alt="logo" className="w-[25px] h-[25px]" />
                      <p className="text-[#008000] text-[16px] ml-3">Add Money</p>
                    </td>
                    <td className="px-6 py-4">
                      N1,000,000
                    </td>
                    <td className="px-6 py-4">
                      USVNMJ5CAA
                    </td>
                    <td className="">
                      <span className="text-center p-2 rounded-2xl h-[40px]my-10 bg-[FDF3DF] text-[#E5AE40]">Pending</span>
                    </td>
                  </tr>
                  <tr className="bg-gray-200 text-black font-Aeonik-Regular">
                    <th scope="row" className="px-6 py-4 ">
                      24 May, 2020
                    </th>
                    <td className="px-6 py-4">
                      07:24.33
                    </td>
                    <td className="px-6 py-4 flex flex-row items-center">
                      <Image src="/convert.svg" width={20} height={20} alt="logo" className="w-[25px] h-[25px]" />
                      <p className="text-[#008000] text-[16px] ml-3">Swap</p>
                    </td>
                    <td className="px-6 py-4">
                      $2,000
                    </td>
                    <td className="px-6 py-4">
                      USB8X66J8A
                    </td>
                    <td className="">
                      <span className="text-center p-2 rounded-2xl h-[40px]my-10 bg-[#D1FADF] text-[#12B76A]">Completed</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}
