

const scrollUpBtn = document.querySelector(".scroll-up-btn");

window.addEventListener("scroll", checkHeight)

function checkHeight(){
    if (window.scrollY > 100){
        scrollUpBtn.style.display = "block"
    } else {
        scrollUpBtn.style.display = "none"
    }
}

scrollUpBtn.addEventListener("click", () =>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});