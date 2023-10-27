//Nodos
const startButtonNode = document.querySelector("#start-btn");
let planet1node;
const gameBoxNode = document.querySelector("#gameSection");
const homePageNode = document.querySelector("#homePage");
const gameOverSectionNode = document.querySelector("#gameOverSection");
const gameAudioNode = document.querySelector("#gameAudio");
const soundButtonNode = document.querySelector("#play");
const muteButtonNode = document.querySelector("#pause");
const pauseGameButtonNode = document.querySelector("#pauseGame");
const pausedGameButtonNode = document.querySelector("#pausedGame");
const retryButtonNode = document.querySelector("#retry");
const youWinYouLooseNode = document.querySelector("#gameOverSection h1");
const startAudioNode = document.querySelector("#startAudio");
const winAudioNode = document.querySelector("#winAudio");
const looseAudioNode = document.querySelector("#looseAudio");
const audioArrNode = document.querySelectorAll(".audio");
const tituloNode = document.querySelector(".título");

///////// VOLUMEN -----------------------------------//
audioArrNode.forEach((eachAudio) => {               //
  eachAudio.volume = 0.1;                          //
});// Empieza a sonar haciendo click en el título //
tituloNode.addEventListener(                     //
"click",() => { startAudioNode.play()});        //
///////// -------------------------------------//

const startGame = () => {
  startAudioNode.pause();
  gameAudioNode.play();
  game1 = new Game();
  gameBoxNode.style.display = "flex";
  homePageNode.style.display = "none";
  game1.gameLoop();
};

let game1;
const retryGame = () => {
  looseAudioNode.pause();
  winAudioNode.pause();
  gameAudioNode.currentTime = 0;
  gameOverSectionNode.style.display = "none";
  soundButtonNode.style.display = "none";
  muteButtonNode.style.display = "flex";
  pausedGameButtonNode.style.display = "none";
  pauseGameButtonNode.style.display = "flex";
  startGame();
};
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
  gameAudioNode.play();
  soundButtonNode.style.display = "none";
  muteButtonNode.style.display = "flex";
};
const soundOff = () => {
  gameAudioNode.pause();
  muteButtonNode.style.display = "none";
  soundButtonNode.style.display = "flex";
};

//   addEventListener--------------*************************-------------------------------

startButtonNode.addEventListener("click", startGame);
soundButtonNode.addEventListener("click", soundOn);
muteButtonNode.addEventListener("click", soundOff);
pauseGameButtonNode.addEventListener("click", pauseFunc);
pausedGameButtonNode.addEventListener("click", pausedFunc);
retryButtonNode.addEventListener("click", retryGame);
