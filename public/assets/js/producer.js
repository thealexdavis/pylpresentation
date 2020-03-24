var p1sync = document.getElementById("p1sync");
var p2sync = document.getElementById("p2sync");
var p3sync = document.getElementById("p3sync");
var champsync = document.getElementById("champsync");
player1Set = false;
player2Set = false;
player3Set = false;
champSet = false;
player1Active = false;
player2Active = false;
player3Active = false;
champActive = false;
canSpin = true;
var spinVar;
clearInterval(spinVar);
var cycleVar;
clearInterval(cycleVar);
currentStop = [];


//SHUFFLE ARRAYS MASTER
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
//SYNC PLAYERS
p1sync.onclick = function(){
	pData = [1,document.getElementsByName("player1name")[0].value,document.getElementsByName("player1score")[0].value,document.getElementsByName("player1earned")[0].value,document.getElementsByName("player1passed")[0].value,document.getElementsByName("player1whammy")[0].value,1];
	sync(pData);
};
p2sync.onclick = function(){
	pData = [2,document.getElementsByName("player2name")[0].value,document.getElementsByName("player2score")[0].value,document.getElementsByName("player2earned")[0].value,document.getElementsByName("player2passed")[0].value,document.getElementsByName("player2whammy")[0].value,1];
	sync(pData);
};
p3sync.onclick = function(){
	pData = [3,document.getElementsByName("player3name")[0].value,document.getElementsByName("player3score")[0].value,document.getElementsByName("player3earned")[0].value,document.getElementsByName("player3passed")[0].value,document.getElementsByName("player3whammy")[0].value,1];
	sync(pData);
};
champsync.onclick = function(){
	pData = [4,document.getElementsByName("champ1name")[0].value,document.getElementsByName("champ1score")[0].value,document.getElementsByName("champ1earned")[0].value,document.getElementsByName("champ1safe")[0].value,parseInt(document.getElementsByName("champ1whammy")[0].value),1];
	sync(pData);
};
function sync(pData){
	socket.emit('sync player', pData);
}

//MAIN GAME PODIUM
document.getElementById("showqpodium").onclick = function(){
	podiumGo(1);
};
document.getElementById("showmoneypodium").onclick = function(){
	podiumGo(2);
};
document.getElementById("hidepodium").onclick = function(){
	podiumGo(3);
};
function podiumGo(q){
	socket.emit('podium toggle', q);
}

//CHECK USERNAME AND KEY
socket.on('checkUsername',function(userSend) {
	if(userSend[1] == document.getElementsByName("player1key")[0].value && !player1Set){
		document.getElementsByName("player1name")[0].value = userSend[0];
		player1Set = true;
		socket.emit('logged in', [1,userSend[2],userSend[0]]);
	}
	if(userSend[1] == document.getElementsByName("player2key")[0].value && !player2Set){
		document.getElementsByName("player2name")[0].value = userSend[0];
		player2Set = true;
		socket.emit('logged in', [2,userSend[2],userSend[0]]);
	}
	if(userSend[1] == document.getElementsByName("player3key")[0].value && !player3Set){
		document.getElementsByName("player3name")[0].value = userSend[0];
		player3Set = true;
		socket.emit('logged in', [3,userSend[2],userSend[0]]);
	}
});

