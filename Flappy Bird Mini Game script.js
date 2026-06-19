let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

// Bird object
let bird = {
  x: 50,
  y: 150,
  width: 20,
  height: 20,
  gravity: 0.5,
  lift: -8,
  velocity: 0
};

// Pipes
let pipes = [];
let score = 0;

// Create pipes
function createPipe() {
  let gap = 120;
  let topHeight = Math.random() * 200 + 50;

  pipes.push({
    x: canvas.width,
    top: topHeight,
    bottom: topHeight + gap,
    width: 40
  });
}

// Bird control
document.addEventListener("keydown", function () {
  bird.velocity = bird.lift;
});

// Game loop
function update() {
  bird.velocity += bird.gravity;
  bird.y += bird.velocity;

  // Pipe movement
  for (let i = 0; i < pipes.length; i++) {
    pipes[i].x -= 2;

    // Score
    if (pipes[i].x === bird.x) {
      score++;
    }

    // Collision
    if (
      bird.x < pipes[i].x + pipes[i].width &&
      bird.x + bird.width > pipes[i].x &&
      (bird.y < pipes[i].top || bird.y + bird.height > pipes[i].bottom)
    ) {
      alert("Game Over! Score: " + score);
      document.location.reload();
    }
  }

  // Remove off-screen pipes
  pipes = pipes.filter(p => p.x > -50);

  // Draw
  draw();
  requestAnimationFrame(update);
}

// Draw everything
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Bird
  ctx.fillStyle = "yellow";
  ctx.fillRect(bird.x, bird.y, bird.width, bird.height);

  // Pipes
  ctx.fillStyle = "green";
  pipes.forEach(pipe => {
    ctx.fillRect(pipe.x, 0, pipe.width, pipe.top);
    ctx.fillRect(pipe.x, pipe.bottom, pipe.width, canvas.height);
  });

  // Score
  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.fillText("Score: " + score, 10, 20);
}

// Pipe generator
setInterval(createPipe, 2000);

// Start game
update();