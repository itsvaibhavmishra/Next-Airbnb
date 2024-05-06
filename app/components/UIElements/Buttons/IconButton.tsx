interface IconButtonProps {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  disabled?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({
  className,
  children,
  onClick,
  disabled,
}) => {
  return (
    <button
      className={`p-2.5 bg-rose-500 hover:brightness-90 transition duration-300 rounded-full disabled:opacity-50 ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default IconButton;
