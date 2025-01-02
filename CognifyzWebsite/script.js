document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.querySelector(".hamburger");
    const navItems = document.querySelector(".nav-items");

    hamburgerMenu.addEventListener("click", () => {
        navItems.classList.toggle("show");
    });
});

const brochureBtn = document.querySelector('.brochure-info')
function downloadBrochure() {
    const link = document.createElement('a');
    link.href = "assets/Web Development Internship Task.pdf"; 
    link.download = 'Web Development Internship Task.pdf';
    link.click();
}

brochureBtn.addEventListener('click', downloadBrochure);

const benefits = [
    "Gain practical, real-world experience",
    "Work with cutting-edge technologies",
    "Receive mentorship from experienced professionals",
    "Enhance your portfolio with live projects."
];

const benefitsList = document.querySelector('.benefits');
benefits.forEach(benefit => {
    const listItem = document.createElement('div');
    listItem.classList.add('benefits-list');
    listItem.textContent = benefit;
    benefitsList.appendChild(listItem);
});

const formBtn = document.querySelector('form');

function submitAlert(event) {
    event.preventDefault(); 
    alert("Application submitted successfully!");
    formBtn.submit(); 
}

formBtn.addEventListener('submit', submitAlert);

const typewriterElement = document.querySelector(".type-effect");
const text = typewriterElement.textContent; 
typewriterElement.textContent = ""; 
let index = 0;

function typeEffect() {
    if (index < text.length) {
        typewriterElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100); 
    }
}

typeEffect();