import React, { useState } from "react";
import { useNavigate } from "react-router";

interface NavBarProps {
  isLoggedIn: boolean;
  setLogin: (value: boolean) => void;
}

const NavBar = ({ isLoggedIn, setLogin }: NavBarProps) => {
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
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = useNavigate();

  const handleAuth = () => {
    if (isLoggedIn) {
      setLogin(false);
      nav("/");
    } else {
      nav("/login");
    }
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const search = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const keyword = e.currentTarget.value;
      nav(`/?q=${keyword}`);
    }
  };
  return (
    <nav className="w-full">
      <div className="flex justify-end items-center space-x-2 mb-4">
        <img src="/login.svg" alt="로그인이미지" className="w-6 h-6" />
        <div className="cursor-pointer" onClick={handleAuth}>
          {isLoggedIn ? "로그아웃" : "로그인"}
        </div>
      </div>

      <div
        className="flex justify-center mb-4 cursor-pointer"
        onClick={() => nav("/")}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1064px-H%26M-Logo.svg.png"
          alt="logo"
          className="w-30"
        />
      </div>

      <ul className="hidden md:flex justify-center mb-4">
        {menuList.map((menu) => (
          <li key={menu} className="p-4">
            {menu}
          </li>
        ))}
      </ul>
      <div className="md:hidden flex flex-col items-center space-y-2 mb-4">
        <button onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-2 mb-4">
          {menuList.map((menu) => (
            <li
              key={menu}
              className="p-2 cursor-pointer border-b w-full text-center"
            >
              {menu}
            </li>
          ))}
        </ul>
      )}

      <div className="relative max-w-md mx-auto">
        <input
          className="w-full px-4 py-3 pl-12 rounded-full bg-white/80 backdrop-blur-sm
                   border border-gray-200 focus:border-black focus:ring-2 
                   focus:ring-black outline-none transition-all"
          type="text"
          placeholder="검색"
          onKeyDown={(e) => search(e)}
        />
        <div className="absolute left-3 top-1/2 -translate-y-1/2">
          <img src="/search.svg" alt="searchicon" className="w-6" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
