//ENTRY POIN CHỨA DỮ LIỆU
import React from "react";

import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Nhac Hoa",
      thumnailURL:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/1/0/0/5100dd89fe120cbc62025ccfc4b583fc.jpg",
    },
    {
      id: 2,
      name: "Nhac Viet",
      thumnailURL:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/e/d/e/1/ede13c61be4ef0327f16c79739befaca.jpg",
    },
    {
      id: 3,
      name: "Nhac US",
      thumnailURL:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/2/a/f/52af5d3500376786d5e70e581cb338bf.jpg",
    },
    {
      id: 4,
      name: "Nhac Han",
      thumnailURL:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/3/3/6/9/336964e538efedac32c3f588f50fa2d1.jpg",
    },
  ];
  return (
    <div>
      <h2>NHAC ZING MP3</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;

//albumList (props) sẽ nhận dữ liệu của {albumList được khai báo dữ liệu}
