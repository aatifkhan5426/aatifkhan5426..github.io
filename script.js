/* Navigation Bar for mobile and tab*/

const navbarMenu = document.getElementById("navbar-menu");
const navbar = document.getElementById("navbar");

navbarMenu.addEventListener("click", () => {
  if (navbar.className === "navbar") {
    navbar.className += " responsive";
  } else {
    navbar.className = "navbar";
  }

});


/* Animation Scroll*/
function scrollTrigger(selector, options = {}){
    let els = document.querySelectorAll(selector)
    els = Array.from(els)
    els.forEach(el => {
        addObserver(el, options)
    })
}

function addObserver(el, options){
    if(!('IntersectionObserver' in window)){
        if(options.cb){
            options.cb(el)
        }else{
            entry.target.classList.add('slide-in-left')
        }
        return
    }
    let observer = new IntersectionObserver((entries, observer) => { //this takes a callback function which receives two arguments: the elemts list and the observer instance
        entries.forEach(entry => {
            if(entry.isIntersecting){
                if(options.cb){
                    options.cb(el)
                }else{
            entry.target.classList.add('slide-in-left')
                }
                observer.unobserve(entry.target)
            }
        })
    }, options)
    observer.observe(el)
}
// Example usages:
scrollTrigger('.my-services')

scrollTrigger('.services-card')

scrollTrigger('.loader', {
    rootMargin: '-200px',
    cb: function(el){
        el.innerText = 'Loading...'
        setTimeout(() => {
            el.innerText = 'Task Complete!'
        }, 1000)
    }
})
