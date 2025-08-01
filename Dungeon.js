let maxhp = 20;
let attack1 = 0;
let cool1 = 0;
let attack2 = 1;
let cool2 = 0;
let artifacts = 0;
let inmenu = 0;
let dif = 0;
let hp = 20;
let upPunch = 1;
let upGun = 1;
let upSpell = 0;
let upHeal = 0;
let upSheild = 0;
const plot = document.getElementById("plot");
const ctx = plot.getContext("2d");
drawMenu();

addEventListener("mousemove", (event) => {
  mx = Math.floor(event.clientX - plot.getBoundingClientRect().left);
  my = Math.floor(event.clientY - plot.getBoundingClientRect().top);
});

addEventListener("mousedown", (event) => {
  if (inmenu == 1 && mx > 145 && my > 245 && mx < 455 && my < 345) {
    inmenu = 0;
    artifacts = 0;
    maxhp = 20;
    hp = maxhp;
    select = 0;
    level();
  } else if (inmenu == 2) {
    if (mx > 525 && my > 5 && mx < 595 && my < 45) {
      drawMenu();
    } else if (mx > 525 && my > 50 && mx < 595 && my < 90) {
      inmenu = 0;
      hp = maxhp;
      dif = 0;
      level();
    } else if (mx > 15 && my > 110 && mx < 115 && my < 160) {
      if (artifacts >= Math.floor(maxhp / 10) + 3 && maxhp < 180) {
        artifacts -= Math.floor(maxhp / 10) + 3;
        maxhp += 5;
        ctx.beginPath();
        ctx.fillStyle = "#7a736fff";
        ctx.fillRect(15, 110, 100, 50);
        ctx.fillStyle = "#98a7a3ff";
        ctx.fillRect(15, 160, 100, 25);
        ctx.fillStyle = "#000000ff";
        if (maxhp == 180) ctx.fillText("Max", 25, 140);
        else ctx.fillText("+hp $" + (Math.floor(maxhp / 10) + 3), 25, 140);
        ctx.fillText("hp : " + maxhp, 25, 180);
        ctx.closePath();
        sold();
      } else {
        alert("too pricy or sold out");
      }
    } else if (mx > 132 && my > 110 && mx < 232 && my < 160) {
      if (artifacts >= 2 * upPunch + 3 && upPunch < 10) {
        artifacts -= 2 * upPunch + 3;
        upPunch++;
        ctx.beginPath();
        ctx.fillStyle = "#7a736fff";
        ctx.fillRect(132, 110, 100, 50);
        ctx.fillStyle = "#98a7a3ff";
        ctx.fillRect(132, 160, 100, 25);
        ctx.fillStyle = "#000000ff";
        if (upPunch == 10) ctx.fillText("Max", 140, 140);
        else ctx.fillText("Chop$" + (2 * upPunch + 3), 140, 140);
        ctx.fillText("lvl: " + upPunch, 145, 180);
        ctx.closePath();
        sold();
      } else {
        alert("too pricy or sold out");
      }
    } else if (mx > 244 && my > 110 && mx < 344 && my < 160) {
      if (artifacts >= 2 * upGun + 5 && upGun < 12) {
        artifacts -= 2 * upGun + 5;
        upGun++;
        ctx.beginPath();
        ctx.fillStyle = "#7a736fff";
        ctx.fillRect(244, 110, 100, 50);
        ctx.fillStyle = "#98a7a3ff";
        ctx.fillRect(244, 160, 100, 25);
        ctx.fillStyle = "#000000ff";
        if (upGun == 12) ctx.fillText("Max", 255, 140);
        else ctx.fillText("Gun $" + (2 * upGun + 5), 255, 140);
        ctx.fillText("lvl: " + upGun, 260, 180);
        ctx.closePath();
        sold();
      } else {
        alert("too pricy or sold out");
      }
    } else if (mx > 20 && my > 230 && mx < 120 && my < 280) {
      if (artifacts >= upSpell + 10 && upSpell < 12) {
        artifacts -= upSpell + 10;
        upSpell++;
        ctx.beginPath();
        ctx.fillStyle = "#7a736fff";
        ctx.fillRect(20, 230, 100, 50);
        ctx.fillStyle = "#98a7a3ff";
        ctx.fillRect(20, 280, 100, 25);
        ctx.fillStyle = "#000000ff";
        if (upSpell == 12) ctx.fillText("Max", 25, 260);
        else ctx.fillText("Spel$" + (upSpell + 10), 25, 260);
        ctx.fillText("lvl: " + upSpell, 30, 300);
        ctx.closePath();
        sold();
      } else {
        alert("too pricy or sold out");
      }
    } else if (mx > 132 && my > 230 && mx < 232 && my < 280) {
      if (artifacts >= 4 * upHeal + 5 && upHeal < 10) {
        artifacts -= 4 * upHeal + 5;
        upHeal++;
        ctx.beginPath();
        ctx.fillStyle = "#7a736fff";
        ctx.fillRect(132, 230, 100, 50);
        ctx.fillStyle = "#98a7a3ff";
        ctx.fillRect(132, 280, 100, 25);
        ctx.fillStyle = "#000000ff";
        if (upHeal == 10) ctx.fillText("Max", 140, 260);
        else ctx.fillText("Heal$" + (4 * upHeal + 5), 140, 260);
        ctx.fillText("lvl: " + upHeal, 145, 300);
        ctx.closePath();
        sold();
      } else {
        alert("too pricy or sold out");
      }
    } else if (mx > 244 && my > 230 && mx < 344 && my < 280) {
      if (artifacts >= 10 && !upSheild) {
        artifacts -= 10;
        upSheild++;
        ctx.beginPath();
        ctx.fillStyle = "#7a736fff";
        ctx.fillRect(244, 230, 100, 50);
        ctx.fillStyle = "#98a7a3ff";
        ctx.fillRect(244, 280, 100, 25);
        ctx.fillStyle = "#000000ff";
        ctx.fillText("Max", 255, 260);
        ctx.fillText("lvl: " + upSheild, 260, 300);
        ctx.closePath();
        sold();
      } else {
        alert("too pricy or sold out");
      }
    } else if (mx > 400 && my > 110 && mx < 500 && my < 160) {
      select = 1;
      ctx.beginPath();
      ctx.fillStyle = "#98a7a3ff";
      ctx.fillRect(400, 160, 100, 25);
      ctx.closePath();
    } else if (mx > 400 && my > 230 && mx < 500 && my < 280) {
      select = 2;
      ctx.beginPath();
      ctx.fillStyle = "#98a7a3ff";
      ctx.fillRect(400, 280, 100, 25);
      ctx.closePath();
    }
  }
});

addEventListener("keypress", (event) => {
  if (inmenu == 2 && select) {
    let check = 0;
    if (event.key == "1") {
      if (select == 1) attack1 = 0;
      else attack2 = 0;
      check++;
    }
    if (event.key == "2") {
      if (select == 1) attack1 = 1;
      else attack2 = 1;
      check++;
    }
    if (event.key == "3") {
      if (select == 1) attack1 = 2;
      else attack2 = 2;
      check++;
    }
    if (event.key == "4") {
      if (select == 1) attack1 = 3;
      else attack2 = 3;
      check++;
    }
    if (event.key == "5") {
      if (select == 1) attack1 = 4;
      else attack2 = 4;
      check++;
    }
    if (check) {
      ctx.beginPath();
      ctx.fillStyle = "#000000ff";
      if (select == 1) {
        if (attack1 == 0) ctx.fillText("Chop", 415, 180);
        else if (attack1 == 1) ctx.fillText("Gun", 415, 180);
        else if (attack1 == 2) ctx.fillText("Spell", 415, 180);
        else if (attack1 == 3) ctx.fillText("Heal", 415, 180);
        else ctx.fillText("Block", 415, 180);
      } else {
        if (attack2 == 0) ctx.fillText("Chop", 415, 300);
        else if (attack2 == 1) ctx.fillText("Gun", 415, 300);
        else if (attack2 == 2) ctx.fillText("Spell", 415, 300);
        else if (attack2 == 3) ctx.fillText("Heal", 415, 300);
        else ctx.fillText("Block", 415, 300);
        ctx.closePath();
      }
      select = 0;
    }
  }
});

