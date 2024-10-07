const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

// Set canvas size to the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Characters for the matrix rain
// Prepares the characters for the rain
const matrixCharacters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@!*%&";
const fontSize = 16;
const columns = canvas.width / fontSize;

// Array for rain drops (one for each column)
const drops = Array(Math.floor(columns)).fill(0);

// Function to draw the matrix rain
function drawMatrixRain() {
    // Set the background to black with opacity for fading effect
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set the text color to green and font size
    ctx.fillStyle = "#00FF00";
    ctx.font = `${fontSize}px monospace`;

    // Loop through the drops
    drops.forEach((drop, index) => {
        const text = matrixCharacters[Math.floor(Math.random() * matrixCharacters.length)];

        // Draw the character at the current position of the drop
        ctx.fillText(text, index * fontSize, drop * fontSize);

        // Randomly reset drop to the top or let it fall
        if (drop * fontSize > canvas.height && Math.random() > 0.975) {
            drops[index] = 0;
        }

        drops[index]++;
    });
}

// Call the draw function at an interval to animate the rain
setInterval(drawMatrixRain, 50);
