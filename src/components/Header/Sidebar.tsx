import React, { useState } from 'react';
import Link from 'next/link';
import { FaTimes, FaPlus, FaMinus } from 'react-icons/fa';
import menuData from './menuData'; // Adjust the import path as per your project structure
import Image from 'next/image';

// Define the types for the Sidebar props
interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

// Define the menu data type if needed
interface MenuItem {
  id: number;
  title: string;
  path: string;
  newTab: boolean;
  haveSubmenu?: boolean;
  submenu?: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  // State to track which submenu is open
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: number]: boolean }>({});
  // State to track the active menu item
  const [activeItem, setActiveItem] = useState<string | null>(null);

  // Toggle sidebar open/close
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Toggle the display of submenus
  const toggleSubmenu = (id: number) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Close the sidebar when a menu or submenu item is clicked
  const closeSidebar = () => {
    setIsOpen(false);
  };

  // Set the active item
  const handleItemClick = (path: string) => {
    setActiveItem(path);
    closeSidebar(); // Close sidebar when an item is clicked
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white text-black p-5 w-64 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-64'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between items-center mb-10">
        <Image
                src="/images/logo/logo.png"
                alt="logo-image"
                width={100} // Adjust the width as needed
            height={40} // Adjust the height as needed
            className="object-contain" // Ensures the image maintains aspect ratio
              />
          <button onClick={toggleSidebar} className="text-xl focus:outline-none">
            <FaTimes />
          </button>
        </div>

        {/* Sidebar Menu */}
        <nav>
          <ul>
            {menuData.map((menu: MenuItem) => (
              <li key={menu.id} className="mb-4">
                {!menu.haveSubmenu ? (
                  <Link href={menu.path} passHref>
                    <p
                      className={`block p-2 rounded hover:bg-gray-100 transition duration-300 cursor-pointer ${
                        activeItem === menu.path ? 'bg-gray-100' : ''
                      }`}
                      onClick={() => handleItemClick(menu.path)} // Set active item on click
                    >
                      {menu.title}
                    </p>
                  </Link>
                ) : (
                  <div className="submenu">
                    <div className="flex justify-between items-center">
                      <p
                        className={`block p-2 rounded hover:bg-gray-100 transition duration-300 cursor-pointer ${
                          activeItem === menu.path ? 'bg-gray-100' : ''
                        }`}
                        onClick={() => toggleSubmenu(menu.id)}
                      >
                        {menu.title}
                      </p>
                      <button onClick={() => toggleSubmenu(menu.id)}>
                        {openSubmenus[menu.id] ? <FaMinus /> : <FaPlus />}
                      </button>
                    </div>
                    {openSubmenus[menu.id] && (
                      <ul className="pl-4">
                        {menu.submenu &&
                          menu.submenu.map((submenuItem: MenuItem) => (
                            <li key={submenuItem.id} className="mb-2">
                              <Link href={submenuItem.path} passHref>
                                <p
                                  className={`block p-2 rounded hover:bg-gray-100 transition duration-300 cursor-pointer ${
                                    activeItem === submenuItem.path ? 'bg-gray-100' : ''
                                  }`}
                                  onClick={() => handleItemClick(submenuItem.path)} // Set active item on click
                                >
                                  {submenuItem.title}
                                </p>
                              </Link>
                            </li>
                          ))}
                      </ul>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Overlay (closes the sidebar when clicked outside) */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
