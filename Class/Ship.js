class Ship {
    constructor (){
    this.node = document.createElement("img");
    this.node.src = "./resources/img/ShipImg.jpg";
    this.node.classList.add("ShipImg")
    gameBoxNode.append(this.node);

    this.w = 80; //weight
    this.h = 20; //heigth
    this.x = 7; // posicion eje x (desde la derecha)
    this.y = 11; // posicion eje y (desde la arriba)
    this.acoplado = true;
    this.tropas = 10

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.left = `${this.x}%`;
    this.node.style.top = `${this.y}%`;


    }




    //funciones:

    // moverNave = () => {}

    //rellenarBarracas
    //desembarcarEnPlaneta
    //retirada


}