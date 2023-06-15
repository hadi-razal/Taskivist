import React from "react";
import "./Favorite.css";
import NoteLayout from "../../../Layout/NoteLayout";


const Favorite = () => {
  return (
    <NoteLayout>
      <div>
        <h1>Favorite Page</h1>
        <marquee >
          this is a news flash....
        </marquee>
      </div>
    </NoteLayout>
  );
};

export default Favorite;
