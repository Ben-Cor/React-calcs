import { useRef } from "react";

export default function CalcOperationButton({ value, onClick }) {
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
    }
  };

  return (
    <button
      ref={buttonRef}
      className="p-2 bg-blue-300 m-1 shadow-md/20 rounded-md text-center w-[15vw] md:p-4 md:w-[75px] min-h-[48px]"
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