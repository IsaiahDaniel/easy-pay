import { NavLink } from "react-router-dom";

import "./SidebarItem.css";

type SideBarItem = {
    iconStyles?: any;
    Icon?: any;
    text?: string;
    to?: any;
}

const SidebarItem = ({ iconStyles, Icon, text, to }: SideBarItem) => {
  return (
    <NavLink
      to={to}
      className="flex items-start px-3 text-primary py-5 sidebarNav"
    >
      {Icon && <Icon size="25" color="#11453B" className="mr-2" {...iconStyles} />}

      <span className="text-primary">{text}</span>
    </NavLink>
  );
};

export default SidebarItem;