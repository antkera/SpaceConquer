class Planet {
  constructor(coor, numFabricas) {
    this.node = document.createElement("div");
    // this.node.src = "./resources/img/planetaHielo1.jpg";
    this.node.classList.add("PlanetImgPlayer");
    gameBoxNode.append(this.node);
    
    this.numFabricas = numFabricas;
    this.maxTropas = 200*this.numFabricas
    this.tropas = this.maxTropas /2;
    this.planetSize = 50 * this.numFabricas;
    // this.textoInterno = `${this.tropas}`
    this.owner = "neutral"
    this.coor = coor;

    this.w = this.planetSize; //weight
    this.h = this.planetSize; //heigth
    this.x = coor[0]; // posicion eje x (desde la derecha)
    this.y = coor[1]; // posicion eje y (desde la arriba)

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
    this.node.addEventListener("click", () => {

      if(!this.returnIsBussy()) {
        this.planetFocus()
      }else{console.log("espera a que se ejecute la accion en el planeta.");}
    })
  }



  // FUNCIONES --------------------*****************-------------------

  
  returnIsBussy = () => {
    if (game1.ship1.isAttacking || game1.ship1.isReloading ){
      return true
    }else {return false}
    
  }
  
  
  planetFocus = () => {
    game1.planetFocused = this
    // game1.ship1.acoplado = false
  };

  fabricarEjercito = () => {
    if (this.tropas <= this.maxTropas)
    this.tropas += 0.1 * this.numFabricas;
  }

  actualizarTextoInterno = () => {
    this.node.innerText = Math.floor(this.tropas);
    if(this.owner === "player"){
      this.node.style.borderColor = "blue"
    } if(this.owner === "neutral"){
      this.node.style.borderColor = "yellow"
    } if(this.owner === "enemy"){
      this.node.style.borderColor = "red"
    }
  }

  receiveAttack = () => {

  }

  
}
