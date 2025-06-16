import { useRef } from "react";

export default function CalcButton({ value, onClick }) {
  const buttonRef = useRef(null);

  const handlePress = () => {
    if (buttonRef.current) {
      buttonRef.current.classList.remove("shadow-md/20");
      buttonRef.current.classList.add("inset-shadow-sm/20");
    }
  };

  const handleRelease = () => {
    if (buttonRef.current) {
      buttonRef.current.classList.remove("inset-shadow-sm/20");
      buttonRef.current.classList.add("shadow-md/20");
    }
  };

  return (
    <button
      ref={buttonRef}
      className="p-4 bg-slate-200 m-1 shadow-md/20 rounded-md text-center w-[15vw] md:w-[75px] min-h-[48px]"
      onClick={() => onClick(value)}
      onMouseDown={handlePress}
      onMouseUp={handleRelease}
      onMouseLeave={handleRelease}
      onTouchStart={handlePress}
      onTouchEnd={handleRelease}
      onTouchCancel={handleRelease}
    >
      {value}
    </button>
  );
}