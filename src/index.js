import {useState} from "react";
import {createRoot} from "react-dom/client";

// Components
import Header from "./components/Header";
import Cat from "./components/Cat";
import BottomContainer from "./components/BottomContainer";

import {Home, About, Portfolio} from "/.components";

 import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

const MainPage = () => {

    return (
        <BrowserRouter>
            <section>
                <nav class="navBttn">
                    <link to="/home">Home</link>
                    <link to="/about">About</link>
                    <link to="/portfolio"> Portfolio</link>
                </nav>

                <Header/>

                <Cat/>
                        
                <BottomContainer/>
                <Routes>
                    <Route path = "/home" element = {<Home/>}/>
                    <Route path = "/about" element = {<About/>}/>
                    <Route path = "/portfolio" element = {<Portfolio/>}/>
                </Routes>
            
            </section>
        </BrowserRouter>
    )

}; 

let homePageHeader = document.getElementById("mainPage");
let rootHome = createRoot(homePageHeader)
rootHome.render(<MainPage/>)


