import React from "react";

const AllTask = () => {
  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded h-48 overflow-auto">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between">
        <h2>Harsh</h2>
        <h3>Make a UI design </h3>
        <h5>Status</h5>
      </div>
      <div className="bg-green-400 mb-2 py-2 px-4 flex justify-between">
        <h2>Utkarsh</h2>
        <h3>Make an application</h3>
        <h5>Status</h5>
      </div>
      <div className="bg-yellow-400 mb-2 py-2 px-4 flex justify-between">
        <h2>Sushant</h2>
        <h3>Solve this algo</h3>
        <h5>Status</h5>
      </div>
      <div className="bg-blue-400 mb-2 py-2 px-4 flex justify-between">
        <h2>Salique</h2>
        <h3>Make an iOS app </h3>
        <h5>Status</h5>
      </div>
      <div className="bg-purple-400 mb-2 py-2 px-4 flex justify-between">
        <h2>Anshul</h2>
        <h3>Design an app </h3>
        <h5>Status</h5>
      </div>
    </div>
  );
};

export default AllTask;
