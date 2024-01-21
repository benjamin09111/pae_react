import {React, lazy} from 'react'
const Navbar = lazy(() => import("../../components/navbar/Navbar"));
const Header = lazy(() => import("../../containers/header/Header"));
const Main = lazy(() => import("../../containers/main/Main"));

const Home = () => {
  return (
    <body>
      <Navbar/>
      <Header/>
      <Main/>
    </body>
  )
}

export default Home