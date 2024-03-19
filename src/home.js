// import icon from "./gree_dragon.jpg";
export default function makeHome(){
    const element =document.createElement('div');
    element.style.display="flex";
    element.style.gap="200px";
    // const myImage=document.createElement('img');
    // myImage.setAttribute("src","https://i.pinimg.com/originals/44/9d/56/449d5626c4c67e60f428e3df32e49546.jpg");
    // const myImage=new Image();
    // myImage.src=icon;
    // element.appendChild(myImage);

    const text_content=document.createElement('div');
    

    const heading=document.createElement('h1');
    heading.innerHTML=`You can drink your fancy ales<br> 
    You can drink them by the flagon<br>
    But the only brew for the brave and true<br>
    .....Comes from the Green Dragon<br>`;
    heading.style.fontSize="45px";
    //element.appendChild(heading);
    text_content.appendChild(heading);
    
    const punchline=document.createElement('h3');
    punchline.textContent="-Bilbo Baggins";
    punchline.style.marginLeft="auto";
    //element.appendChild(punchline);
    punchline.style.fontSize="25px"
    text_content.appendChild(punchline);
    element.style.backgroundColor="rgba(0,0,0,0.3)"
    element.appendChild(text_content);
    

    return element;
}