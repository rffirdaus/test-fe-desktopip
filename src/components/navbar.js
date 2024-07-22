/* eslint-disable @next/next/no-html-link-for-pages */
import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSignIn = () => {
    localStorage.clear()
  };

    useEffect(() => {
      const data = JSON.parse(localStorage.getItem('user'));
      setUser(data)
    }, []);

  return (
    <header
      className={`bg-[#041836] text-[#FFB400] ${
        menuOpen ? "rounded-t-lg" : "rounded-lg"
      }`}
    >
      <div className="mx-auto">
        <div className="flex justify-between items-center h-16 md:px-4 py-4">
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 14.75C13 14.3438 13.3125 14 13.75 14H26.25C26.6562 14 27 14.3438 27 14.75C27 15.1875 26.6562 15.5 26.25 15.5H13.75C13.3125 15.5 13 15.1875 13 14.75ZM13 19.75C13 19.3438 13.3125 19 13.75 19H26.25C26.6562 19 27 19.3438 27 19.75C27 20.1875 26.6562 20.5 26.25 20.5H13.75C13.3125 20.5 13 20.1875 13 19.75ZM27 24.75C27 25.1875 26.6562 25.5 26.25 25.5H13.75C13.3125 25.5 13 25.1875 13 24.75C13 24.3438 13.3125 24 13.75 24H26.25C26.6562 24 27 24.3438 27 24.75Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center space-x-8">
            <span className="text-base font-semibold">channelName</span>
            <Link
              href="/"
              className="text-secondary-foreground hover:text-secondary hidden md:block"
            >
              Home
            </Link>
          </div>
          <div className="block md:hidden items-center">
            <button className="bg-[#FFB400] text-[#111111] px-4 py-2 rounded-3xl font-semibold">
              Subcribe
            </button>
          </div>
          <div className="hidden md:flex items-center">
            <Link
              className="bg-[#FFB400] text-[#111111] px-4 py-2 rounded-3xl font-semibold"
              href={`/signin`}
              onClick={handleSignIn}
            >
              {user ? "Log Out" : "Sign In"}
            </Link>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden relative">
          <div className="w-full bg-white pb-4 px-4 z-10 pt-4">
            <Link
              href="/"
              className="text-secondary-foreground hover:text-secondary mb-4 flex justify-center"
            >
              Home
            </Link>
            <Link
              className="bg-[#FFB400] text-[#111111] px-4 py-2 rounded-3xl font-semibold w-full flex justify-center"
              href={`/signin`}
              onClick={handleSignIn}
            >
              {user ? "Log Out" : "Sign In"}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
