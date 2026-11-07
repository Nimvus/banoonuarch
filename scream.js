const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const Cardin = document.querySelector(".card");


let isDragging = true;

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
       console.debug(btn.id);
   })

});


const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging"); 
}


const dragging = (e) => { 
    if(!isDragging) return;
    carousel.scrollLeft = e.pageX;
}

const dragStop = (e) => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);