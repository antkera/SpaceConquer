
//Nodos
const startButtonNode = document.querySelector("#start-btn");
// let planet1node;
 let planet1node;
const gameBoxNode = document.querySelector("#gameSection")
const homePageNode = document.querySelector("#homePage")
console.log(homePageNode);

const startGame = () => {
    game = new Game();
    gameBoxNode.style.display = "flex"
    homePageNode.style.display = "none"
    game.gameLoop();
    // console.log("estoy en la funcion startGame");
    
  };

 const backHome = () => {
    game.gameOver()

    
  }



  const decirHola = () => {console.log("hola");}


//   addEventListener--------------

startButtonNode.addEventListener("click", startGame);
   
     
planet1node.addEventListener("click", decirHola);
document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      backHome();


      
    }
  });
