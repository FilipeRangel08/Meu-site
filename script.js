// Typewriter Effect for Hero Section
const textToType = "Olá, eu sou Filipe. Desenvolvedor Full-Stack.";
const typeWriterElement = document.getElementById('typewriter');
let i = 0;
const speed = 100; // Typing speed in ms

function typeWriter() {
    if (i < textToType.length) {
        typeWriterElement.textContent += textToType.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Start typing when page loads
window.onload = typeWriter;

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Console easter egg
console.log("%cInteressado no código? Vamos conversar!", "color: #58a6ff; font-size: 20px; font-weight: bold;");
console.log("Contate-me para projetos: filipe@dev.com");
