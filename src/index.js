import {useState} from "react";
import {createRoot} from "react-dom/client";
// import ReactDom, {createRoot} from "react-dom/client"
// import {useState} from "react";

// Components
import Header from "./components/Header";
import Cat from "./components/Cat";
import BottomContainer from "./components/BottomContainer";


// let mainHomePage = ["navBttn", "header", "cat", "bottomContainer"];

const mainPage = () => {

    const [homePage, setHomePage] = useState (mainHomePage)

    return (
        <section>
            <nav class="navBttn">
                {<ul>
                    <li class="navBar" href="home.html">Home </li>
                    <li class="navBar" href="about.html"> About </li>
                    <li class="navBar" href="portfolio.html"> Portfolio </li>
                    
                </ul>}

            </nav>

            <Header/>

            <Cat/>
                    
           <BottomeContainer/>
        
        </section>
        
    )

}; 

let homePageHeader = document.getElementById("mainPage");
let rootHome = createRoot(homePageHeader)
rootHome.render(<Header/>)



let catElement = document.getElementById("mainPage");
let rootCat = createRoot(catElement)
rootCat.render(<Cat/>)

let footerElement = document.getElementById("mainPage");
let rootFoot = createRoot(footerElement)
rootFoot.render(<BottomContainer/>)


