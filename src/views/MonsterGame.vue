<template>
  <div class>
    <section class="row">
        <div class="small-6 columns">
            <h1 class="text-center">Sen</h1>
             <h3 class="text-center">Kazanma Sayısı : {{playerWin}}</h3>
            <div class="healthbar">
                <div class="healthbar text-center" style="background-color: green; margin: 0; color: white;" :style="{width:myHealth +'%'}">{{myHealth}}
                </div>
            </div>
        </div>
        <div class="small-6 columns">
            <h1 class="text-center">Canavar</h1>
            <h3 class="text-center">Kazanma Sayısı : {{monsterWin}}</h3>
            <div class="healthbar">
                <div class="healthbar text-center" style="background-color: green; margin: 0; color: white;" :style="{width:monsterHealth +'%'}">{{monsterHealth}}
                </div>
            </div>
        </div>
    </section>
    <section class="row controls" v-if="!isGameActive">
        <div class="small-12 columns" >
            <button id="start-game" @click="startGame" >OYUNA BAŞLA</button>
        </div>
    </section>
    <section class="row controls" v-if="isGameActive">
        <div class="small-12 columns">
            <button id="attack" @click="doAction('attack')">Normal Saldırı</button>
            <button id="special-attack" @click="doAction('spattack')">Özel Saldırı</button>
            <button id="heal" @click="doAction('heal')">Güç Topla</button>
            <button id="give-up" @click="reStart()">Tekrar Başla</button>
        </div>
    </section>
    <section class="row log" v-if="isGameActive">
        <div class="small-12 columns">
            <ul>
                <template v-for="(item,index) in gameHistory">
                   <li :class="{'monster-turn':!item.isPlayer, 'player-turn':item.isPlayer}" :key="index">{{item.text}}</li>
                </template>
            </ul>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
  },
  data: function() {
    return{
      monsterHealth:100,
      myHealth : 100,
      isGameActive: false,
      gameHistory: [],
      monsterWin :0,
      playerWin :0,

    }
  },methods: {
  	startGame (){
  		this.monsterHealth = 100;
  		this.myHealth = 100;
  		this.isGameActive = true;
      this.gameHistory = []
  	},
  	doAction(type){
  		let monsterDemage , myDamage, myHeal
  		monsterDemage = Math.floor(Math.random()*20);
  		this.myHealth -= monsterDemage
  		this.gameHistory.push({
        text:"Yaratık Sana vuruş yaptı. Canın " + monsterDemage + " birim azaldı.",
        isPlayer:false
        })
  		if(type=="attack" ||type=="spattack"){
   			myDamage = Math.floor(Math.random()*20)
  		this.gameHistory.push({
        text:"Sen Yaratıga vuruş yaptın. Canı " + myDamage + " birim azaldı.",
        isPlayer:true
        })
   			this.monsterHealth -= myDamage
  		}else{
   			myHeal= Math.floor(Math.random()*20)
          this.myHealth + myHeal >100 ? this.myHealth=100 : this.myHealth += myHeal
  		this.gameHistory.push({
        text:"Sen Canını " + myHeal + " birim artırdın.",
        isPlayer:true
        })
  		}
      this.checkStatus();
  	},
  	reStart(){
  		this.startGame();
  	},
    checkStatus(){
    if(this.myHealth< 1){
    	alert('Canavar Kazandı!')
      this.isGameActive = false
      this.monsterWin++
    }else if (this.monsterHealth < 1){
      alert('Sen Kazandın!')
      this.isGameActive = false
      this.playerWin++

    }
   }
  }
  }
</script>

<style scoped>
.text-center {
    text-align: center;
}

.healthbar {
    width: 80%;
    height: 40px;
    background-color: #eee;
    margin: auto;
    transition: width 500ms;
}

.controls, .log {
    margin-top: 30px;
    text-align: center;
    padding: 10px;
    border: 1px solid #ccc;
    box-shadow: 0px 3px 6px #ccc;
}

.turn {
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 22px;
}

.log ul {
    list-style: none;
    font-weight: bold;
    text-transform: uppercase;
}

.log ul li {
    margin: 5px;
}

.log ul .player-turn {
    color: blue;
    background-color: #e4e8ff;
}

.log ul .monster-turn {
    color: red;
    background-color: #ffc0c1;
}

button {
    font-size: 20px;
    background-color: #eee;
    padding: 12px;
    box-shadow: 0 1px 1px black;
    margin: 10px;
}

#start-game {
    background-color: #aaffb0;
}

#start-game:hover {
    background-color: #76ff7e;
}

#attack {
    background-color: #ff7367;
}

#attack:hover {
    background-color: #ff3f43;
}

#special-attack {
    background-color: #ffaf4f;
}

#special-attack:hover {
    background-color: #ff9a2b;
}

#heal {
    background-color: #aaffb0;
}

#heal:hover {
    background-color: #76ff7e;
}

#give-up {
    background-color: #ffffff;
}

#give-up:hover {
    background-color: #c7c7c7;
}
</style>
