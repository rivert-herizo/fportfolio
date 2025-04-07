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
    path: 'js/lottie/write-animation.json'
});

var animation2 = lottie.loadAnimation({
    container: document.getElementById('animation2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/lottie/pieces-animation.json'
});

var animation3 = lottie.loadAnimation({
    container: document.getElementById('animation3'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/lottie/scene-animation.json'
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

document.addEventListener("scroll", function () {
    document.querySelectorAll(".skills-list-item").forEach((card, index) => {
        let rect = card.getBoundingClientRect();
        
        if (rect.top <= 20) { // When the card reaches the top
            card.style.transform = `rotate(${(index % 2 === 0 ? 1 : -1)}deg)`; // Alternating rotations
        } else {
            card.style.transform = "rotate(0deg)"; // Reset rotation if it's not at the top
        }
    });
});

const timeline_cards = document.querySelectorAll(".card-text-box");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const card = entry.target;
        
        if (entry.isIntersecting) {
            // Move the card to the center when in view
            card.style.left = "0";
            card.style.opacity = "1";
        } else {
            // When out of view, reset the left property to its initial position
            if (card.closest('.left-container')) {
                card.style.left = "5%";  // Move it to the left
            } else if (card.closest('.right-container')) {
                card.style.left = "-5%";   // Move it to the right
            }
        }
    });
}, {
    threshold: 0.5
});

// Add hover effect using JavaScript
timeline_cards.forEach(card => {
    // Mouse enter event to apply hover effect
    card.addEventListener('mouseenter', () => {
        if (card.closest('.left-container')) {
            card.style.left = '5%'; // Move to center if it's in the left container
        } else if (card.closest('.right-container')) {
            card.style.left = '-5%'; // Move to center if it's in the right container
        }
    });

    // Mouse leave event to reset styles after hover
    card.addEventListener('mouseleave', () => {
        if (card.closest('.left-container')) {
            card.style.left = '0';  // Reset position for left container
        } else if (card.closest('.right-container')) {
            card.style.left = '0';   // Reset position for right container
        }
    });

    // Observe the cards for intersection changes
    observer.observe(card);
});

// var service_nav = document.querySelectorAll('.service-nav');
// var service_section = document.querySelectorAll('.service-section');

// var service_nav_1 = document.querySelector('.service-nav-1');
// var service_nav_2 = document.querySelector('.service-nav-2');
// var service_nav_3 = document.querySelector('.service-nav-3');

// var service_section_1 = document.querySelector('.service-section-one');
// var service_section_2 = document.querySelector('.service-section-two');
// var service_section_3 = document.querySelector('.service-section-three');

// service_nav_1.addEventListener('click', function (e) {
//     service_section.forEach(section => {
//         section.style.display = 'none'; // Hide all sections initially
//     });
//     // Show the selected section

//     service_nav.forEach(nav => {
//         nav.classList.remove('active'); // Remove active class from all nav items
//     });

//     service_nav_1.classList.add('active'); // Add active class to the clicked nav item
//     service_section_1.style.display = 'flex';  // Hide all sections initially
// });

// service_nav_2.addEventListener('click', function (e) {
//     service_section.forEach(section => {
//         section.style.display = 'none'; // Hide all sections initially
//     });
//     // Show the selected section

//     service_nav.forEach(nav => {
//         nav.classList.remove('active'); // Remove active class from all nav items
//     });

//     service_nav_2.classList.add('active'); // Add active class to the clicked nav item
//     service_section_2.style.display = 'flex';  // Hide all sections initially
// });

// service_nav_3.addEventListener('click', function (e) {
//     service_section.forEach(section => {
//         section.style.display = 'none'; // Hide all sections initially
//     });
//     // Show the selected section
//     service_nav.forEach(nav => {
//         nav.classList.remove('active'); // Remove active class from all nav items
//     });

//     service_nav_3.classList.add('active'); // Add active class to the clicked nav item

//     service_section_3.style.display = 'flex';  // Hide all sections initially
// });

var service_nav = document.querySelectorAll('.service-nav');
var service_section = document.querySelectorAll('.service-section');

service_nav.forEach((nav, index) => {
    nav.addEventListener('click', function () {
        service_section.forEach(section => section.style.display = 'none'); // Hide all sections
        service_nav.forEach(navItem => navItem.classList.remove('active')); // Remove active class
        
        nav.classList.add('active'); // Add active class to clicked nav item
        service_section[index].style.display = 'flex'; // Show corresponding section
    });
});








