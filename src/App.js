import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import {React, lazy, Suspense} from "react"
const Home = lazy(() => import("./pages/home/Home"));
const Page404 = lazy(() => import("./pages/page404/Page404"));
const Pay = lazy(() => import("./pages/pay/Pay"));
const Navbar = lazy(() => import("./components/navbar/Navbar"));

function App() {
  return (
    <Suspense fallback={<span>Loading...</span>} className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/begin" element={<Pay/>} />
          <Route path="*" element={<Page404/>}/>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
