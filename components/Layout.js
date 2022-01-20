import NavBar from "./NavBar"
import Seo from "./Seo"
import Head from "next/head"
export default function Layout({children}){
    return <>
        <Seo />
        <NavBar />
        <div>{children}</div>
    </>
}