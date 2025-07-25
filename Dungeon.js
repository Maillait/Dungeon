let Px = 0;
let Py = 0;
let screen = [];
let random = [];
let enemy = [];
let attack = []; // > 3? punch   > 7? basic gun   > 15? basic magic...
const plot = document.getElementById("plot");
const ctx = plot.getContext("2d");

let u = 0;
let d = 0;
let l = 0;
let r = 0;
let a1 = 0;
let a2 = 0;

let error = 0;
let spawn = 40;
let artifacts = 0;
let health = 100;
let upgrade = 0;
let explored = [];

drawDungeon();
let tick = setInterval(step, 100);

for (let i = 0; i < 100; i++) {
  random.push(Math.floor(Math.random() * 2));
}

document.addEventListener("keydown", (event) => {
  if (event.key == "ArrowUp") u = 1;
  if (event.key == "ArrowDown") d = 1;
  if (event.key == "ArrowRight") r = 1;
  if (event.key == "ArrowLeft") l = 1;
  if (event.key == "1") a1 = 1;
  if (event.key == "2") a2 = 1;
});

document.addEventListener("keyup", (event) => {
  if (event.key == "ArrowUp") u = 0;
  if (event.key == "ArrowDown") d = 0;
  if (event.key == "ArrowRight") r = 0;
  if (event.key == "ArrowLeft") l = 0;
  if (event.key == "1") a1 = 0;
  if (event.key == "2") a2 = 0;
});

