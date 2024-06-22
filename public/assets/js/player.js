var stopBtn = document.getElementById("stopBtn");
var loginbtn = document.getElementById("login_player");
var username = document.getElementById("username");
var gamecode = document.getElementById("gamecode");
var gameStage = document.getElementById("stage");
var gameMainStage = document.getElementById("main_stage");
var amIHost = false;
var totalSpins = 0;
var myUserName = "";
playerNum = 0;
var myUserId = socket.id;
answerTemplate = '<div id="answer_area"><button id="answerA"></button><button id="answerB"></button><button id="answerC"></button></div>';
loginTemplate = '<div id="login_area"><form id="login_form" method="post"><input type="text" name="username" id="username" placeholder="Name" maxlength="10"><span class="error" id="username_error"></span><input type="text" name="gamecode" id="gamecode" placeholder="Game Code" maxlength="5"><span class="error" id="gamecode_error"></span><input type="submit" id="login_player" value="PLAY"></form></div>';
spinTemplate = '<div id="spincount"><span id="counter"></span></div>';
// standbyTemplate = '<div id="standby"><img src="assets/img/logo.png" id="standby_logo"></div>';
// standbyTemplateHostSingle = '<div id="standby"><img src="assets/img/logo.png" id="standby_logo"><button id="playfull">PLAY FULL GAME</button><button id="playbonus">PLAY BONUS ROUND</button></div>';
// standbyTemplateHostMulti = '<div id="standby"><img src="assets/img/logo.png" id="standby_logo"><button id="playfull">PLAY FULL GAME</button><button id="playbonus">PLAY MAIN GAME</button></div>';
buzzerTemplate = '<div id="buzzer"><div id="thebuzzer"></div></div>';
standbyTemplate = '<div id="buzzer"><div id="thebuzzer"></div></div>';
standbyTemplateHostSingle = '<div id="buzzer"><div id="thebuzzer"></div></div>';
standbyTemplateHostMulti = '<div id="buzzer"><div id="thebuzzer"></div></div>';
buzzerStatus = false;
roundType = 0;

/*
stopBtn.addEventListener("click", stopBoard);

function stopBoard(){
	socket.emit('stop board', 'stop');
}
*/


//LOGIN START
loginbtn.addEventListener("click", login);
function login(event){
	loginbtn.blur();
	event.preventDefault();
 	myUserId = socket.id;
	myUserName = document.getElementById("username").value;
	gamecode = document.getElementById("gamecode").value;
	loginInfo = [myUserName, gamecode, myUserId];
	socket.emit('login player', loginInfo);
}
socket.on('standbyGame',function(data) {
	playerNum = data[0];
	gameMainStage.innerHTML = standbyTemplate;
	document.getElementById("playername").innerHTML = myUserName;
});
//LOGIN END
//SHOW BUZZER AND DEACTIVATE
socket.on('showbuzzer',function(data) {
	if(playerNum > 0){
		buzzerStatus = false;
		roundType = data;
		gameMainStage.innerHTML = buzzerTemplate;
	}
});
//ACTIVATE BUZZER
socket.on('activateBuzzers',function(data) {
	if (playerNum > 0){
		deactivateBuzzer();
		if(data.includes(playerNum)){
			activateBuzzer();
		}
	}
});
document.body.onkeyup = function(e){
    if(e.keyCode == 32 && buzzerStatus){
    	buzzin();
    	buzzerStatus = false;
    }
}
function activateBuzzer(){
	document.getElementById("thebuzzer").addEventListener("click", buzzin);
	document.getElementById("thebuzzer").className = "active";
	buzzerStatus = true;
}
function deactivateBuzzer(){
	document.getElementById("thebuzzer").removeEventListener("click", buzzin);
	document.getElementById("thebuzzer").className = "";
	buzzerStatus = false;
}
function buzzin(){
	if(buzzerStatus){
		if(roundType == 0){
			socket.emit('question buzzin', [myUserId,playerNum]);
		}
		if(roundType == 1 || roundType == 2 || roundType == 3 || roundType == 4){
			socket.emit('stop board', 'stop');
			deactivateBuzzer();
		}
	}
}



//OLD

/*
document.body.onkeydown = function(e){
	if(e.keyCode == 32){
		socket.emit('stop board', 'stop');
	}
}
*/

