let Px = 0;
let Py = 0;
let screen = [];
let random = [];
let enemyt = [];
let enemyx = [];
let enemyy = [];
const plot = document.getElementById("plot");
const ctx = plot.getContext("2d");

for (let i = 0; i < 5; i++) {
  random.push(Math.floor(Math.random() * 3));
}

document.addEventListener("keydown", (event) => {
  if (event.key == "ArrowUp" && !screen[((Py - 1 + 200) % 200) * 200 + Px]) Py--;
  if (event.key == "ArrowDown" && !screen[((Py + 1) % 200) * 200 + Px]) Py++;
  if (event.key == "ArrowRight" && !screen[Py * 200 + ((Px + 1) % 200)]) Px++;
  if (event.key == "ArrowLeft" && !screen[Py * 200 + ((Px - 1 + 200) % 200)]) Px--;
  if (Py < 0) Py += 200;
  if (Px < 0) Px += 200;
  if (Py >= 200) Py -= 200;
  if (Px >= 200) Px -= 200;
  draw();
});

function drawDungeon() {
  let rx = [];
  let ry = [];
  let tscreen = [];
  for (let i = 0; i < (200 * 200) / 2500; i++) {
    rx.push(Math.floor(Math.random() * 200));
    ry.push(Math.floor(Math.random() * 200));
  }
  for (var y = 0; y < 200; y++) {
    for (var x = 0; x < 200; x++) {
      screen[y * 200 + x] = Math.round(
        (Math.floor(Math.random() * 3) + Math.sin(x) - Math.sin(y) + 2) / 6
      );
      for (let i = 0; i < rx.length; i++) {
        let randx = Math.floor(Math.random() * 10 + 10);
        let randy = Math.floor(Math.random() * 10 + 10);
        if (
          Math.round(x / randx) == Math.round(rx[i] / randx) &&
          Math.round(y / randy) == Math.round(ry[i] / randy)
        ) {
          screen[y * 200 + x] = 0;
        }
      }
      tscreen[y * 200 + x] = screen[y * 200 + x];
    }
  }
  for (let i = 0; i < 8; i++) {
    for (var y = 0; y < 200; y++) {
      for (var x = 0; x < 200; x++) {
        if (i < 7) {
          tscreen[y * 200 + x] = Math.round(
            (screen[((y - 1 + 200) % 200) * 200 + x] +
              screen[((y + 1) % 200) * 200 + x] +
              screen[y * 200 + ((x - 1 + 200) % 200)] +
              screen[y * 200 + ((x + 1) % 200)] +
              screen[y * 200 + x]) /
              5
          );
        } else if (
          Math.round(
            (screen[((y - 1 + 200) % 200) * 200 + x] +
              screen[((y + 1) % 200) * 200 + x] +
              screen[y * 200 + ((x - 1 + 200) % 200)] +
              screen[y * 200 + ((x + 1) % 200)] +
              screen[y * 200 + x]) /
              5
          ) != screen[y * 200 + x]
        ) {
          tscreen[y * 200 + x] = 0;
        }
      }
    }
    for (var y = 0; y < 200; y++) {
      for (var x = 0; x < 200; x++) {
        screen[y * 200 + x] = tscreen[y * 200 + x];
      }
    }
  }
}

function draw() {
  ctx.beginPath();
  for (var y = 0; y < 20; y++) {
    for (var x = 0; x < 20; x++) {
      if (y == 10 && x == 10) {
        ctx.fillStyle = "red";
      } else if (
        screen[((y + Py + 190) % 200) * 200 + ((x + Px + 190) % 200)]
      ) {
        if (
          Math.round(
            (Math.sin(y + Py) + Math.sin(x + Px) + random[Math.floor(Math.sin(y + Py) + Math.sin(x + Px) + 2)] +
              2) /
              6
          )
        ) {
          ctx.fillStyle = "#444444ff";
        } else {
          ctx.fillStyle = "#313830ff";
        }
      } else {
        ctx.fillStyle = "#93a78aff";
      }
      ctx.fillRect(20 * x, 20 * y, 20, 20);
    }
  }
  ctx.closePath();
}

drawDungeon();
draw();
