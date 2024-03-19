export default function makeAbout(){
    const element =document.createElement('div');
    const head=document.createElement('h1');
    head.textContent="About Us"
    head.style.fontSize="50px"
    const para=document.createElement('p');
    para.innerHTML=`we have been serving denizens of Middle Earth since the days elves walked the land,here's what they have to say<br>
    <br><strong>Aragorn</strong>-"auhentic human delicacies<br><br>
    <strong>Legolas</strong>-"the food is fulfilling that is all,oh but to compare it to those of ours is.......
    <br><br> <strong>Gimli</strong>-"not often we and the elf agree,but yes tis a shame compared to halls of our father
    <br><br><strong>Pippin</strong>-"food?what food?leaf is quite good
    <br><br><strong>Gandalf</strong>-"Fool of a Took!,oh food yes that is quite good
    <br><br><br>Contact us: 5696090693<br>
    <br><br>Email:Mithrandir@gandalf.com`

    para.style.fontSize="30px";
    element.appendChild(head);
    element.appendChild(para);
    element.style.backdropFilter="blur(10px)";
    




    return element;
}