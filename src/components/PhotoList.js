import React from "react";
import Button from "./Button";
import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";
import Skeleton from "./Skeleton";
import PhotoListItem from "./PhotoListItem";

function PhotoList({ album }) {
  const { data, isFetching, error } = useFetchPhotosQuery(album);
  const [addPhoto, addPhotoResults] = useAddPhotoMutation();

  const handleAddAlbum = () => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = <Skeleton times={4} className="h-8 w-8" />;
  } else if (error) {
    content = <div>Error fetching photos...</div>;
  } else {
    content = data.map((photo) => {
      return <PhotoListItem key={photo.id} photo={photo} />;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Photos In {album.title}</h3>
        <Button onClick={handleAddAlbum} loading={addPhotoResults.isLoading}>
          + Add Photo
        </Button>
      </div>
      <div className="mx-8 flex flex-row flex-wrap justify-center">
        {content}
      </div>
    </div>
  );
}

export default PhotoList;
