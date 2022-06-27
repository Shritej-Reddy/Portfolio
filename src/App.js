import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import Cursor from "./components/Cursor";

function App() {
  return (
    <>
      <Cursor />
      <header className="site-header">
        <Navbar />
      </header>
    </>
  );
}

export default App;
