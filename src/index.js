import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js";
import './style.css';
const content=document.querySelector("#content");

function init(){
    const home_btn=document.querySelector(".home");
    home_btn.addEventListener("click",()=>{
        

        content.innerHTML="";
        content.appendChild(home());
      
    })
    const menu_btn=document.querySelector(".menu");
    menu_btn.addEventListener("click",()=>{
        

        content.innerHTML="";
        content.appendChild(menu());
    })
    const about_btn=document.querySelector(".about");
    about_btn.addEventListener("click",()=>{
        // console.log("work")

        content.innerHTML="";
        content.appendChild(about());
    })
    content.appendChild(home());
  
   

}

init();