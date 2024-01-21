import {React, lazy} from 'react'
import "./main.css"

const Whatis = lazy(() => import("../../components/whatis/Whatis"));
const Pro = lazy(() => import("../../components/pro/Pro"));
const Comments = lazy(() => import("../../components/comments/Comments"));
const Footer = lazy(() => import("../../components/footer/Footer"));

const Main = () => {
    return (
        <div className='main__container'>
            <Whatis/>
            <Pro/>
            <Comments/>
            <Footer/>
        </div>
    )
}

export default Main