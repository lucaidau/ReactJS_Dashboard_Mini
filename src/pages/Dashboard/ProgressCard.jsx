import React from "react";

const ProgressCard = (progress) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-borders-bg">
      <div className="flex justify-between mb-2">
        <span className="text-sm md:text-md font-semibold text-main-txt">
          75% Tasks Completed
        </span>
      </div>

      <div className="w-full bg-gray-100 rounded-full">
        <div className="bg-primary-act w-[75%] h-2 rounded-full shadow-[0_0_8px_rgba(26,115,232,0.4)]"></div>
      </div>
    </div>
  );
};

export default ProgressCard;
