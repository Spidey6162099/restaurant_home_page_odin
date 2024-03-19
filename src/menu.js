export default function makeMenu(){
    const element =document.createElement("div");
    element.textContent="Menu for only the brave ones";
    element.style.fontSize="60px";
    const list=document.createElement("ol");

    // const menu=["stew","potatoes","fish","lembas"];
    // menu.forEach((item)=>{
    //         const l=document.createElement('li');
    //         l.style.fontSize="30px";
    //         l.textContent=item;
    //         list.appendChild(l);
    // })
    const l1=document.createElement('li');

    l1.textContent="Eowyn's Stew";
    const l1_img=document.createElement('img');
    l1_img.setAttribute("src","https://i0.wp.com/www.feastofstarlight.com/wp-content/uploads/2015/06/the-lord-of-the-rings-eowyns-soup-title.jpg");
    l1.style.display="flex";
    l1.style.justifyContent="space-between";
    l1_img.style.height="100px";
    l1_img.style.width="100px";
    l1.style.fontSize="40px";
    l1.appendChild(l1_img);
    l1.style.backgroundColor="rgba(0,0,0,0.4)";
    list.appendChild(l1);

    const l2=document.createElement('li');

    l2.textContent="Sam's potato taters";
    const l2_img=document.createElement('img');
    l2_img.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtwAjxR7ly67Bm1ISamzZAHERPiUz2SsVV1A&usqp=CAU");
    l2_img.style.height="100px";
    l2_img.style.width="100px"
    l2.style.display="flex";
    l2.style.justifyContent="space-between";
    l2.appendChild(l2_img);
    l2.style.fontSize="40px";
    l2.style.backgroundColor="rgba(0,0,0,0.4)";
    list.appendChild(l2);

    const l3=document.createElement('li');

    l3.textContent="Gollum's fish";
    const l3_img=document.createElement('img');
    l3_img.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgbpB0fQgidEuIWAZJE5fdOpe0oIR9qEjXCw&usqp=CAU");
    l3_img.style.height="100px";
    l3_img.style.width="100px"
    l3.appendChild(l3_img);
    l3.style.display="flex";
    l3.style.justifyContent="space-between";
    l3.style.fontSize="40px";
    l3.style.backgroundColor="rgba(0,0,0,0.4)";
    list.appendChild(l3);

    const l4=document.createElement('li');

    l4.textContent="Eowyn's Stew";
    const l4_img=document.createElement('img');
    l4_img.setAttribute("src","https://i0.wp.com/www.feastofstarlight.com/wp-content/uploads/2015/06/the-lord-of-the-rings-eowyns-soup-title.jpg");
    l4_img.style.height="100px";
    l4_img.style.width="100px"
    l4.appendChild(l4_img);
    l4.style.display="flex";
    l4.style.justifyContent="space-between";
    l4.style.fontSize="40px";
    l4.style.backgroundColor="rgba(0,0,0,0.4)";
    list.appendChild(l4);

    list.style.display="flex";
    list.style.flexDirection="column";
    list.style.padding="20px";
    list.style.gap="40px";
    list.style.justifyContent="center";

    element.appendChild(list);
    element.style.backgroundColor="	rgba(52, 78, 65,0.6)";
    element.style.padding="0px 30px"
    element.style.color='aliceblue';
    return element;
}