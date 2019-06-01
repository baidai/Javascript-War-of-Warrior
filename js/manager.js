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
    + '</h3><p class="health-player">Health:'+ player.health +'</p><p>Mana:'+ player.mana +'</p><p>Strength:'+ player.strength +'</p><p>Agility:'+ player.agility +'</p><p>Speed:'+ player.speed +'</p></div>';
  },
  setPreFight: function(){
    let getHeader = document.querySelector(".header");
    let getAction = document.querySelector(".action");
    let getBattlefield = document.querySelector(".battlefield");
    getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
    getAction.innerHTML = '<a href="#" class="btn-prefigth" onclick="Manager.setFight()">Search for Enemy!</a>';
    getBattlefield.style.visibility = 'visible';
  },
  setFight: function(){
    let getHeader = document.querySelector(".header");
    let getAction = document.querySelector(".action");
    let getEnemy = document.querySelector(".enemy");
    // create enemy
    let enemy00 = new Enemy('Cowboy', 100, 0 , 50 , 20, 50);
    let enemy01 = new Enemy('Pirate', 50, 0 , 50 , 70, 40);
    let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
    switch (chooseRandomEnemy){
      case 0:
        enemy = enemy00;
        break;
      case 1:
        enemy = enemy01;
        break;
    }
    //change header
    getHeader.innerHTML ='<p>Task: Choose your move!</p>';
    getAction.innerHTML = '<a href="#" class="btn-prefigth" onclick="PlayerMoves.calcAttack()">Attack!</a>';
    getEnemy.innerHTML = '<img src="pic/' + enemy.enemyType.toLowerCase() + '.jpg" class="img-avatarcss"><div><h3>' + enemy
    + '</h3><p class="health-enemy">Health:'+ enemy.health +'</p><p>Mana:'+ enemy.mana +'</p><p>Strength:'+ enemy.strength +'</p><p>Agility:'+ enemy.agility +'</p><p>Speed:'+ enemy.speed +'</p></div>';
 } 
  } 


//    getEnemy.innerHTML = '<img src="pic/' + enemy.enemyType.toLowerCase() + '.jpg" alt=' "+ enemy.enemyType + "' class="img-avatarcss">
    //<div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health:'+ enemy.health +'</p><p>Manner:'+ enemy.manner +'</p><p>Strength:'+ enemy.strength +'</p><p>Agility:'+ enemy.agility +'</p><p>Speed:'+ enemy.speed +'</p></div>'; 