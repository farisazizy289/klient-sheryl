import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Mock user data
  const user = {
    name: "Sheryl",
    role: "Administrator",
    avatar: "👩‍💻",
  };

  const toggleProfileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md border-b-4 border-blue-500 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">📊</span>
          </div>
          <div>
            <h1 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Mahasiswa
            </h1>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
            <div className="w-3 h-3 bg-emerald-500 rounded-full shadow-sm"></div>
            <span className="text-gray-700 text-sm font-medium">Online</span>
          </div>

          <div className="text-right">
            <div className="text-gray-800 font-semibold text-sm">
              {user?.name} ✨
            </div>
            <div className="text-gray-500 text-xs uppercase tracking-wide">
              {user?.role}
            </div>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={toggleProfileMenu}
            className="group relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span className="text-xl group-hover:scale-110 transition-transform duration-200">
              {user?.avatar}
            </span>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white shadow-sm"></div>
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 mt-3 w-56 bg-white shadow-2xl rounded-2xl overflow-hidden z-20 border border-gray-100">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-10"></div>
                <div className="relative px-6 py-4 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-xl">{user?.avatar}</span>
                    </div>
                    <div>
                      <div className="text-gray-900 font-semibold">
                        {user?.name}
                      </div>
                      <div className="text-gray-500 text-sm">{user?.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
