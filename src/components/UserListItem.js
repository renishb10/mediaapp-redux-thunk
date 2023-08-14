import React from "react";
import { GoTrash } from "react-icons/go";
import Button from "./Button";
import { useThunk } from "../hooks/useThunk";
import { removeUser } from "../store";

function UserListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        {user.name}
        {error && <div>Error deleting user...</div>}
        <Button loading={isLoading} onClick={handleClick}>
          <GoTrash />
        </Button>
      </div>
    </div>
  );
}

export default UserListItem;
