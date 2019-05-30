let Manager = {
  setGameStart: function(classType) {
    this.resetPlayer(classType);
    this.setPreFight();
  },
  resetPlayer: function(classType) {
    switch (classType) {
      case "Amazonia":
        player = new Player(classType, 200, 0, 200, 100, 50)
        break;
      case "Aborigone":
        player = new Player(classType, 50, 0, 200, 100, 200)
        break;
      case "African":
        player = new Player(classType, 200, 0, 100, 100, 50)
        break;
      case "Cherokee":
        player = new Player(classType, 150, 0, 100, 100, 100)
        break;
      case "Medievil":
        player = new Player(classType, 100, 0, 20, 100, 150)
        break;
    }
    let getFighter = document.querySelector(".fighter");
    getFighter.innerHTML = '<img src="pic/' + classType.toLowerCase() + '.jpg" class="img-avatarcss"><div><h3>' + classType
    + '</h3><p>Health:'+ player.health +'</p><p>Manner:'+ player.manner +'</p><p>Strength:'+ player.strength +'</p><p>Agility:'+ player.agility +'</p><p>Speed:'+ player.speed +'</p></div>';
  },
  setPreFight: function(){

  }
}
