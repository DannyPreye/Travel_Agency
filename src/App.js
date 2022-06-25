
import { lazy, Suspense } from "react"

import Loading from "./components/Loading/Loading"

const Header = lazy(() => import("./components/Header/Header"))
const Main = lazy(() => import("./components/Main/Main"))
const Footer = lazy(() => import("./components/Footer/Footer"))

function App() {


  return (
    <div className="">
      <Suspense fallback={<Loading />}>
        <Header />
        <Main />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
