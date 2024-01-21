import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import {React, lazy, Suspense} from "react"
const Home = lazy(() => import("./pages/home/Home"));
const Page404 = lazy(() => import("./pages/page404/Page404"));
const Pay = lazy(() => import("./pages/pay/Pay"));

const Loading = () =>{
  return(
    <div className='load__container'>
      <div>
        <h1>Cargando...</h1>
        <p>Pregúntale al Experto</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <Suspense fallback={<Loading/>} className="App">
      <BrowserRouter>
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