function sold() {
  ctx.beginPath();
  ctx.fillStyle = "#98a7a3ff";
  ctx.fillRect(25, 345, 130, 35);
  ctx.fillStyle = "#000000ff";
  ctx.fillText("Gems : " + artifacts, 25, 375);
  ctx.closePath();
}

function shop() {
  select = 0;
  ctx.beginPath();
  ctx.imageSmoothingEnabled = false;
  for (let y = 0; y < 20; y++) {
    for (let x = 0; x < 30; x++) {
      ctx.drawImage(
        document.getElementById("sprite"),
        20 * Math.floor(Math.random() * 2),
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
  ctx.fillStyle = "#000000ff";
  ctx.fillRect(5, 5, 210, 90);
  ctx.fillRect(525, 5, 90, 40);
  ctx.fillRect(525, 50, 90, 40);
  ctx.fillRect(5, 100, 590, 290);
  ctx.fillStyle = "#98a7a3ff";
  ctx.fillRect(530, 10, 65, 30);
  ctx.fillRect(530, 55, 65, 30);
  ctx.fillRect(10, 105, 580, 280);
  ctx.fillRect(10, 10, 200, 80);
  ctx.fillStyle = "#7a736fff";
  ctx.fillRect(20, 110, 100, 50);
  ctx.fillRect(132, 110, 100, 50);
  ctx.fillRect(244, 110, 100, 50);
  ctx.fillRect(400, 110, 100, 50);
  ctx.fillRect(20, 230, 100, 50);
  ctx.fillRect(132, 230, 100, 50);
  ctx.fillRect(244, 230, 100, 50);
  ctx.fillRect(400, 230, 100, 50);
  ctx.font = "bold 50px Georgia";
  ctx.fillStyle = "#000000ff";
  ctx.fillText("Shop", 40, 65);
  ctx.font = "bold 20px Georgia";
  ctx.fillText("Play", 540, 75);
  ctx.fillText("Exit", 540, 35);
  if (maxhp == 180) ctx.fillText("Max", 25, 140);
  else ctx.fillText("+hp $" + (Math.floor(maxhp / 10) + 3), 25, 140);
  if (upPunch == 10) ctx.fillText("Max", 140, 140);
  else ctx.fillText("Chop$" + (2 * upPunch + 3), 140, 140);
  if (upGun == 12) ctx.fillText("Max", 255, 140);
  else ctx.fillText("Gun $" + (2 * upGun + 5), 255, 140);
  if (upSpell == 12) ctx.fillText("Max", 25, 260);
  else ctx.fillText("Spel$" + (upSpell + 10), 25, 260);
  if (upHeal == 10) ctx.fillText("Max", 140, 260);
  else ctx.fillText("Heal$" + (4 * upHeal + 5), 140, 260);
  if (upSheild) ctx.fillText("Max", 255, 260);
  else ctx.fillText("Bloc$" + 20, 255, 260);
  ctx.fillText("Slot 1", 415, 140);
  ctx.fillText("Slot 2", 415, 260);
  if (attack1 == 0) ctx.fillText("Chop", 415, 180);
  else if (attack1 == 1) ctx.fillText("Gun", 415, 180);
  else if (attack1 == 2) ctx.fillText("Spell", 415, 180);
  else if (attack1 == 3) ctx.fillText("Heal", 415, 180);
  else ctx.fillText("Block", 415, 180);
  if (attack2 == 0) ctx.fillText("Chop", 415, 300);
  else if (attack2 == 1) ctx.fillText("Gun", 415, 300);
  else if (attack2 == 2) ctx.fillText("Spell", 415, 300);
  else if (attack2 == 3) ctx.fillText("Heal", 415, 300);
  else ctx.fillText("Block", 415, 300);
  ctx.fillText("hp : " + maxhp, 30, 180);
  ctx.fillText("lvl: " + upPunch, 145, 180);
  ctx.fillText("lvl: " + upGun, 260, 180);
  ctx.fillText("lvl: " + upSpell, 30, 300);
  ctx.fillText("lvl: " + upHeal, 145, 300);
  ctx.fillText("lvl: " + upSheild, 260, 300);
  ctx.fillText("Gems : " + artifacts, 25, 375);
  ctx.fillText("Select;", 510, 130);
  ctx.fillText("1 chop", 510, 160);
  ctx.fillText("2 gun", 510, 190);
  ctx.fillText("3 spell", 510, 220);
  ctx.fillText("4 heal", 510, 250);
  ctx.fillText("5 block", 510, 280);
  ctx.closePath();
  inmenu = 2;
}

function drawMenu() {
  maxhp = 20;
  attack1 = 0;
  cool1 = 0;
  attack2 = 1;
  cool2 = 0;
  artifacts = 0;
  inmenu = 0;
  dif = 0;
  hp = 20;
  upPunch = 1;
  upGun = 1;
  upSpell = 0;
  upHeal = 0;
  upSheild = 0;
  ctx.beginPath();
  ctx.imageSmoothingEnabled = false;
  for (let y = 0; y < 20; y++) {
    for (let x = 0; x < 30; x++) {
      ctx.drawImage(
        document.getElementById("sprite"),
        20 * Math.floor(Math.random() * 2),
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
  ctx.fillStyle = "#000000ff";
  ctx.fillRect(95, 45, 410, 160);
  ctx.fillRect(145, 245, 310, 100);
  ctx.fillStyle = "#98a7a3ff";
  ctx.fillRect(100, 50, 400, 150);
  ctx.fillRect(150, 250, 300, 90);
  ctx.font = "bold 70px Georgia";
  ctx.fillStyle = "#000000ff";
  ctx.fillText("Dungeon", 130, 140);
  ctx.font = "bold 20px Georgia";
  ctx.fillText("by Maillait", 140, 170);
  ctx.font = "bold 50px Georgia";
  ctx.fillText("Play", 240, 310);
  ctx.closePath();
  inmenu = 1;
}

function victory() {
  alert(
    "You got to the end of the beta!!\nkeep on playing for as long as you wish...\n(all abilities are maxed out)"
  );
  upBlock = 1;
  maxhp = 180;
  upGun = 12;
  upPunch = 10;
  upSpell = 12;
  upHeal = 10;
}

function level() {
  let Px = 0;
  let Py = 0;
  let screen = [];
  let random = [];
  let enemy = [];
  let attack = [];
  let enemies = 0;

  let u = 0;
  let d = 0;
  let l = 0;
  let r = 0;
  let a1 = 0;
  let a2 = 0;

  let error = 0;
  let spawn = 80;
  let dir = 0;

  let block = 0;
  let free = 0;
  let boss = 0;

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
      if (hp <= 0) {
        clearInterval(tick);
        hp = 0;
        artifacts += free;
        if (boss) {
          alert(
            "You got to the end of the beta!!\nkeep on playing for as long as you wish...\n(all abilities are maxed out)"
          );
          upSheild = 1;
          maxhp = 180;
          upGun = 12;
          upPunch = 10;
          upSpell = 12;
          upHeal = 10;
        }
        shop();
      } else {
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
    }
    while (error == 1) {
      error = 0;
      drawDungeon();
    }
    let tenemy = [];
    let tattack = [];
    cool1--;
    cool2--;
    if (!block) {
      if (attack[13 * 25 + 13] > 14) {
        hp -= 5 + dif * 10;
        losthp();
      } else if (attack[13 * 25 + 13] > 9) {
        hp -= 3 + dif * 3;
        losthp();
      } else if (attack[13 * 25 + 13] > 1) {
        hp -= 2 + dif * 2;
        losthp();
      }
    }
    block = 0;
    if (hp) {
      ctx.beginPath();
      if (!(a1 + a2)) {
        if (u && 1 != screen[((Py - 1 + 200) % 200) * 200 + Px]) {
          Py--;
          tu++;
          for (let x = 0; x < 25; x++) {
            for (let y = 0; y < 25; y++) {
              if (y) {
                tenemy[y * 25 + x] = enemy[(y - 1) * 25 + x];
                tattack[y * 25 + x] = attack[(y - 1) * 25 + x];
              } else if (
                y == 0 &&
                Math.random() < 1 / spawn &&
                1 !=
                  screen[
                    ((y + Py + 187) % 200) * 200 + ((x + Px + 187) % 200)
                  ] &&
                enemies < 5 + dif * 5
              ) {
                enemies++;
                if (Math.random() < 1 / 5) {
                  tenemy[y * 25 + x] = 176 + dif * 5;
                } else if (Math.random() < 1 / 2) {
                  tenemy[y * 25 + x] = 95;
                } else if (Math.random() < 1 / 2) {
                  tenemy[y * 25 + x] = 14 + dif * 10;
                } else {
                  tenemy[y * 25 + x] = 54 + dif * 20;
                }
              } else {
                tenemy[y * 25 + x] = 0;
              }
              if (
                1 !=
                screen[((y + Py + 190) % 200) * 200 + ((x + Px + 190) % 200)]
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
                tattack[y * 25 + x] = attack[(y + 1) * 25 + x];
              } else if (
                y == 24 &&
                Math.random() < 1 / spawn &&
                1 !=
                  screen[
                    ((y + Py + 187) % 200) * 200 + ((x + Px + 187) % 200)
                  ] &&
                enemies < 10 + dif * 5
              ) {
                enemies++;
                if (Math.random() < 1 / 5) {
                  tenemy[y * 25 + x] = 176 + dif * 5;
                } else if (Math.random() < 1 / 2) {
                  tenemy[y * 25 + x] = 95;
                } else if (Math.random() < 1 / 2) {
                  tenemy[y * 25 + x] = 14 + dif * 10;
                } else {
                  tenemy[y * 25 + x] = 54 + dif * 20;
                }
              } else {
                tenemy[y * 25 + x] = 0;
              }
              if (
                1 !=
                screen[((y + Py + 190) % 200) * 200 + ((x + Px + 190) % 200)]
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
                tattack[y * 25 + x] = attack[y * 25 + x + 1];
              } else if (
                x == 24 &&
                Math.random() < 1 / spawn &&
                1 !=
                  screen[
                    ((y + Py + 187) % 200) * 200 + ((x + Px + 187) % 200)
                  ] &&
                enemies < 10 + dif * 5
              ) {
                enemies++;
                if (Math.random() < 1 / 5) {
                  tenemy[y * 25 + x] = 176 + dif * 5;
                } else if (Math.random() < 1 / 2) {
                  tenemy[y * 25 + x] = 95;
                } else if (Math.random() < 1 / 2) {
                  tenemy[y * 25 + x] = 14 + dif * 10;
                } else {
                  tenemy[y * 25 + x] = 54 + dif * 20;
                }
              } else {
                tenemy[y * 25 + x] = 0;
              }
              if (
                1 !=
                screen[((y + Py + 190) % 200) * 200 + ((x + Px + 190) % 200)]
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
                tattack[y * 25 + x] = attack[y * 25 + x - 1];
              } else if (
                x == 0 &&
                Math.random() < 1 / spawn &&
                1 !=
                  screen[
                    ((y + Py + 187) % 200) * 200 + ((x + Px + 187) % 200)
                  ] &&
                enemies < 10 + dif * 5
              ) {
                enemies++;
                if (Math.random() < 1 / 5) {
                  tenemy[y * 25 + x] = 176 + dif * 5;
                } else if (Math.random() < 1 / 2) {
                  tenemy[y * 25 + x] = 95;
                } else if (Math.random() < 1 / 2) {
                  tenemy[y * 25 + x] = 14 + dif * 10;
                } else {
                  tenemy[y * 25 + x] = 54 + dif * 20;
                }
              } else {
                tenemy[y * 25 + x] = 0;
              }
              if (
                1 !=
                screen[((y + Py + 190) % 200) * 200 + ((x + Px + 190) % 200)]
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
          dir = 1;
        } else if (td && tl) {
          dir = 5;
        } else if (td && tr) {
          dir = 3;
        } else if (tu) {
          dir = 0;
        } else if (tl) {
          dir = 6;
        } else if (td) {
          dir = 4;
        } else if (tr) {
          dir = 2;
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
        if (screen[Py * 200 + Px] == 3) {
          screen[Py * 200 + Px] = 0;
          artifacts++;
          hp += 3;
          if (hp > maxhp) hp = maxhp;
          losthp();
        }
        if (screen[Py * 200 + Px] == 4) {
          screen[Py * 200 + Px] = 0;
          free++;
          if (free >= 50) dif = 2;
          else if (free >= 20) dif = 1;
          else dif = 0;
          if (free >= 100) {
            free = 100;
            boss = 1;
            hp = 0;
            losthp();
          } else {
            ctx.beginPath();
            ctx.fillStyle = "#000000ff";
            ctx.fillRect(400, 340, 200, 30);
            ctx.fillRect(422, 310, 200, 50);
            ctx.fillStyle = "#11d100ff";
            ctx.fillText("Free:" + free, 430, 340);
            ctx.fillStyle = "#9bb1c48f";
            ctx.fillRect(408, 356, 184, 14);
            ctx.fillStyle = "#c2af09ff";
            ctx.fillRect(410, 358, 180 * (free / 100), 10);
            ctx.closePath();
          }
        }
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
            attack[i] = tattack[i];
            tattack[i] = 0;
            enemy[i] = tenemy[i];
            tenemy[i] = 0;
            if (enemy[i]) enemies++;
          }
        }
      } else {
        if (u && l) {
          dir = 7;
        } else if (u && r) {
          dir = 1;
        } else if (d && l) {
          dir = 5;
        } else if (d && r) {
          dir = 3;
        } else if (u) {
          dir = 0;
        } else if (l) {
          dir = 6;
        } else if (d) {
          dir = 4;
        } else if (r) {
          dir = 2;
        }
        for (let i = 0; i < 625; i++) {
          tattack[i] = 0;
        }
        if (a1 && cool1 <= 0 && !block) {
          if (attack1 == 0 && u + d < 2 && r + l < 2 && u + d + l + r) {
            tattack[(13 - u + d) * 25 + (13 - l + r)] = 1;
            cool1 = 2;
          } else if (attack1 == 1 && u + d < 2 && r + l < 2 && u + d + l + r) {
            if (upGun < 6) {
              cool2 = 3;
            }
            tattack[(13 + d - u) * 25 + (13 + r - l)] = dir + 2;
            if (upGun >= 12) {
              if (u + d == 1 && l + r == 0) {
                tattack[(13 + d - u) * 25 + (12 + r - l)] = dir + 2;
                tattack[(13 + d - u) * 25 + (14 + r - l)] = dir + 2;
              } else if (l + r == 1 && u + d == 0) {
                tattack[(12 + d - u) * 25 + (13 + r - l)] = dir + 2;
                tattack[(14 + d - u) * 25 + (13 + r - l)] = dir + 2;
              } else {
                tattack[13 * 25 + (13 + r - l)] = dir + 2;
                tattack[(13 + d - u) * 25 + 13] = dir + 2;
              }
            }
          } else if (attack1 == 2 && u + d < 2 && r + l < 2 && u + d + l + r) {
            cool1 = 20 - Math.floor(upSpell / 6) * 10;
            for (let i = Math.floor(upSpell / 4) + 1; i > 0; i--) {
              if (i == Math.floor(upSpell / 4) || upSpell < 6) {
                nu = u;
                nd = d;
                nl = l;
                nr = r;
              } else {
                if (Math.random() < 1 / 8) {
                  nu = 1;
                  nd = 0;
                  nl = 1;
                  nr = 0;
                } else if (Math.random() < 1 / 7) {
                  nu = 0;
                  nd = 0;
                  nl = 1;
                  nr = 0;
                } else if (Math.random() < 1 / 6) {
                  nu = 0;
                  nd = 1;
                  nl = 1;
                  nr = 0;
                } else if (Math.random() < 1 / 5) {
                  nu = 0;
                  nd = 1;
                  nl = 0;
                  nr = 0;
                } else if (Math.random() < 1 / 4) {
                  nu = 0;
                  nd = 1;
                  nl = 0;
                  nr = 1;
                } else if (Math.random() < 1 / 3) {
                  nu = 0;
                  nd = 0;
                  nl = 0;
                  nr = 1;
                } else if (Math.random() < 1 / 2) {
                  nu = 1;
                  nd = 0;
                  nl = 0;
                  nr = 1;
                } else {
                  nu = 1;
                  nd = 0;
                  nl = 0;
                  nr = 0;
                }
              }
              tattack[
                (13 + 2 * nd - 2 * nu) * 25 + (13 + 2 * nr - 2 * nl)
              ] = 14;
              if (nu + nd == 1 && nl + nr == 0) {
                tattack[(13 + 3 * nd - 3 * nu) * 25 + (12 + nr - nl)] = 14;
                tattack[(13 + 3 * nd - 3 * nu) * 25 + (14 + nr - nl)] = 14;
                tattack[
                  (13 + 4 * nd - 4 * nu) * 25 + (13 + 4 * nr - 4 * nl)
                ] = 14;
                tattack[
                  (13 + 3 * nd - 3 * nu) * 25 + (13 + 3 * nr - 3 * nl)
                ] = 14;
              } else if (nl + nr == 1 && nu + nd == 0) {
                tattack[(12 + nd - nu) * 25 + (13 + 3 * nr - 3 * nl)] = 14;
                tattack[(14 + nd - nu) * 25 + (13 + 3 * nr - 3 * nl)] = 14;
                tattack[
                  (13 + 3 * nd - 3 * nu) * 25 + (13 + 3 * nr - 3 * nl)
                ] = 14;
                tattack[
                  (13 + 4 * nd - 4 * nu) * 25 + (13 + 4 * nr - 4 * nl)
                ] = 14;
              } else {
                tattack[(13 + nd - nu) * 25 + (13 + 2 * nr - 2 * nl)] = 14;
                tattack[(13 + 2 * nd - 2 * nu) * 25 + (13 + nr - nl)] = 14;
                tattack[
                  (13 + 2 * nd - 2 * nu) * 25 + (13 + 3 * nr - 3 * nl)
                ] = 14;
                tattack[
                  (13 + 3 * nd - 3 * nu) * 25 + (13 + 2 * nr - 2 * nl)
                ] = 14;
              }
            }
          } else if (attack1 == 3) {
            hp += upHeal;
            if (hp > maxhp) hp = maxhp;
            cool1 = 50;
            losthp();
          } else if (attack1 == 4 && upSheild) {
            attack[13 * 25 + 13] = 0;
            attack[14 * 25 + 13] = 0;
            attack[12 * 25 + 13] = 0;
            attack[13 * 25 + 14] = 0;
            attack[13 * 25 + 12] = 0;
            attack[14 * 25 + 14] = 0;
            attack[12 * 25 + 14] = 0;
            attack[14 * 25 + 12] = 0;
            attack[12 * 25 + 12] = 0;
            if (enemy[13 * 25 + 13] < 5) enemy[13 * 25 + 13] = 0;
            block = 1;
          }
        }
        if (a2 && cool2 <= 0 && !block) {
          if (attack2 == 0 && u + d < 2 && r + l < 2 && u + d + l + r) {
            tattack[(13 - u + d) * 25 + (13 - l + r)] = 1;
            cool2 = 20 - Math.floor(upSpell / 6) * 10;
          } else if (attack2 == 1 && u + d < 2 && r + l < 2 && u + d + l + r) {
            if (upGun < 6) {
              cool2 = 3;
            }
            tattack[(13 + d - u) * 25 + (13 + r - l)] = dir + 2;
            if (upGun >= 12) {
              if (u + d == 1 && l + r == 0) {
                tattack[(13 + d - u) * 25 + (12 + r - l)] = dir + 2;
                tattack[(13 + d - u) * 25 + (14 + r - l)] = dir + 2;
              } else if (l + r == 1 && u + d == 0) {
                tattack[(12 + d - u) * 25 + (13 + r - l)] = dir + 2;
                tattack[(14 + d - u) * 25 + (13 + r - l)] = dir + 2;
              } else {
                tattack[13 * 25 + (13 + r - l)] = dir + 2;
                tattack[(13 + d - u) * 25 + 13] = dir + 2;
              }
            }
          } else if (attack2 == 2 && u + d < 2 && r + l < 2 && u + d + l + r) {
            cool2 = 20;
            for (let i = Math.floor(upSpell / 4) + 1; i > 0; i--) {
              if (i == Math.floor(upSpell / 4) || upSpell < 6) {
                nu = u;
                nd = d;
                nl = l;
                nr = r;
              } else {
                if (Math.random() < 1 / 8) {
                  nu = 1;
                  nd = 0;
                  nl = 1;
                  nr = 0;
                } else if (Math.random() < 1 / 7) {
                  nu = 0;
                  nd = 0;
                  nl = 1;
                  nr = 0;
                } else if (Math.random() < 1 / 6) {
                  nu = 0;
                  nd = 1;
                  nl = 1;
                  nr = 0;
                } else if (Math.random() < 1 / 5) {
                  nu = 0;
                  nd = 1;
                  nl = 0;
                  nr = 0;
                } else if (Math.random() < 1 / 4) {
                  nu = 0;
                  nd = 1;
                  nl = 0;
                  nr = 1;
                } else if (Math.random() < 1 / 3) {
                  nu = 0;
                  nd = 0;
                  nl = 0;
                  nr = 1;
                } else if (Math.random() < 1 / 2) {
                  nu = 1;
                  nd = 0;
                  nl = 0;
                  nr = 1;
                } else {
                  nu = 1;
                  nd = 0;
                  nl = 0;
                  nr = 0;
                }
              }
              tattack[
                (13 + 2 * nd - 2 * nu) * 25 + (13 + 2 * nr - 2 * nl)
              ] = 14;
              if (nu + nd == 1 && nl + nr == 0) {
                tattack[(13 + 3 * nd - 3 * nu) * 25 + (12 + nr - nl)] = 14;
                tattack[(13 + 3 * nd - 3 * nu) * 25 + (14 + nr - nl)] = 14;
                tattack[
                  (13 + 4 * nd - 4 * nu) * 25 + (13 + 4 * nr - 4 * nl)
                ] = 14;
                tattack[
                  (13 + 3 * nd - 3 * nu) * 25 + (13 + 3 * nr - 3 * nl)
                ] = 14;
              } else if (nl + nr == 1 && nu + nd == 0) {
                tattack[(12 + nd - nu) * 25 + (13 + 3 * nr - 3 * nl)] = 14;
                tattack[(14 + nd - nu) * 25 + (13 + 3 * nr - 3 * nl)] = 14;
                tattack[
                  (13 + 3 * nd - 3 * nu) * 25 + (13 + 3 * nr - 3 * nl)
                ] = 14;
                tattack[
                  (13 + 4 * nd - 4 * nu) * 25 + (13 + 4 * nr - 4 * nl)
                ] = 14;
              } else {
                tattack[(13 + nd - nu) * 25 + (13 + 2 * nr - 2 * nl)] = 14;
                tattack[(13 + 2 * nd - 2 * nu) * 25 + (13 + nr - nl)] = 14;
                tattack[
                  (13 + 2 * nd - 2 * nu) * 25 + (13 + 3 * nr - 3 * nl)
                ] = 14;
                tattack[
                  (13 + 3 * nd - 3 * nu) * 25 + (13 + 2 * nr - 2 * nl)
                ] = 14;
              }
            }
          } else if (attack2 == 3) {
            hp += upHeal;
            if (hp > maxhp) hp = maxhp;
            cool2 = 50;
            losthp();
          } else if (attack2 == 4 && upSheild) {
            attack[13 * 25 + 13] = 0;
            attack[14 * 25 + 13] = 0;
            attack[12 * 25 + 13] = 0;
            attack[13 * 25 + 14] = 0;
            attack[13 * 25 + 12] = 0;
            attack[14 * 25 + 14] = 0;
            attack[12 * 25 + 14] = 0;
            attack[14 * 25 + 12] = 0;
            attack[12 * 25 + 12] = 0;
            if (enemy[13 * 25 + 13] < 5) enemy[13 * 25 + 13] = 0;
            block = 1;
          }
        }
      }
      for (let y = 0; y < 25; y++) {
        for (let x = 0; x < 25; x++) {
          if (attack[y * 25 + x] > 1 && attack[y * 25 + x] < 10) {
            if (
              attack[y * 25 + x] == 2 &&
              1 !=
                screen[((y + Py + 186) % 200) * 200 + ((x + Px + 187) % 200)] &&
              x > 0 &&
              x < 25
            ) {
              tattack[(y - 1) * 25 + x] = 2;
            } else if (
              attack[y * 25 + x] == 3 &&
              1 !=
                screen[((y + Py + 186) % 200) * 200 + ((x + Px + 188) % 200)] &&
              x > 0 &&
              x < 25
            ) {
              tattack[(y - 1) * 25 + x + 1] = 3;
            } else if (
              attack[y * 25 + x] == 4 &&
              1 !=
                screen[((y + Py + 187) % 200) * 200 + ((x + Px + 188) % 200)] &&
              x > 0 &&
              x < 25
            ) {
              tattack[y * 25 + x + 1] = 4;
            } else if (
              attack[y * 25 + x] == 5 &&
              1 !=
                screen[((y + Py + 188) % 200) * 200 + ((x + Px + 188) % 200)] &&
              x > 0 &&
              x < 25
            ) {
              tattack[(y + 1) * 25 + x + 1] = 5;
            } else if (
              attack[y * 25 + x] == 6 &&
              1 !=
                screen[((y + Py + 188) % 200) * 200 + ((x + Px + 187) % 200)] &&
              x > 0 &&
              x < 25
            ) {
              tattack[(y + 1) * 25 + x] = 6;
            } else if (
              attack[y * 25 + x] == 7 &&
              1 !=
                screen[((y + Py + 188) % 200) * 200 + ((x + Px + 186) % 200)] &&
              x > 0 &&
              x < 25
            ) {
              tattack[(y + 1) * 25 + x - 1] = 7;
            } else if (
              attack[y * 25 + x] == 8 &&
              1 !=
                screen[((y + Py + 187) % 200) * 200 + ((x + Px + 186) % 200)] &&
              x > 0 &&
              x < 25
            ) {
              tattack[y * 25 + x - 1] = 8;
            } else if (
              attack[y * 25 + x] == 9 &&
              1 !=
                screen[((y + Py + 186) % 200) * 200 + ((x + Px + 186) % 200)] &&
              x > 0 &&
              x < 25
            ) {
              tattack[(y - 1) * 25 + x - 1] = 9;
            }
          } else if (attack[y * 25 + x] < 15 && attack[y * 25 + x] > 9) {
            tattack[y * 25 + x] = attack[y * 25 + x] - 1;
            if (tattack[y * 25 + x] < 10) tattack[y * 25 + x] = 0;
          } else if (attack[y * 25 + x] < 19 && attack[y * 25 + x] > 14) {
            tattack[y * 25 + x - 1] = attack[y * 25 + x - 1] - 1;
            if (tattack[y * 25 + x] == 14) tattack[y * 25 + x - 1] = 0;
          }
          let damage = 0;
          if (attack[y * 25 + x] == 1) {
            damage = upPunch * 6;
            if (damage > 60) damage = 60;
          } else if (attack[y * 25 + x] < 10) {
            damage = upGun * 3;
            if (damage > 45) damage = 45;
          } else if (attack[y * 25 + x] < 15) {
            damage = upSpell * 3;
            if (damage > 30) damage = 30;
          }
          if (enemy[y * 25 + x] && attack[y * 25 + x]) {
            tattack[y * 25 + x] = 0;
            if (
              enemy[y * 25 + x] == 1 ||
              enemy[y * 25 + x] == 2 ||
              enemy[y * 25 + x] == 3 ||
              enemy[y * 25 + x] == 4
            ) {
              enemy[y * 25 + x] = 0;
              if (Math.random() < 3 / 5)
                screen[
                  ((y + Py + 187) % 200) * 200 + ((x + Px + 187) % 200)
                ] = 4;
              else if (Math.random() < 1 / 2)
                screen[
                  ((y + Py + 187) % 200) * 200 + ((x + Px + 187) % 200)
                ] = 3;
              else if (Math.random() < 1 / 10)
                screen[
                  ((y + Py + 187) % 200) * 200 + ((x + Px + 187) % 200)
                ] = 2;
            } else if (enemy[y * 25 + x] < 35) {
              if (enemy[y * 25 + x] - damage < 5) {
                enemy[y * 25 + x] = 0;
                if (Math.random() < 3 / 5)
                  screen[
                    ((y + Py + 187) % 200) * 200 + ((x + Px + 187) % 200)
                  ] = 4;
                else if (Math.random() < 1 / 2)
                  screen[
                    ((y + Py + 187) % 200) * 200 + ((x + Px + 187) % 200)
                  ] = 3;
                else if (Math.random() < 1 / 10)
                  screen[
                    ((y + Py + 187) % 200) * 200 + ((x + Px + 187) % 200)
                  ] = 2;
              } else enemy[y * 25 + x] -= damage;
            } else if (enemy[y * 25 + x] < 95) {
              if (enemy[y * 25 + x] - damage < 35) {
                enemy[y * 25 + x] = 0;
                if (Math.random() < 3 / 5)
                  screen[
                    ((y + Py + 187) % 200) * 200 + ((x + Px + 187) % 200)
                  ] = 4;
                else if (Math.random() < 1 / 2)
                  screen[
                    ((y + Py + 187) % 200) * 200 + ((x + Px + 187) % 200)
                  ] = 3;
                else if (Math.random() < 1 / 10)
                  screen[
                    ((y + Py + 187) % 200) * 200 + ((x + Px + 187) % 200)
                  ] = 2;
              } else enemy[y * 25 + x] -= damage;
            } else if (enemy[y * 25 + x] < 157) {
              if (enemy[y * 25 + x] - damage < 97) {
                enemy[y * 25 + x] = 0;
                if (Math.random() < 3 / 5)
                  screen[
                    ((y + Py + 187) % 200) * 200 + ((x + Px + 187) % 200)
                  ] = 4;
                else if (Math.random() < 1 / 2)
                  screen[
                    ((y + Py + 187) % 200) * 200 + ((x + Px + 187) % 200)
                  ] = 3;
                else if (Math.random() < 1 / 10)
                  screen[
                    ((y + Py + 187) % 200) * 200 + ((x + Px + 187) % 200)
                  ] = 2;
              } else enemy[y * 25 + x] -= damage;
            } else if (enemy[y * 25 + x] < 187) {
              if (enemy[y * 25 + x] - damage < 157) {
                enemy[y * 25 + x] = 0;
                if (Math.random() < 3 / 5)
                  screen[
                    ((y + Py + 187) % 200) * 200 + ((x + Px + 187) % 200)
                  ] = 4;
                else if (Math.random() < 1 / 2)
                  screen[
                    ((y + Py + 187) % 200) * 200 + ((x + Px + 187) % 200)
                  ] = 3;
                else if (Math.random() < 1 / 10)
                  screen[
                    ((y + Py + 187) % 200) * 200 + ((x + Px + 187) % 200)
                  ] = 2;
              } else enemy[y * 25 + x] -= damage;
            }
          }
          if (enemy[y * 25 + x] > 0) {
            if (enemy[y * 25 + x] == 1) {
              if (
                x > 13 &&
                y < 13 &&
                1 !=
                  screen[((y + Py + 188) % 200) * 200 + ((x + Px + 186) % 200)]
              )
                if (tenemy[(y + 1) * 25 + x - 1] == 2) tenemy[y * 25 + x] = 96;
                else tenemy[(y + 1) * 25 + x - 1] = 2;
              else if (
                x < 13 &&
                y > 13 &&
                1 !=
                  screen[((y + Py + 186) % 200) * 200 + ((x + Px + 188) % 200)]
              )
                if (tenemy[(y - 1) * 25 + x + 1] == 2) tenemy[y * 25 + x] = 96;
                else tenemy[(y - 1) * 25 + x + 1] = 2;
              else if (
                x < 13 &&
                y < 13 &&
                1 !=
                  screen[((y + Py + 188) % 200) * 200 + ((x + Px + 188) % 200)]
              )
                if (tenemy[(y + 1) * 25 + x + 1] == 2) tenemy[y * 25 + x] = 96;
                else tenemy[(y + 1) * 25 + x + 1] = 2;
              else if (
                x > 13 &&
                y > 13 &&
                1 !=
                  screen[((y + Py + 186) % 200) * 200 + ((x + Px + 186) % 200)]
              )
                if (tenemy[(y - 1) * 25 + x - 1] == 2) tenemy[y * 25 + x] = 96;
                else tenemy[(y - 1) * 25 + x - 1] = 2;
              else if (
                x > 13 &&
                1 !=
                  screen[((y + Py + 187) % 200) * 200 + ((x + Px + 186) % 200)]
              )
                if (tenemy[y * 25 + x - 1] == 2) tenemy[y * 25 + x] = 96;
                else tenemy[y * 25 + x - 1] = 2;
              else if (
                x < 13 &&
                1 !=
                  screen[((y + Py + 187) % 200) * 200 + ((x + Px + 188) % 200)]
              )
                if (tenemy[y * 25 + x + 1] == 2) tenemy[y * 25 + x] = 96;
                else tenemy[y * 25 + x + 1] = 2;
              else if (
                y < 13 &&
                1 !=
                  screen[((y + Py + 188) % 200) * 200 + ((x + Px + 187) % 200)]
              )
                if (tenemy[(y + 1) * 25 + x] == 2) tenemy[y * 25 + x] = 96;
                else tenemy[(y + 1) * 25 + x] = 2;
              else if (
                y > 13 &&
                1 !=
                  screen[((y + Py + 186) % 200) * 200 + ((x + Px + 187) % 200)]
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
            } else if (enemy[y * 25 + x] == 95) {
              if (x < 18 && x > 8 && y < 18 && y > 8) {
                if (Math.random() < 1 / 4) {
                  tenemy[y * 25 + x] = 1;
                } else if (Math.random() < 3 / 5) {
                  tenemy[y * 25 + x] = 14 + dif * 10;
                } else {
                  tenemy[y * 25 + x] = 54 + dif * 20;
                }
              } else {
                tenemy[y * 25 + x] = 95;
              }
            } else if (enemy[y * 25 + x] == 96) {
              tenemy[y * 25 + x] = 0;
            } else if (enemy[y * 25 + x] < 35) {
              if (Math.sqrt((y - 13) * (y - 13) + (x - 13) * (x - 13)) > 9) {
                if (
                  x > 13 &&
                  y < 13 &&
                  1 !=
                    screen[
                      ((y + Py + 188) % 200) * 200 + ((x + Px + 186) % 200)
                    ]
                )
                  tenemy[(y + 1) * 25 + x - 1] = enemy[y * 25 + x];
                else if (
                  x < 12 &&
                  y > 14 &&
                  1 !=
                    screen[
                      ((y + Py + 186) % 200) * 200 + ((x + Px + 188) % 200)
                    ]
                )
                  tenemy[(y - 1) * 25 + x + 1] = enemy[y * 25 + x];
                else if (
                  x < 12 &&
                  y < 12 &&
                  1 !=
                    screen[
                      ((y + Py + 188) % 200) * 200 + ((x + Px + 188) % 200)
                    ]
                )
                  tenemy[(y + 1) * 25 + x + 1] = enemy[y * 25 + x];
                else if (
                  x > 14 &&
                  y > 14 &&
                  1 !=
                    screen[
                      ((y + Py + 186) % 200) * 200 + ((x + Px + 186) % 200)
                    ]
                )
                  tenemy[(y - 1) * 25 + x - 1] = enemy[y * 25 + x];
                else if (
                  x > 14 &&
                  1 !=
                    screen[
                      ((y + Py + 187) % 200) * 200 + ((x + Px + 186) % 200)
                    ]
                )
                  tenemy[y * 25 + x - 1] = enemy[y * 25 + x];
                else if (
                  x < 12 &&
                  1 !=
                    screen[
                      ((y + Py + 187) % 200) * 200 + ((x + Px + 188) % 200)
                    ]
                )
                  tenemy[y * 25 + x + 1] = enemy[y * 25 + x];
                else if (
                  y < 12 &&
                  1 !=
                    screen[
                      ((y + Py + 188) % 200) * 200 + ((x + Px + 187) % 200)
                    ]
                )
                  tenemy[(y + 1) * 25 + x] = enemy[y * 25 + x];
                else if (
                  y > 14 &&
                  1 !=
                    screen[
                      ((y + Py + 186) % 200) * 200 + ((x + Px + 187) % 200)
                    ]
                )
                  tenemy[(y - 1) * 25 + x] = enemy[y * 25 + x];
                else tenemy[y * 25 + x] = enemy[y * 25 + x];
              } else if (
                Math.sqrt((y - 13) * (y - 13) + (x - 13) * (x - 13)) < 4
              ) {
                if (
                  x > 13 &&
                  y < 13 &&
                  1 !=
                    screen[
                      ((y + Py + 186) % 200) * 200 + ((x + Px + 188) % 200)
                    ]
                )
                  tenemy[(y - 1) * 25 + x + 1] = enemy[y * 25 + x];
                else if (
                  x < 13 &&
                  y > 13 &&
                  1 !=
                    screen[
                      ((y + Py + 188) % 200) * 200 + ((x + Px + 186) % 200)
                    ]
                )
                  tenemy[(y + 1) * 25 + x - 1] = enemy[y * 25 + x];
                else if (
                  x < 13 &&
                  y < 13 &&
                  1 !=
                    screen[
                      ((y + Py + 186) % 200) * 200 + ((x + Px + 186) % 200)
                    ]
                )
                  tenemy[(y - 1) * 25 + x - 1] = enemy[y * 25 + x];
                else if (
                  x > 13 &&
                  y > 13 &&
                  1 !=
                    screen[
                      ((y + Py + 188) % 200) * 200 + ((x + Px + 188) % 200)
                    ]
                )
                  tenemy[(y + 1) * 25 + x + 1] = enemy[y * 25 + x];
                else if (
                  x > 13 &&
                  1 !=
                    screen[
                      ((y + Py + 187) % 200) * 200 + ((x + Px + 188) % 200)
                    ]
                )
                  tenemy[y * 25 + x + 1] = enemy[y * 25 + x];
                else if (
                  x < 13 &&
                  1 !=
                    screen[
                      ((y + Py + 187) % 200) * 200 + ((x + Px + 186) % 200)
                    ]
                )
                  tenemy[y * 25 + x - 1] = enemy[y * 25 + x];
                else if (
                  y < 13 &&
                  1 !=
                    screen[
                      ((y + Py + 186) % 200) * 200 + ((x + Px + 187) % 200)
                    ]
                )
                  tenemy[(y - 1) * 25 + x] = enemy[y * 25 + x];
                else if (
                  y > 13 &&
                  1 !=
                    screen[
                      ((y + Py + 188) % 200) * 200 + ((x + Px + 187) % 200)
                    ]
                )
                  tenemy[(y + 1) * 25 + x] = enemy[y * 25 + x];
                else tenemy[y * 25 + x] = enemy[y * 25 + x];
              } else {
                tenemy[y * 25 + x] = enemy[y * 25 + x];
                if (Math.random() < 0.1) {
                  if (
                    x > 13 &&
                    y < 13 &&
                    1 !=
                      screen[
                        ((y + Py + 186) % 200) * 200 + ((x + Px + 188) % 200)
                      ]
                  )
                    tattack[(y + 1) * 25 + x - 1] = 7;
                  else if (
                    x < 13 &&
                    y > 13 &&
                    1 !=
                      screen[
                        ((y + Py + 188) % 200) * 200 + ((x + Px + 186) % 200)
                      ]
                  )
                    tattack[(y - 1) * 25 + x + 1] = 3;
                  else if (
                    x < 13 &&
                    y < 13 &&
                    1 !=
                      screen[
                        ((y + Py + 186) % 200) * 200 + ((x + Px + 186) % 200)
                      ]
                  )
                    tattack[(y + 1) * 25 + x + 1] = 5;
                  else if (
                    x > 13 &&
                    y > 13 &&
                    1 !=
                      screen[
                        ((y + Py + 188) % 200) * 200 + ((x + Px + 188) % 200)
                      ]
                  )
                    tattack[(y - 1) * 25 + x - 1] = 9;
                  else if (
                    x > 13 &&
                    1 !=
                      screen[
                        ((y + Py + 187) % 200) * 200 + ((x + Px + 188) % 200)
                      ]
                  )
                    tattack[y * 25 + x - 1] = 8;
                  else if (
                    x < 13 &&
                    1 !=
                      screen[
                        ((y + Py + 187) % 200) * 200 + ((x + Px + 186) % 200)
                      ]
                  )
                    tattack[y * 25 + x + 1] = 4;
                  else if (
                    y < 13 &&
                    1 !=
                      screen[
                        ((y + Py + 186) % 200) * 200 + ((x + Px + 187) % 200)
                      ]
                  )
                    tattack[(y + 1) * 25 + x] = 6;
                  else if (
                    y > 13 &&
                    1 !=
                      screen[
                        ((y + Py + 188) % 200) * 200 + ((x + Px + 187) % 200)
                      ]
                  )
                    tattack[(y - 1) * 25 + x] = 2;
                }
              }
            } else if (enemy[y * 25 + x] < 95) {
              if (
                x > 13 &&
                y < 13 &&
                1 !=
                  screen[((y + Py + 188) % 200) * 200 + ((x + Px + 186) % 200)]
              )
                if (
                  tenemy[(y + 1) * 25 + x - 1] < 95 &&
                  enemy[(y + 1) * 25 + x - 1] > 34
                )
                  tenemy[y * 25 + x] = 96;
                else tenemy[(y + 1) * 25 + x - 1] = enemy[y * 25 + x];
              else if (
                x < 12 &&
                y > 14 &&
                1 !=
                  screen[((y + Py + 186) % 200) * 200 + ((x + Px + 188) % 200)]
              )
                if (
                  tenemy[(y - 1) * 25 + x + 1] < 95 &&
                  enemy[(y + 1) * 25 + x - 1] > 34
                )
                  tenemy[y * 25 + x] = 96;
                else tenemy[(y - 1) * 25 + x + 1] = enemy[y * 25 + x];
              else if (
                x < 12 &&
                y < 12 &&
                1 !=
                  screen[((y + Py + 188) % 200) * 200 + ((x + Px + 188) % 200)]
              )
                if (
                  tenemy[(y + 1) * 25 + x + 1] < 95 &&
                  enemy[(y + 1) * 25 + x - 1] > 34
                )
                  tenemy[y * 25 + x] = 96;
                else tenemy[(y + 1) * 25 + x + 1] = enemy[y * 25 + x];
              else if (
                x > 14 &&
                y > 14 &&
                1 !=
                  screen[((y + Py + 186) % 200) * 200 + ((x + Px + 186) % 200)]
              )
                if (
                  tenemy[(y - 1) * 25 + x - 1] < 95 &&
                  enemy[(y + 1) * 25 + x - 1] > 34
                )
                  tenemy[y * 25 + x] = 96;
                else tenemy[(y - 1) * 25 + x - 1] = enemy[y * 25 + x];
              else if (
                x > 14 &&
                1 !=
                  screen[((y + Py + 187) % 200) * 200 + ((x + Px + 186) % 200)]
              )
                if (
                  tenemy[y * 25 + x - 1] < 95 &&
                  enemy[(y + 1) * 25 + x - 1] > 34
                )
                  tenemy[y * 25 + x] = 96;
                else tenemy[y * 25 + x - 1] = enemy[y * 25 + x];
              else if (
                x < 12 &&
                1 !=
                  screen[((y + Py + 187) % 200) * 200 + ((x + Px + 188) % 200)]
              )
                if (
                  tenemy[y * 25 + x + 1] < 95 &&
                  enemy[(y + 1) * 25 + x - 1] > 34
                )
                  tenemy[y * 25 + x] = 96;
                else tenemy[y * 25 + x + 1] = enemy[y * 25 + x];
              else if (
                y < 12 &&
                1 !=
                  screen[((y + Py + 188) % 200) * 200 + ((x + Px + 187) % 200)]
              )
                if (
                  tenemy[(y + 1) * 25 + x] < 95 &&
                  enemy[(y + 1) * 25 + x - 1] > 34
                )
                  tenemy[y * 25 + x] = 96;
                else tenemy[(y + 1) * 25 + x] = enemy[y * 25 + x];
              else if (
                y > 14 &&
                1 !=
                  screen[((y + Py + 186) % 200) * 200 + ((x + Px + 187) % 200)]
              )
                if (
                  tenemy[(y - 1) * 25 + x] < 95 &&
                  enemy[(y + 1) * 25 + x - 1] > 34
                )
                  tenemy[y * 25 + x] = 96;
                else tenemy[(y - 1) * 25 + x] = enemy[y * 25 + x];
              else tenemy[y * 25 + x] = enemy[y * 25 + x] + 62;
            } else if (enemy[y * 25 + x] < 157) {
              if (Math.random() < 0.1) {
                tattack[(y + 1) * 25 + x - 1] = 18;
                tattack[(y + 1) * 25 + x] = 18;
                tattack[(y + 1) * 25 + x + 1] = 18;
                tattack[y * 25 + x + 1] = 18;
                tattack[y * 25 + x - 1] = 18;
                tattack[(y - 1) * 25 + x - 1] = 18;
                tattack[(y - 1) * 25 + x + 1] = 18;
                tattack[(y - 1) * 25 + x] = 18;
              } else {
                tenemy[y * 25 + x] = enemy[y * 25 + x];
              }
            } else if (enemy[y * 25 + x] < 187) {
              if (Math.sqrt((y - 13) * (y - 13) + (x - 13) * (x - 13)) > 9) {
                if (
                  x > 13 &&
                  y < 13 &&
                  1 !=
                    screen[
                      ((y + Py + 188) % 200) * 200 + ((x + Px + 186) % 200)
                    ]
                )
                  tenemy[(y + 1) * 25 + x - 1] = enemy[y * 25 + x];
                else if (
                  x < 12 &&
                  y > 14 &&
                  1 !=
                    screen[
                      ((y + Py + 186) % 200) * 200 + ((x + Px + 188) % 200)
                    ]
                )
                  tenemy[(y - 1) * 25 + x + 1] = enemy[y * 25 + x];
                else if (
                  x < 12 &&
                  y < 12 &&
                  1 !=
                    screen[
                      ((y + Py + 188) % 200) * 200 + ((x + Px + 188) % 200)
                    ]
                )
                  tenemy[(y + 1) * 25 + x + 1] = enemy[y * 25 + x];
                else if (
                  x > 14 &&
                  y > 14 &&
                  1 !=
                    screen[
                      ((y + Py + 186) % 200) * 200 + ((x + Px + 186) % 200)
                    ]
                )
                  tenemy[(y - 1) * 25 + x - 1] = enemy[y * 25 + x];
                else if (
                  x > 14 &&
                  1 !=
                    screen[
                      ((y + Py + 187) % 200) * 200 + ((x + Px + 186) % 200)
                    ]
                )
                  tenemy[y * 25 + x - 1] = enemy[y * 25 + x];
                else if (
                  x < 12 &&
                  1 !=
                    screen[
                      ((y + Py + 187) % 200) * 200 + ((x + Px + 188) % 200)
                    ]
                )
                  tenemy[y * 25 + x + 1] = enemy[y * 25 + x];
                else if (
                  y < 12 &&
                  1 !=
                    screen[
                      ((y + Py + 188) % 200) * 200 + ((x + Px + 187) % 200)
                    ]
                )
                  tenemy[(y + 1) * 25 + x] = enemy[y * 25 + x];
                else if (
                  y > 14 &&
                  1 !=
                    screen[
                      ((y + Py + 186) % 200) * 200 + ((x + Px + 187) % 200)
                    ]
                )
                  tenemy[(y - 1) * 25 + x] = enemy[y * 25 + x];
                else tenemy[y * 25 + x] = enemy[y * 25 + x];
              } else if (attack[y * 25 + x]) {
                if (
                  x > 13 &&
                  y < 13 &&
                  1 !=
                    screen[
                      ((y + Py + 186) % 200) * 200 + ((x + Px + 188) % 200)
                    ]
                )
                  tenemy[(y - 1) * 25 + x + 1] = enemy[y * 25 + x];
                else if (
                  x < 13 &&
                  y > 13 &&
                  1 !=
                    screen[
                      ((y + Py + 188) % 200) * 200 + ((x + Px + 186) % 200)
                    ]
                )
                  tenemy[(y + 1) * 25 + x - 1] = enemy[y * 25 + x];
                else if (
                  x < 13 &&
                  y < 13 &&
                  1 !=
                    screen[
                      ((y + Py + 186) % 200) * 200 + ((x + Px + 186) % 200)
                    ]
                )
                  tenemy[(y - 1) * 25 + x - 1] = enemy[y * 25 + x];
                else if (
                  x > 13 &&
                  y > 13 &&
                  1 !=
                    screen[
                      ((y + Py + 188) % 200) * 200 + ((x + Px + 188) % 200)
                    ]
                )
                  tenemy[(y + 1) * 25 + x + 1] = enemy[y * 25 + x];
                else if (
                  x > 13 &&
                  1 !=
                    screen[
                      ((y + Py + 187) % 200) * 200 + ((x + Px + 188) % 200)
                    ]
                )
                  tenemy[y * 25 + x + 1] = enemy[y * 25 + x];
                else if (
                  x < 13 &&
                  1 !=
                    screen[
                      ((y + Py + 187) % 200) * 200 + ((x + Px + 186) % 200)
                    ]
                )
                  tenemy[y * 25 + x - 1] = enemy[y * 25 + x];
                else if (
                  y < 13 &&
                  1 !=
                    screen[
                      ((y + Py + 186) % 200) * 200 + ((x + Px + 187) % 200)
                    ]
                )
                  tenemy[(y - 1) * 25 + x] = enemy[y * 25 + x];
                else if (
                  y > 13 &&
                  1 !=
                    screen[
                      ((y + Py + 188) % 200) * 200 + ((x + Px + 187) % 200)
                    ]
                )
                  tenemy[(y + 1) * 25 + x] = enemy[y * 25 + x];
                else tenemy[y * 25 + x] = enemy[y * 25 + x];
              } else {
                tenemy[y * 25 + x] = enemy[y * 25 + x];
                if (Math.random() < 0.05) {
                  let nx = 0;
                  let ny = 0;
                  if (Math.random() < 0.5) {
                    nx = 2 * (Math.round(Math.random()) - 0.5);
                    ny = Math.floor(Math.random() * 3 - 1);
                  } else {
                    ny = 2 * (Math.round(Math.random()) - 0.5);
                    nx = Math.floor(Math.random() * 3 - 1);
                  }
                  while (
                    screen[
                      ((ny + Py + 187) % 200) * 200 + ((nx + Px + 187) % 200)
                    ]
                  ) {
                    if (Math.random() < 0.5) {
                      nx = 2 * (Math.round(Math.random()) - 0.5) + x;
                      ny = Math.floor(Math.random() * 3 - 1) + y;
                    } else {
                      ny = 2 * (Math.round(Math.random()) - 0.5) + y;
                      nx = Math.floor(Math.random() * 3 - 1) + x;
                    }
                  }
                  if (Math.random() < 0.2) tenemy[ny * 25 + nx] = 94;
                  else tenemy[ny * 25 + nx] = Math.round(Math.random()) * 2 + 1;
                }
              }
            }
          }
        }
      }
      enemies = 0;
      for (let i = 0; i < 625; i++) {
        attack[i] = tattack[i];
        tattack[i] = 0;
        enemy[i] = tenemy[i];
        tenemy[i] = 0;
        if (enemy[i]) enemies++;
      }
      if (hp > 0) draw();
    }
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
          ctx.fillRect(
            ((x + Px + 190) % 200) + 400,
            (y + Py + 190) % 200,
            1,
            1
          );
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
        } else if (
          screen[((y + Py + 190) % 200) * 200 + ((x + Px + 190) % 200)] == 3
        ) {
          ctx.drawImage(
            document.getElementById("sprite"),
            100,
            0,
            20,
            20,
            20 * x,
            20 * y,
            20,
            20
          );
        } else if (
          screen[((y + Py + 190) % 200) * 200 + ((x + Px + 190) % 200)] == 4
        ) {
          ctx.drawImage(
            document.getElementById("sprite"),
            120,
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
            if (
              screen[((y + Py + 190) % 200) * 200 + ((x + Px + 190) % 200)] == 0
            )
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
          } else if (enemy[(y + 3) * 25 + (x + 3)] < 157) {
            ctx.drawImage(
              document.getElementById("sprite"),
              140,
              40,
              20,
              20,
              20 * x,
              20 * y,
              20,
              20
            );
          } else if (enemy[(y + 3) * 25 + (x + 3)] < 187) {
            ctx.drawImage(
              document.getElementById("sprite"),
              0,
              60,
              20,
              20,
              20 * x,
              20 * y,
              20,
              20
            );
          } else if (enemy[(y + 3) * 25 + (x + 3)] == 187) {
            ctx.drawImage(
              document.getElementById("sprite"),
              20,
              60,
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
        if (block && y > 8 && x > 8 && y < 12 && x < 12) {
          ctx.fillStyle = "#32dbf163";
          ctx.fillRect(20 * x, 20 * y, 20, 20);
        } else if (attack[(y + 3) * 25 + (x + 3)]) {
          ctx.fillStyle = "#b6050563";
          ctx.fillRect(20 * x, 20 * y, 20, 20);
        }
      }
    }
    if (dif == 2) {
      ctx.fillStyle = "#0000004b";
      ctx.fillRect(0, 0, 400, 400);
    } else if (dif == 1) {
      ctx.fillStyle = "#0000001a";
      ctx.fillRect(0, 0, 400, 400);
    } else {
      ctx.fillStyle = "#b3b2b204";
      ctx.fillRect(0, 0, 400, 400);
    }
    ctx.closePath();
  }
}
