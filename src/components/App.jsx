import React from "react";
// import ReactDom from "react-dom";
import Heading from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import notes from "./notes1.js";

function App() {
  return (
    <div>
      <Heading />
      {notes.map((note) => (
        <Note key={note.key} title={note.title} explanation={note.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
