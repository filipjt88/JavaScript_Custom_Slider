let arrowLeft  = document.querySelector(".fa-angle-left");
let arrowRight = document.querySelector(".fa-angle-right");
let sourceImg  = document.querySelector("img");
let imgArr     = ["1.jpg","2.jpg","3.jpg"];
let count      = 0;

let loop = setInterval(() => {
    count++;
    for(let i = 0; i < imgArr.length; i++) {
        sourceImg.setAttribute("src",`img/${count}.jpg`);
    }
    if(count === 3) {
        count = 0;
    }
},3000);

arrowLeft.addEventListener("click",function() {
    if(sourceImg.getAttribute("src") === "img/1.jpg") {
        sourceImg.setAttribute("src",`img/3.jpg`);
    } else if(sourceImg.getAttribute("src") === "img/3.jpg") {
        sourceImg.setAttribute("src",`img/2.jpg`);
    } else if(sourceImg.getAttribute("src") === "img/2.jpg") {
        sourceImg.setAttribute("src",`img/1.jpg`);
    }
});


arrowRight.addEventListener("click",function() {
    if(sourceImg.getAttribute("src") === "img/1.jpg") {
        sourceImg.setAttribute("src",`img/3.jpg`);
    } else if(sourceImg.getAttribute("src") === "img/3.jpg") {
        sourceImg.setAttribute("src",`img/2.jpg`);
    } else if(sourceImg.getAttribute("src") === "img/2.jpg") {
        sourceImg.setAttribute("src",`img/1.jpg`);
    }
});