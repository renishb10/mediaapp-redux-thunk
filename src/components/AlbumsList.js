import React from "react";
import { useFetchAlbumsQuery } from "../store";

function AlbumsList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);

  console.log(data, error, isLoading);
  return <div>AlbumsList {user.name}</div>;
}

export default AlbumsList;
