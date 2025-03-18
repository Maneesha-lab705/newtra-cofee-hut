 import React from "react";
export default function NavBar() {
  return (
   <div className="fixed top-0 left-0 w-full h-[70px] bg-white shadow-md flex items-center justify-between px-10 z-50">
   <div className="flex items-center space-x-2">
     <h1 className="text-2xl font-bold text-black">New Mobile<span className="text-blue-400">.</span></h1>
   </div>
   <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
     <li className="cursor-pointer hover:text-blue-500">HOME</li>
     <li className="cursor-pointer hover:text-blue-500">SERVICES</li>
     <li className="cursor-pointer hover:text-blue-500">PRODUCTS</li>
     <li className="cursor-pointer hover:text-blue-500">WATCHES</li>
     <li className="cursor-pointer hover:text-blue-500">SALE</li>
     <li className="cursor-pointer hover:text-blue-500">BLOG</li>
     <li className="cursor-pointer hover:text-blue-500">PAGES</li>
   </ul>
   <div className="flex items-center space-x-6 text-gray-700 text-xl">
     <i className="fas fa-search cursor-pointer"></i>
     <i className="fas fa-user cursor-pointer"></i>
     <i className="fas fa-shopping-cart cursor-pointer"></i>
   </div>
 </div>
  );
}
