import "./App.css";
import { useState, useEffect } from "react";
import ReviewList from "./routes/ReviewList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./routes/Categories";
import Navbar from "./components/nav/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<ReviewList />} />
          <Route path="/reviews" element={<ReviewList />} />
          <Route path="/reviews/:category" element={<ReviewList />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
