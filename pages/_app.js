import { Fragment } from "react"
import NavBar from "../components/NavBar"
export default function App( { Component,pageProps }){
    return (
        <Fragment>
            <NavBar />
            <Component {...pageProps} />
            <span>hi</span>
            <style jsx global>{`
            a{
                color:white;
            }
            `}</style>
        </Fragment>
    )
}