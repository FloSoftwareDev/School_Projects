function generateBoard() {
    const rows = parseInt(document.getElementById('rows').value);
    const cols = parseInt(document.getElementById('cols').value);

    const canvas = document.getElementById('bord');
    const context = canvas.getContext('2d');

    const squareSize = Math.min(canvas.width / cols, canvas.height / rows);

    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            context.fillStyle = (i + j) % 2 === 0 ? '#444' : '#eee';
            context.fillRect(j * squareSize, i * squareSize, squareSize, squareSize);
        }
    }
}
