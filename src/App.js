import "./App.css";
import { useState, useEffect } from "react";
import ReviewList from "./routes/ReviewList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<ReviewList />} />
          <Route path="/reviews" element={<ReviewList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
