import { ArrowRight, ArrowLeft, Truck, BadgeCheck, Tag, ShieldCheck } from "lucide-react";

export default function ProductHero() {
  return (
    <div className="w-full relative">
      {/* Hero Section */}
      <div className="relative w-[1200px] bg-gray-100 flex items-center justify-between px-10 py-16 " >
        <button className="absolute left-4 text-gray-400 hover:text-black">
          <ArrowLeft size={30} />
        </button>
        <div>
          <h1 className="text-4xl font-light">
            YOUR PRODUCTS
            <br />
            ARE GREAT.
          </h1>
          <button className="mt-4 px-6 py-2 bg-black text-white hover:bg-gray-800 transition">
            SHOP PRODUCT
          </button>
        </div>
        <div className="relative mr-14">
        <img
          src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=600"
          alt="product"
          className="w-[250px] object-contain border rounded-2xl"
        />
        </div>
      
        <button className="absolute right-4 text-gray-400 hover:text-black">
          <ArrowRight size={30} />
        </button>
      </div>

      {/* Feature Section */}
      <div className="grid grid-cols-4 gap-4 text-center py-10 border-b">
        <div>
          <Truck className="mx-auto mb-2 text-blue-500" size={30} />
          <h4 className="font-semibold">FREE DELIVERY</h4>
          <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <BadgeCheck className="mx-auto mb-2 text-blue-500" size={30} />
          <h4 className="font-semibold">QUALITY GUARANTEE</h4>
          <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <Tag className="mx-auto mb-2 text-blue-500" size={30} />
          <h4 className="font-semibold">DAILY OFFERS</h4>
          <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <ShieldCheck className="mx-auto mb-2 text-blue-500" size={30} />
          <h4 className="font-semibold">100% SECURE PAYMENT</h4>
          <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      
    </div>
  );
}
