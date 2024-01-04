import type { ButtonWebsiteProps } from "./ButtonWebsite.d";
import { COLORS, HOVERS, SIZE_BUTTON } from "./ButtonWebsite.classNames";

export default function ButtonWebsite({
  className,
  children,
  icon,
  rounded,
  disabled,
  color,
  typeHover = "none",
  size,
}: ButtonWebsiteProps) {
  const border = rounded ? `rounded-full` : "rounded-sm";
  const colorButton = COLORS[color || "white"];
  const sizeButton = size ? SIZE_BUTTON[size] : null;

  let hoverSytles = "";
  let hoverBar = "";

  if (typeHover === "bottomBar") {
    hoverBar = HOVERS["bottomBar"];
    hoverSytles = "";
  } else {
    hoverBar = "hidden";
    hoverSytles = HOVERS[typeHover];
  }

  const buttonClasname = `relative group block font-semibold overflow-hidden ${border} ${colorButton} ${
    className ? className : null
  } ${hoverSytles} ${sizeButton ? sizeButton : "py-4 px-6"}`;

  return (
    <button className={`${buttonClasname}`} disabled={disabled}>
      <div className={`${hoverBar}`} />
      <div className="relative flex items-center justify-center">
        {children}
        {icon && <span className="ml-4">{icon}</span>}
      </div>
    </button>
  );
}
