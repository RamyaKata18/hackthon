const canvas = document.getElementById('diceCanvas');
const ctx = canvas.getContext('2d');

function drawDice(number) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

   
    const firstBoxColor = '#FFC0CB'; 

    ctx.fillStyle = firstBoxColor; 
    ctx.fillRect(25, 25, 150, 150);
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 5;
    ctx.strokeRect(25, 25, 150, 150);

    ctx.fillStyle = '#000000';
    const dotRadius = 10;
    const positions = [
        [],
        [{ x: 100, y: 100 }],
        [{ x: 60, y: 60 }, { x: 140, y: 140 }],
        [{ x: 60, y: 60 }, { x: 100, y: 100 }, { x: 140, y: 140 }],
        [{ x: 60, y: 60 }, { x: 60, y: 140 }, { x: 140, y: 60 }, { x: 140, y: 140 }],
        [{ x: 60, y: 60 }, { x: 60, y: 140 }, { x: 100, y: 100 }, { x: 140, y: 60 }, { x: 140, y: 140 }],
        [{ x: 60, y: 60 }, { x: 60, y: 140 }, { x: 140, y: 60 }, { x: 140, y: 140 }, { x: 60, y: 100 }, { x: 140, y: 100 }]
    ];

    positions[number].forEach(dot => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotRadius, 0, Math.PI * 2);
        ctx.fill();
    });
}

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

drawDice(rollDice());

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        const newNumber = rollDice();
        drawDice(newNumber);
    }
});
