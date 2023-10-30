const element1=document.createElement("div");
element1.innerHTML="<p>Hello Buddy</p>"
document.body.append(element1);

const element2=document.createElement("div");
const element3=document.createElement("div");
const element4=document.createElement("h3")
element4.innerHTML="This is an example of using inner child elements";
element3.append(element4);
element2.append(element3);
document.body.append(element2);

const element5=document.createElement("header")
const element6=document.createElement("section")
const element7=document.createElement("aricle")
//const element5=document.createElement("header")
element6.innerHTML="<span><h1>This is an dynamic span</h2></span>"
element7.innerHTML="<p>HI GUYS jhjkh  hjgjh fiug tdhtgjh g6543 54gi 2ug4</p>";
 element5.append(element6,element7);
 document.body.append(element5);

 /*setting attribute in an html element*/

 const element8= document.createElement("div");
 element8.setAttribute("class","container");
 element8.setAttribute("id","00001");
 element8.innerHTML="Monday Blues";
 document.body.append(element8);

 const element9=document.createElement("div");
 const element10=document.createElement("header");
 const element11=document.createElement("section");
 const element12=document.createElement("span");
 const element13=document.createElement("article");
 const element14=document.createElement("p");


 element9.setAttribute("class","divclass");
 element10.setAttribute("class","headerclass1");
 element11.setAttribute("class","sectionclass1");
 element12.setAttribute("class","spanclass1");
 element13.setAttribute("class","articleclass1");
 element14.setAttribute("class","pclass1");

 element12.innerHTML="Hello My frends and family";
 element14.innerHTML="Hope you are all doing great"

 element11.append(element12);
 element13.append(element14);
 element10.append(element11,element13);
 element9.append(element10);
 document.body.append(element9);














