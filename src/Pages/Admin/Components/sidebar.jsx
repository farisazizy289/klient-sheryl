import React from "react";
import { NavLink } from "react-router-dom";
import Logout from "../../components/Logout";
import { useAuthStateContext } from "../../Context/AuthContext";

const Sidebar = () => {
  const { user } = useAuthStateContext();

  const menuItems = [
    {
      path: "/admin/dashboard",
      icon: "📈",
      label: "Dashboard",
      permission: "dashboard.page",
    },
    {
      path: "/admin/mahasiswa",
      icon: "👩‍🎓",
      label: "Mahasiswa",
      permission: "mahasiswa.page",
    },
    {
      path: "/admin/dosen",
      icon: "👨‍🏫",
      label: "Dosen",
    },
    {
      path: "/admin/matkul",
      icon: "📚",
      label: "Mata Kuliah",
    },
    {
      path: "/admin/user",
      icon: "👥",
      label: "Managemen User",
    },
    {
      path: "/admin/rencana-studi",
      icon: "📅",
      label: "Rencana Studi",
      permission: "rencana-studi.page",
    },
  ];

  return (
    <aside className="bg-gradient-to-b from-blue-800 to-blue-900 text-white w-20 lg:w-64 h-screen fixed top-0 left-0 shadow-xl transition-all duration-300">
      <div className="p-4 flex flex-col h-full">
        {/* Logo/Brand Section */}
        <div className="mb-8 mt-4 hidden lg:block">
          <h1 className="text-2xl font-extrabold text-center tracking-tight">
            Admin Sheryl
          </h1>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1">
          {menuItems.map(
            (item) =>
              (item.permission
                ? user?.permission?.includes(item.permission)
                : true) && (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `
                  flex items-center gap-4 px-4 py-3 mx-2 my-1 rounded-xl
                  transition-all duration-200 group
                  ${
                    isActive
                      ? "bg-blue-600 shadow-lg text-white"
                      : "text-blue-100 hover:bg-blue-700 hover:text-white hover:shadow-md"
                  }
                `}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </span>
                  <span className="hidden lg:inline text-sm font-semibold tracking-wide">
                    {item.label}
                  </span>
                </NavLink>
              )
          )}
        </nav>

        {/* Logout Button */}
        <div className="mt-auto">
          <Logout
            className="flex items-center gap-4 px-4 py-3 mx-2 rounded-xl 
              text-blue-100 hover:bg-blue-700 hover:text-white hover:shadow-md transition-all duration-200 group"
          >
            <span className="text-lg group-hover:scale-110 transition-transform duration-200">
              🔑
            </span>
            <span className="hidden lg:inline text-sm font-semibold tracking-wide">
              Sign Out
            </span>
          </Logout>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
