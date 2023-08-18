import { RxDashboard, RiAdminLine } from "../../../constants/icons/icons";
import { BsWallet } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { GiCash } from "react-icons/gi";
import { FaBookOpen } from "react-icons/fa";
import {
  HiUserPlus,
  HiOutlineDocumentText,
  HiOutlineClipboardDocumentCheck,
} from "react-icons/hi2";

import SidebarLogoItem from "../../../assets/easy-pay-side-logo.svg";
import SidebarItem from "./SidebarItem";
import SidebarItemDropdown from "./SidebarItemDropdown";

const Sidebar = () => {
  return (
    <aside className="w-[70%] md:w-[18%] shadow-2xl min-h-screen text-black fixed top-0 bottom-0">
      <div className="flex flex-col bg-[#175B4E] items-center justify-center">
        <img src={SidebarLogoItem} alt="" />
      </div>

      <div className="py-10 divide-y">
        <SidebarItem Icon={RxDashboard} text="Dashboard" to="/dashboard" />
        <SidebarItem Icon={BsWallet} text="Wallet" to="/" />
        <SidebarItemDropdown
          Icon={RiAdminLine}
          menu="Employee Management"
          items={[
            { title: "orders", to: "/orders" },
            { title: "Tracking", to: "/tracking" },
          ]}
        />
        <SidebarItemDropdown
          Icon={HiOutlineDocumentText}
          menu="Payroll"
          items={[
            { title: "Shipping", to: "/pending-reviews" },
            { title: "Tracking", to: "/approved-reviews" },
          ]}
        />
        <SidebarItemDropdown
          Icon={FaBookOpen}
          menu="Book Keeping"
          items={[
            { title: "orders", to: "/orders" },
            { title: "Tracking", to: "/tracking" },
          ]}
        />
        <SidebarItemDropdown
          Icon={GiCash}
          menu="Quick Loan"
          items={[
            { title: "orders", to: "/orders" },
            { title: "Tracking", to: "/tracking" },
          ]}
        />{" "}
        <SidebarItemDropdown
          Icon={HiOutlineClipboardDocumentCheck}
          menu="Compliance"
          items={[
            { title: "orders", to: "/orders" },
            { title: "Tracking", to: "/tracking" },
          ]}
        />


        <SidebarItem Icon={BiSupport} text="Support" to="/" />

        <SidebarItemDropdown
          Icon={AiFillSetting}
          menu="Settings"
          items={[
            { title: "orders", to: "/orders" },
            { title: "Tracking", to: "/tracking" },
          ]}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
