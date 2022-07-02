
import { lazy, } from "react"

import Loading from "./components/Loading/Loading"

const Header = lazy(() => import("./components/Header/Header"))
const Main = lazy(() => import("./components/Main/Main"))
const Footer = lazy(() => import("./components/Footer/Footer"))

function App() {


  return (
    <div className="">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
