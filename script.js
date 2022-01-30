const thumbnails = document.querySelectorAll(".thumbnail img");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close")
const popupImg = document.querySelector(".popup__img");
const arrowLeft = document.querySelector(".popup__arrow--left");
const arrowRight = document.querySelector(".popup__arrow--right");

let currentImageIndex;

const showNextImage = () => {
    currentImageIndex = (currentImageIndex + 1) % thumbnails.length;
    popupImg.src = thumbnails[currentImageIndex].src;
}

const showPrevImage = () => {
    if(currentImageIndex === 0){
        currentImageIndex = thumbnails.length - 1;
    }
    else{
        currentImageIndex = currentImageIndex - 1;
    }
    popupImg.src = thumbnails[currentImageIndex].src;
}

const closeSlider = () => {
    popup.classList.add("hidden");
}

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click",(event) => {
        popup.classList.remove("hidden");
        popupImg.src = event.target.src;
        currentImageIndex = index;
    })
});

popupClose.addEventListener("click",closeSlider);

arrowRight.addEventListener("click", showNextImage);

arrowLeft.addEventListener("click", showPrevImage);

document.addEventListener("keydown", (event) => {
    if(!popup.classList.contains("hidden")){
        if(event.code === "ArrowRight"){
            showNextImage();
        }
        else if(event.code === "ArrowLeft"){
            showPrevImage();
        }
        else if(event.code === "Escape"){
            closeSlider();
        }
    }
})

popup.addEventListener("click", (event) => {
    if(event.target === popup){
        closeSlider();
    }
});