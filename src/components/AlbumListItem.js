import React from "react";
import Button from "./Button";
import { GoTrash } from "react-icons/go";
import ExpandablePanel from "./ExpandablePanel";
import { useRemoveAlbumMutation } from "../store";
import PhotoList from "./PhotoList";

function AlbumListItem({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <Button
        className="mr-2"
        onClick={handleRemoveAlbum}
        loading={results.isLoading}
      >
        <GoTrash />
      </Button>
      {album.title}
    </>
  );

  return (
    <ExpandablePanel header={header} key={album.id}>
      <PhotoList album={album} />
    </ExpandablePanel>
  );
}

export default AlbumListItem;
