import React, { useState } from "react";
import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { NavLink } from "react-router-dom";

import "./SidebarItem.css";

type SidebarItemDropDown = {
  Icon: any, 
  items: any, 
  menu: any, 
  to?: any
}

const SidebarItemDropdown = ({ Icon, items, menu, to }: SidebarItemDropDown) => {

  const [showItem, setShowItem] = useState(false);

  return (
    <div onClick={() => setShowItem(!showItem)}>
      <div className="flex items-center justify-between p-1 cursor-pointer px-3 mt-3">
        <div className="flex items-center">
          {Icon && <Icon size={30} color="#11453B" className="mr-2" />}
          <p className="text-primary">{menu}</p>
        </div>
        { showItem && <MdOutlineKeyboardArrowUp size={22} color="#11453B" /> }
        { showItem === false && <MdKeyboardArrowDown size={22} color="#11453B" /> }
      </div>

      <div
        className="flex items-center justify-start p-3 hover:rounded-md"
      >
        { showItem && (
          <div className="flex flex-col px-7 py-5">
            {items.length && items.map((item: any) => <NavLink to={item.to} key={item.title} className="mb-4 p-3 w-full rounded-lg hover:bg-[#DCDDE1]">{item.title}</NavLink>)}
          </div>
        ) }
      </div>
    </div>
  );
};

export default SidebarItemDropdown;
