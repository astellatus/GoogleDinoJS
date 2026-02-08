// const wantPlay = confirm("Вы хотите начать играть?");
// if (!wantPlay) {
//     document.location.reload();
// }

const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", (event) => {
    if (event.key === "p" || event.key === "з") {
        alert("Пауза!!!");
    } else {
        jump();
    }
});

function jump() {
    if (dino.classList !== "jump") {
        dino.classList.add("jump");
    }
    setTimeout(() => {
        dino.classList.remove("jump");
    }, 300);
}

let isAlive = setInterval(() => {
    let dinoTop = parseInt(
        window.getComputedStyle(dino).getPropertyValue("top"),
    );
    let cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("left"),
    );

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert("ЛОООХХ ТЫ ПРОИГРАЛ!!!");
        document.location.reload();
    }
}, 10);
