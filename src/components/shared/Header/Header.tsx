import Logo from "../../../assets/customer-logo.png";
import { AiOutlineLogout, AiOutlineMenu } from "react-icons/ai";
import ActivityAvatar from "../../../assets/avatar-activity.jpeg";
import { BsArrowRightShort } from "react-icons/bs";
import { MdNotificationsNone } from "react-icons/md";

const Header = () => {
  return (
    <header className="flex items-center justify-between shadow-lg p-5">
      <div>
        <img src={Logo} alt="Logos" className="w-36" />
      </div>

      <div className="flex items-center">
        <div className="relative">
          <span className="px-2 bg-red-800 text-white rounded-full absolute -top-2 right-7">7</span>
          <MdNotificationsNone size={34} className="mr-10" />
        </div>

        <div className="flex cursor-pointer items-center">
          <div className="p-4 text-white mr-2">
            <img
              src={ActivityAvatar}
              alt=""
              className="rounded-full w-16 h-16 object-cover"
            />
          </div>
          <div>
            <h2 className="font-extrabold">Kalu Abasiama</h2>
            <div className="flex items-center justify-between">
              <p className="text-[#898989]">Admin</p>
              <BsArrowRightShort size={22} />
            </div>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;
