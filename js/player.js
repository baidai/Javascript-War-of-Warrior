//must create player in global
let player;


function Player(classType, health, mana, strength, agility, speed){
  this.classType = classType;
  this.health = health;
  this.mana = mana;
  this.strength = strength;
  this.agility = agility;
  this.speed = speed;
}

let PlayerMoves = {
	calcAttack: function() {
		//first attacker
		let getPlayerSpeed = player.speed;
		let getEnemySpeed = enemy.speed;
			//player attacks
		let playerAttack = function(){
			let calcBaseDamage;
			if(player.mana >0){
			calcBaseDamage = player.strength * player.mana / 1000
			} else {
			calcBaseDamage = player.strength * player.agility / 1000
			}
			let offsetDamage= Math.floor(Math.random() * 11);  
			// total power coming from player
			let calcOutputDamage = calcBaseDamage + offsetDamage 
			// Number of hits
			let numberOfHits= Math.floor(Math.random() * Math.floor(player.agility * 10) / 2)+1;
			let attackValues = [calcOutputDamage, numberOfHits];
			return attackValues;
			}
		//enemy attacks
		let enemyAttack = function() {
			let calcBaseDamage;
			if(enemy.mana >0){
				calcBaseDamage = enemy.strength * enemy.mana / 1000
			} else {
				calcBaseDamage = enemy.strength * enemy.agility / 1000
			}
			let offsetDamage= Math.floor(Math.random() * 11);  
			// total power coming from player
			let calcOutputDamage = calcBaseDamage + offsetDamage 
			// Number of hits
			let numberOfHits= Math.floor(Math.random() * Math.floor(enemy.agility * 10) / 2)+1;
			let attackValues = [calcOutputDamage, numberOfHits];
			return attackValues;
			}
		let getPlayerHealth = document.querySelector(".health-player")
		let getEnemyHealth = document.querySelector(".health-enemy")
		// initiate attacks
		if (getPlayerSpeed >= getEnemySpeed){
			let playerAttackValues = playerAttack();
			let totalDamage= playerAttackValues[0] * playerAttackValues[1];
			enemy.health = enemy.health - totalDamage;
			alert("You Hit" + playerAttackValues[0] + "Damage" + playerAttackValues[1] + "Times");
			if(enemy.health <= 0){
			alert(player + "Wins!  Refresh browser for another battle.");
			getPlayerHealth.innerHTML = 'Health:' + player.health;
			getEnemyHealth.innerHTML = 'Health: 0';
			}else{
			getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
			// enemy attacks
			let enemyAttackValues = enemyAttack();
			let totalDamage= enemyAttackValues[0] * enemyAttackValues[1];
			player.health = player.health - totalDamage;
			alert("You Hit" + enemyAttackValues[0] + "Damage" + enemyAttackValues[1] + "Times");
			if(player.health <= 0){
				alert(player + "Battle Lost!  Refresh browser for another battle.");
				getPlayerHealth.innerHTML = 'Health: 0';
				getEnemyHealth.innerHTML = 'Health:' + player.health;
				}else{
				getPlayerHealth.innerHTML = 'Health: ' + player.health;

		}

	}
	}
}
}