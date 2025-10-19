import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutPageAsync } from "./page/AboutPage/AboutPage.async";
import { MainPageAsync } from "./page/MainPage/MainPage.asunc";
import { Suspense } from "react";
import "./styles/index.css";

function App() {

  console.log("sdfd");

  return (
    <div className="app dark">
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
