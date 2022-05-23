import React from "react";
// import ReactDom from "react-dom";
import Heading from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import notes from "./notes1.js";
import CreateArea from "./CreateArea.jsx";

function App() {
  return (
    <div>
      <Heading />
      <CreateArea />
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
