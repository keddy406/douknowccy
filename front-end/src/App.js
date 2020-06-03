import React from "react";
import "./App.css";
import NavBar from "./pages/NavBar";
import MainPage from "./pages/MainPage";
function App() {
  return (
    <div className="index">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="main-page">
        <MainPage />
      </div>
    </div>
  );
}

export default App;
