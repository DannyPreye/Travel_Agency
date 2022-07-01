
import { lazy, Suspense } from "react"

import Loading from "./components/Loading/Loading"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
const Header = lazy(() => import("./components/Header/Header"))
const Main = lazy(() => import("./components/Main/Main"))
const Footer = lazy(() => import("./components/Footer/Footer"))

function App() {


  return (
    <div className="">
      <Routes >
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
