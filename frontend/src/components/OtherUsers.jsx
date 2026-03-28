import React from "react";
import Otheruser from "./Otheruser";
import useGetOtherUsers from "../hooks/useGetOtherUsers";
import { useSelector } from "react-redux";

const OtherUsers = () => {
  useGetOtherUsers();
  const { otherUsers } = useSelector((store) => store.user);
  
  if (!otherUsers) return null;

  return (
    <div className="overflow-scroll no-scrollbar">
      {otherUsers?.map((user) => {
        return <Otheruser key={user._id} user={user} />;  // fix: Otheruser not OtherUsers, _id not id
      })}
    </div>
  );
};

export default OtherUsers;