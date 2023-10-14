import { RxDragHandleDots2 } from "react-icons/rx";
const Answer = () => {
  return (
    <div className="flex items-center w-[800px]">
      <div className="flex items-center gap-2 w-[50px] text-xl text-primary-3">
        <RxDragHandleDots2 />
        <p>A</p>
      </div>
      <label>
        <input type="text" className="p-2 w-[750px]" />
      </label>
    </div>
  );
};

export default Answer;
