class EnemyShip extends Ship {
    constructor(){
        super()
        this.node.classList.remove("ShipImgPlayer")
        this.node.classList.add("enemyShip") //crear en CSS
        this.x = 700;
        this.y = 700;
        this.shipSpeed = 1


        // IA

        this.target = game1.planetArray[5];// empezamos por planeta natal enemigo

        // this.targetScore = 
        // this.targetDistance = 

    }

    setTargetDistance = () => {
        let distance = 0;
        if (this.target.x > this.x) {
            distance += this.target.x - this.x;
          }
          if (this.target.x < this.x) {
            distance += this.x - this.target.x;
          }
          if (this.target.y > this.y) {
            distance += this.target.y - this.y;
          }
          if (this.target.y < this.y) {
            distance += this.y - this.target.y;
          }
    }


    setTarget = () => {
        if (this.acoplado){
            let randomNumber = Math.floor(Math.random() * game1.planetArray.length)
            let target = game1.planetArray[randomNumber];

            console.log(`the target is ${game1.planetArray[randomNumber].tropas}`)
        }
    }


//     activarIA = () => {
//         if (this.acoplado){

//         }
//     }

}