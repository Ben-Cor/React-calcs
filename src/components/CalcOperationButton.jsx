    import { useRef } from "react";
    
    export default function CalcOperationButton({ value, onClick }) {
      const buttonRef = useRef(null);
    
      return (
        <button
          ref={buttonRef}
          className="p-4 bg-blue-300 m-1 shadow-md/20 rounded-md text-center w-[75px]"
          onClick={() => onClick(value)}
          onMouseDown={() => {
            if (buttonRef.current) {
              buttonRef.current.classList.remove("shadow-md/20");
              buttonRef.current.classList.add("inset-shadow-sm/20");
            }
          }}
          onMouseUp={() => {
            if (buttonRef.current) {
              buttonRef.current.classList.remove("inset-shadow-sm/20");
              buttonRef.current.classList.add("shadow-md/20");
            }
          }}
        >
          {value}
        </button>
      );
    }