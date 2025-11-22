console.log("JS loaded");

// Initialize particles background
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 }},
        color: { value: "#60a5fa" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#a78bfa",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            random: true,
            out_mode: "out"
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        }
    },
    retina_detect: true
});

// Buttons
document.getElementById('runTests').addEventListener('click', () => {
    showNotification('Test sequence initiated...');
    animateBars();
});

document.getElementById('viewLogs').addEventListener('click', () => {
    showNotification('Opening test logs...');
});

document.getElementById('settings').addEventListener('click', () => {
    showNotification('Settings panel opened...');
});

// Notification system
function showNotification(msg) {
    const box = document.getElementById('notification');
    box.querySelector('strong').nextSibling.textContent = " " + msg;
    box.classList.add("show");

    setTimeout(() => box.classList.remove("show"), 3000);
}

// Progress bar animation
function animateBars() {
    const bars = document.querySelectorAll('.progress');
    bars.forEach(bar => {
        const original = bar.style.width;
        bar.style.width = "100%";

        setTimeout(() => {
            bar.style.width = original;
        }, 2000);
    });
}

// Animate numbers
window.onload = () => {
    const stats = document.querySelectorAll(".stat-value");

    stats.forEach(stat => {
        const original = stat.textContent;
        stat.textContent = "0";

        let counter = 0;
        const target = parseInt(original);
        const increment = target / 50;

        const updateCounter = () => {
            if (counter < target) {
                counter += increment;
                stat.textContent = Math.ceil(counter) + (original.includes('%') ? '%' : '');
                setTimeout(updateCounter, 30);
            } else {
                stat.textContent = original;
            }
        };
        updateCounter();
    });
};
