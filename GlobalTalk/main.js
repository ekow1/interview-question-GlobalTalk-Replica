
// Events elements


const addEventOnELements = function(elements , eventType, callback){
    for(let i = 0 , len = elements.length ; i < len ; i++){

        elements[i].addEventListener(eventType , callback);
    }
          

}





//  reponsive navbar toggler for mobile devices 

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");



const toggleNav = function (){
    navbar.classList.toggle("active");
    document.body.classList.toggle("nav-active")
}

addEventOnELements(navTogglers , "click" ,toggleNav )


// Header Sticky


const header = document.querySelector("[data-header]");



window.addEventListener("scroll"  , function() {
    header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
})




