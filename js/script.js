function loadComponent(id, file, callback) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
            if (callback) callback(); // Run callback after loading
        })
        .catch(error => console.error('Error loading', file, error));
}

loadComponent("header", "header.html", () => {
    // let lastScrollY = window.scrollY;
    // const header = document.querySelector("header");

    // if (!header) {
    //     console.error("Header element not found!");
    //     return;
    // }

    // window.addEventListener("scroll", () => {
    //     let currentScrollY = window.scrollY;

    //     if (currentScrollY === 0) {
    //         // At the top: Reset to original state (header back to normal)
    //         header.classList.remove("header-hidden", "header-fixed", "slide-down");
    //     } else if (currentScrollY > lastScrollY) {
    //         // Scrolling down: Hide header
    //         header.classList.add("header-hidden");
    //         header.classList.remove("header-fixed", "slide-down");
    //     } else {
    //         // Scrolling up: Show header and make it fixed, with slide effect
    //         header.classList.remove("header-hidden");
    //         header.classList.add("header-fixed");
    //     }

    //     lastScrollY = currentScrollY;
    // });

    let lastScrollY = window.scrollY;
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > lastScrollY) {
            // Scrolling down: Hide the header
            header.classList.add("header-hidden");
        } else {
            // Scrolling up: Show the header
            header.classList.remove("header-hidden");
        }
        lastScrollY = window.scrollY;
    });

});


loadComponent("footer", "footer.html");

// Lottie animations
var animation1 = lottie.loadAnimation({
    container: document.getElementById('animation1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '../images/write-animation.json'
});

var animation2 = lottie.loadAnimation({
    container: document.getElementById('animation2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '../images/pieces-animation.json'
});

var animation3 = lottie.loadAnimation({
    container: document.getElementById('animation3'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '../images/scene-animation.json'
});


// function toggleMenu() {
//     const menuIcon = document.querySelector(".menu-icon");
//     const mobileMenu = document.querySelector(".header-mobile");

//     menuIcon.classList.toggle("active");

//     if (mobileMenu.style.display === "none" || mobileMenu.style.display === "") {
//         mobileMenu.style.display = "block";
//     } else {
//         mobileMenu.style.display = "none";
//     }
// }

function toggleMenu() {
    const menuIcon = document.querySelector(".menu-icon");
    const mobileMenu = document.querySelector(".header-mobile");

    menuIcon.classList.toggle("active");
    mobileMenu.classList.toggle("active");
}


