import React from "react";

const FooterFirst = () => {
      const today = new Date();
      const year = today.getFullYear();
  return (
    <>
      <div className="max-w-[1188px] mx-auto px-6 h-full ">
        <div className="sm:pt-[77px] sm:pb-[38px] py-12 lg:gap-[127px] sm:gap-12 gap-8 lg:flex-row flex-col flex justify-center">
          <div className="lg:w-[25%] md:w-[50%] w-full">
            <button className="text-blue font-Inter sm:text-[16px] text-[14px] font-semibold leading-normal bg-[#C5C2C2] py-3 px-6">
              Logo
            </button>
            <p className="pt-[26px] text-opacity-80 text-[#4D4D4D] sm:sm:text-[16px] text-[14px] font-normal leading-normal font-Inter">
              Discover Stellar blockchain's unrivaled speed, security, &
              scalability with Volag. Revolutionize finance.
            </p>
          </div>
          <div className="lg:w-[75%] w-full flex sm:flex-row flex-col justify-between">
            <div className="sm:w-[20%] w-full sm:pt-0 pt-5">
              <ul>
                <li className="text-black font-Inter sm:text-[16px] text-[14px] font-normal leading-normal">
                  Quick links
                </li>
                <li className="pt-[14px] text-[#4D4D4D] font-Inter sm:text-[16px] text-[14px] font-normal leading-normal">
                  Home
                </li>
                <li className="pt-[14px] text-[#4D4D4D] font-Inter sm:text-[16px] text-[14px] font-normal leading-normal">
                  About
                </li>
                <li className="pt-[14px] text-[#4D4D4D] font-Inter sm:text-[16px] text-[14px] font-normal leading-normal">
                  Community
                </li>
                <li className="pt-[14px] text-[#4D4D4D] font-Inter sm:text-[16px] text-[14px] font-normal leading-normal">
                  RoadMap
                </li>
                <li className="pt-[14px] text-[#4D4D4D] font-Inter sm:text-[16px] text-[14px] font-normal leading-normal">
                  Faqs
                </li>
              </ul>
            </div>
            <div className="sm:w-[20%] w-full sm:pt-0 pt-5">
              <ul>
                <li className="text-black font-Inter sm:text-[16px] text-[14px] font-normal leading-normal">
                  Links
                </li>
                <li className="pt-[14px] text-[#4D4D4D] font-Inter sm:text-[16px] text-[14px] font-normal leading-normal">
                  Terms & conditions
                </li>
                <li className="pt-[14px] text-[#4D4D4D] font-Inter sm:text-[16px] text-[14px] font-normal leading-normal">
                  Privacy Policy
                </li>
              </ul>
            </div>
            <div className="sm:w-[35%] w-full sm:pt-0 pt-5">
              <ul>
                <li className="text-black font-Inter sm:text-[16px] text-[14px] font-normal leading-normal">
                  Get in Touch
                </li>
              </ul>
              <div className="flex justify-between items-center bg-[#EAE7F3] rounded-xl mt-4 max-w-[300px]">
                <input
                  type="email"
                  placeholder="Type Your Mail"
                  className="bg-[#EAE7F3] placeholder:text-black placeholder:sm:text-[16px] placeholder:text-[14px] placeholder:font-normal placeholder:leading-normal rounded-xl py-3 w-full outline-none ps-3"
                />
                <button className="bg-blue px-[10px] h-[39px] flex justify-center items-center font-Inter sm:text-[16px] text-[14px] text-white rounded-xl font-normal leading-normal me-1">
                  Search
                </button>
              </div>
              <p className="pt-4 font-Inter text-black sm:text-[16px] text-[14px] font-normal leading-normal">
                Follow us now
              </p>
              <div className="pt-4 flex items-center gap-1">
                <a href="https://twitter.com/" target="_blank">
                  <svg
                    width="36"
                    height="34"
                    viewBox="0 0 36 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="7.9082"
                      y="8.16626"
                      width="20.5612"
                      height="16.3326"
                      fill="white"
                    />
                    <path
                      d="M17.7935 0.667969C8.3595 0.667969 0.711914 7.84728 0.711914 16.7037C0.711914 25.56 8.3595 32.7393 17.7935 32.7393C27.2276 32.7393 34.8752 25.56 34.8752 16.7037C34.8752 7.84728 27.2276 0.667969 17.7935 0.667969ZM24.7419 13.8039C24.749 13.9408 24.7508 14.0778 24.7508 14.2114C24.7508 18.3874 21.3682 23.1998 15.1797 23.1998C13.3511 23.2026 11.5605 22.7096 10.0232 21.7799C10.2847 21.81 10.5534 21.8217 10.8257 21.8217C12.4022 21.8217 13.8523 21.3189 15.0035 20.4704C14.302 20.4574 13.6222 20.2393 13.0589 19.8465C12.4957 19.4537 12.077 18.9056 11.8612 18.2788C12.3651 18.3688 12.8841 18.3499 13.379 18.2237C12.6175 18.0792 11.9328 17.6918 11.4408 17.1274C10.9488 16.5629 10.6799 15.8561 10.6798 15.1268V15.0884C11.1335 15.3239 11.6531 15.4676 12.2046 15.4843C11.4908 15.0382 10.9854 14.3529 10.7919 13.5686C10.5984 12.7843 10.7315 11.9602 11.1637 11.2649C12.0088 12.2404 13.0628 13.0384 14.2572 13.6073C15.4517 14.1762 16.7601 14.5032 18.0978 14.5672C17.9277 13.8896 18.0009 13.1782 18.306 12.5436C18.6111 11.909 19.1309 11.3868 19.7847 11.0582C20.4386 10.7296 21.1897 10.613 21.9214 10.7265C22.6531 10.84 23.3244 11.1772 23.8308 11.6858C24.5838 11.546 25.3059 11.2867 25.966 10.9191C25.7151 11.651 25.1897 12.2724 24.4874 12.668C25.1544 12.5926 25.8057 12.4243 26.4198 12.1686C25.9687 12.8031 25.4004 13.3569 24.7419 13.8039Z"
                      fill="#3C278D"
                    />
                  </svg>
                </a>
                <a href="https://www.facebook.com/login/" target="_blank">
                  <svg
                    width="39"
                    height="35"
                    viewBox="0 0 39 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_723)">
                      <rect
                        x="10.449"
                        y="8.16626"
                        width="20.5612"
                        height="16.3326"
                        fill="white"
                      />
                      <path
                        d="M20.3818 0C10.5285 0 2.54102 7.49839 2.54102 16.7484C2.54102 25.9984 10.5285 33.4968 20.3818 33.4968C30.2352 33.4968 38.2226 25.9984 38.2226 16.7484C38.2226 7.49839 30.2352 0 20.3818 0ZM24.6079 11.5738H21.9262C21.6084 11.5738 21.2553 11.9664 21.2553 12.488V14.3059H24.6097L24.1024 16.8984H21.2553V24.6812H18.0904V16.8984H15.2191V14.3059H18.0904V12.7811C18.0904 10.5934 19.7072 8.81558 21.9262 8.81558H24.6079V11.5738Z"
                        fill="#3C278D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_723">
                        <rect
                          width="37.1684"
                          height="34.8925"
                          fill="white"
                          transform="translate(0.959229)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a href="https://www.behance.net/" target="_blank" className="ms-[2px]">
                  <svg
                    width="34"
                    height="32"
                    viewBox="0 0 34 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="17.0026"
                      cy="15.9614"
                      rx="17.0026"
                      ry="15.9614"
                      fill="#3C278D"
                    />
                    <path
                      d="M7.40909 22V10.3636H11.4773C12.2879 10.3636 12.9564 10.5038 13.483 10.7841C14.0095 11.0606 14.4015 11.4337 14.6591 11.9034C14.9167 12.3693 15.0455 12.8864 15.0455 13.4545C15.0455 13.9545 14.9564 14.3674 14.7784 14.6932C14.6042 15.0189 14.3731 15.2765 14.0852 15.4659C13.8011 15.6553 13.4924 15.7955 13.1591 15.8864V16C13.5152 16.0227 13.8731 16.1477 14.233 16.375C14.5928 16.6023 14.8939 16.928 15.1364 17.3523C15.3788 17.7765 15.5 18.2955 15.5 18.9091C15.5 19.4924 15.3674 20.017 15.1023 20.483C14.8371 20.9489 14.4186 21.3182 13.8466 21.5909C13.2746 21.8636 12.5303 22 11.6136 22H7.40909ZM8.81818 20.75H11.6136C12.5341 20.75 13.1875 20.572 13.5739 20.2159C13.964 19.8561 14.1591 19.4205 14.1591 18.9091C14.1591 18.5152 14.0587 18.1515 13.858 17.8182C13.6572 17.4811 13.3712 17.2121 13 17.0114C12.6288 16.8068 12.1894 16.7045 11.6818 16.7045H8.81818V20.75ZM8.81818 15.4773H11.4318C11.8561 15.4773 12.2386 15.3939 12.5795 15.2273C12.9242 15.0606 13.197 14.8258 13.3977 14.5227C13.6023 14.2197 13.7045 13.8636 13.7045 13.4545C13.7045 12.9432 13.5265 12.5095 13.1705 12.1534C12.8144 11.7936 12.25 11.6136 11.4773 11.6136H8.81818V15.4773ZM21.2926 22.1818C20.4517 22.1818 19.7263 21.9962 19.1165 21.625C18.5104 21.25 18.0426 20.7273 17.7131 20.0568C17.3873 19.3826 17.2244 18.5985 17.2244 17.7045C17.2244 16.8106 17.3873 16.0227 17.7131 15.3409C18.0426 14.6553 18.5009 14.1212 19.0881 13.7386C19.679 13.3523 20.3684 13.1591 21.1562 13.1591C21.6108 13.1591 22.0597 13.2348 22.5028 13.3864C22.946 13.5379 23.3494 13.7841 23.7131 14.125C24.0767 14.4621 24.3665 14.9091 24.5824 15.4659C24.7983 16.0227 24.9062 16.7083 24.9062 17.5227V18.0909H18.179V16.9318H23.5426C23.5426 16.4394 23.4441 16 23.2472 15.6136C23.054 15.2273 22.7775 14.9223 22.4176 14.6989C22.0616 14.4754 21.6411 14.3636 21.1562 14.3636C20.6222 14.3636 20.16 14.4962 19.7699 14.7614C19.3835 15.0227 19.0862 15.3636 18.8778 15.7841C18.6695 16.2045 18.5653 16.6553 18.5653 17.1364V17.9091C18.5653 18.5682 18.679 19.1269 18.9062 19.5852C19.1373 20.0398 19.4574 20.3864 19.8665 20.625C20.2756 20.8598 20.7509 20.9773 21.2926 20.9773C21.6449 20.9773 21.9631 20.928 22.2472 20.8295C22.535 20.7273 22.7831 20.5758 22.9915 20.375C23.1998 20.1705 23.3608 19.9167 23.4744 19.6136L24.7699 19.9773C24.6335 20.4167 24.4044 20.803 24.0824 21.1364C23.7604 21.4659 23.3627 21.7235 22.8892 21.9091C22.4157 22.0909 21.8835 22.1818 21.2926 22.1818Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-blue"></div>
      <p className="pt-2 pb-4 text-[#4D4D4D] sm:sm:text-[16px] text-[14px]  font-normal leading-normal font-Inter text-center">
        © {year} Copyright company name. All Right Reserved.
      </p>
    </>
  );
};

export default FooterFirst;