let Px = 0;
let Py = 0;
let screen = [];
let random = [];
let enemy = [];
let attack = []; // > 3? punch   > 7? basic gun   > 15? basic magic...
let enemies = 0;
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
let dir = 0;

let hp = 20;
let maxhp = 20;
let free = 0;

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
  let tu = 0;
  let td = 0;
  let tr = 0;
  let tl = 0;
  function change() {
    for (let x = 0; x < 25; x++) {
      for (let y = 0; y < 25; y++) {
        enemy[y * 25 + x] = tenemy[y * 25 + x];
      }
    }
  }
  function losthp() {
    ctx.beginPath();
    ctx.fillStyle = "#000000ff";
    ctx.fillRect(422, 250, 200, 30);
    ctx.fillRect(400, 280, 200, 30);
    ctx.fillStyle = "#11d100ff";
    ctx.fillText("Hp :" + hp, 430, 280);
    ctx.fillStyle = "#9bb1c48f";
    ctx.fillRect(408, 296, 184, 14);
    ctx.fillStyle = "#d10000ff";
    ctx.fillRect(410, 298, (180 * hp) / maxhp, 10);
    ctx.closePath();
  }
  while (error == 1) {
    error = 0;
    drawDungeon();
  }
  let tenemy = [];
  ctx.beginPath();
  if (u && 1 != screen[((Py - 1 + 200) % 200) * 200 + Px]) {
    Py--;
    tu++;
    for (let x = 0; x < 25; x++) {
      for (let y = 0; y < 25; y++) {
        if (y) {
          tenemy[y * 25 + x] = enemy[(y - 1) * 25 + x];
        } else if (
          y == 0 &&
          Math.random() < 1 / spawn &&
          1 != screen[((y + Py + 187) % 200) * 200 + ((x + Px + 187) % 200)] &&
          enemies < 10
        ) {
          enemies++;
          if (Math.random() < 1 / 4) {
            tenemy[y * 25 + x] = 1;
          } else if (Math.random() < 1 / 6) {
            tenemy[y * 25 + x] = 3;
          } else if (Math.random() < 3 / 5) {
            tenemy[y * 25 + x] = 14;
          } else if (Math.random() < 1 / 2) {
            tenemy[y * 25 + x] = 54;
          } else {
            tenemy[y * 25 + x] = 95;
          }
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
    td++;
    for (let x = 0; x < 25; x++) {
      for (let y = 0; y < 25; y++) {
        if (y < 24) {
          tenemy[y * 25 + x] = enemy[(y + 1) * 25 + x];
        } else if (
          y == 24 &&
          Math.random() < 1 / spawn &&
          1 != screen[((y + Py + 187) % 200) * 200 + ((x + Px + 187) % 200)] &&
          enemies < 10
        ) {
          enemies++;
          if (Math.random() < 1 / 4) {
            tenemy[y * 25 + x] = 1;
          } else if (Math.random() < 1 / 6) {
            tenemy[y * 25 + x] = 3;
          } else if (Math.random() < 3 / 5) {
            tenemy[y * 25 + x] = 14;
          } else if (Math.random() < 1 / 2) {
            tenemy[y * 25 + x] = 54;
          } else {
            tenemy[y * 25 + x] = 95;
          }
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
    tr++;
    for (let x = 0; x < 25; x++) {
      for (let y = 0; y < 25; y++) {
        if (x < 24) {
          tenemy[y * 25 + x] = enemy[y * 25 + x + 1];
        } else if (
          x == 24 &&
          Math.random() < 1 / spawn &&
          1 != screen[((y + Py + 187) % 200) * 200 + ((x + Px + 187) % 200)] &&
          enemies < 10
        ) {
          enemies++;
          if (Math.random() < 1 / 4) {
            tenemy[y * 25 + x] = 1;
          } else if (Math.random() < 1 / 6) {
            tenemy[y * 25 + x] = 3;
          } else if (Math.random() < 3 / 5) {
            tenemy[y * 25 + x] = 14;
          } else if (Math.random() < 1 / 2) {
            tenemy[y * 25 + x] = 54;
          } else {
            tenemy[y * 25 + x] = 95;
          }
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
    tl++;
    for (let x = 0; x < 25; x++) {
      for (let y = 0; y < 25; y++) {
        if (x) {
          tenemy[y * 25 + x] = enemy[y * 25 + x - 1];
        } else if (
          x == 0 &&
          Math.random() < 1 / spawn &&
          1 != screen[((y + Py + 187) % 200) * 200 + ((x + Px + 187) % 200)] &&
          enemies < 10
        ) {
          enemies++;
          if (Math.random() < 1 / 4) {
            tenemy[y * 25 + x] = 1;
          } else if (Math.random() < 1 / 6) {
            tenemy[y * 25 + x] = 3;
          } else if (Math.random() < 3 / 5) {
            tenemy[y * 25 + x] = 14;
          } else if (Math.random() < 1 / 2) {
            tenemy[y * 25 + x] = 54;
          } else {
            tenemy[y * 25 + x] = 95;
          }
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
  if (tu && tl) {
    dir = 7;
  } else if (tu && tr) {
    dir = 4;
  } else if (td && tl) {
    dir = 6;
  } else if (td && tr) {
    dir = 5;
  } else if (tu) {
    dir = 0;
  } else if (tl) {
    dir = 3;
  } else if (td) {
    dir = 2;
  } else if (tr) {
    dir = 1;
  }
  if (Py < 0) Py += 200;
  if (Px < 0) Px += 200;
  if (Py >= 200) Py -= 200;
  if (Px >= 200) Px -= 200;
  if (screen[Py * 200 + Px] == 2) {
    screen[Py * 200 + Px] = 0;
    artifacts++;
    ctx.beginPath();
    ctx.fillStyle = "#000000ff";
    ctx.fillRect(422, 210, 200, 50);
    ctx.fillStyle = "#11d100ff";
    ctx.fillText("Gems:" + artifacts, 430, 240);
    ctx.closePath();
  }
  if (tu + td + tr + tl) {
    for (let i = 0; i < 625; i++) {
      enemy[i] = tenemy[i];
      tenemy[i] = 0;
      if (enemy[i]) enemies++;
    }
  }
  for (let y = 0; y < 25; y++) {
    for (let x = 0; x < 25; x++) {
      if (enemy[y * 25 + x] == 1) {
        if (
          x > 13 &&
          y < 13 &&
          1 != screen[((y + Py + 188) % 200) * 200 + ((x + Px + 186) % 200)]
        )
          if (tenemy[(y + 1) * 25 + x - 1] == 2) tenemy[y * 25 + x] = 96;
          else tenemy[(y + 1) * 25 + x - 1] = 2;
        else if (
          x < 13 &&
          y > 13 &&
          1 != screen[((y + Py + 186) % 200) * 200 + ((x + Px + 188) % 200)]
        )
          if (tenemy[(y - 1) * 25 + x + 1] == 2) tenemy[y * 25 + x] = 96;
          else tenemy[(y - 1) * 25 + x + 1] = 2;
        else if (
          x < 13 &&
          y < 13 &&
          1 != screen[((y + Py + 188) % 200) * 200 + ((x + Px + 188) % 200)]
        )
          if (tenemy[(y + 1) * 25 + x + 1] == 2) tenemy[y * 25 + x] = 96;
          else tenemy[(y + 1) * 25 + x + 1] = 2;
        else if (
          x > 13 &&
          y > 13 &&
          1 != screen[((y + Py + 186) % 200) * 200 + ((x + Px + 186) % 200)]
        )
          if (tenemy[(y - 1) * 25 + x - 1] == 2) tenemy[y * 25 + x] = 96;
          else tenemy[(y - 1) * 25 + x - 1] = 2;
        else if (
          x > 13 &&
          1 != screen[((y + Py + 187) % 200) * 200 + ((x + Px + 186) % 200)]
        )
          if (tenemy[y * 25 + x - 1] == 2) tenemy[y * 25 + x] = 96;
          else tenemy[y * 25 + x - 1] = 2;
        else if (
          x < 13 &&
          1 != screen[((y + Py + 187) % 200) * 200 + ((x + Px + 188) % 200)]
        )
          if (tenemy[y * 25 + x + 1] == 2) tenemy[y * 25 + x] = 96;
          else tenemy[y * 25 + x + 1] = 2;
        else if (
          y < 13 &&
          1 != screen[((y + Py + 188) % 200) * 200 + ((x + Px + 187) % 200)]
        )
          if (tenemy[(y + 1) * 25 + x] == 2) tenemy[y * 25 + x] = 96;
          else tenemy[(y + 1) * 25 + x] = 2;
        else if (
          y > 13 &&
          1 != screen[((y + Py + 186) % 200) * 200 + ((x + Px + 187) % 200)]
        )
          if (tenemy[(y - 1) * 25 + x] == 2) tenemy[y * 25 + x] = 96;
          else tenemy[(y - 1) * 25 + x] = 2;
        else if (y == 13 && x == 13) {
          hp -= 1;
          losthp();
        } else {
          tenemy[y * 25 + x] = 96;
        }
      } else if (enemy[y * 25 + x] == 2) {
        if (y == 13 && x == 13) {
          hp -= 1;
          losthp();
        } else {
          tenemy[y * 25 + x] = 1;
        }
      } else if (enemy[y * 25 + x] == 3) {
        if (x > 13 && y < 13) tenemy[(y + 1) * 25 + x - 1] = 4;
        else if (x < 13 && y > 13) tenemy[(y - 1) * 25 + x + 1] = 4;
        else if (x < 13 && y < 13) tenemy[(y + 1) * 25 + x + 1] = 4;
        else if (x > 13 && y > 13) tenemy[(y - 1) * 25 + x - 1] = 4;
        else if (x > 13) tenemy[y * 25 + x - 1] = 4;
        else if (x < 13) tenemy[y * 25 + x + 1] = 4;
        else if (y < 13) tenemy[(y + 1) * 25 + x] = 4;
        else if (y > 13) tenemy[(y - 1) * 25 + x] = 4;
        else if (y == 13 && x == 13) {
          hp -= 1;
          losthp();
        }
      } else if (enemy[y * 25 + x] == 4) {
        if (y == 13 && x == 13) {
          hp -= 1;
          losthp();
        } else {
          tenemy[y * 25 + x] = 3;
        }
      } else if (enemy[y * 25 + x] == 96) {
        tenemy[y * 25 + x] = 0;
      }
    }
  }
  enemies = 0;
  for (let i = 0; i < 625; i++) {
    enemy[i] = tenemy[i];
    tenemy[i] = 0;
    if (enemy[i]) enemies++;
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
  ctx.font = "bold 26px Courier New";
  ctx.fillStyle = "#000000ff";
  ctx.fillRect(400, 0, 200, 400);
  ctx.fillRect(400, 0, 1, 400);
  ctx.fillStyle = "#9bb1c48f";
  ctx.fillRect(408, 226, 14, 14);
  ctx.fillRect(408, 266, 14, 14);
  ctx.fillRect(408, 326, 14, 14);
  ctx.fillRect(408, 296, 184, 14);
  ctx.fillRect(408, 356, 184, 14);
  ctx.fillRect(0, 0, 400, 400);
  ctx.fillRect(400, 200, 400, 2);
  ctx.fillStyle = "#11d100ff";
  ctx.fillText("Gems:" + artifacts, 430, 240);
  ctx.fillText("Hp  :" + hp, 430, 280);
  ctx.fillText("Free:" + free, 430, 340);
  ctx.fillRect(410, 228, 10, 10);
  ctx.fillStyle = "#d10000ff";
  ctx.fillRect(410, 268, 10, 10);
  ctx.fillRect(410, 298, 180, 10);
  ctx.fillStyle = "#c2af09ff";
  ctx.fillRect(410, 328, 10, 10);
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
        ctx.drawImage(
          document.getElementById("sprite"),
          20 * dir,
          20,
          20,
          20,
          20 * x,
          20 * y,
          20,
          20
        );
      } else if (
        screen[((y + Py + 190) % 200) * 200 + ((x + Px + 190) % 200)] == 2
      ) {
        ctx.drawImage(
          document.getElementById("sprite"),
          80,
          0,
          20,
          20,
          20 * x,
          20 * y,
          20,
          20
        );
      } else if (enemy[(y + 3) * 25 + (x + 3)]) {
        if (enemy[(y + 3) * 25 + (x + 3)] < 3) {
          ctx.drawImage(
            document.getElementById("sprite"),
            0,
            40,
            20,
            20,
            20 * x,
            20 * y,
            20,
            20
          );
        } else if (enemy[(y + 3) * 25 + (x + 3)] < 5) {
          if (screen[((y + Py + 190) % 200) * 200 + ((x + Px + 190) % 200)] == 0)
          ctx.drawImage(
            document.getElementById("sprite"),
            60,
            40,
            20,
            20,
            20 * x,
            20 * y,
            20,
            20
          );
          else {
            ctx.drawImage(
            document.getElementById("sprite"),
            100,
            40,
            20,
            20,
            20 * x,
            20 * y,
            20,
            20
          );
          }
        } else if (enemy[(y + 3) * 25 + (x + 3)] < 35) {
          ctx.drawImage(
            document.getElementById("sprite"),
            20,
            40,
            20,
            20,
            20 * x,
            20 * y,
            20,
            20
          );
        } else if (enemy[(y + 3) * 25 + (x + 3)] < 95) {
          ctx.drawImage(
            document.getElementById("sprite"),
            40,
            40,
            20,
            20,
            20 * x,
            20 * y,
            20,
            20
          );
        } else if (enemy[(y + 3) * 25 + (x + 3)] < 96) {
          ctx.drawImage(
            document.getElementById("sprite"),
            80,
            40,
            20,
            20,
            20 * x,
            20 * y,
            20,
            20
          );
        } else if (enemy[(y + 3) * 25 + (x + 3)] < 97) {
          ctx.drawImage(
            document.getElementById("sprite"),
            120,
            40,
            20,
            20,
            20 * x,
            20 * y,
            20,
            20
          );
        }
      } else if (
        1 == screen[((y + Py + 190) % 200) * 200 + ((x + Px + 190) % 200)]
      ) {
        if (Math.round(random[((x + Px) % 10) + ((Py + y) % 10) * 10])) {
          ctx.drawImage(
            document.getElementById("sprite"),
            0,
            0,
            20,
            20,
            20 * x,
            20 * y,
            20,
            20
          );
        } else {
          ctx.drawImage(
            document.getElementById("sprite"),
            20,
            0,
            20,
            20,
            20 * x,
            20 * y,
            20,
            20
          );
        }
      } else {
        if (Math.round(random[((x + Px) % 10) + ((Py + y) % 10) * 10])) {
          ctx.drawImage(
            document.getElementById("sprite"),
            40,
            0,
            20,
            20,
            20 * x,
            20 * y,
            20,
            20
          );
        } else {
          ctx.drawImage(
            document.getElementById("sprite"),
            60,
            0,
            20,
            20,
            20 * x,
            20 * y,
            20,
            20
          );
        }
      }
    }
  }
  ctx.closePath();
}
