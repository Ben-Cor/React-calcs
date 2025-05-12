import CalcButton from "./CalcButton";
import CalcOperationButton from "./CalcOperationButton";

export default function CalcBasic() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Basic Calculator</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-80">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="0"
          readOnly
        />
        <div className="grid grid-cols-4 gap-2">
          <CalcButton value="7" />
          <CalcButton value="8" />
          <CalcButton value="9" />
          <CalcOperationButton value="/" />
          <CalcButton value="4" />
          <CalcButton value="5" />
          <CalcButton value="6" />
          <CalcOperationButton value="*" />
          <CalcButton value="1" />
          <CalcButton value="2" />
          <CalcButton value="3" />
          <CalcOperationButton value="-" />
          <CalcButton value="0" />
          <CalcOperationButton value="C" />
          <CalcOperationButton value="." />
          <CalcOperationButton value="+" />
        </div>
      </div>
    </div>
  );
}