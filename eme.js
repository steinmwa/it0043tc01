document.addEventListener("DOMContentLoaded", function() {
    var contactSection = document.getElementById('contact');
    var contactBoxes = document.querySelectorAll('.contact-box');


    var backgrounds = {
        '1': '#2a5b97', 
        '2': '#d74d8c', 
        '3': '#4347f0'  
    };

    contactBoxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            var background = backgrounds[box.getAttribute('data-background')];
            contactSection.style.background = background;
        });

        box.addEventListener('mouseout', () => {
            contactSection.style.background = '#eae5a2'; 
        });
    });

   
    var screenWidth = window.innerWidth - 100;
    var image1 = document.getElementById("image1");
    var image2 = document.getElementById("image2");
    image1.style.width = screenWidth / 4 + "px";
    image2.style.width = screenWidth / 4 + "px";

    var bodyElement = document.querySelector("body");
    var container = document.querySelector(".container-fluid");

    function resetImages() {
        image1.style.width = screenWidth / 4 + "px";
        image2.style.width = screenWidth / 4 + "px";
        image1.style.transition = "none";
        image2.style.transition = "none";
        image1.style.opacity = 1;
        image2.style.opacity = 1;
        image1.style.transform = "scale(1)";
        image2.style.transform = "scale(1)";
    }

    function changeFace(e) {
        var xDirection = getMouseDirection(e);
        var image1Width = image1.offsetWidth;
        var image2Width = image2.offsetWidth;
        if (xDirection === "left") {
            moveLeft(image1Width, image2Width);
        } else {
            moveRight(image1Width, image2Width);
        }
    }

    function moveLeft(image1Width, image2Width) {
        if (image2Width < maxWidth) {
            image2.style.width = (image2Width + 8) + "px";
            image1.style.width = (image1Width - 8) + "px";
        }
    }


    function moveRight(image1Width, image2Width) {
        if (image1Width < maxWidth) {
            image1.style.width = (image1Width + 15) + "px";
            image2.style.width = (image2Width - 15) + "px";
        }
    }

  
    function getMouseDirection(e) {
        var dir;
        var currentX = e.pageX;
        if (prevX < currentX) {
            dir = "right";
        } else {
            dir = "left";
        }
        prevX = currentX;
        return dir;
    }
   
    container.addEventListener("mousemove", changeFace, false);
    container.addEventListener("mouseleave", resetImages, false);

    var prevX = 0;
    var maxWidth = screenWidth / 2;

    document.querySelector('.text-left').addEventListener('mouseover', () => {
        document.querySelector('.text-right').style.opacity = 0;
    });
    document.querySelector('.text-left').addEventListener('mouseout', () => {
        document.querySelector('.text-right').style.opacity = 1;
    });

    document.querySelector('.text-right').addEventListener('mouseover', () => {
        document.querySelector('.text-left').style.opacity = 0;
    });
    document.querySelector('.text-right').addEventListener('mouseout', () => {
        document.querySelector('.text-left').style.opacity = 1;
    });


});


const toggleBtn = document.getElementById('toggle-btn');
const closeBtn = document.getElementById('close-btn');
const nav = document.querySelector('nav');


function toggleNav() {
    nav.classList.toggle('show'); 
    toggleBtn.classList.toggle('hidden'); 
}


toggleBtn.addEventListener('click', function() {
    toggleNav();
});


closeBtn.addEventListener('click', function() {
    nav.classList.remove('show'); 
    toggleBtn.classList.remove('hidden'); 
});

