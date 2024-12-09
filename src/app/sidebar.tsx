
import React from "react";
import { ChevronRight , ChevronUp } from "lucide-react";

const SidebarMenu: React.FC = () => {
  const menuItems = [
    { id: 1, label: "Shoes", hasArrow: false },
    { id: 2, label: "Sports Bra", hasArrow: false },
    { id: 3, label: "Tops & T-shirts", hasArrow: false },
    { id: 4, label: "Hoddies & Sweatshirts", hasArrow: false },
    { id: 5, label: "Jackets", hasArrow: false },
    { id: 6, label: "Trousers & Tights", hasArrow: false },
    { id: 7, label: "Shorts", hasArrow: false },
    { id: 8, label: "Track suits", hasArrow: false },
    { id: 9, label: "Jumpsuits & Rompers", hasArrow: false },
    {id: 10, label: "Skirts & Dresses", hasArrow: false },
    {id: 11, label: "Socks", hasArrow: false },
    {id: 11, label: "Accesories", hasArrow: false },
  ];

  return (
    <main className="text-side">
      <div className="w-64 ml-5 h-auto p-4">
        <ul className="space-y-3 mt-3 text-[15px] border-r-4 rounded-lg">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center text-sm font-semibold text-gray-700 hover:text-gray-900"
            >
              <span>{item.label}</span>
              {item.hasArrow && (
                <ChevronRight className="w-5 h-5 text-gray-500" />
              )}
            </li>
          ))}
        </ul>
        <p className="border-b-[1px] w-auto mt-10 mr-7 text-pir"></p>
        
        <div className="flex justify-between  mb-5 mt-5">
        <h2 className="text-[16] font-semibold">Gender</h2>
        <ChevronUp/>
        </div>
        <div className="flex space-x-3">
        <div>
              <label>
                <input
                type='checkbox'
                />
                
              </label>
            </div>
            <p className='text-dark text-[14px]'>Male</p>
            </div>
            <div className="flex space-x-3">
        <div>
              <label>
                <input
                type='checkbox'
                />
                
              </label>
            </div>
            <p className='text-dark text-[14px]'>Female</p>
            </div>
            <div className="flex space-x-3">
        <div>
              <label>
                <input
                type='checkbox'
                />
                
              </label>
            </div>
            <p className='text-dark text-[14px]'>Unisex</p>
            </div>

            <p className="border-b-[1px] w-auto mt-5 mr-7 text-pir"></p>
        
        <div className="flex justify-between  mb-5 mt-5">
        <h2 className="text-[16] font-semibold">Kids</h2>
        <ChevronUp/>
        </div>
        <div className="flex space-x-3">
        <div>
              <label>
                <input
                type='checkbox'
                />
                
              </label>
            </div>
            <p className='text-dark text-[14px]'>Boys</p>
            </div>
            <div className="flex space-x-3">
        <div>
              <label>
                <input
                type='checkbox'
                />
                
              </label>
            </div>
            <p className='text-dark text-[14px]'>Girls</p>
            </div>
           
            <p className="border-b-[1px] w-auto mt-5 mr-7 text-pir"></p>
        
        <div className="flex justify-between  mb-5 mt-5">
        <h2 className="text-[16] font-semibold">Shop By Price</h2>
        <ChevronUp/>
        </div>
        <div className="flex space-x-3">
        <div>
              <label>
                <input
                type='checkbox'
                />
                
              </label>
            </div>
            <p className='text-dark text-[14px]'>Under ₹ 2 500.00</p>
            </div>
            <div className="flex space-x-3">
        <div>
              <label>
                <input
                type='checkbox'
                />
                
              </label>
            </div>
            <p className='text-dark text-[14px]'>₹ 2 501.00 - ₹</p>
            </div>
            <div className="flex space-x-3">
       
      </div>
      </div>
    </main>
  );
};

export default SidebarMenu;

