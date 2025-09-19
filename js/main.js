//import * as Feed from "./postManager.js";

/**
 * General method that should be called on all pages. Loads HTML data such as the header
 * as well as the nav and footer. Universal content
 */
async function initialize() {

    applyBanner()
    applyNav();
    return;
}

/**  Allows the dynamic updating of banner
 * 
 */
function applyBanner() {
    // Useful when I want to make banners dynamic
    //const pageTitle = document.title;
    const bannerElement = document.getElementById("banner");
    // Update in future to name banner based on pageTitle
    // If banner not found imgPath reverts to default
    let imgName = "default";

    const toAppend = document.createElement("img");
    toAppend.src = `\\images\\core\\banner\\${imgName}.jpg`;
    bannerElement.appendChild(toAppend);
    return;
}

/**
 * Section of code that searches an HTML doc for the navContainer id. 
 * Appends nav html to class. Main purpose is to keep code that used across entire
 * site in one place.
 */
function applyNav(){
    const navElement = document.getElementById("navContainer");
    const toAppend = document.createElement("ul");
    toAppend.classList.add("navList");
    toAppend.innerHTML = `
            <li>
                <a href="\\index.html">Home</a>
            </li>
            <li>
                <a href="">Projects</a>
            </li>
             <li>
                <a href="\\pages\\about.html">About</a>
            </li>`;

    navElement.appendChild(toAppend);
    return
}

initialize();