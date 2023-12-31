class Ship {
  constructor() {
    this.node = document.createElement("div");
    this.node.classList.add("ShipImgPlayer");
    gameBoxNode.append(this.node);
    this.coor = [this.x, this.y];
    this.target;
    this.isAttacking = false;
    this.isReloading = false;
    this.alcanceMaximo = 700;
    this.owner = "player";
    this.acoplado = false;
    this.tropas = 400;
    this.shipSpeed = 2;
    this.textoInterno = `${this.tropas}`;
    this.ownColorRGB = "35, 238, 133";

    this.w = 120; //weight
    this.h = 45; //heigth
    this.x = 50; // posicion eje x (desde la derecha)
    this.y = 340; // posicion eje y (desde la arriba)

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
    this.node.style.borderRadius = "1000px";
  }

  //funciones:

  setTargetDistance = (target) => {
    let distance = 0;
    if (target.x > this.x) {
      distance += target.x - this.x;
    }
    if (target.x < this.x) {
      distance += this.x - target.x;
    }
    if (target.y > this.y) {
      distance += target.y - this.y;
    }
    if (target.y < this.y) {
      distance += this.y - target.y;
    }
    return distance;
  };

  moverNave = (target) => {
    if (!this.isAttacking && !this.isReloading) {
      if (
        (this.x === target.x && this.y === target.y) ||
        (this.x - 1 === target.x && this.y === target.y) ||
        (this.x === target.x && this.y - 1 === target.y) ||
        (this.x + 1 === target.x && this.y === target.y) ||
        (this.x === target.x && this.y + 1 === target.y) ||
        (this.x + 1 === target.x && this.y + 1 === target.y) ||
        (this.x - 1 === target.x && this.y - 1 === target.y) ||
        (this.x === target.x && this.y === target.y)
      ) {
        this.acoplado = true;
        return target;
      } else {
        this.acoplado = false;
        if (target.x > this.x) {
          this.x += this.shipSpeed;
        }
        if (target.x < this.x) {
          this.x -= this.shipSpeed;
        }
        if (target.y > this.y) {
          this.y += this.shipSpeed;
        }
        if (target.y < this.y) {
          this.y -= this.shipSpeed;
        }
        this.node.style.left = `${this.x}px`;
        this.node.style.top = `${this.y}px`;
      }
    }
  };

  actualizarTextoInterno = () => {
    this.node.innerText = this.tropas;
    this.coor = [this.x, this.y];
  };

  atacarPlaneta = (target) => {
    if (target.owner !== this.owner && this.acoplado) {
      if (target.tropas > 0 && this.tropas > 0) {
        this.isAttacking = true;
        this.isReloading = false;

        target.tropas--;
        this.tropas--;
        target.node.style.boxShadow = `inset 0 0 0 ${
          target.tropas / 5
        }px rgba(184, 19, 19, 0.6)`;
      }
      if (target.tropas > 0 && this.tropas <= 0) {
        target.node.style.boxShadow = `inset 0 0 0 ${0}px rgba(184, 19, 19, 0.6)`;
        this.isAttacking = false;
      }
      if (target.tropas <= 0 && this.tropas > 0) {
        if (target.canChange){target.owner = this.owner;}
        this.isAttacking = false;
      }
    }
    if (target.owner === this.owner && this.acoplado && target.tropas > 0) {
      target.tropas--;
      this.tropas++;
      this.isAttacking = false;
      this.isReloading = true;
      this.node.style.boxShadow = `inset 0 0 0 ${this.tropas % 20}px rgba(${
        this.ownColorRGB}, 0.6)`;
    }
    if (target.owner === this.owner && this.acoplado && target.tropas <= 0) {
      this.isAttacking = false;
      this.isReloading = false;
      this.node.style.boxShadow = `inset 0 0 0 ${0}px rgba(184, 19, 19, 0.6)`;
    }
  };
}
