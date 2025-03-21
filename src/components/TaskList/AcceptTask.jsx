import React from "react";

const AcceptTask = () => {
  return (
    <div className="flex-shrink-0 h-full p-5 w-[300px] bg-[#df95ed] rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
        <h4 className="text-sm">20 Feb 2024</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">Practice DSA questions</h2>
      <p className="text-sm mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        necessitatibus dicta similique, natus porro eaque.
      </p>
      <div className="flex justify-between mt-4">
        <button className="bg-green-500 py-1 px-2 text-sm">
          Mark as Completed
        </button>
        <button className="bg-red-500 py-1 px-2 text-sm rounded">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
