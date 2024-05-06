import { IconType } from "react-icons";

interface ButtonProps {
  label?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon,
}) => {
  return (
    <button
      className={`flex items-center justify-center relative disabled:opacity-50 rounded-lg hover:brightness-90 transition duration-300 w-full border-rose-500
      ${outline ? "bg-white" : "bg-rose-500"}
      ${outline ? "text-black" : "text-white"}
      ${small ? "py-1" : "py-3"}
      ${small ? "text-sm" : "text-md"}
      ${small ? "font-light" : "font-semibold"}
      ${small ? "border-[1px]" : "border-2"}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && (
        <div className="flex items-center justify-center absolute left-4">
          {icon}
        </div>
      )}
      <span>{label}</span>
    </button>
  );
};

export default Button;
