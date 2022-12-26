let btn=document.getElementById("btn");
let hed=document.getElementById("hed");
btn.addEventListener( "click" ,function (){
    btn.style.backgroundColor = "pink";
    btn.style.color="blue";
    if(btn.value=="click"){
        hed.style.display="block";
    }
    else{
        hed.style.display="none";
    }
    /*let elem=document.createElement("div");
  let heading=document.getElementById("head");
  elem.setAttribute("id","nitin");
  elem.innerHTML="<h1>neha<h1>";
  //heading.appendChild(elem);
 heading.replaceWith(elem); 
 //console.log(elem);
 e.preventDefault();*/
 let elem=document.createElement("div");
let heading=document.getElementById("head");
elem.setAttribute("id","nitin");
elem.innerHTML="<h1>neha<h1>"
heading.replaceWith(elem);
console.log(elem);

    
});
/*let elem=document.createElement("div");
let heading=document.getElementById("head");
elem.setAttribute("id","nitin");
elem.innerHTML="<h1>neha<h1>"
heading.replaceWith(elem);
console.log(elem);*/

/*let btn=document.getElementById("btn");
  btn.addEventListener("click",function(e){
    let elem=document.createElement("div");
  let heading=document.getElementById("heading");
  elem.setAttribute("id","nitin");
  elem.innerHTML="<h1>welcome<h1>";
  //heading.appendChild(elem);
 heading.replaceWith(elem);
 //console.log(elem);
 e.preventDefault();*/

/*jab koi user btn per click kare to heading show ho jaye
btn per koi user click kare to display ho jaye block 
jabki user jab is page per aayega to iski display 
hogi none*/