function step() {
  function change() {
    for (let x = 0; x < 25; x++) {
      for (let y = 0; y < 25; y++) {
        enemy[y * 25 + x] = tenemy[y * 25 + x];
      }
    }
  }
  while (error == 1) {
    error = 0;
    drawDungeon();
  }
  let tenemy = [];
  ctx.beginPath();
  if (u && 1 != screen[((Py - 1 + 200) % 200) * 200 + Px]) {
    Py--;
    for (let x = 0; x < 25; x++) {
      for (let y = 0; y < 25; y++) {
        if (y) {
          tenemy[y * 25 + x] = enemy[(y - 1) * 25 + x];
        } else if (
          y == 0 &&
          Math.random() < 1 / spawn &&
          1 != screen[((y + Py + 187) % 200) * 200 + ((x + Px + 187) % 200)]
        ) {
          tenemy[y * 25 + x] = 1;
        } else {
          tenemy[y * 25 + x] = 0;
        }
        if (
          1 != screen[((y + Py + 190) % 200) * 200 + ((x + Px + 190) % 200)]
        ) {
          if (x < 22 && x > 2 && y < 22 && y > 2) {
            ctx.fillStyle = "rgba(24, 112, 43, 1)";
            ctx.fillRect(
              ((x + Px + 190) % 200) + 400,
              (y + Py + 190) % 200,
              1,
              1
            );
          } else if (y > 22) {
            ctx.fillStyle = "#9bb1c4ff";
            ctx.fillRect(
              ((x + Px + 190) % 200) + 400,
              (y + Py + 190) % 200,
              1,
              1
            );
          }
        }
      }
    }
    change();
  }
  if (d && 1 != screen[((Py + 1) % 200) * 200 + Px]) {
    Py++;
    for (let x = 0; x < 25; x++) {
      for (let y = 0; y < 25; y++) {
        if (y < 24) {
          tenemy[y * 25 + x] = enemy[(y + 1) * 25 + x];
        } else if (
          y == 24 &&
          Math.random() < 1 / spawn &&
          1 != screen[((y + Py + 187) % 200) * 200 + ((x + Px + 187) % 200)]
        ) {
          tenemy[y * 25 + x] = 1;
        } else {
          tenemy[y * 25 + x] = 0;
        }
        if (
          1 != screen[((y + Py + 190) % 200) * 200 + ((x + Px + 190) % 200)]
        ) {
          if (x < 22 && x > 2 && y < 22 && y > 2) {
            ctx.fillStyle = "rgba(24, 112, 43, 1)";
            ctx.fillRect(
              ((x + Px + 190) % 200) + 400,
              (y + Py + 190) % 200,
              1,
              1
            );
          } else if (y < 2) {
            ctx.fillStyle = "#9bb1c4ff";
            ctx.fillRect(
              ((x + Px + 190) % 200) + 400,
              (y + Py + 190) % 200,
              1,
              1
            );
          }
        }
      }
    }
    change();
  }
  if (r && 1 != screen[Py * 200 + ((Px + 1) % 200)]) {
    Px++;
    for (let x = 0; x < 25; x++) {
      for (let y = 0; y < 25; y++) {
        if (x < 24) {
          tenemy[y * 25 + x] = enemy[y * 25 + x + 1];
        } else if (
          x == 24 &&
          Math.random() < 1 / spawn &&
          1 != screen[((y + Py + 187) % 200) * 200 + ((x + Px + 187) % 200)]
        ) {
          tenemy[y * 25 + x] = 1;
        } else {
          tenemy[y * 25 + x] = 0;
        }
        if (
          1 != screen[((y + Py + 190) % 200) * 200 + ((x + Px + 190) % 200)]
        ) {
          if (x < 22 && x > 2 && y < 22 && y > 2) {
            ctx.fillStyle = "rgba(24, 112, 43, 1)";
            ctx.fillRect(
              ((x + Px + 190) % 200) + 400,
              (y + Py + 190) % 200,
              1,
              1
            );
          } else if (x < 2) {
            ctx.fillStyle = "#9bb1c4ff";
            ctx.fillRect(
              ((x + Px + 190) % 200) + 400,
              (y + Py + 190) % 200,
              1,
              1
            );
          }
        }
      }
    }
    change();
  }
  if (l && 1 != screen[Py * 200 + ((Px - 1 + 200) % 200)]) {
    Px--;
    for (let x = 0; x < 25; x++) {
      for (let y = 0; y < 25; y++) {
        if (x) {
          tenemy[y * 25 + x] = enemy[y * 25 + x - 1];
        } else if (
          x == 0 &&
          Math.random() < 1 / spawn &&
          1 != screen[((y + Py + 187) % 200) * 200 + ((x + Px + 187) % 200)]
        ) {
          tenemy[y * 25 + x] = 1;
        } else {
          tenemy[y * 25 + x] = 0;
        }
        if (
          1 != screen[((y + Py + 190) % 200) * 200 + ((x + Px + 190) % 200)]
        ) {
          if (x < 22 && x > 2 && y < 22 && y > 2) {
            ctx.fillStyle = "rgba(24, 112, 43, 1)";
            ctx.fillRect(
              ((x + Px + 190) % 200) + 400,
              (y + Py + 190) % 200,
              1,
              1
            );
          } else if (x > 22) {
            ctx.fillStyle = "#9bb1c4ff";
            ctx.fillRect(
              ((x + Px + 190) % 200) + 400,
              (y + Py + 190) % 200,
              1,
              1
            );
          }
        }
      }
    }
    change();
  }

  if (Py < 0) Py += 200;
  if (Px < 0) Px += 200;
  if (Py >= 200) Py -= 200;
  if (Px >= 200) Px -= 200;
  if (screen[Py * 200 + Px] == 2) {
    screen[Py * 200 + Px] = 0;
    artifacts++;
    ctx.beginPath();
    ctx.fillStyle = "#695b4dff";
    ctx.fillRect(422, 200, 200, 60);
    ctx.fillStyle = "black";
    ctx.fillText("Gems : " + artifacts, 430, 240);
    ctx.closePath();
  }
  draw();
}

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
            (screen[((y + 199) % 200) * 200 + x] +
              screen[((y + 1) % 200) * 200 + x] +
              screen[y * 200 + ((x + 199) % 200)] +
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
  while (1 == screen[Py * 200 + Px] && Px < 199) {
    Px++;
    if (Px > 100) {
      Py++;
    }
    if (Px < 199) error = 1;
  }
  for (let x = 0; x < 25; x++) {
    for (let y = 0; y < 25; y++) {
      attack[y * 25 + x] = 0;
      enemy[y * 25 + x] = 0;
    }
  }
  for (var y = 0; y < 200; y++) {
    for (var x = 0; x < 200; x++) {
      if (Math.random() < 1 / 200 && !screen[y * 200 + x]) {
        screen[y * 200 + x] = 2;
      }
    }
  }
  ctx.beginPath();
  ctx.imageSmoothingEnabled = false;
  ctx.font = "bold 26px Papyrus";
  ctx.fillStyle = "#695b4dff";
  ctx.fillRect(400, 200, 200, 400);
  ctx.fillStyle = "#000000ff";
  ctx.fillRect(400, 0, 200, 200);
  ctx.fillRect(400, 0, 1, 400);
  ctx.fillText("Gems : " + artifacts, 430, 240);
  ctx.fillRect(408, 226, 14, 14);
  ctx.fillStyle = "#11d100ff";
  ctx.fillRect(410, 228, 10, 10);
  ctx.fillStyle = "#9bb1c48f";
  ctx.fillRect(0, 0, 400, 400);
  ctx.fillStyle = "rgba(24, 112, 43, 1)";
  for (var y = 0; y < 20; y++) {
    for (var x = 0; x < 20; x++) {
      if (1 != screen[((y + Py + 190) % 200) * 200 + ((x + Px + 190) % 200)])
        ctx.fillRect(((x + Px + 190) % 200) + 400, (y + Py + 190) % 200, 1, 1);
    }
  }
  ctx.closePath();
}

function draw() {
  for (var y = 0; y < 20; y++) {
    for (var x = 0; x < 20; x++) {
      if (y == 10 && x == 10) {
        ctx.fillStyle = "#a10b00ff";
      } else if (
        screen[((y + Py + 190) % 200) * 200 + ((x + Px + 190) % 200)] == 2
      ) {
        ctx.fillStyle = "#11d100ff";
      } else if (enemy[(y + 3) * 25 + (x + 3)]) {
        ctx.fillStyle = "#c2af09ff";
      } else if (
        1 == screen[((y + Py + 190) % 200) * 200 + ((x + Px + 190) % 200)]
      ) {
        if (Math.round(random[((x + Px) % 10) + ((Py + y) % 10) * 10])) {
          ctx.fillStyle = "#444444ff";
        } else {
          ctx.fillStyle = "#313830ff";
        }
      } else {
        if (Math.round(random[((x + Px) % 10) + ((Py + y) % 10) * 10])) {
          ctx.fillStyle = "#898b8aff";
        } else {
          ctx.fillStyle = "#869695ff";
        }
      }
      ctx.fillRect(20 * x, 20 * y, 20, 20);
    }
  }
  ctx.closePath();
}
