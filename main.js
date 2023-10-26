//Nodos
const startButtonNode = document.querySelector("#start-btn");
// let planet1node;
let planet1node;
const gameBoxNode = document.querySelector("#gameSection");
const homePageNode = document.querySelector("#homePage");
const gameOverSectionNode = document.querySelector("#gameOverSection");
const audioNode = document.querySelector("#audio");
const soundButtonNode = document.querySelector("#play");
const muteButtonNode = document.querySelector("#pause");
const pauseGameButtonNode = document.querySelector("#pauseGame");
const pausedGameButtonNode = document.querySelector("#pausedGame");
const retryButtonNode = document.querySelector("#retry");

// console.log(homePageNode);
let game1;

const retryGame = () => {
  audioNode.currentTime = 0;
    gameOverSectionNode.style.display = "none";
    soundButtonNode.style.display = "none";
  muteButtonNode.style.display = "flex";
  pausedGameButtonNode.style.display = "none";
  pauseGameButtonNode.style.display = "flex";
    startGame();
}
const startGame = () => {
  audioNode.play();
  audioNode.volume = 0.3
  game1 = new Game();
  gameBoxNode.style.display = "flex";
  homePageNode.style.display = "none";
  game1.gameLoop();
  // console.log("estoy en la funcion startGame");
};

// gameOver = () => {
//   game1.isGameOn = false;
//   gameBoxNode.style.display = "none";
//   homePageNode.style.display = "flex";
// };

const pauseFunc = () => {

  game1.gameIsPaused = true;
  pauseGameButtonNode.style.display = "none";
  pausedGameButtonNode.style.display = "flex";
};
const pausedFunc = () => {

  game1.gameIsPaused = false;
  game1.gameLoop();
  pausedGameButtonNode.style.display = "none";
  pauseGameButtonNode.style.display = "flex";
};
const soundOn = () => {
  
  audioNode.play();
  soundButtonNode.style.display = "none";
  muteButtonNode.style.display = "flex";
};
const soundOff = () => {
  audioNode.pause();
  muteButtonNode.style.display = "none";
  soundButtonNode.style.display = "flex";
};

//   addEventListener--------------

startButtonNode.addEventListener("click", startGame);
soundButtonNode.addEventListener("click",soundOn);
muteButtonNode.addEventListener("click", soundOff);
pauseGameButtonNode.addEventListener("click", pauseFunc);
pausedGameButtonNode.addEventListener("click", pausedFunc);
retryButtonNode.addEventListener("click", retryGame);


// planet1node.addEventListener("click", decirHola);

// document.addEventListener("keydown", (event) => {
//   if (event.code === "Space") {
//     decirHola();
//   }
// })

// mainShipLaunch = (planeta , nave) => {
//   nave.moverNave(planet)
// }
