import React from "react";

const NavBar = () => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "산생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  return (
    <nav className="w-full">
      <div className="flex justify-end items-center space-x-2 mb-4">
        <img src="/login.svg" alt="로그인이미지" className="w-6 h-6" />
        <div>로그인</div>
      </div>

      <div className="flex justify-center mb-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1064px-H%26M-Logo.svg.png"
          alt="logo"
          className="w-30"
        />
      </div>

      <ul className="flex justify-center mb-4">
        {menuList.map((menu) => (
          <li key={menu} className="p-4">
            {menu}
          </li>
        ))}
      </ul>

      <div className="relative max-w-md mx-auto">
        <input
          className="w-full px-4 py-3 pl-12 rounded-full bg-white/80 backdrop-blur-sm
                   border border-gray-200 focus:border-black focus:ring-2 
                   focus:ring-black outline-none transition-all"
          type="text"
          placeholder="검색"
        />
        <div className="absolute left-3 top-1/2 -translate-y-1/2">
          <img src="/search.svg" alt="searchicon" className="w-6" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
