import React from "react";

export default function MobileProducts() {
  return (
    <div className="w-full p-6 bg-white">
      <h2 className="text-2xl font-bold mb-6">MOBILE PRODUCTS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Product 1 */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <img
            src="https://images.pexels.com/photos/243698/pexels-photo-243698.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="iPhone 10"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h3 className="text-lg font-semibold mt-4">IPHONE 10</h3>
          <p className="text-gray-600">$980</p>
        </div>
        {/* Product 2 */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <img
            src="https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="iPhone 11"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h3 className="text-lg font-semibold mt-4">IPHONE 11</h3>
          <p className="text-gray-600">$1100</p>
        </div>
        {/* Product 3 */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <img
            src="https://images.pexels.com/photos/270686/pexels-photo-270686.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="iPhone 8"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h3 className="text-lg font-semibold mt-4">IPHONE 8</h3>
          <p className="text-gray-600">$700</p>
        </div>
        {/* Product 4 */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <img
            src="https://via.placeholder.com/200x200?text=IPHONE+13"
            alt="iPhone 13"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h3 className="text-lg font-semibold mt-4">IPHONE 13</h3>
          <p className="text-gray-600">$1300</p>
        </div>
        {/* Product 5 */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <img
            src="https://via.placeholder.com/200x200?text=A20+TO+A101+P"
            alt="A20 to A101 P"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h3 className="text-lg font-semibold mt-4">A20 TO A101 P</h3>
          <p className="text-gray-600">Price not available</p>
        </div>
      </div>
    </div>
  );
}