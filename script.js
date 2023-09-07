let dropdown = document.querySelector(".dropdown");
let dropdownItem = document.querySelectorAll(".dropdown-item");
let hamburger = document.querySelector(".hamburger .more");
let back = document.querySelector(".hamburger .close");
back.style.display= "none";

function menu(){
    dropdown.style.display="flex";
    dropdown.style.opacity = "1";
    //dropdown.style.transition = " opacity 10s ";
    back.style.display="block";
    hamburger.style.display="none";
}


back.addEventListener("click",()=>{
    dropdown.style.display= "none";
    back.style.display="none";
    hamburger.style.display="block";
})



for(let i=0; i<dropdownItem.length; i++){
    dropdownItem[i].addEventListener("click",()=>{
    dropdown.style.display="none";
    back.style.display= "none";
    hamburger.style.display="block";
    })
}