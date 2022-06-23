const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");
/**
 * => arrow function
 */

const jump = () => {
    mario.classList.add("jump-mario");

    setTimeout (() => {
        mario.classList.remove("jump-mario");
    }, 500);
};

const loopGame = setInterval(() => {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;
})

document.addEventListener("keydown", jump);