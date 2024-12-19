import React from "react";
import { ChevronRight, ChevronUp } from "lucide-react";

const SidebarMenu: React.FC = () => {
  const menuItems = [
    { id: 1, label: "Shoes", hasArrow: false },
    { id: 2, label: "Sports Bra", hasArrow: false },
    { id: 3, label: "Tops & T-shirts", hasArrow: false },
    { id: 4, label: "Hoodies & Sweatshirts", hasArrow: false },
    { id: 5, label: "Jackets", hasArrow: false },
    { id: 6, label: "Trousers & Tights", hasArrow: false },
    { id: 7, label: "Shorts", hasArrow: false },
    { id: 8, label: "Track Suits", hasArrow: false },
    { id: 9, label: "Jumpsuits & Rompers", hasArrow: false },
    { id: 10, label: "Skirts & Dresses", hasArrow: false },
    { id: 11, label: "Socks", hasArrow: false },
    { id: 12, label: "Accessories", hasArrow: false },
  ];

  return (
    <main className="text-side">
      <div className="w-full lg:w-64 p-4">
        <ul className="space-y-3 mt-3 text-sm border-r border-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center text-gray-700 hover:text-gray-900"
            >
              <span>{item.label}</span>
              {item.hasArrow && (
                <ChevronRight className="w-5 h-5 text-gray-500" />
              )}
            </li>
          ))}
        </ul>

        <div className="mt-10 border-t border-gray-300 pt-5">
          <section>
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-base font-semibold">Gender</h2>
              <ChevronUp />
            </div>
            <div className="space-y-2">
              {[
                { label: "Male" },
                { label: "Female" },
                { label: "Unisex" },
              ].map((option, index) => (
                <div className="flex items-center space-x-3" key={index}>
                  <input type="checkbox" id={option.label} />
                  <label
                    htmlFor={option.label}
                    className="text-sm text-gray-800"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-5 border-t border-gray-300 pt-5">
            <section>
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-base font-semibold">Kids</h2>
                <ChevronUp />
              </div>
              <div className="space-y-2">
                {[
                  { label: "Boys" },
                  { label: "Girls" },
                ].map((option, index) => (
                  <div className="flex items-center space-x-3" key={index}>
                    <input type="checkbox" id={option.label} />
                    <label
                      htmlFor={option.label}
                      className="text-sm text-gray-800"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-5 border-t border-gray-300 pt-5">
            <section>
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-base font-semibold">Shop By Price</h2>
                <ChevronUp />
              </div>
              <div className="space-y-2">
                {[
                  { label: "Under ₹ 2,500.00" },
                  { label: "₹ 2,501.00 - ₹ 5,000.00" },
                  { label: "Above ₹ 5,000.00" },
                ].map((option, index) => (
                  <div className="flex items-center space-x-3" key={index}>
                    <input type="checkbox" id={option.label} />
                    <label
                      htmlFor={option.label}
                      className="text-sm text-gray-800"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SidebarMenu;
