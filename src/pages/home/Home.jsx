import {React, lazy} from 'react'
import "./home.css"
const Navbar = lazy(() => import("../../components/navbar/Navbar"));
const Header = lazy(() => import("../../containers/header/Header"));
const Main = lazy(() => import("../../containers/main/Main"));

const Home = () => {
  return (
    <body className='body__container'>
      <Navbar/>
      <Header/>
      <Main/>
    </body>
  )
}

export default Home