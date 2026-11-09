

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("navbar--scroll");
    } else {
        navbar.classList.remove("navbar--scroll");
    }
});



const mobileMenuToggle = document.querySelector(
    ".navbar__mobile-menu-toggle"
);

const mobileMenuItems = document.querySelector(
    ".navbar__mobile-menu-items"
);

mobileMenuToggle.addEventListener("click", () => {
    mobileMenuItems.classList.toggle("active");
});



const mobileMenuLinks = document.querySelectorAll(
    ".navbar__mobile-menu-link"
);

mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenuItems.classList.remove("active");
    });
});



const modal = document.querySelector(".modal");

const videoButton = document.querySelector(
    ".preview__video-button"
);

const closeButton = document.querySelector(
    ".modal__close-button"
);

const videoPlayer = document.querySelector("#videoPlayer");


const videoURL = "https://www.youtube.com/embed/VIDEO_ID";



videoButton.addEventListener("click", () => {
    modal.style.display = "block";

    videoPlayer.src = videoURL + "?autoplay=1";

    document.body.style.overflow = "hidden";
});


function closeModal() {
    modal.style.display = "none";

    videoPlayer.src = "";

    document.body.style.overflow = "";
}



closeButton.addEventListener("click", closeModal);



window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});


document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.style.display === "block") {
        closeModal();
    }
});
