import React from "react";
import NoteHeader from "../pages/NoteFunctionPages/NoteHeader/NoteHeader";

const NoteLayout = ({ children }) => {
  return (
    <div>
      <NoteHeader />
      <main>{children}</main>
    </div>
  );
};

export default NoteLayout;
