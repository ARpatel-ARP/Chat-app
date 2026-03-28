import React from "react";

const Otheruser = () => {
  return (
    <>
      <div className="flex gap-2 h-12 items-center rounded-sm transition-all duration-150 ease-in-out hover:bg-gray-600/30 hover:rounded-2xl">
        <div className="avatar online">
          <div className="w-13 p-1">
            <img
              className="rounded-full -ml-1 "
              src="./profilepic.jpeg"
              alt="profile"
              width={60}
            />
            <div className="activebtn bg-green-600 rounded-full absolute bottom-2 left-8 w-2 h-2"></div>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-2 flex-1 ">
            <p>ARP-patel</p>
          </div>
        </div>
      </div>
      <div className="divider h-0.5 bg-gray-300 opacity-10"></div>
    </>
  );
};

export default Otheruser;
