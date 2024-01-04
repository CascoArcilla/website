import type { ButtonPropsOld } from "./ButtonOld.d";

const styleBtn = {
  green: "bg-pw-primary text-white hover:bg-pw-primary/80",
  orange: "bg-pw-tertiary text-white hover:bg-pw-tertiary/80",
  black: "bg-pw-neutral text-white hover:bg-pw-neutral/80",
  default: "bg-white shadow-md hover:bg-blue-600 hover:text-white",
};

const styleSizeBtn = {
  xs: "px-3 py-2 text-xs",
  sm: "px-3 py-2 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-5 py-3 text-base",
  xl: "px-6 py-3.5 text-base",
};

export default function Button({
  className,
  size = "md",
  text,
  disabled,
  color,
  type,
  onClick,
  children,
  ...moreProps
}: ButtonPropsOld) {
  const buttonClassName = `block border border-1 rounded-lg font-bold ${
    className ? className : ""
  } ${styleBtn[color || "default"]} ${styleSizeBtn[size]}`;

  return (
    <button
      data-testid="button"
      onClick={onClick}
      type={type || "button"}
      className={buttonClassName}
      disabled={disabled}
      {...moreProps}
    >
      {text && text}
      {children}
    </button>
  );
}
