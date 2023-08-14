import React from "react";
import { GoTrash } from "react-icons/go";
import Button from "./Button";
import { useThunk } from "../hooks/useThunk";
import { removeUser } from "../store";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

function UserListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  const header = (
    <>
      <Button className="mr-3" loading={isLoading} onClick={handleClick}>
        <GoTrash />
      </Button>
      {error && <div>Error deleting user...</div>}
      {user.name}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
}

export default UserListItem;