//ACTIVATE BUZZERS
document.getElementById("buzzerson").onclick = function(){
	socket.emit('activate buzzers', [1,2,3]);
};
//DEACTIVATE BUZZERS
document.getElementById("buzzersoff").onclick = function(){
	socket.emit('activate buzzers', [0]);
};
//LOCKOUT TRIGGERED
socket.on('lockoutBuzzer',function(data) {
	player1Active = false;
	player2Active = false;
	player3Active = false;
	if(data[1] == 1){
		document.getElementById("buzzertoggle1").className = "active";
		player1Active = true;
	}
	if(data[1] == 2){
		document.getElementById("buzzertoggle2").className = "active";
		player1Active = true;
	}
	if(data[1] == 3){
		document.getElementById("buzzertoggle3").className = "active";
		player1Active = true;
	}
});
//CLEAR ALL QUESTION
function clearAll(clearType){
	blinkPod([[0],clearType]);
	document.getElementById("buzzertoggle1").className = "";
	document.getElementById("buzzertoggle2").className = "";
	document.getElementById("buzzertoggle3").className = "";
	document.getElementById("theanswer1").className = "";
	document.getElementById("theanswer2").className = "";
	document.getElementById("theanswer3").className = "";
	document.getElementById("theanswer1").value = "";
	document.getElementById("theanswer2").value = "";
	document.getElementById("theanswer3").value = "";
	document.getElementById("thequestion").value = "";
}
//BLINK QUESTION PODIUM
function blinkPod(podNum){
	socket.emit('blink q pod', podNum);
}
//ADD SPINS
function addSpins(data){
	if(data[0] == 1){
		baseSpins = parseInt(document.getElementsByName("player1earned")[0].value);
	}
	if(data[0] == 2){
		baseSpins = parseInt(document.getElementsByName("player2earned")[0].value);
	}
	if(data[0] == 3){
		baseSpins = parseInt(document.getElementsByName("player3earned")[0].value);
	}
	spinCount = baseSpins + parseInt(data[1]);
	if(data[0] == 1){
		document.getElementsByName("player1earned")[0].value = spinCount;
	}
	if(data[0] == 2){
		document.getElementsByName("player2earned")[0].value = spinCount;
	}
	if(data[0] == 3){
		document.getElementsByName("player3earned")[0].value = spinCount;
	}
	socket.emit('add spins', [data[0],spinCount]);
}
//TOGGLE WHAMMIES
function toggleWhammy(data){
	if (data[0] == 4){
		playerNameFull = "champ1";
	} else {
		playerNameFull = "player"+data[0];
	}
	var baseCount = parseInt(document.getElementsByName(playerNameFull+"whammy")[0].value);
	var newCount = baseCount + parseInt(data[1]);
	document.getElementsByName(playerNameFull+"whammy")[0].value = newCount;
 	socket.emit('transmit whammy', [data[0],newCount,data[1]]);
}
//PASS SPINS
function passSpins(data){
	spinsToMove = parseInt(document.getElementsByName("player"+data[0]+"earned")[0].value);
	spinsToCombine = parseInt(document.getElementsByName("player"+data[1]+"passed")[0].value);
	newTotal = spinsToMove + spinsToCombine;
	document.getElementsByName("player"+data[0]+"earned")[0].value = 0;
	document.getElementsByName("player"+data[1]+"passed")[0].value = newTotal;
	socket.emit('pass spins', [[data[0],0],[data[1],newTotal]]);
}
//LOAD QUESTION
function loadQ(num){
	questionLoaded = questionList[num];
	questionAnswers = questionLoaded['answers'];
	answerCorrect = questionAnswers[0];
	document.getElementById("loadq"+num).classList.add("questionload");
	document.getElementById("loadq"+num).classList.add("used");
	document.getElementById("thequestion").value = questionLoaded['question'];
	document.getElementById("theanswer1").value = questionAnswers[0];
	document.getElementById("theanswer2").value = questionAnswers[1];
	document.getElementById("theanswer3").value = questionAnswers[2];
	document.getElementById("theanswer1").className = "right";
	document.getElementById("theanswer2").className = "wrong";
	document.getElementById("theanswer3").className = "wrong";
}
//QUESTION TIME OUT
function timeup(){
	socket.emit('activate buzzers', [0]);
	socket.emit('timeup', 1);
}
//SET ANSWER LAYOUT
function answerLayout(type){
	answerSpots = [1,2,3];
	if(type == 1){
		randomRemove = Math.floor(Math.random() * 2) + 1;
		questionAnswers.splice(randomRemove, 1);
		shuffle(questionAnswers);
		document.getElementById("theanswer1").value = "";
		document.getElementById("theanswer2").value = questionAnswers[0];
		document.getElementById("theanswer3").value = questionAnswers[1];
		document.getElementById("theanswer1").className = "wrong";
		if(questionAnswers[0] == answerCorrect){
			var styleName = "right";
		} else {
			var styleName = "wrong";
		}
		document.getElementById("theanswer2").className = styleName;
		if(questionAnswers[1] == answerCorrect){
			var styleName = "right";
		} else {
			var styleName = "wrong";
		}
		document.getElementById("theanswer3").className = styleName;
	}
	if(type == 2){
		shuffle(questionAnswers);
		document.getElementById("theanswer1").value = questionAnswers[0];
		document.getElementById("theanswer2").value = questionAnswers[1];
		document.getElementById("theanswer3").value = questionAnswers[2];
		if(questionAnswers[0] == answerCorrect){
			var styleName = "right";
		} else {
			var styleName = "wrong";
		}
		document.getElementById("theanswer1").className = styleName;
		if(questionAnswers[1] == answerCorrect){
			var styleName = "right";
		} else {
			var styleName = "wrong";
		}
		document.getElementById("theanswer2").className = styleName;
		if(questionAnswers[2] == answerCorrect){
			var styleName = "right";
		} else {
			var styleName = "wrong";
		}
		document.getElementById("theanswer3").className = styleName;
	}
}
//SEND SCREEN ANSWERS
function sendAnswers(){
	answersSending = [document.getElementById("theanswer1").value,document.getElementById("theanswer2").value,document.getElementById("theanswer3").value,answerCorrect];
	socket.emit('transmit answers', answersSending);
}
function revealAnswer(){
	socket.emit("reveal answer",answerCorrect);
}
//START ROUNDS
function startRound(num){
	if(num == 0){
		socket.emit('podium toggle', 1);
		socket.emit('start round', 0);
		roundNum = 0;
		document.getElementsByClassName('question_control')[0].style.display = 'flex';
 		document.getElementsByClassName('spin_control')[0].style.display = 'none';
	}
	if(num == 1){
		socket.emit('podium toggle', 3);
 		socket.emit('start round', 1);
 		roundNum = 1;
 		currentStop = [];
		loadSingle(currentStop,1,1);
 		document.getElementsByClassName('question_control')[0].style.display = 'none';
 		document.getElementsByClassName('spin_control')[0].style.display = 'flex';
	}
	if(num == 2){
		socket.emit('podium toggle', 3);
 		socket.emit('start round', 2);
 		roundNum = 2;
 		currentStop = [];
		loadSingle(currentStop,1,1);
 		document.getElementsByClassName('question_control')[0].style.display = 'none';
 		document.getElementsByClassName('spin_control')[0].style.display = 'flex';
	}
	if(num == 3){
		document.getElementsByClassName('bonus_control')[0].style.display = 'flex';
		document.getElementsByClassName('question_control')[0].style.display = 'none';
		document.getElementsByClassName('spin_control')[0].style.display = 'none';
		document.getElementsByClassName('the_player')[0].style.display = 'none';
		document.getElementsByClassName('the_player')[1].style.display = 'none';
		document.getElementsByClassName('the_player')[2].style.display = 'none';
		document.getElementsByClassName('the_champion')[0].className = "the_champion";
 		safeScore = 0;
 		champName = "";
 		champNumber = 0;
 		roundNum = 3;
 		if (parseInt(document.getElementsByName("player1score")[0].value) > safeScore){
	 		safeScore = parseInt(document.getElementsByName("player1score")[0].value);
	 		champName = document.getElementsByName("player1name")[0].value;
	 		champNumber = 1;
 		}
 		if (parseInt(document.getElementsByName("player2score")[0].value) > safeScore){
	 		safeScore = parseInt(document.getElementsByName("player2score")[0].value);
	 		champName = document.getElementsByName("player2name")[0].value;
	 		champNumber = 2;
 		}
 		if (parseInt(document.getElementsByName("player3score")[0].value) > safeScore){
	 		safeScore = parseInt(document.getElementsByName("player3score")[0].value);
	 		champName = document.getElementsByName("player3name")[0].value;
	 		champNumber = 3;
 		}
 		socket.emit('start round', 3);
 		document.getElementsByName("champ1name")[0].value = champName;
 		document.getElementsByName("champPlayerNumber")[0].value = champNumber;
 		document.getElementsByName("champ1safe")[0].value = safeScore;
	}
}
//ACTIVATE PLAYER BUZZER
function activateBuzzer(playerNum){
	bonusToggles = false;
	if(playerNum == 4){
		bonusToggles = true;
		playerNum = parseInt(document.getElementsByName("champPlayerNumber")[0].value);
	}
	if(playerNum == 1){
		if(player1Active == false){
			player1Active = true;
			socket.emit('activate buzzers', [1]);
			if(bonusToggles){
				document.getElementById("buzzertogglechamp").className = "active";
			} else {
				document.getElementById("buzzertoggle1").className = "active";
			}
		} else if(player1Active == true){
			player1Active = false;
			socket.emit('activate buzzers', [0]);
			if(bonusToggles){
				document.getElementById("buzzertogglechamp").className = "";
			} else {
				document.getElementById("buzzertoggle1").className = "";
			}
		}
	}
	if(playerNum == 2){
		if(player2Active == false){
			player2Active = true;
			socket.emit('activate buzzers', [2]);
			if(bonusToggles){
				document.getElementById("buzzertogglechamp").className = "active";
			} else {
				document.getElementById("buzzertoggle2").className = "active";
			}
		} else if(player2Active == true){
			player2Active = false;
			socket.emit('activate buzzers', [0]);
			if(bonusToggles){
				document.getElementById("buzzertogglechamp").className = "";
			} else {
				document.getElementById("buzzertoggle2").className = "";
			}
		}
	}
	if(playerNum == 3){
		if(player3Active == false){
			player3Active = true;
			socket.emit('activate buzzers', [3]);
			if(bonusToggles){
				document.getElementById("buzzertogglechamp").className = "active";
			} else {
				document.getElementById("buzzertoggle3").className = "active";
			}
		} else if(player3Active == true){
			player3Active = false;
			socket.emit('activate buzzers', [0]);
			if(bonusToggles){
				document.getElementById("buzzertogglechamp").className = "";
			} else {
				document.getElementById("buzzertoggle3").className = "";
			}
		}
	}
}
//START SPIN
function startSpin(){
	socket.emit('start board', 'start');
	podiumGo(3);
	spinTimer();
	cycleTimer();
	if(roundNum == 3){
		socket.emit('display bg', 3);
	}
}
//END SPIN
function endSpin(){
	socket.emit('stop board', 'stop');
	clearInterval(spinVar);
	clearInterval(cycleVar);
}
//ADD SQUARE
function addSquare(playerNum){
// 	podiumGo(2);
	socket.emit('add square', playerNum);
}
//GET SQUARE VALUE AND PARSE
socket.on('sendSquareInfo',function(squareInfo) {
	var playerNum = squareInfo[0];
	var squareValue = parseInt(squareInfo[1]);
	var squareType = squareInfo[2];
	var squareExtras = squareInfo[3];
	var playerNumberFull = "player"+playerNum;
	if(playerNum == 4){
		playerNumberFull = "champ1"
	}
	if(squareType == "whammy"){
		playerScoreNew = 0;
		toggleWhammy([playerNum,1]);
		if (playerNum !== 4 && parseInt(document.getElementsByName(playerNumberFull+"passed")[0].value) > 0){
			playerPassedSpinsNow = parseInt(document.getElementsByName(playerNumberFull+"passed")[0].value) - 1;
			playerEarnedSpinsNow = parseInt(document.getElementsByName(playerNumberFull+"earned")[0].value);
			document.getElementsByName(playerNumberFull+"earned")[0].value = playerPassedSpinsNow + playerEarnedSpinsNow;
			document.getElementsByName(playerNumberFull+"passed")[0].value = 0;
		} else {
			playerSpinsNew = parseInt(document.getElementsByName(playerNumberFull+"earned")[0].value) - 1;
			document.getElementsByName(playerNumberFull+"earned")[0].value = playerSpinsNew;
		}
	} else if(squareType == "addaone"){
		currentScore = "1"+document.getElementsByName(playerNumberFull+"score")[0].value;
		playerScoreNew = parseInt(currentScore);
	} else if(squareType == "double"){
		playerScoreNew = parseInt(document.getElementsByName(playerNumberFull+"score")[0].value) * 2;
	} else {
		playerScoreNew = parseInt(document.getElementsByName(playerNumberFull+"score")[0].value) + squareValue;
	}
	document.getElementsByName(playerNumberFull+"score")[0].value = playerScoreNew;
	if (squareExtras !== "plus"){
		if (playerNum !== 4 && parseInt(document.getElementsByName(playerNumberFull+"passed")[0].value) > 0){
			if(squareType !== "whammy"){
				playerSpinsNew = parseInt(document.getElementsByName(playerNumberFull+"passed")[0].value) - 1;
				document.getElementsByName(playerNumberFull+"passed")[0].value = playerSpinsNew;
			}
		} else {
			if(squareType !== "whammy"){
				playerSpinsNew = parseInt(document.getElementsByName(playerNumberFull+"earned")[0].value) - 1;
				document.getElementsByName(playerNumberFull+"earned")[0].value = playerSpinsNew;
			}
		}
	} else {
		if (playerNum !== 4 && parseInt(document.getElementsByName(playerNumberFull+"passed")[0].value) > 0){
			playerSpinsNewPassed = parseInt(document.getElementsByName(playerNumberFull+"passed")[0].value) - 1;
			document.getElementsByName(playerNumberFull+"passed")[0].value = playerSpinsNewPassed;
			playerSpinsNewEarned = parseInt(document.getElementsByName(playerNumberFull+"earned")[0].value) + 1;
			document.getElementsByName(playerNumberFull+"earned")[0].value = playerSpinsNewEarned;
		}
	}
	if(playerNum == 4){
		newTotal = parseInt(document.getElementsByName(playerNumberFull+"score")[0].value) + parseInt(document.getElementsByName(playerNumberFull+"safe")[0].value);
		document.getElementsByName(playerNumberFull+"total")[0].value = newTotal;
		pData = [playerNum,document.getElementsByName(playerNumberFull+"name")[0].value,document.getElementsByName(playerNumberFull+"score")[0].value,document.getElementsByName(playerNumberFull+"earned")[0].value,document.getElementsByName(playerNumberFull+"safe")[0].value,document.getElementsByName(playerNumberFull+"whammy")[0].value];
	} else {
		pData = [playerNum,document.getElementsByName(playerNumberFull+"name")[0].value,document.getElementsByName(playerNumberFull+"score")[0].value,document.getElementsByName(playerNumberFull+"earned")[0].value,document.getElementsByName(playerNumberFull+"passed")[0].value,document.getElementsByName(playerNumberFull+"whammy")[0].value];
	}
	sync(pData);
});
//BOARD HAS BEEN STOPPED
socket.on('clientstop',function(data) {
	clearInterval(spinVar);
	clearInterval(cycleVar);
    document.getElementById("buzzertoggle1").className = "";
    document.getElementById("buzzertoggle2").className = "";
    document.getElementById("buzzertoggle3").className = "";
    document.getElementById("buzzertogglechamp").className = "";
    player1Active = false;
    player2Active = false;
    player3Active = false;
    champActive = false;
});
//CHANGE GAME BG
function showBg(bgType){
	socket.emit('display bg', bgType);
}
//CLEAR BOARD LIGHTS
function clearLights(){
	socket.emit('clear board lights', 1);
}
//ACTIVATE STANDBY
function standby(){
	socket.emit('standby mode', 1);
}
//LIGHT ALL SQUARES
function lightall(){
	socket.emit('all squares lit', 1);
}
//TOGGLE BLINK
function toggleBoardBlink(blinkType){
	socket.emit('blink all squares', blinkType);
}
//TRIGGER BLACKOUT
function blackout(){
	socket.emit('trigger blackout', 1);
}
//TRIGGER BLACKOUT
function showOpen(){
	socket.emit('start opening', 1);
}
//CENTER MONITOR
function centerMonitor(centerType){
	if(centerType == 1){
		centralMoney = document.getElementById("moneyshow").value;
	} else {
		centralMoney = 0;
	}
	socket.emit('toggle center monitor', [centerType,centralMoney]);
}
//BONUS ROUND PODIUM TOGGLE
function bonusPodium(podStyle){
	socket.emit('toggle bonus podium', podStyle);
}
//DISPLAY MONEY ON PODIUM
function bonusPod(scoreStyle){
	if(scoreStyle == 1){
		var displayScore = parseInt(document.getElementsByName("champ1safe")[0].value);
	}
	if(scoreStyle == 2){
		var displayScore = parseInt(document.getElementsByName("champ1score")[0].value);
	}
	if(scoreStyle == 3){
		var displayScore = parseInt(document.getElementsByName("champ1safe")[0].value) + parseInt(document.getElementsByName("champ1score")[0].value);
	}
	socket.emit('show bonus money', displayScore);
}
//LOAD BONUS BOARD
function loadBonusBoard(bonusNum){
	if(bonusNum == 1){
		loadedSpins = 5;
	} else if(bonusNum == 2){
		loadedSpins = 4;
	} else {
		loadedSpins = 3;
	}
	setTimeout(function(){ 
		currentStop = [];
		loadSingle(currentStop,1,1);
	}, 4000);
	document.getElementsByName("champ1earned")[0].value = loadedSpins;
	socket.emit('load bonus board', bonusNum);
}
//DISPLAY BONUS ROUND SPINS
function displayBonusSpins(){
	socket.emit('display bonus spins', [loadedSpins,parseInt(document.getElementsByName("champ1score")[0].value)]);
}
//LIGHT MONEY PODIUM
function lightPod(podNum){
	socket.emit('light main pod', podNum);
}
//DIRECTIONAL MOVE SQUARES
function directionMove(directionGo){
	socket.emit('directional square', directionGo);
}
//TRANSMIT MESSAGE TO HOST
function messageTransmit(messageType){
	if(messageType == 1){
		theMsg = document.getElementsByName("message")[0].value;
	} else {
		theMsg = "";
		document.getElementsByName("message")[0].value = "";
	}
	socket.emit('transmit msg', theMsg);
}
//SEND HOST THE QUESTION AND ANSWERS
function sendQuestion(){
	socket.emit('transmit host question', document.getElementById("thequestion").value);
}
//PLAY SFX
function sfx(sfxType){
	socket.emit('trigger sfx', sfxType);
}
//RENDER BOARD ANIMATION
function boardAnim(animType){
	socket.emit('trigger board animation', animType);
}
//BOARD LIGHT CYCLE
function spinTimer() {
	spinSquares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
	usedSquares = [];
	spinVar = setInterval(spinBoard, 250);
	canSpin = true;
}
function spinBoard(){
	if (usedSquares.length > 2){
		addSquare = usedSquares[0];
		usedSquares.shift();
		spinSquares.push(addSquare);
	}
// 	randomLand = Math.floor(Math.random()*spinSquares.length);
	selectedSquare = spinSquares[Math.floor(Math.random()*spinSquares.length)];
	var squareIndex = spinSquares.indexOf(selectedSquare);
	if (squareIndex > -1) {
		spinSquares.splice(squareIndex, 1);
	}
	usedSquares.push(selectedSquare);
	if(canSpin){
		socket.emit('board light bounce', selectedSquare,usedSquares,canSpin);
	}
}
//BOARD SLIDE CYCLE
function cycleTimer(theBoard = false) {
 	boardCycle(currentStop);
    cycleVar = setInterval(boardCycle, 800);
}
function boardCycle(){
	loadSingle(currentStop,1,2);
}
function loadSingle(stops, num, type){
	currentStop = stops;
	if (stops.length < 18){
		stops = [];
		for(x=0;x<18;x++){
			stopNum = Math.floor(Math.random() * 3) + 1;
			stops.push(stopNum);
		}
	} else {
		for(x=0;x<18;x++){
			potentialStops = [1,2,3];
			currentUsed = stops[x] - 1;
			potentialStops.splice(currentUsed, 1);
			stopCheck = Math.floor(Math.random() * 2);
			stopNum = potentialStops[stopCheck];
			stops[x] = stopNum;
		}
	}
	console.log(stops);
	socket.emit('send stops board', stops,type);
}