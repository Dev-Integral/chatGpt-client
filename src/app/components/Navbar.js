import { usePathname } from "next/navigation";
import React from "react";
import { FaChevronDown, FaPenToSquare, FaUserNinja } from "react-icons/fa6";
import { RiShare2Line } from "react-icons/ri";

export const Navbar = () => {
  const path = usePathname();
  return (
    <nav className="flex justify-between items-center p-3">
      <div className="flex items-center gap-2 text-dark-primary">
        {path === "/" && (
          <FaPenToSquare size={18} className="hover:text-dark-primary-100 " />
        )}
        <span className="font-semibold text-lg">ChatGPT {path === "/" && 3.5}</span>
        <FaChevronDown className="text-sm" />
      </div>
      {path !== "/" ? (
        <div className="flex gap-2 text-dark-primary">
          <RiShare2Line />
          <FaUserNinja />
        </div>
      ) : (
        <div>
          <button className="bg-dark-primary-100 text-dark-secondary px-2 py-1 font-semibold rounded-full">
            Log in
          </button>
          <button className="text-dark-primary-100  border border-dark-secondary px-2 py-1 ml-3 font-semibold rounded-full">
            Sign up
          </button>
        </div>
      )}
    </nav>
  );
};
