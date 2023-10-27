class EnemyPlanet extends Planet {
  constructor(coor, numFabricas) {
    super(coor, numFabricas);
    this.owner = "enemy";
    this.canChange = false;
  }
}
