import {React, lazy} from 'react'
const Navbar = lazy(() => import("../../components/navbar/Navbar"));
const Header = lazy(() => import("../../containers/header/Header"));

const Home = () => {
  return (
    <body>
      <Navbar />
      <Header/>
    </body>
  )
}

export default Home