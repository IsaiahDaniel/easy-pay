import { Link } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import { ClipLoader } from "react-spinners"

type ButtonProps = {
  text?: string;
  disabled?: any;
  classNames?: string;
  withIcon?: boolean;
  buttonType: "button" | "submit" | "reset";
  to?: string;
  Icon?: any;
  outline?: any;
  primary?: boolean;
  onClick?: () => void;
  loader?: any;
};

const Button = ({
  text,
  disabled,
  buttonType,
  withIcon,
  classNames,
  to,
  loader,
  onClick,
  outline,
  Icon
}: ButtonProps) => {
  if (withIcon) {
    return (
      <div
      className={`bg-primary p-5 text-center text-white rounded-md flex items-center ${classNames}`}
      >
        <span className="mr-4">{text}</span>
        { Icon && <Icon size={22} color="#fff" /> }
      </div>
    );
  }

  if (to) {
    return (
      <Link
        to={to}
        className={`bg-primary p-5 text-center text-white rounded-md ${classNames}`}
      >
        {text}
      </Link>
    );
  }

  if (outline) {
    return (
      <button
        type={buttonType}
        onClick={onClick}
        className={`border-2 border-primary green-btn p-2 hover:bg-primary hover:text-white text-black rounded-md disabled:bg-gray-600 ${classNames}`}
      >
        {text}
      </button>
    );
  }

  if (loader) {
    return (
      <div
        className={`bg-slate-500 green-btn p-2 text-white rounded-md flex items-center justify-center ${classNames}`}
      >
        <ClipLoader color="#fff" size={20} />
      </div>
    );
  }

  return (
    <button
      type={buttonType}
      onClick={onClick}
      className={`bg-primary green-btn p-3 text-white disabled:bg-gray-600 ${classNames}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  buttonType: "button",
};

export default Button;
