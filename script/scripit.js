let time = 6000,
    currentImageIndex = 0
images = document.querySelectorAll("#slider img")
max = images.length;

function nextImage() {

    images[currentImageIndex].classList.remove("selected")

    currentImageIndex++ 
    if (currentImageIndex >= max)
    currentImageIndex = 0

    images[currentImageIndex].classList.add("selected")

}

window.addEventListener("load", start)


function start() {
    setInterval(() => {
        //Troca de Imagem
        nextImage()
    }, time)

}


let show = true; 

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show;
})