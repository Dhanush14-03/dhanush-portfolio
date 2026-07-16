/* ==========================================
        PORTFOLIO SCRIPT
========================================== */

// ================================
// Sticky Header
// ================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.background = "rgba(15,23,42,0.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";
    } else {
        header.style.background = "rgba(15,23,42,.75)";
        header.style.boxShadow = "none";
    }

});


// ================================
// Active Navigation
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ================================
// Typing Effect
// ================================

const typingElement = document.querySelector(".typing");

const words = [

    "Java Developer",

    "IoT Developer",

    "Embedded Systems Enthusiast",

    "Problem Solver",

    "Software Engineer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typing() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typing, 1500);

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length)

                wordIndex = 0;

        }

    }

    setTimeout(typing, deleting ? 60 : 120);

}

typing();


// ================================
// Scroll Reveal Animation
// ================================

const revealItems = document.querySelectorAll(

".timeline-content,.skill-card,.project-card,.achievement-card,.certificate-card,.tech-card,.profile-box,.contact-card,.stat-card,.about-text"

);

function reveal() {

    revealItems.forEach(item => {

        const windowHeight = window.innerHeight;

        const top = item.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();


// ================================
// Counter Animation
// ================================

const counters = document.querySelectorAll(".stat-card h2");

let counted = false;

function counterAnimation() {

    if (counted) return;

    const trigger = document.querySelector(".stats");

    if (!trigger) return;

    const triggerTop = trigger.getBoundingClientRect().top;

    if (triggerTop < window.innerHeight - 100) {

        counted = true;

        counters.forEach(counter => {

            let text = counter.innerText;

            if (isNaN(text)) return;

            let target = Number(text);

            let count = 0;

            let speed = target / 60;

            const update = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = count.toFixed(1);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target;

                }

            };

            update();

        });

    }

}

window.addEventListener("scroll", counterAnimation);

counterAnimation();


// ================================
// Back To Top Button
// ================================

const topBtn = document.createElement("button");

topBtn.id = "topBtn";

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500)

        topBtn.style.display = "block";

    else

        topBtn.style.display = "none";

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ================================
// Smooth Scrolling
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ================================
// Current Year
// ================================

const year = document.querySelector(".copyright");

if(year){

    year.innerHTML =
    `© ${new Date().getFullYear()} Dhanush K. All Rights Reserved.`;

}


// ================================
// Console Message
// ================================

console.log("🚀 Portfolio Loaded Successfully!");