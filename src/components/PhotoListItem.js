import React from "react";
import { GoTrash } from "react-icons/go";
import { useRemovePhotoMutation } from "../store";

function PhotoListItem({ photo }) {
  const [removePhoto] = useRemovePhotoMutation();

  const handleRemovePhoto = () => {
    removePhoto(photo);
  };

  return (
    <div className="relative m-2 cursor-pointer" onClick={handleRemovePhoto}>
      <img className="h-20 w-20" src={photo.url} alt="random pic" />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 hover:opacity-80">
        <GoTrash className="text-3xl" />
      </div>
    </div>
  );
}

export default PhotoListItem;
