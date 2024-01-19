import {React, lazy} from 'react'

const Header = lazy(() => import("../../containers/header/Header"));

const Home = () => {
  return (
    <Header/>
  )
}

export default Home