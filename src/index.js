import React from "react";
//import ReactDOM from 'react-dom/client';
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Team from "./components/Team";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Mint from "./components/Mint";
import Nftinfo from "./components/Nftinfo";
import Mintnext from "./components/Mintnext";
import Gallery2 from "./components/Gallery2";

const root = ReactDOM.createRoot(document.getElementById("root"));
/*root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<Team />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/mint" element={<Mint />} />
      <Route path="/nft-info/:id" element={<Nftinfo />} />
      <Route path="/mint-next" element={<Mintnext />} />
      <Route path="/gallery2" element={<Gallery2 />} />
    </Routes>
    <Footer />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
