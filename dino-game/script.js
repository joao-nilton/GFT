const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

let isJumping = false;
let isGameOver = false;
let position = 0;

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if (!isJumping) {
            jump();
        }
    }
}

function jump() {
    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            // Descendo
            clearInterval(upInterval);

            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20);
        } else {
            // Subindo
            position += 20;
            dino.style.bottom = position + 'px';
        }
    }, 1);
}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    if (isGameOver) return;

    cactus.classList.add('cactus');
    background.appendChild(cactus);
    cactus.style.left = cactusPosition + 'px';

    let leftTimer = setInterval(() => {
        if (cactusPosition < -60) {
            // Saiu da tela
            clearInterval(leftTimer);
            background.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            // Game over
            clearInterval(leftTimer);
            isGameOver = true;
            document.body.innerHTML = '<h1 class="game-over">Game Over</h1>';
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 30);

    setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keyup', handleKeyUp);

/* Este código é uma cópia fiel da aula disponibilizada na DIO e GFT */
/*<!--Antes era. Agora quase nem mais sou. -->*/
/*<!--Evoluir sempre! Este é o objetivo. -->*/

/* Na luta tentando evoluir diariamente */
/* Continuando nas preces de cada dia */

/* Cuidado com a ortografia  05-02-2021*/
/* Apocalipse now  06-02-2021*/
/* Not now Apocalipse now  07-02-2021*/