socket.on('loginError',function(data) {
	if (data == 1){
		document.getElementById("username_error").innerHTML = "Name used. Please choose a different name.";
		document.getElementById("gamecode_error").innerHTML = "";
	}
	if (data == 2){
		document.getElementById("username_error").innerHTML = "";
		document.getElementById("gamecode_error").innerHTML = "Incorrect game code. Please try again.";
	}
	if (data == 3){
		document.getElementById("username_error").innerHTML = "Name used. Please choose a different name.";
		document.getElementById("gamecode_error").innerHTML = "Incorrect game code. Please try again.";
	}
	if (data == 4){
		document.getElementById("username_error").innerHTML = "";
		document.getElementById("gamecode_error").innerHTML = "Game is full. Please try again or reload.";
	}
});

socket.on('loginSuccessful',function(data) {
	if (myUserName == data[0]){
		if (data[2] == 1){
			amIHost = true;
		}
	 	myUserName = data[0];
// 		myUserId = data[1];
		document.getElementById("playername").innerHTML = myUserName;
		gameMainStage.innerHtml = "";
		if (amIHost){
			gameMainStage.innerHTML = standbyTemplateHostSingle;
			document.getElementById("playfull").addEventListener("click", playFullGame);
		} else {
			gameMainStage.innerHTML = standbyTemplate;
		}
	}
	if (amIHost){
		if (data[2] > 1){
			gameMainStage.innerHTML = standbyTemplateHostMulti;
			document.getElementById("playfull").addEventListener("click", playFullGame);
		}
	}
});

function playFullGame(){
	if (amIHost){
		document.getElementById("playfull").removeEventListener("click", playFullGame);
		socket.emit('start game', 1);
	}
}

socket.on('loadTheGame',function(typeGame) {
	if (typeGame == 1){
		loadBlankAnswers();
	}
});

function loadBlankAnswers(){
	answerChosen = 0;
	gameMainStage.innerHTML = answerTemplate + spinTemplate;
	buttonA = document.getElementById("answerA");
	buttonB = document.getElementById("answerB");
	buttonC = document.getElementById("answerC");
	spinCounter = document.getElementById("counter");
	spinCounter.innerHTML = totalSpins;
}

function theboardStopped(){
// 	alert("STOP");
}

socket.on('clientSendQuestion',function(data) {
	loadBlankAnswers();
	setTimeout(function(){
		haveAnswered = false;
		buttonA.innerHTML = data['answers'][0][1];
		buttonB.innerHTML = data['answers'][0][2];
		buttonC.innerHTML = data['answers'][0][3];
		buttonA.addEventListener("click", answerA);
		buttonB.addEventListener("click", answerB);
		buttonC.addEventListener("click", answerC);
	}, data['timing'][0][1]);
	setTimeout(function(){
		if (haveAnswered == false){
			buttonA.removeEventListener("click", answerA);
			buttonB.removeEventListener("click", answerB);
			buttonC.removeEventListener("click", answerC);
			buttonA.className = 'wrong';
			buttonB.className = 'wrong';
			buttonC.className = 'wrong';
		}
	}, data['timing'][0][1] + 5000);
});

function answerA(){answerQuestion(1);buttonA.className = 'active';haveAnswered = true;}
function answerB(){answerQuestion(2);buttonB.className = 'active';haveAnswered = true;}
function answerC(){answerQuestion(3);buttonC.className = 'active';haveAnswered = true;}

function answerQuestion(choice){
	buttonA.removeEventListener("click", answerA);
	buttonB.removeEventListener("click", answerB);
	buttonC.removeEventListener("click", answerC);
	answerChosen = choice;
	socket.emit('transmit answer', [answerChosen,myUserName,gamecode,myUserId]);
}

//AWARD SPINS
socket.on('awardSpins',function(data) {
	if (data[0] == answerChosen){
		if (data[1] == myUserId){
			spinsAwarded = 3;
		} else {
			spinsAwarded = 1;
		}
		totalSpins += spinsAwarded;
		document.getElementById("counter").innerHTML = totalSpins;
	} else {
		spinsAwarded = 0;
		if (answerChosen !== 0){
			if (answerChosen == 1){wrongButton = document.getElementById("answerA");}
			if (answerChosen == 2){wrongButton = document.getElementById("answerB");}
			if (answerChosen == 3){wrongButton = document.getElementById("answerC");}
			wrongButton.className = 'wrong';
		}
	}
	if (data[0] == 1){rightButton = document.getElementById("answerA");}
	if (data[0] == 2){rightButton = document.getElementById("answerB");}
	if (data[0] == 3){rightButton = document.getElementById("answerC");}
	rightButton.className = 'correct';
	
});