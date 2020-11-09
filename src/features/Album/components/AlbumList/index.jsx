import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Album from "../Album";

AlbumList.propTypes = {
  albumList: PropTypes.array.isRequired,
};

function AlbumList(props) {
  const { albumList } = props;
  return (
    <ul className="album_list">
      {albumList.map((album) => (
        <li key={album.id}>
          <Album album={album} />
        </li>
      ))}
    </ul>
  );
}

export default AlbumList;
