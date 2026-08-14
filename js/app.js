// Sticky Navbar

window.addEventListener("scroll",function(){

const nav=document.querySelector(".navbar");

if(window.scrollY>60){

nav.style.background="rgba(15,23,42,.92)";

nav.style.padding="12px 0";

}else{

nav.style.background="rgba(15,23,42,.55)";

nav.style.padding="18px 0";

}

});

// Scroll Top Button

const topBtn=document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};
