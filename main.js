//Nodos
const startButtonNode = document.querySelector("#start-btn");
// let planet1node;
let planet1node;
const gameBoxNode = document.querySelector("#gameSection");
const homePageNode = document.querySelector("#homePage");
// console.log(homePageNode);
let game1;

const startGame = () => {
  game1 = new Game();
  gameBoxNode.style.display = "flex";
  homePageNode.style.display = "none";
  game1.gameLoop();
  // console.log("estoy en la funcion startGame");
};

gameOver = () => {
  game1.isGameOn = false;
  gameBoxNode.style.display = "none";
  homePageNode.style.display = "flex";
};

const decirHola = () => {console.log("hola en main");}

//   addEventListener--------------

startButtonNode.addEventListener("click", startGame);

// planet1node.addEventListener("click", decirHola);

// document.addEventListener("keydown", (event) => {
//   if (event.code === "Space") {
//     decirHola();
//   }
// })

// mainShipLaunch = (planeta , nave) => {
//   nave.moverNave(planet)
// }

