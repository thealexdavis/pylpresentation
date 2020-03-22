var theBoard= document.getElementById("squares");
var boardSquares=theBoard.querySelectorAll("div");
var boardItems=theBoard.querySelectorAll("div.itemsingle");
var boardItemsFade=theBoard.querySelectorAll("div.itemsinglefade");
var boardCenter= document.getElementById("center");
var centerLogo= document.getElementById("center_logo");
var centerFrame= document.getElementById("center_frame");
var frameContent= document.getElementById("frame_content");
var frameContentText= document.getElementById("content_text");
var totalGui= document.getElementById("dollartotal");
var spinsGui= document.getElementById("spinstotal");
var whammiesGui= document.getElementById("totalWhammies");
var infoGui= document.getElementById("info");
var goldBoard= document.getElementById("goldbg");
var blueBoard= document.getElementById("bluebg");
var redBoard= document.getElementById("redbg");
var textDisplay= document.getElementById("text_ribbon");
var textRibbonContent= document.getElementById("ribbon_content");
var scoreCenter = document.getElementById("scorecenter");
var gameSetupArea = document.getElementById("game_setup");
//PLAYER 1
var player1name= document.getElementById("player1name");
var player1score= document.getElementById("dollartotal1");
var player1passed= document.getElementById("passed1");
var player1center= document.getElementById("center1");
var player1earned= document.getElementById("spins1");
var player1whammy1= document.getElementById("p1w1");
var player1whammy2= document.getElementById("p1w2");
var player1whammy3= document.getElementById("p1w3");
var player1whammy4= document.getElementById("p1w4");
//PLAYER 2
var player2name= document.getElementById("player2name");
var player2score= document.getElementById("dollartotal2");
var player2passed= document.getElementById("passed2");
var player2center= document.getElementById("center2");
var player2earned= document.getElementById("spins2");
var player2whammy1= document.getElementById("p2w1");
var player2whammy2= document.getElementById("p2w2");
var player2whammy3= document.getElementById("p2w3");
var player2whammy4= document.getElementById("p2w4");
//PLAYER 3
var player3name= document.getElementById("player3name");
var player3score= document.getElementById("dollartotal3");
var player3passed= document.getElementById("passed3");
var player3center= document.getElementById("center3");
var player3earned= document.getElementById("spins3");
var player3whammy1= document.getElementById("p3w1");
var player3whammy2= document.getElementById("p3w2");
var player3whammy3= document.getElementById("p3w3");
var player3whammy4= document.getElementById("p3w4");
//CHAMP
var champWhammy1 = document.getElementById("whammy1");
var champWhammy2 = document.getElementById("whammy2");
var champWhammy3 = document.getElementById("whammy3");
var champWhammy4 = document.getElementById("whammy4");
logoShow = true;
var toggleVar;
var toggleVarCorner;
var valueStandby = 0;
canStop = false;
introBtns = true;
bonusRound = false;

//INIT SETUP
//SFX
// boardSpinSfx = document.getElementById("cycleSfx");
whammySfx = document.getElementById("whammySfx");
timeupSfx = document.getElementById("timeupSfx");
dingSfx = document.getElementById("dingSfx");
passSfx = document.getElementById("passSfx");
boingSfx = document.getElementById("boingSfx");
buzzinSfx = document.getElementById("buzzinSfx");
smackSfx = document.getElementById("smackSfx");
boardSpinSfx = document.getElementById("boardLoopSfx");
themeSfx = document.getElementById("themeSfx");
tobigboardSfx = document.getElementById("tobigboardSfx");
stingSfx = document.getElementById("stingSfx");
shorterloopSfx = document.getElementById("shorterloopSfx");
var allowClick = false;
var spinVar;
var cycleVar;
var toggleVar;
var userNames = [];
var userIds = [];
currentStop = [];
activePrizes = [];
possiblePrizes = [];
questionsUsed = [];
usedPrizes = [];
lostPrizes = [];
playerScore = 0;
totalSpins = 5;
arrowPress = "";
prizeCount = 0;
totalWhammies = 0;
roundNum = 1;
currentMult = 0;
activeBoard = roundOneBoard;
loadPrizes(prizeReserveBonus, activePrizes, 1, activePrizes,null,2);
prizesToBoard(activeBoard, activePrizes);
// startOpenScreen();
// startRulesScene();
// 	loadGame();
setTimeout(function(){ 
}, 5000);

function loadGame(){
/*
	document.getElementById("player_holder").className = 'active';
	document.getElementById("player1score").className = "";document.getElementById("player2score").className = "";document.getElementById("player3score").className = "";
	p1spot1.className="";p1spot2.className="";p1spot3.className="";
	p2spot1.className="";p2spot2.className="";p2spot3.className="";
	p3spot1.className="";p3spot2.className="";p3spot3.className="";
	document.getElementById("player1score").classList.add("scorezone");
	document.getElementById("player2score").classList.add("scorezone");
	document.getElementById("player3score").classList.add("scorezone");
	document.getElementById("player1score").classList.add("showspins");
	document.getElementById("player2score").classList.add("showspins");
	document.getElementById("player3score").classList.add("showspins");
	p1spot1.classList.add("spinspot");p1spot2.classList.add("spinspot");p1spot2.classList.add("spins");p1spot2.classList.add("show");p1spot3.classList.add("spinspot");
			p2spot1.classList.add("spinspot");p2spot2.classList.add("spinspot");p2spot2.classList.add("spins");p2spot2.classList.add("show");p2spot3.classList.add("spinspot");
			p3spot1.classList.add("spinspot");p3spot2.classList.add("spinspot");p3spot2.classList.add("spins");p3spot2.classList.add("show");p3spot3.classList.add("spinspot");
*/
	setTimeout(function(){ 
		document.getElementById("squares").className = '';
		document.getElementById("player_holder").className = '';
		document.getElementById("player1score").className = "";
		document.getElementById("player2score").className = "";
		document.getElementById("player3score").className = "";
	}, 100);
	setTimeout(function(){ 
		var thisSquare = document.body.querySelector('.square[data-square="1"]');
		thisSquare.className = '';
		thisSquare.classList.add("square");
		thisSquare.classList.add("active");
	}, 200);
	setTimeout(function(){ 
		var thisSquare = document.body.querySelector('.square[data-square="2"]');
		thisSquare.className = '';
		thisSquare.classList.add("square");
		thisSquare.classList.add("active");
	}, 300);
	setTimeout(function(){ 
		var thisSquare = document.body.querySelector('.square[data-square="3"]');
		thisSquare.className = '';
		thisSquare.classList.add("square");
		thisSquare.classList.add("active");
	}, 400);
	setTimeout(function(){ 
		var thisSquare = document.body.querySelector('.square[data-square="4"]');
		thisSquare.className = '';
		thisSquare.classList.add("square");
		thisSquare.classList.add("active");
	}, 500);
	setTimeout(function(){ 
		var thisSquare = document.body.querySelector('.square[data-square="5"]');
		thisSquare.className = '';
		thisSquare.classList.add("square");
		thisSquare.classList.add("active");
	}, 600);
	setTimeout(function(){ 
		var thisSquare = document.body.querySelector('.square[data-square="6"]');
		thisSquare.className = '';
		thisSquare.classList.add("square");
		thisSquare.classList.add("active");
	}, 700);
	setTimeout(function(){ 
		var thisSquare = document.body.querySelector('.square[data-square="7"]');
		thisSquare.className = '';
		thisSquare.classList.add("square");
		thisSquare.classList.add("active");
	}, 800);
	setTimeout(function(){ 
		var thisSquare = document.body.querySelector('.square[data-square="8"]');
		thisSquare.className = '';
		thisSquare.classList.add("square");
		thisSquare.classList.add("active");
	}, 900);
	setTimeout(function(){ 
		var thisSquare = document.body.querySelector('.square[data-square="9"]');
		thisSquare.className = '';
		thisSquare.classList.add("square");
		thisSquare.classList.add("active");
	}, 1000);
	setTimeout(function(){ 
		var thisSquare = document.body.querySelector('.square[data-square="10"]');
		thisSquare.className = '';
		thisSquare.classList.add("square");
		thisSquare.classList.add("active");
	}, 1100);
	setTimeout(function(){ 
		var thisSquare = document.body.querySelector('.square[data-square="11"]');
		thisSquare.className = '';
		thisSquare.classList.add("square");
		thisSquare.classList.add("active");
	}, 1200);
	setTimeout(function(){ 
		var thisSquare = document.body.querySelector('.square[data-square="12"]');
		thisSquare.className = '';
		thisSquare.classList.add("square");
		thisSquare.classList.add("active");
	}, 1300);
	setTimeout(function(){ 
		var thisSquare = document.body.querySelector('.square[data-square="13"]');
		thisSquare.className = '';
		thisSquare.classList.add("square");
		thisSquare.classList.add("active");
	}, 1400);
	setTimeout(function(){ 
		var thisSquare = document.body.querySelector('.square[data-square="14"]');
		thisSquare.className = '';
		thisSquare.classList.add("square");
		thisSquare.classList.add("active");
	}, 1500);
	setTimeout(function(){ 
		var thisSquare = document.body.querySelector('.square[data-square="15"]');
		thisSquare.className = '';
		thisSquare.classList.add("square");
		thisSquare.classList.add("active");
	}, 1600);
	setTimeout(function(){ 
		var thisSquare = document.body.querySelector('.square[data-square="16"]');
		thisSquare.className = '';
		thisSquare.classList.add("square");
		thisSquare.classList.add("active");
	}, 1700);
	setTimeout(function(){ 
		var thisSquare = document.body.querySelector('.square[data-square="17"]');
		thisSquare.className = '';
		thisSquare.classList.add("square");
		thisSquare.classList.add("active");
	}, 1800);
	setTimeout(function(){ 
		var thisSquare = document.body.querySelector('.square[data-square="18"]');
		thisSquare.className = '';
		thisSquare.classList.add("square");
		thisSquare.classList.add("active");
	}, 1900);
	setTimeout(function(){ 
		document.getElementById("center").className = '';
	}, 2500);
	setTimeout(function(){ 
		document.getElementById("center").className = '';
		document.getElementById("bg").className = '';
		document.getElementById("board_bg").className = '';
		runBoardAnim(2);
	}, 3500);
	setTimeout(function(){ 
		blinkOn = false;
		boardBlinkTimer = setInterval(boardLinkAction, 750);
	}, 3600);
}

function startRulesScene(){
	setTimeout(function(){ 
		textRibbonContent.innerHTML = "<p>You're going to face off against the Whammy over five rounds. At the end of each round you can take whatever money you've made or you can Press Your Luck and play on.</p>";
		textDisplay.className = '';
		textDisplay.className = 'show';
	}, 0);
	setTimeout(function(){ 
		textRibbonContent.className = '';
		textRibbonContent.className = 'show';
	}, 250);
	setTimeout(function(){ 
		textRibbonContent.className = '';
	}, 7000);
	setTimeout(function(){
		textRibbonContent.innerHTML = "";
		textRibbonContent.innerHTML = "<p>The longer you stay in the game, the bigger the money gets...and if you make it to our final round, our Big Bucks Bonanza, one spin can be worth $100,000.</p>";
		textRibbonContent.className = 'show';
	}, 7250);
	setTimeout(function(){ 
		textRibbonContent.className = '';
	}, 15000);
	setTimeout(function(){
		textRibbonContent.innerHTML = "";
		textRibbonContent.innerHTML = "<p>As always there are Whammies out there. If you hit one he takes your bank down to $0. Four Whammies puts you out of the game entirely.</p>";
		textRibbonContent.className = 'show';
	}, 15250);
	setTimeout(function(){ 
		textRibbonContent.className = '';
	}, 22000);
	setTimeout(function(){
		textRibbonContent.innerHTML = "";
		textRibbonContent.innerHTML = "<p>However, if your bank ever reaches $500,000, the game is over...because we are going to bump your winnings up to $1,000,000!</p>";
		textRibbonContent.className = 'show';
	}, 22250);
	setTimeout(function(){
		centerLogo.classList.add("fliptrans");
		centerFrame.classList.add("fliptrans");
		frameContent.classList.add("fliptrans");
		frameContent.classList.add("greenspiralcenter");
		frameContent.classList.add("smaller");
		centerLogo.classList.add("fliphalf");
		var frameText = document.createElement("div");
		frameContent.appendChild(frameText);
		frameText.innerHTML = '<sup>$</sup>1,000,000';
		setTimeout(function(){ 
			centerFrame.classList.add("flipfull");
			frameContent.classList.add("flipfull");
		}, 400);
	}, 23000);
	setTimeout(function(){
		centerFrame.className = '';
		centerFrame.classList.add("fliptrans");
		frameContent.className = '';
		frameContent.classList.add("fliptrans");
		frameContent.classList.add("smaller");
		frameContent.classList.add("greenspiralcenter");
	}, 28000);
	setTimeout(function(){ 
		centerLogo.className = '';
		centerLogo.classList.add("fliptrans");
		frameContent.className = '';
		frameContent.innerHTML = '';
		textRibbonContent.className = '';
		textDisplay.className = '';
	}, 28400);
	setTimeout(function(){ 
		startOpenScreen();
		textRibbonContent.innerHTML = "";
	}, 29000);
}

function startOpenScreen(){
	introBtns = true;
	fillSquare(16, "lightgreen", "intro", 0, 'PLAY GAME', 0, "startgame");
	fillSquare(7, "blue", "intro", 0, 'RULES', 0, "startrules");
/*
	document.getElementById("startrules").addEventListener("click", startRules);
	document.getElementById("startgame").addEventListener("click", startGame);
*/
}

function startRules(){
	if (introBtns){
/*
		document.getElementById("startrules").removeEventListener("click", startRules);
		document.getElementById("startgame").removeEventListener("click", startGame);
*/
// 		introBtns = false;
		resetBoard();
		startRulesScene();
	}
};

function startGame(){
	socket.emit('start game', 'the game is starting');
	if (introBtns){
/*
		document.getElementById("startrules").removeEventListener("click", startRules);
		document.getElementById("startgame").removeEventListener("click", startGame);
*/
// 		introBtns = false;
		resetBoard();
		startQround(1);
// 		startRoundOne();
	} else {
		resetBoard();
		startQround(1);
	}
};

function startQround(r){
	if (r == 1){
		totalQuestions = 3;
	}
	if (r == 2){
		totalQuestions = 4;
	}
	setTimeout(function(){ 
		textRibbonContent.innerHTML = "<p>Before we go to the Big Board, you have to earn spins by answering questions correctly. Buzz in with the right answer on your device.</p>";
		textDisplay.className = '';
		textDisplay.className = 'show';
	}, 1);
	setTimeout(function(){ 
		textRibbonContent.className = '';
		textRibbonContent.className = 'show';
	}, 250);
	setTimeout(function(){ 
		textRibbonContent.className = '';
	}, 5000);
	setTimeout(function(){
		textRibbonContent.innerHTML = "";
		textRibbonContent.innerHTML = "<p>A right answer gives you 1 spin. If you answer first, though, you'll get 3 spins!</p>";
		textRibbonContent.className = 'show';
	}, 5250);
	setTimeout(function(){ 
		textRibbonContent.className = '';
	}, 10000);
	setTimeout(function(){
		textRibbonContent.innerHTML = "";
		textRibbonContent.innerHTML = "<p>Once the choices appear, you'll have five seconds to answer. Here's the first question.</p>";
		textRibbonContent.className = 'show';
	}, 10250);
	setTimeout(function(){ 
		textRibbonContent.className = '';
		loadQuestion(r);
	}, 15000);
}

function loadQuestion(r){
	if (r == 1){
		activeQuestions = questionOneList;
	}
	if (r == 2){
		activeQuestions = questionTwoList;
	}
	var questionCount = Object.keys(activeQuestions).length;
	var questionNumber = Math.floor(Math.random() * questionCount) + 1;
	if(questionsUsed.indexOf(questionNumber) == -1){
		totalQuestions--;
		answersStored = [];
		questionsUsed.push(questionNumber);
		questionSelected = activeQuestions[questionNumber];
 		socket.emit('send question', questionSelected);
 		typePos = 0;
 		typeText =  questionSelected['question'][0][1];
 		typeSpeed = 50;
 		questionSoFar = "";
 		textRibbonContent.className = 'show';
 		textRibbonContent.innerHTML = "";
 		holdRightAnswer = questionSelected['correct'][0][1];
 		typeQuestion();
 		questionTimer = questionSelected['timing'][0][1] + 5000;
 		setTimeout(function(){ 
			endQuestion(questionSelected);
		}, questionTimer);
	} else {
		loadQuestion(r);
	}
}

function typeQuestion() {
	if (typePos < typeText.length) {
	  
		var questionHolder = document.createElement("p");
		questionSoFar += typeText.charAt(typePos);
		var questionNode = document.createTextNode(questionSoFar);
		questionHolder.appendChild(questionNode);
		textRibbonContent.innerHTML = "";
		textRibbonContent.appendChild(questionHolder);
		
    typePos++;
    setTimeout(typeQuestion, typeSpeed);
  	}
}

function endQuestion(q){
	correctAnswer = questionSelected['correct'][0][1];
	setTimeout(function(){ 
		textRibbonContent.className = '';
	}, 1);
	setTimeout(function(){
		textRibbonContent.innerHTML = "";
		textRibbonContent.innerHTML = "<p>Time's up! The correct answer is...</p>";
		textRibbonContent.className = 'show';
	}, 250);
	setTimeout(function(){ 
		textRibbonContent.className = '';
	}, 2750);
	setTimeout(function(){
		textRibbonContent.innerHTML = "";
		textRibbonContent.innerHTML = "<p>"+questionSelected['answers'][0][correctAnswer]+"!</p>";
		textRibbonContent.className = 'show';
		socket.emit('give spins', [correctAnswer,thisGameCode]);
// 		ALL ANSWERS answersStored
	}, 3000);
	setTimeout(function(){
		textRibbonContent.className = '';
	}, 5750);
	setTimeout(function(){
		textRibbonContent.innerHTML = "";
		if (answersStored.length == 0){
			resultsTxt = "No one got that right, so no one earned spins. ";
		}else if (answersStored.length == 1){
			resultsTxt = "Only "+answersStored[0][1]+" got that right and picks up 3 spins! ";
		} else {
			resultsTxt = "";
			for(x=0;x<answersStored.length;x++){
				if (answersStored[x][2] == "yes"){
					spinWords = "was first and picks up 3 spins! "
				} else {
					spinWords = "earns 1 spin. "
				}
				resultsTxt += answersStored[x][1]+" "+spinWords;
			}
		}
		if (totalQuestions > 1){
			resultsTxt += "Here comes your next question. ";
		} else if (totalQuestions == 1){
			resultsTxt += "Here's the last question of the round. ";
		}
		resultsTxt = resultsTxt.substring(0, resultsTxt.length - 1);
		textRibbonContent.innerHTML = "<p>"+resultsTxt+"</p>";
		textRibbonContent.className = 'show';
// 		ALL ANSWERS answersStored
	}, 6000);
	setTimeout(function(){ 
		textRibbonContent.className = '';
		loadQuestion(roundNum);
	}, 9750);
	if (totalQuestions == 0){
		setTimeout(function(){
			textRibbonContent.className = '';
		}, 9750);
		setTimeout(function(){
			textRibbonContent.innerHTML = "";
			textRibbonContent.innerHTML = "<p>That's the end of the question round. It's time to take those spins to the Big Board!</p>";
			textRibbonContent.className = 'show';
	// 		ALL ANSWERS answersStored
		}, 10000);
		setTimeout(function(){
			textRibbonContent.className = '';
			startMainBoard(1);
		}, 13000);
	}
}

function resetBoard(){
	for(var z = 0;z<18;z++){
		boardItems[z].innerHTML = "";
		boardItems[z].className = '';
		boardItems[z].parentNode.removeAttribute("id");
	}
}

function resetLights(){
	for(var z = 1;z<19;z++){
		document.body.querySelector('.square[data-square="'+z+'"]').className = 'square';
	}
}

function startMainBoard(rn){
	setTimeout(function(){ 
		textRibbonContent.className = '';
	}, 1);
	setTimeout(function(){
		textRibbonContent.innerHTML = "";
		textRibbonContent.innerHTML = "<p>Big Bucks in the first round is worth up to $5,000! Use your spis to STOP the board and build your bank!</p>";
		textRibbonContent.className = 'show';
	}, 250);
	setTimeout(function(){ 
		textRibbonContent.className = '';
	}, 3750);
	setTimeout(function(){
		textRibbonContent.innerHTML = "";
		textRibbonContent.innerHTML = "<p>Be careful of the Whammy. He'll take all of your money and leave you with nothing. Land on four and you're out of the game. You can pass your spins to the person in the lead if you're afraid of the Whammy.</p>";
		textRibbonContent.className = 'show';
	}, 4000);
	setTimeout(function(){ 
		textRibbonContent.className = '';
	}, 8750);
	setTimeout(function(){
		textRibbonContent.innerHTML = "";
		textRibbonContent.innerHTML = "<p>The player with the most money at the end of the round gets the advantage of going last in the final round.</p>";
		textRibbonContent.className = 'show';
	}, 9000);
	setTimeout(function(){ 
		textRibbonContent.className = '';
	}, 8750);
	setTimeout(function(){
		textRibbonContent.innerHTML = "";
		textRibbonContent.innerHTML = "<p>We'll start with the player</p>";
		textRibbonContent.className = 'show';
	}, 9000);
}


function startRoundOne(){
	displayCenterMoney(3);
	setTimeout(function(){ 
		textRibbonContent.innerHTML = "<p>Big Bucks in the first round is worth $10,000!</p>";
		textDisplay.className = '';
		textDisplay.className = 'show';
	}, 1500);
	setTimeout(function(){ 
		textRibbonContent.className = '';
		textRibbonContent.className = 'show';
	}, 1750);
	setTimeout(function(){ 
		textRibbonContent.className = '';
	}, 7000);
	setTimeout(function(){
		textRibbonContent.innerHTML = "";
		textRibbonContent.innerHTML = "<p>You've got to make it through "+totalSpins+" spins in the first round. Good luck!</p>";
		scoreCenter.style.display = "block";
		textRibbonContent.className = 'show';
	}, 7250);
	setTimeout(function(){ 
		spinsGui.innerHTML = totalSpins;
	}, 9000);
	setTimeout(function(){ 
		textRibbonContent.className = '';
		textDisplay.className = '';
	}, 12000);
	setTimeout(function(){ 
		spinTimer();
 	 	cycleTimer(activeBoard);
	 	centerFrame.className = '';
	 	frameContent.className = '';
	 	centerLogo.className = '';
		textRibbonContent.innerHTML = "";
	}, 12500);
	
	setTimeout(function(){ 
/*
 	 	spinTimer();
 	 	cycleTimer(activeBoard);
	 	centerFrame.className = '';
	 	frameContent.className = '';
	 	centerLogo.className = '';
*/
	}, 10000);
}

function displayCenterMoney(rn){
	if (rn > 0){
		if (rn == 1){activeBoard = royaleBoardOne; dollarDisplay = '<sup>$</sup>10,000';}
		if (rn == 2){activeBoard = royaleBoardThree; dollarDisplay = '<sup>$</sup>25,000';}
		if (rn == 3){activeBoard = royaleBoardFour; dollarDisplay = '<sup>$</sup>50,000';}
		if (rn == 4){activeBoard = royaleBoardFive; dollarDisplay = '<sup>$</sup>75,000';}
		if (rn == 5){activeBoard = royaleBoardSix; dollarDisplay = '<sup>$</sup>100,000';}
		centerLogo.classList.add("fliptrans");
		centerFrame.classList.add("fliptrans");
		frameContent.classList.add("fliptrans");
		frameContent.classList.add("greenspiralcenter");
		centerLogo.classList.add("fliphalf");
		var frameText = document.createElement("div");
		frameContent.appendChild(frameText);
		if (rn > 6){
			if (rn == 7){
				frameContent.classList.add("smaller");
			}
			frameText.innerHTML = dollarDisplay;
		} else {
			frameText.innerHTML = '<span class="bb">BIG<br>BUCKS</span>';
		}
		setTimeout(function(){ 
			centerFrame.classList.add("flipfull");
			frameContent.classList.add("flipfull");
		}, 400);
		if (rn < 6){
			setTimeout(function(){ 
				frameContent.classList.add("centerburst");
				frameText.innerHTML = dollarDisplay;
			}, 3000);
			setTimeout(function(){ 
				frameContent.classList.add("removeburst");
			}, 3010);
			setTimeout(function(){ 
				loadSingle(activeBoard,currentStop,1,1);
				centerFrame.className = '';
				centerFrame.classList.add("fliptrans");
				frameContent.className = '';
				frameContent.classList.add("fliptrans");
				frameContent.classList.add("greenspiralcenter");
			}, 4000);
			setTimeout(function(){ 
				centerLogo.className = '';
				centerLogo.classList.add("fliptrans");
				frameContent.className = '';
				frameContent.innerHTML = '';
			}, 4400);
		}
	}
}

function displayCenterMoneyMain(amount){
	dollarDisplay = '<sup>$</sup>'+numberWithCommas(amount);
	centerLogo.classList.add("fliptrans");
	centerFrame.classList.add("fliptrans");
	frameContent.classList.add("fliptrans");
	frameContent.classList.add("greenspiralcenter");
	centerLogo.classList.add("fliphalf");
	var frameText = document.createElement("div");
	frameContent.appendChild(frameText);
	frameText.innerHTML = dollarDisplay;
	setTimeout(function(){ 
		centerFrame.classList.add("flipfull");
		frameContent.classList.add("flipfull");
	}, 400);
}

function unflipCenter(){
	centerFrame.className = '';
	centerFrame.classList.add("fliptrans");
	frameContent.className = '';
	frameContent.classList.add("fliptrans");
	frameContent.classList.add("greenspiralcenter");
	setTimeout(function(){ 
		centerLogo.className = '';
		centerLogo.classList.add("fliptrans");
		frameContent.className = '';
		frameContent.innerHTML = '';
	}, 400);
}

function displayCenterPrize(prizeName){
	centerLogo.classList.add("fliptrans");
	centerFrame.classList.add("fliptrans");
	frameContent.classList.add("fliptrans");
	frameContent.classList.add("blue");
	var frameText = document.createElement("h2");
	frameText.appendChild(document.createTextNode(prizeName));
	frameContent.appendChild(frameText);
	setTimeout(function(){
		centerLogo.classList.add("fliphalf");
	}, 0);
	setTimeout(function(){ 
		centerFrame.classList.add("flipfull");
		frameContent.classList.add("flipfull");
	}, 400);
	
	setTimeout(function(){ 
		centerFrame.className = '';
		centerFrame.classList.add("fliptrans");
		frameContent.className = '';
		frameContent.classList.add("fliptrans");
		frameContent.classList.add("blue");
	}, 4000);
	setTimeout(function(){ 
		centerLogo.className = '';
		centerLogo.classList.add("fliptrans");
		frameContent.innerHTML = '';
	}, 4400);
}

socket.on('clientstop',function(data) {
    if (canStop == true){
		stopBoard();
		smackSfx.play();
	}
});

/*
document.body.onkeydown = function(e){
	if(e.keyCode == 32){
		if (canStop == true){
			stopBoard();
		}
	}
	if (arrowPress == "updown"){
		if(e.keyCode == 38){
			chooseSquareA();
		}
		if(e.keyCode == 40){
			chooseSquareB();
		}
	}
	if (arrowPress == "leftright"){
		if(e.keyCode == 39){
			chooseSquareA();
		}
		if(e.keyCode == 37){
			chooseSquareB();
		}
	}
}
*/

function buzzerPress(){
	if (canStop == true){
// 		document.getElementById("buzzer").removeEventListener("click", buzzerPress);
// 		stopBoard();
	}
}

function stopBoard(){
	canStop = false;
	document.getElementById("buzzer").className = 'press';
	var extras = "";
	var prizeInfo = "";
	boardSpinSfx.pause(); 
	boardSpinSfx.currentTime = 0;
	clearInterval(spinVar);
	clearInterval(cycleVar);
	sI = selectedSquare - 1;
	posStop = activeIndexes[sI];
	if(sI == 3){
		if(bonusRound){
			runBoardAnim(7);
		} else {
			runBoardAnim(4);
		}
	} else if(sI == 5 && activeBoard[selectedSquare]['extras'][0][posStop] == "backtwo"){
		if(bonusRound){
			runBoardAnim(7);
		} else {
			runBoardAnim(4);
		}
	}
	if (activeBoard[selectedSquare]['type'][0][posStop] == "bigbucks"){
		extraMsg = "Big Bucks! ";
		selectedSquare = 4;
		if(bonusRound){
			runBoardAnim(7);
		} else {
			runBoardAnim(4);
		}
		sI = selectedSquare - 1;
		posStop = activeIndexes[sI];
// 		infoGui.value = "Big Bucks! "+toDollar(activeBoard[selectedSquare]['values'][0][posStop])+"! You're up to "+toDollar(playerScore)+". "+totalSpins+" spins left this round. Good luck!";
		setTimeout(function(){ 
			clearAllSquares();
			setSquare(4);
		}, 750);
	}
	if (activeBoard[selectedSquare]['type'][0][posStop] == "addaone" || activeBoard[selectedSquare]['type'][0][posStop] == "double"){
		runBoardAnim(6);
	}
	if (activeBoard[selectedSquare]['extras'][0][posStop] == "backtwo"){
		extraMsg = "Move two spaces to ";
		var startSquare = selectedSquare;
		selectedSquare = selectedSquare - 2;
		sI = selectedSquare - 1;
		posStop = activeIndexes[sI];
// 		infoGui.value = "Go back two spaces to "+toDollar(activeBoard[selectedSquare]['values'][0][posStop])+"! You're up to "+toDollar(playerScore)+". "+totalSpins+" spins left this round. Good luck!";
		setTimeout(function(){ 
			clearAllSquares();
			setSquare(startSquare - 2);
		}, 500);
/*
		setTimeout(function(){ 
			clearAllSquares();
			setSquare(startSquare - 2);
		}, 1000);
*/
	}
	if (activeBoard[selectedSquare]['extras'][0][posStop] == "losewhammy"){
		if (totalWhammies > 0){
			guiMsg = "Stop at $"+toDollar(activeBoard[selectedSquare]['values'][0][posStop])+" or Lose a Whammy! Which do you want?<p class='btns'><button id='takemoney'>$"+toDollar(activeBoard[selectedSquare]['values'][0][posStop])+"</button><button id='losewhammy'>Lose a Whammy</button></p>";
/*
			setTimeout(function(){ 
				textRibbonContent.innerHTML = "<p>"+guiMsg+"</p>";
				textDisplay.className = '';
				textDisplay.className = 'show';
			}, 0);
			setTimeout(function(){ 
				textRibbonContent.className = '';
				textRibbonContent.className = 'show';
				document.getElementById("takemoney").addEventListener("click", loseWhammyA);
				document.getElementById("losewhammy").addEventListener("click", loseWhammyB);
			}, 250);
*/
		} else {
			setTimeout(function(){ 
				loseWhammy(2);
			}, 0);
		}
	}
	if (activeBoard[selectedSquare]['extras'][0][posStop] == "forwardtwo"){
		extraMsg = "Move two spaces to ";
		var startSquare = selectedSquare;
		selectedSquare = selectedSquare + 2;
		sI = selectedSquare - 1;
		posStop = activeIndexes[sI];
// 		infoGui.value = "Advance two spaces to "+toDollar(activeBoard[selectedSquare]['values'][0][posStop])+"! You're up to "+toDollar(playerScore)+". "+totalSpins+" spins left this round. Good luck!";
		setTimeout(function(){ 
			clearAllSquares();
			setSquare(startSquare + 2);
		}, 500);
/*
		setTimeout(function(){ 
			clearAllSquares();
			setSquare(startSquare + 2);
		}, 1000);
*/
	}
	if (activeBoard[selectedSquare]['extras'][0][posStop] == "across"){
		extraMsg = "Across the board to ";
		selectedSquare = 8;
		sI = selectedSquare - 1;
		posStop = activeIndexes[sI];
// 		infoGui.value = "Across the board to "+toDollar(activeBoard[selectedSquare]['values'][0][posStop])+"! You're up to "+toDollar(playerScore)+". "+totalSpins+" spins left this round. Good luck!";
		setTimeout(function(){ 
			clearAllSquares();
			setSquare(8);
		}, 750);
	}
	if (activeBoard[selectedSquare]['type'][0][posStop] == "prize"){
		currentMult = selectedSquare * posStop;
		prizeCount++;
		removePrize(activeBoard[selectedSquare]['text'][0][posStop], roundNum,1);
		prizeInfo = activeBoard[selectedSquare]['text'][0][posStop]+" worth";
	}
	if (activeBoard[selectedSquare]['type'][0][posStop] !== "move" && activeBoard[selectedSquare]['type'][0][posStop] !== "bigbucks"){
		if (activeBoard[selectedSquare]['extras'][0][posStop] !== "plus"){
			totalSpins--;
		} else {
			extras = " plus a spin";
		}
		if (activeBoard[selectedSquare]['type'][0][posStop] == "whammy"){
			whammySfx.play();
			sfxPlayer = whammySfx;
			redBoard.className = 'show';
 			blinkSquare(sI);
			playerScore = 0;
			if (prizeCount > 0){
				prizeCount = 0;
				lostPrizes = lostPrizes.concat(usedPrizes);
			}
			totalWhammies++;
			if (totalWhammies == 3){
				extras = "  Be careful: one more Whammy and you're out of the game.";
			}
			spinsMsg = "";
 			if (totalSpins >= 1){
	 			plural = "";
	 			if (totalSpins > 1){
		 			plural = "s";
	 			}
		 		spinsMsg = " "+totalSpins+" spin"+plural+" left to take this round. Good luck!";
		 	}
			if (totalWhammies < 4){
				whammyMsg = "Stop...at a Whammy!"+extras+" Back down to $0."+spinsMsg;
			} else {
				whammyMsg = "Stop...at a Whammy!"+extras+" Unfortunately that's your fourth Whammy and your game is over. Thanks for playing Press Your Luck.<p class='btns'><button id='menuBtn' onclick='menuBtn(1)'>MENU</button><button id='restartBtn' onclick='menuBtn(2)'>RESTART</button></p>";
			}
/*
			setTimeout(function(){ 
				textRibbonContent.innerHTML = "<p>"+whammyMsg+"</p>";
				textDisplay.className = '';
				textDisplay.className = 'show';
			}, 0);
			setTimeout(function(){ 
				textRibbonContent.className = '';
				textRibbonContent.className = 'show';
			}, 250);
			setTimeout(function(){ 
				document.getElementById("whammy"+totalWhammies).classList.add("active");
			}, 2000);
			if (totalWhammies < 4 && totalSpins >= 1){
				setTimeout(function(){ 
					textRibbonContent.className = '';
					textDisplay.className = '';
				}, 6000);
				setTimeout(function(){ 
				 	centerFrame.className = '';
				 	frameContent.className = '';
				 	centerLogo.className = '';
					textRibbonContent.innerHTML = "";
				}, 6250);
			}
*/
		} else {
 			playerScore += activeBoard[selectedSquare]['values'][0][posStop];
 			spinsMsg = "";
 			if (totalSpins >= 1){
	 			plural = "";
	 			if (totalSpins > 1){
		 			plural = "s";
	 			}
		 		spinsMsg = totalSpins+" spin"+plural+" left to take this round. Good luck!";
		 	}
 			if (activeBoard[selectedSquare]['type'][0][posStop] == "move"){
	 			if (activeBoard[selectedSquare]['extras'][0][posStop] == "forwardtwo"){
		 			guiMsg = "Move two spaces to "+toDollar(activeBoard[selectedSquare]['values'][0][posStop])+"! You're up to $"+toDollar(playerScore)+". "+spinsMsg;
		 		}
	 			if (activeBoard[selectedSquare]['extras'][0][posStop] == "backtwo"){
		 			guiMsg = "Move two spaces to "+toDollar(activeBoard[selectedSquare]['values'][0][posStop])+"! You're up to $"+toDollar(playerScore)+". "+spinsMsg;
		 		}
		 		if (activeBoard[selectedSquare]['extras'][0][posStop] == "across"){
			 		guiMsg = "Across the board to "+toDollar(activeBoard[selectedSquare]['values'][0][posStop])+"! You're up to $"+toDollar(playerScore)+". "+spinsMsg;
			 	}
			 	if (activeBoard[selectedSquare]['extras'][0][posStop] == "losewhammy"){
					guiMsg = "Stop at "+toDollar(activeBoard[selectedSquare]['values'][0][posStop])+" or Lose a Whammy! Click which option you choose."; 	
				}
	 		} else if (activeBoard[selectedSquare]['type'][0][posStop] == "bigbucks"){
		 		guiMsg = "Big Bucks! $"+toDollar(activeBoard[selectedSquare]['values'][0][posStop])+""+extras+"! You're up to $"+toDollar(playerScore)+". "+spinsMsg;
		 	} else {
	 			guiMsg = extraMsg + "" +prizeInfo+" $"+toDollar(activeBoard[selectedSquare]['values'][0][posStop])+""+extras+"! You're up to $"+toDollar(playerScore)+". "+spinsMsg;
 	 			blinkSquare(sI);
 			}
/*
 			setTimeout(function(){ 
				textRibbonContent.innerHTML = "<p>"+guiMsg+"</p>";
				textDisplay.className = '';
				textDisplay.className = 'show';
			}, 0);
			setTimeout(function(){ 
				textRibbonContent.className = '';
				textRibbonContent.className = 'show';
			}, 250);
			if (totalSpins >= 1 || activeBoard[selectedSquare]['extras'][0][posStop] == "plus"){
				setTimeout(function(){ 
					textRibbonContent.className = '';
					textDisplay.className = '';
				}, 6000);
				setTimeout(function(){ 
				 	centerFrame.className = '';
				 	frameContent.className = '';
				 	centerLogo.className = '';
					textRibbonContent.innerHTML = "";
				}, 6250);
			}
*/
			
		}
/*
		if (playerScore < 500000){
			if (totalWhammies < 4){
 				restartBoard(totalSpins,roundNum);
 			}
 			totalGui.innerHTML = toDollar(playerScore);
 			spinsGui.innerHTML = totalSpins;
 		} else {
	 		totalGui.innerHTML = toDollar(playerScore);
	 		guiMsg = "You've won the game! Because your score is over $500,000, we're bumping your total winnings up to $1,000,000. Congratulations! <p class='btns'><button id='menuBtn' onclick='menuBtn(1)'>MENU</button><button id='restartBtn' onclick='menuBtn(2)'>RESTART</button></p>";
	 		spinsGui.innerHTML = 0;
	 		setTimeout(function(){ 
				textRibbonContent.innerHTML = "<p>"+guiMsg+"</p>";
				textDisplay.className = '';
				textDisplay.className = 'show';
			}, 0);
			setTimeout(function(){ 
				textRibbonContent.className = '';
				textRibbonContent.className = 'show';
			}, 250);
			setTimeout(function(){ 
				scoreCenter.style.display = "none";
				displayCenterMoney(6);
			}, 2000);
 		}
*/
	} else {
		if (activeBoard[selectedSquare]['extras'][0][posStop] == "leftright" || activeBoard[selectedSquare]['extras'][0][posStop] == "updown"){
			squareAltA = selectedSquare-1;
			squareAltB = selectedSquare+1;
			squareClickA = document.body.querySelector('.square[data-square="'+squareAltA+'"]');
			squareClickB = document.body.querySelector('.square[data-square="'+squareAltB+'"]');
/*
			squareClickA.addEventListener("click", chooseSquareA);
			squareClickB.addEventListener("click", chooseSquareB);
*/
			guiMsg = "Move one space! Click either square or use an arrow key to make your selection!";
/*
			setTimeout(function(){ 
				textRibbonContent.innerHTML = "<p>"+guiMsg+"</p>";
				textDisplay.className = '';
				textDisplay.className = 'show';
			}, 0);
			setTimeout(function(){ 
				textRibbonContent.className = '';
				textRibbonContent.className = 'show';
			}, 250);
			setTimeout(function(){ 
				textRibbonContent.className = '';
				textDisplay.className = '';
			}, 3750);
			setTimeout(function(){ 
			 	centerFrame.className = '';
			 	frameContent.className = '';
			 	centerLogo.className = '';
				textRibbonContent.innerHTML = "";
			}, 4000);
*/
			setTimeout(function(){ 
 				allowClick = true;
				toggleVar = setInterval(toggleSquares, 1000);
				if (activeBoard[selectedSquare]['extras'][0][posStop] == "leftright"){
					arrowPress = "leftright";
				}
				if (activeBoard[selectedSquare]['extras'][0][posStop] == "updown"){
					arrowPress = "updown";
				}
			}, 750);
		}
		if (activeBoard[selectedSquare]['extras'][0][posStop] == "corner"){
			squareAltCornerA = 1;
			squareAltCornerB = 10;
			squareAltCornerC = 15;
			squareClickA = document.body.querySelector('.square[data-square="'+squareAltCornerA+'"]');
			squareClickB = document.body.querySelector('.square[data-square="'+squareAltCornerB+'"]');
			squareClickC = document.body.querySelector('.square[data-square="'+squareAltCornerC+'"]');
/*
			squareClickA.addEventListener("click", addVal(squareAltCornerA,2));
			squareClickC.addEventListener("click", addVal(squareAltCornerC,2));
			squareClickB.addEventListener("click", addVal(squareAltCornerB,2));
*/
/*
			squareClickA.addEventListener("click", chooseSquarePACA);
			squareClickC.addEventListener("click", chooseSquarePACC);
			squareClickB.addEventListener("click", chooseSquarePACB);
*/
			guiMsg = "Stop at Pick a Corner! Click whichever corner you'd like to bank!";
			setTimeout(function(){ 
				allowClick = false;
				toggleVarCorner = setInterval(toggleSquares, 1500);
			}, 750);
/*
			setTimeout(function(){ 
				textRibbonContent.innerHTML = "<p>"+guiMsg+"</p>";
				textDisplay.className = '';
				textDisplay.className = 'show';
			}, 0);
			setTimeout(function(){ 
				textRibbonContent.className = '';
				textRibbonContent.className = 'show';
			}, 250);
			setTimeout(function(){ 
				textRibbonContent.className = '';
				textDisplay.className = '';
			}, 3750);
			setTimeout(function(){ 
			 	centerFrame.className = '';
			 	frameContent.className = '';
			 	centerLogo.className = '';
				textRibbonContent.innerHTML = "";
			}, 4000);
*/
		}
	}
}

function blinkSquare(squareToBlink){
	squareToBlink = squareToBlink + 1
	theSquareLanded = document.body.querySelector('.square[data-square="'+squareToBlink+'"]');
	setTimeout(function(){ 
		theSquareLanded.className = '';
		theSquareLanded.classList.add("square");
	}, 350);
	setTimeout(function(){ 
		theSquareLanded.classList.add("active");
	}, 700);
	setTimeout(function(){ 
		theSquareLanded.className = '';
		theSquareLanded.classList.add("square");
	}, 1050);
	setTimeout(function(){ 
		theSquareLanded.classList.add("active");
	}, 1400);
	setTimeout(function(){ 
		theSquareLanded.className = '';
		theSquareLanded.classList.add("square");
	}, 1750);
	setTimeout(function(){ 
		theSquareLanded.classList.add("active");
	}, 2100);
}

function toggleSquares(){
	clearAllSquares();
	if(allowClick == true){
		setSquare(squareAltA);
	}
	if(allowClick == true){
		setTimeout(function(){ 
			clearAllSquares();
			setSquare(squareAltB);
		}, 500);	
	}
}

function toggleSquaresCorner(){
	clearAllSquares();
	setSquare(squareAltCornerA);
	setTimeout(function(){ 
		clearAllSquares();
		setSquare(squareAltCornerB);
	}, 500);	
	setTimeout(function(){ 
		clearAllSquares();
		setSquare(squareAltCornerC);
	}, 1000);
}

function restartBoard(totalSpins,roundNum){
	if(totalSpins > 0){
		setTimeout(function(){ 
			clearAllSquares();
			spinTimer();
			redBoard.className = '';
			cycleTimer(activeBoard);
		}, 7500);
	} else {
		roundNum++;
		if (roundNum > 6){
// 			 infoGui.value = "You've survived the Big Bucks Bonanza and won the game! You've won a total of "+toDollar(playerScore)+". Congratulations! Refresh the page to play again!";
		} else {
			setTimeout(function(){ 
				startnewRound(roundNum);
			}, 4000);
		}
	}
}

function startnewRound(rn){
	if (rn <= 5){
		roundNum = rn;
		for(var z = 0;z<18;z++){
			boardItems[z].innerHTML = "";
			boardItems[z].className = '';
		}
	// 	if (rn == 2){bigBucksNum = "go up to $15,000";spinsTake = 4;};
		if (rn == 2){bigBucksNum = "go up to $25,000";spinsTake = 4;};
		if (rn == 3){bigBucksNum = "double to a massive $50,000";spinsTake = 3;};
		if (rn == 4){bigBucksNum = "increase to an unbelievable $75,000";spinsTake = 3;};
		if (playerScore > 0){
			if (rn !== 5){
				roundMsg = "It's decision time. You can walk away with $"+toDollar(playerScore)+" or Press Your Luck. If you play, Big Bucks will "+bigBucksNum+"! You'll have to take "+spinsTake+" spins.";
		// 		infoGui.value = "You've ended the round with $"+toDollar(playerScore)+" and it's decision time. You can walk away with your winnings or Press Your Luck. If you play on, we'll add another bigger prize to the board, and Big Bucks will "+bigBucksNum+"! You must take "+spinsTake+" spins. Do you want to walk away, or Press Your Luck?";
			} else {
				roundMsg = "You've made it to the Big Bucks Bonanza. Everything on the board is now Big Bucks, from $10,000 to our biggest bucks: $100,000. You will have to survive 3 spins.";
			}
		} else {
			roundMsg = "You've ended the round with $0. The good news is that you've got nothing to lose, so we're moving on to the next round!";
		}
		setTimeout(function(){ 
			textRibbonContent.className = '';
			clearAllSquares();
		}, 0);
/*
		setTimeout(function(){
			textRibbonContent.innerHTML = "";
			textRibbonContent.innerHTML = '<p>'+roundMsg+'</p>';
			textRibbonContent.className = 'show';
		}, 250);
*/
		if (playerScore > 0){
/*
			setTimeout(function(){ 
				textRibbonContent.className = '';
			}, 6000);
			setTimeout(function(){
				textRibbonContent.innerHTML = "";
				textRibbonContent.innerHTML = '<p>Do you want to walk away, or Press Your Luck?</p><p class="btns"><button id="walkaway">Walk Away</button><button id="pyl">Press Your Luck</button></p>';
				document.getElementById("walkaway").addEventListener("click", walkAway);
				document.getElementById("pyl").addEventListener("click", continueGame);
				textRibbonContent.className = 'show';
			}, 6250);
*/
		} else {
			setTimeout(function(){ 
				textRibbonContent.className = '';
			}, 4500);
			setTimeout(function(){
// 				continueGame();
			}, 4750);
		}
		blueBoard.className = '';
		redBoard.className = '';
		setTimeout(function(){ 
			possiblePrizes = [];
			if (rn !== 6){
				var prizeToRemove = getSmallestPrize(activePrizes);
			 	removePrize(prizeToRemove,rn,2);
		 	}
	 	}, 1000);
 	} else {
	 	blueBoard.className = '';
		redBoard.className = '';
/*
	 	if (playerScore == 0){
		 	roundMsg = "You Whammied on your final spin! Unfortunately you've ended the game with $0. Thanks for playing Press Your Luck. Better luck next game.<p class='btns'><button id='menuBtn' onclick='menuBtn(1)'>MENU</button><button id='restartBtn' onclick='menuBtn(2)'>RESTART</button></p>";
	 	} else {
		 	roundMsg = "Congratulations! You survived the Big Bucks Bonanza and you've leaving with $"+toDollar(playerScore)+". Thanks for playing Press Your Luck!<p class='btns'><button id='menuBtn' onclick='menuBtn(1)'>MENU</button><button id='restartBtn' onclick='menuBtn(2)'>RESTART</button></p>";
	 	}
	 	scoreCenter.style.display = "none";
		setTimeout(function(){ 
			displayCenterMoney(playerScore);
		}, 1000);
		setTimeout(function(){ 
			textRibbonContent.className = '';
		}, 250);
		setTimeout(function(){
			textRibbonContent.innerHTML = "";
			textRibbonContent.innerHTML = "<p>"+roundMsg+"</p>";
			textRibbonContent.className = 'show';
		}, 500);
*/
 	}
}

function walkAway(){
/*
	document.getElementById("walkaway").removeEventListener("click", walkAway);
	document.getElementById("pyl").removeEventListener("click", continueGame);
	guiMsg = "You've walking away with a total of $"+toDollar(playerScore)+"! Congratulations! <p class='btns'><button id='menuBtn' onclick='menuBtn(1)'>MENU</button><button id='restartBtn' onclick='menuBtn(2)'>RESTART</button></p>";
	scoreCenter.style.display = "none";
	setTimeout(function(){ 
		displayCenterMoney(playerScore);
	}, 1000);
	setTimeout(function(){ 
		textRibbonContent.className = '';
	}, 250);
	setTimeout(function(){
		textRibbonContent.innerHTML = "";
		textRibbonContent.innerHTML = "<p>"+guiMsg+"</p>";
		textRibbonContent.className = 'show';
	}, 500);
*/
}

function menuBtn(fn){
	var allowClick = false;
	var spinVar;
	var cycleVar;
	var toggleVar;
	scoreCenter.style.display = "none";
	redBoard.className = '';
	blueBoard.className = '';
	currentStop = [];
	activePrizes = [];
	possiblePrizes = [];
	usedPrizes = [];
	lostPrizes = [];
	playerScore = 0;
	totalSpins = 5;
	prizeCount = 0;
	totalWhammies = 0;
	roundNum = 1;
	currentMult = 0;
	activeBoard = royaleBoardOne;
	playerScore = 0;
	totalGui.innerHTML = toDollar(playerScore);
	resetLights();
	resetBoard();
	setTimeout(function(){ 
		centerFrame.className = '';
		centerFrame.classList.add("fliptrans");
		frameContent.className = '';
		frameContent.classList.add("fliptrans");
		frameContent.classList.add("greenspiralcenter");
		textRibbonContent.className = '';
		textDisplay.className = '';
		textRibbonContent.innerHTML = "";
	}, 0);
	setTimeout(function(){ 
		document.getElementById("whammy1").className = 'whammypopup';
		document.getElementById("whammy2").className = 'whammypopup';
		document.getElementById("whammy3").className = 'whammypopup';
		document.getElementById("whammy4").className = 'whammypopup';
		centerLogo.className = '';
		centerLogo.classList.add("fliptrans");
		frameContent.className = '';
		frameContent.innerHTML = '';
		if (fn == 1){
			startOpenScreen();
		}
		if (fn == 2){
			introBtns = false;
			startGame();
		}
	}, 400);
	loadPrizes(prizeReserveBonus, activePrizes, 1, activePrizes,null,2);
	prizesToBoard(activeBoard, activePrizes);
}

function loseWhammyA(){
/*
	document.getElementById("takemoney").removeEventListener("click", loseWhammyA);
	document.getElementById("losewhammy").removeEventListener("click", loseWhammyB);
*/
	loseWhammy(0);
}

function loseWhammyB(){
/*
	document.getElementById("takemoney").removeEventListener("click", loseWhammyA);
	document.getElementById("losewhammy").removeEventListener("click", loseWhammyB);
*/
	loseWhammy(1);
}

function loseWhammy(el){
	if (el == 0 || el == 2){
		valueAdd = activeBoard[selectedSquare]['values'][0][posStop];
		playerScore += activeBoard[selectedSquare]['values'][0][posStop];
	}
	totalSpins--;
	totalGui.innerHTML = toDollar(playerScore);
 	spinsGui.innerHTML = totalSpins;
 	spinsMsg = "";
 	if (totalSpins >= 1){
		spinsMsg = " "+totalSpins+" spins left to take this round. Good luck!";
	}
	if (el == 0){
		guiMsg = "You've chosen $"+toDollar(activeBoard[selectedSquare]['values'][0][posStop])+"! You're up to $"+toDollar(playerScore)+"."+spinsMsg;
	} else if (el == 2){
		guiMsg = "$"+toDollar(activeBoard[selectedSquare]['values'][0][posStop])+" or Lose a Whammy! You have no Whammies so you get the cash! You're up to $"+toDollar(playerScore)+"."+spinsMsg;
	} else {
		guiMsg = "You've chosen to lose a Whammy! You're still at $"+toDollar(playerScore)+" ."+spinsMsg;
		setTimeout(function(){ 
			whammyRemove = totalWhammies + 1;
			document.getElementById("whammy"+whammyRemove).className = '';
			document.getElementById("whammy"+whammyRemove).className = 'whammypopup';
			totalWhammies = totalWhammies - el;
		}, 1000);
	}
/*
	setTimeout(function(){ 
		textRibbonContent.innerHTML = "<p>"+guiMsg+"</p>";
		textDisplay.className = '';
		textDisplay.className = 'show';
	}, 0);
	setTimeout(function(){ 
		textRibbonContent.className = '';
		textRibbonContent.className = 'show';
	}, 250);
*/
/*
	if (totalSpins >= 1){
		setTimeout(function(){ 
			textRibbonContent.className = '';
			textDisplay.className = '';
		}, 6000);
		setTimeout(function(){ 
			centerFrame.className = '';
			frameContent.className = '';
			centerLogo.className = '';
			textRibbonContent.innerHTML = "";
		}, 6250);
	}
	restartBoard(totalSpins,roundNum);
*/
}

function continueGame(){
	if (playerScore > 0){
/*
		document.getElementById("walkaway").removeEventListener("click", walkAway);
		document.getElementById("pyl").removeEventListener("click", continueGame);
*/
	}
/*
	document.getElementById("pyl").blur();
	document.getElementById("walkaway").blur();
	document.getElementById("pyl").style.display = "none";
	document.getElementById("walkaway").style.display = "none";
*/
// 	if (roundNum == 2){activeBoard = royaleBoardTwo;totalSpins = 4;}
	if (roundNum == 2){activeBoard = royaleBoardThree;totalSpins = 4;topDollar="25,000";}
	if (roundNum == 3){activeBoard = royaleBoardFour;totalSpins = 3;topDollar="50,000";}
	if (roundNum == 4){activeBoard = royaleBoardFive;totalSpins = 3;topDollar="75,000";}
	if (roundNum == 5){activeBoard = royaleBoardSix;totalSpins = 3;topDollar="100,000";}
	redBoard.className = '';
	blueBoard.className = '';
	roundMsg = "";
	scoreCenter.style.display = "none";
	displayCenterMoney(roundNum);
	setTimeout(function(){ 
		textRibbonContent.className = '';
	}, 0);
	setTimeout(function(){ 
		if (playerScore > 0){
			textRibbonContent.innerHTML = "<p>You're Pressing Your Luck! Big Bucks in round "+roundNum+" is worth $"+topDollar+"!</p>";
		} else {
			textRibbonContent.innerHTML = "<p>Big Bucks in round "+roundNum+" is worth $"+topDollar+"!</p>";
		}
		textDisplay.className = '';
		textDisplay.className = 'show';
	}, 1500);
	setTimeout(function(){ 
		textRibbonContent.className = '';
		textRibbonContent.className = 'show';
	}, 1750);
	setTimeout(function(){ 
		textRibbonContent.className = '';
	}, 7000);
	setTimeout(function(){
		finalRnMsg = " Good luck!";
		if (roundNum == 5){
			finalRnMsg = "This is the final round...good luck!"
		}
		textRibbonContent.innerHTML = "";
		textRibbonContent.innerHTML = "<p>You have to survive "+totalSpins+" spins."+finalRnMsg+"</p>";
		scoreCenter.style.display = "block";
		textRibbonContent.className = 'show';
	}, 7250);
	setTimeout(function(){ 
		spinsGui.innerHTML = totalSpins;
	}, 9000);
	setTimeout(function(){ 
		textRibbonContent.className = '';
		textDisplay.className = '';
	}, 12000);
	setTimeout(function(){ 
		spinTimer();
 	 	cycleTimer(activeBoard);
	 	centerFrame.className = '';
	 	frameContent.className = '';
	 	centerLogo.className = '';
		textRibbonContent.innerHTML = "";
	}, 12500);
/*
	if (roundNum !== 5){
// 		infoGui.value = "You're Pressing Your Luck! Take a look at the prize we're adding to the board...";
		infoGui.value = "You're Pressing Your Luck! Good luck!";
// 		displayCenterPrize(activePrizes[2][0]['name']);
		prizesToBoard(activeBoard, activePrizes);
	} else {
		infoGui.value = "You're Pressing Your Luck! This is the final round where one spin can get you $100,000!";
		prizesToBoard(activeBoard, activePrizes);
	}
*/
/*
	setTimeout(function(){ 
		infoGui.value = "You have to make it through "+totalSpins+" spins this round. Good luck! Hit the space bar to stop the board.";
	 	spinTimer();
	 	cycleTimer(activeBoard);
	 	centerFrame.className = '';
	 	frameContent.className = '';
	 	centerLogo.className = '';
	 	spinsGui.innerHTML = totalSpins;
	}, 8000);
*/
}

function getSmallestPrize(activePrizes){
	var prizeVal = 0;
	var prizeName = "";
	for(var x = 0;x<activePrizes.length;x++){
		if (prizeVal > activePrizes[x][0]['value']){
			prizeName = activePrizes[x][0]['name'];
			prizeVal = activePrizes[x][0]['value'];
		}
		if (prizeVal == 0){
			prizeName = activePrizes[x][0]['name'];
			prizeVal = activePrizes[x][0]['value'];
		}
	}
	return prizeName;
}

function loadBoard(boardConfig,boardNum){
	if (boardNum == 1){boardLabel = "Round One";}
	if (boardNum == 2){boardLabel = "Round Two";}
	if (boardNum == 3){boardLabel = "Bonus Round Board One";}
	if (boardNum == 4){boardLabel = "Bonus Round Board Two";}
	if (boardNum == 5){boardLabel = "Bonus Round Board Three";}
	if (boardNum == 6){boardLabel = "Bonus Round Board Four";}
	if (boardNum == 7){boardLabel = "Bonus Round Board Five";}
	if (boardNum == 8){boardLabel = "Bonus Round Board Six";}
	currentBoard = boardConfig;
	totalCash = 0;
	totalCashStops = 0;
	totalWhammies = 0;
	totalPrizes = 0;
	totalExtra = 0;
	squareSpace = 0;
	cashArray = [];
	for(var i in boardConfig) {
	   squareVals = boardConfig[i];
	   for(y=1;y<4;y++){
	  	 fillItem(squareVals,squareSpace,y,boardConfig,i);
	  	squareSpace++
	   }
	}
	if (!logoShow){
		logoShow = true;
		toggleInfo();
	}
}

function fillItem(squareVals,squareSpace,location,boardConfig,i){
	currentItem = boardItems[squareSpace];
	for(var j in squareVals) {
	   squareContents = boardConfig[i][j][0];
	   if (j == "type"){
	   	if (squareContents[location] == "money"){
		   	totalCashStops++;
	   	}
	   	if (squareContents[location] == "whammy"){
		   	totalWhammies++;
	   	}
	   	if (squareContents[location] == "prize"){
		   	totalPrizes++;
	   	}
	   }
	   if (j == "values"){
	   		totalCash += squareContents[location];
	   		if (squareContents[location] !== 0){
		   		cashArray.push(squareContents[location]);
	   		}
	   }
	   if (j == "text"){
		   currentItem.innerHTML = squareContents[location];
	   }
	   if (j == "color"){
		   currentItem.className = '';
		   currentItem.classList.add("item");
		   currentItem.classList.add(squareContents[location]);
	   }
	   if (j == "extras"){
	   	if (squareContents[location] == "plus"){
		   	totalExtra++;
	   	}
	   }
	}
}

function toggleInfo(){
	cashArraySort = cashArray.sort(function(a, b){return a - b});
	if (logoShow){
		frameContent.innerHTML = '';
		boardCenter.className = '';
		boardCenter.classList.add("blue");
		logoShow = false;
		var element = document.createElement("H2");
		element.appendChild(document.createTextNode(boardLabel));
		frameContent.appendChild(element);
		var element = document.createElement("P");
		element.appendChild(document.createTextNode('Total Cash: '+toDollar(totalCash)));
		frameContent.appendChild(element);
		var element = document.createElement("P");
		element.appendChild(document.createTextNode('Board Avg $$: '+toDollar(totalCash/54)));
		frameContent.appendChild(element);
		var element = document.createElement("P");
		element.appendChild(document.createTextNode('Avg $$ of Cash Stops: '+toDollar(totalCash/cashArray.length)));
		frameContent.appendChild(element);
		var element = document.createElement("P");
		element.appendChild(document.createTextNode('Median Cash Value: '+toDollar(median(cashArraySort))));
		frameContent.appendChild(element);
		var element = document.createElement("P");
		element.appendChild(document.createTextNode('Total Whammies: '+totalWhammies+ ". Odds: "+(Math.floor((totalWhammies / 54) * 100))+"%"));
		frameContent.appendChild(element);
		var element = document.createElement("P");
		element.appendChild(document.createTextNode('Total Prizes: '+totalPrizes+ ". Odds: "+(Math.floor((totalPrizes / 54) * 100))+"%"));
		frameContent.appendChild(element);
		var element = document.createElement("P");
		element.appendChild(document.createTextNode('Extra Spins: '+totalExtra+ ". Odds: "+(Math.floor((totalExtra / 54) * 100))+"%"));
		frameContent.appendChild(element);
	} else {
		boardCenter.className = '';
		boardCenter.classList.add("logo");
		frameContent.innerHTML = '';
		logoShow = true;
	}
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function toDollar(value){
	if(value){
		return value.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
	}
}

function median(values) {

    values.sort( function(a,b) {return a - b;} );

    var half = Math.floor(values.length/2);

    if(values.length % 2)
        return values[half];
    else
        return (values[half-1] + values[half]) / 2.0;
}
 

function prizesToBoard(theBoard, prizes){
	var p = 0;
	for(i in theBoard){
		var theSquare = theBoard[i];
		for(var j=1;j<=3;j++){
			if (theSquare['type'][0][j] == "prize"){
				theSquare['text'][0][j] = prizes[p][0]['name'];
				theSquare['values'][0][j] = prizes[p][0]['value'];
				p++;
				if(p>2){p=0}
			}
		}
	}
}

function boardCycle(){
	loadSingle(activeBoard, currentStop,1,2);
}

function loadPrizes(i,e,r,a,n,t){
	if (t == 1){
		r = r - 1;
		if (r == 0){
			r = 1;
		}
	}
	if (possiblePrizes.length == 0){
		possiblePrizes = [];
		for (j in i){
			if (i[j]['level'] == r && i[j]['name'] !== n){
				possiblePrizes.push(j);
			}
		}
		maxGo = 4;
	} else {
		possiblePrizes = [];
		for (j in i){
			if (i[j]['level'] == r && i[j]['name'] !== n){
				possiblePrizes.push(j);
			}
		}
		maxGo = 2;	
	}
	maxGo = (3 - a.length);
	for(var x=0;x<maxGo;x++){
		rI = Math.floor(Math.random()*possiblePrizes.length);
		var item = possiblePrizes[rI];
		itemIndex = item;
		possiblePrizes.splice(rI, 1);
		var data = [
		    { 
		        "name": i[itemIndex]['name'],
		        "value": i[itemIndex]['value'],
		        "level": r
		    }
		];
		a.push(data);
	}
	if (n !== null){
		setTimeout(function(){ 
			for(i in activeBoard){
				var theSquare = activeBoard[i];
				for(var j=1;j<=3;j++){
					if (theSquare['type'][0][j] == "prize" && theSquare['text'][0][j] == n){
						theSquare['text'][0][j] = a[2][0]['name'];
						theSquare['values'][0][j] = a[2][0]['value'];
					}
				}
			}
			for(var q = 0;q<18;q++){
				var squareElem = boardItems[q];
				if (squareElem.textContent == n){
					squareElem.innerHTML = a[2][0]['name'];
				}
			}
		}, 2000);
	}
}

function loadSingle(boardConfig, stops, num, type){
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
	currentStop = stops;
	currentBoard = boardConfig;
	for(x=0;x<stops.length;x++){
		singleStop = stops[x];
	}
	activeIndexes = [];
	if (type == 2){
		for(var i in boardConfig) {
			currentSquareReadout = boardConfig[i];
			currentSquareStop = stops[i-1];
			fillSquare(i-1, boardConfig[i]['color'][0][currentSquareStop], boardConfig[i]['type'][0][currentSquareStop], boardConfig[i]['values'][0][currentSquareStop], boardConfig[i]['text'][0][currentSquareStop], boardConfig[i]['prizeValues'][0][currentSquareStop], boardConfig[i]['extras'][0][currentSquareStop]);
			activeIndexes.push(currentSquareStop);
		}
	} else if (type == 1){
		for(var i in boardConfig) {
			timerCounter = i * 100;
			squareStop = parseInt(i) + 3;
			if (squareStop > 18){
				squareStop = squareStop - 18;
			}
			currentSquareReadout = boardConfig[squareStop];
			currentSquareStop = stops[squareStop-1];
			doTimerLoad(i,squareStop,currentSquareReadout,currentSquareStop,boardConfig);
		}
/*
		setTimeout(function(){ 
			boardItemsFade[square].className = '';
				boardItemsFade[square].classList.add("item");
				boardItemsFade[square].classList.add("itemsinglefade");
				boardItemsFade[square].classList.add("animate");
				boardItemsFade[square].classList.add("show");
				boardItemsFade[square].classList.add(color);
				if (color == "move"){
					boardItemsFade[square].classList.add(extra);
				}
		}, 300);
*/
	}
}

function doTimerLoad(j,i,currentSquareReadout,currentSquareStop,boardConfig) {
	timerVal = j*75;
	setTimeout(function() { 
		squareFlash = boardItems[i-1].parentNode;
		squareFlash.classList.add("flash");
		fillSquare(i-1, boardConfig[i]['color'][0][currentSquareStop], boardConfig[i]['type'][0][currentSquareStop], boardConfig[i]['values'][0][currentSquareStop], boardConfig[i]['text'][0][currentSquareStop], boardConfig[i]['prizeValues'][0][currentSquareStop], boardConfig[i]['extras'][0][currentSquareStop]);
		activeIndexes.push(currentSquareStop);
	}, timerVal);
}

function fillSquare(square,color,type,value,text,prizeValue,extra){
	
	squareQueue = boardItems[square];
	squareQueueFade = boardItemsFade[square];
	currentVal = squareQueue.innerHTML;
// 	console.log(currentVal);
	if (currentVal !== ""){
		squareQueueFade.innerHTML = currentVal;
		squareQueueFade.classList.add("reveal");
		squareQueueFade.classList.add("fade");
	}
	squareQueue.className = '';
	squareQueue.classList.add("item");
	squareQueue.classList.add("itemsingle");
	squareQueue.classList.add(color);
	if (color == "move"){
		squareQueue.classList.add(extra);
	}
	if (type == "intro"){
		squareClass = squareQueue.parentNode;
		squareClass.setAttribute("id", extra);
	}
	squareQueue.innerHTML = "<span>"+text+"</span>";
	setTimeout(function(){ 
		boardItemsFade[square].className = '';
		boardItemsFade[square].classList.add("item");
		boardItemsFade[square].classList.add("itemsinglefade");
		boardItemsFade[square].classList.add("animate");
		boardItemsFade[square].classList.add("show");
		boardItemsFade[square].classList.add(color);
		if (color == "move"){
			boardItemsFade[square].classList.add(extra);
		}
// 			boardItemsFade[i].classList.add("reveal");
	}, 300);
}

function cycleTimer(theBoard) {
	document.getElementById("buzzer").className = '';
// 	document.getElementById("buzzer").addEventListener("click", buzzerPress);
	extraMsg = "Stop at ";
// 	boardSpinSfx.play();
// 	blueBoard.className = 'show';
	activeBoard = theBoard;
 	boardCycle(currentStop);
 	setTimeout(function(){ 
 		canStop = true;
 	}, 1250);
    cycleVar = setInterval(boardCycle, 800);
}

function spinTimer() {
	spinSquares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
	usedSquares = [];
	spinVar = setInterval(spinBoard, 250);
}

function clearAllSquares(){
	var activeSquare = document.body.querySelector('.square.active');
	if (activeSquare){
		activeSquare.className = '';
		activeSquare.classList.add("square");
	}
}

function setSquare(ab){
	clearAllSquares();
	var squareElem = document.body.querySelector('.square[data-square="'+ab+'"]');
	squareElem.classList.add("active");
}

function spinBoard(){
	if (usedSquares.length > 2){
		addSquare = usedSquares[0];
		usedSquares.shift();
		spinSquares.push(addSquare);
	}
	randomLand = Math.floor(Math.random()*spinSquares.length);
	selectedSquare = spinSquares[Math.floor(Math.random()*spinSquares.length)];
	var squareIndex = spinSquares.indexOf(selectedSquare);
	if (squareIndex > -1) {
		spinSquares.splice(squareIndex, 1);
	}
	usedSquares.push(selectedSquare);
	if (usedSquares.length > 1){
		var activeSquare = document.body.querySelector('.square.active');
		activeSquare.className = '';
		activeSquare.classList.add("square");
	}
	var squareElem = document.body.querySelector('.square[data-square="'+selectedSquare+'"]');
	squareElem.classList.add("active");
}

function chooseSquareA(){
/*
	squareClickA.removeEventListener("click", chooseSquareA);
	squareClickB.removeEventListener("click", chooseSquareB);
*/
	arrowPress = "";
	addVal(squareAltA,1);
}

function chooseSquareB(){
/*
	squareClickA.removeEventListener("click", chooseSquareA);
	squareClickB.removeEventListener("click", chooseSquareB);
*/
	arrowPress = "";
	addVal(squareAltB,1);
}

function chooseSquarePACA(){
/*
	squareClickA.removeEventListener("click", chooseSquarePACA);
	squareClickC.removeEventListener("click", chooseSquarePACC);
	squareClickB.removeEventListener("click", chooseSquarePACB);
*/
	arrowPress = "";
	addVal(squareAltCornerA,2);
}

function chooseSquarePACC(){
/*
	squareClickA.removeEventListener("click", chooseSquarePACA);
	squareClickC.removeEventListener("click", chooseSquarePACC);
	squareClickB.removeEventListener("click", chooseSquarePACB);
*/
	arrowPress = "";
	addVal(squareAltCornerC,2);
}

function chooseSquarePACB(){
/*
	squareClickA.removeEventListener("click", chooseSquarePACA);
	squareClickC.removeEventListener("click", chooseSquarePACC);
	squareClickB.removeEventListener("click", chooseSquarePACB);
*/
	arrowPress = "";
	addVal(squareAltCornerB,2);
}


function addVal(sC,ty){
	if (ty == 1){
/*
		squareClickA.removeEventListener("click", addVal);
		squareClickB.removeEventListener("click", addVal);
*/
	}
	if (ty == 2){
/*
		squareClickA.removeEventListener("click", addVal);
		squareClickC.removeEventListener("click", addVal);
		squareClickB.removeEventListener("click", addVal);
*/
	}
	if(allowClick == true){
		clearAllSquares();
		clearInterval(toggleVar);
		setTimeout(function(){ 
			clearAllSquares();
			setSquare(sC);
		}, 1000);
		allowClick = false;
	}
	selectedSquare = sC;
	boardSpinSfx.play();
	sfxPlayer = boardSpinSfx;
	stopBoard();
}

function removePrize(prizeName,round,type){
	for(var x = 0;x<activePrizes.length;x++){
		if (activePrizes[x][0]['name'] == prizeName){
			var data = [
			    { 
			        "name": activePrizes[x][0]['name'],
			        "value": activePrizes[x][0]['value'],
			        "level": activePrizes[x][0]['level']
			    }
			];
			if (type == 2){
				lostPrizes.push(data);
			} else {
				usedPrizes.push(data);
			}
			activePrizes.splice(x, 1);
		}
	}
// 	console.log(lostPrizes);
	if (type == 2){
		loadPrizes(prizeReserveBonus, activePrizes, round, activePrizes,prizeName,2);
	} else {
		loadPrizes(prizeReserveBonus, activePrizes, round, activePrizes,prizeName,1);
	}
}

function Sound(source, volume, loop)
{
    this.source = source;
    this.volume = volume;
    this.loop = loop;
    var son;
    this.son = son;
    this.finish = false;
    this.stop = function()
    {
        document.body.removeChild(this.son);
    }
    this.start = function()
    {
        if (this.finish) return false;
        this.son = document.createElement("embed");
        this.son.setAttribute("src", this.source);
        this.son.setAttribute("hidden", "true");
        this.son.setAttribute("volume", this.volume);
        this.son.setAttribute("autostart", "true");
        this.son.setAttribute("loop", this.loop);
        document.body.appendChild(this.son);
    }
    this.remove=function()
    {
        document.body.removeChild(this.son);
        this.finish = true;
    }
    this.init = function(volume, loop)
    {
        this.finish = false;
        this.volume = volume;
        this.loop = loop;
    }
}


//PRELOAD ITEMS
function preloadImages(srcs) {
    if (!preloadImages.cache) {
        preloadImages.cache = [];
    }
    var img;
    for (var i = 0; i < srcs.length; i++) {
        img = new Image();
        img.src = srcs[i];
        preloadImages.cache.push(img);
    }
}

// then to call it, you would use this
var imageSrcs = ["assets/img/basebg.png","assets/img/blankscore.png","assets/img/board_blue.jpg","assets/img/board_red.jpg","assets/img/board_standby.jpg","assets/img/border.png","assets/img/brightgreenspiral.png","assets/img/buzzer.jpg","assets/img/centerburst.png","assets/img/cfx.png","assets/img/earnedpassed.png","assets/img/greenspiral.png","assets/img/leftarrow.png","assets/img/logo.png","assets/img/monitorpodium.jpg","assets/img/movehorizontal.png","assets/img/onlypassedspins_display.png","assets/img/movehorizontal.png","assets/img/movevertical.png","assets/img/onlyscore_empty_standby.png","assets/img/onlyscore_empty.png","assets/img/onlyspins_display.png","assets/img/red_border.png","assets/img/rightarrow.png","assets/img/scorebg.jpg","assets/img/spins_buzz.png","assets/img/spins_notbuzz.png","assets/img/thewhammy.png","assets/img/whammy_popup.jpg","assets/img/whammy1.png","assets/img/whammy2.png","assets/img/whammy3.png","assets/img/whammy4.png","assets/img/whammy5.png","assets/img/whammy6.png","assets/img/white_border.png","assets/img/board_blue_blink_1.jpg","assets/img/board_blue_blink_2.jpg","assets/img/board_blue_blink_3.jpg","assets/img/board_blue_blink_4.jpg","assets/img/board_gold_blackout_1.jpg","assets/img/board_gold_blackout_2.jpg","assets/img/board_gold_blackout_3.jpg","assets/img/board_gold_blackout_4.jpg","assets/img/board_gold_blink_1.jpg","assets/img/board_gold_blink_2.jpg","assets/img/board_gold_blink_3.jpg","assets/img/board_gold_blink_4.jpg","assets/img/board_gold_diagonal_blink_1.jpg","assets/img/board_gold_diagonal_blink_2.jpg","assets/img/board_gold_diagonal_blink_3.jpg","assets/img/board_gold_diagonal_blink_4.jpg","assets/img/board_gold_diagonal_blink_5.jpg","assets/img/board_gold_diagonal_blink_6.jpg","assets/img/board_gold_diagonal_blink_7.jpg","assets/img/board_gold_vertical_blackout_1.jpg","assets/img/board_gold_vertical_blackout_2.jpg","assets/img/board_gold_vertical_blackout_3.jpg","assets/img/board_gold_vertical_blackout_4.jpg","assets/img/board_gold_vertical_blink_1.jpg","assets/img/board_gold_vertical_blink_2.jpg","assets/img/board_gold_vertical_blink_3.jpg","assets/img/board_gold_vertical_blink_4.jpg"];

preloadImages(imageSrcs);

//SETUP
socket.emit('create game', makeid(6));

function makeid(length) {
   var result           = '';
   var characters       = '0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function getUserID(length){
	var result           = '';
   var characters       = '0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   if(userIds.indexOf(result) !== -1){
	   getUserID(6)
	} else {
		return result;	
	}
}

socket.on('sendHostCode',function(data) {
	document.getElementById("gamecode").value = data;
	thisGameCode = data;
});

socket.on('showUsername',function(data) {
	if (userNames[0]){document.getElementById("player1").value = userNames[0];}
	if (userNames[1]){document.getElementById("player2").value = userNames[1];}
	if (userNames[2]){document.getElementById("player3").value = userNames[2];}
	if (userNames[3]){document.getElementById("player4").value = userNames[3];}
});
socket.on('loadTheGame',function(typeGame) {
	document.getElementById("game_setup").innerHTML = "";
	document.getElementById("bg").className = '';
	document.getElementById("board_bg").className = '';
	document.getElementById("squares").className = '';
	document.getElementById("game_setup").className = 'play';
	if (typeGame == 1){
		startGame();
	}
});
socket.on('answerToHost',function(thisResult) {
	if (thisResult[0] == holdRightAnswer){
		answersStored.push(thisResult);
	}
});
//SYNCING PLAYER
socket.on('syncPlayer',function(playerData) {
	if(playerData[6] == 2){
		
	} else {
		if(playerData[0] == 1){
			player1name.innerHTML = playerData[1];
			player1score.innerHTML = numberWithCommas(playerData[2]);
			player1center.innerHTML = playerData[3];
			player1earned.innerHTML = playerData[4];
			player1passed.innerHTML = playerData[3];
			if (playerData[5] == 0){
				player1whammy1.className = '';player1whammy2.className = '';player1whammy3.className = '';player1whammy4.className = '';
			}
			if (playerData[5] == 1){
				player1whammy1.className = 'active';player1whammy2.className = '';player1whammy3.className = '';player1whammy4.className = '';
			}
			if (playerData[5] == 2){
				player1whammy1.className = 'active';player1whammy2.className = 'active';player1whammy3.className = '';player1whammy4.className = '';
			}
			if (playerData[5] == 3){
				player1whammy1.className = 'active';player1whammy2.className = 'active';player1whammy3.className = 'active';player1whammy4.className = '';
			}
			if (playerData[5] == 4){
				player1whammy1.className = 'active';player1whammy2.className = 'active';player1whammy3.className = 'active';player1whammy4.className = 'active';
			}
		}
		if(playerData[0] == 2){
			player2name.innerHTML = playerData[1];
			player2score.innerHTML = numberWithCommas(playerData[2]);
			player2center.innerHTML = playerData[3];
			player2earned.innerHTML = playerData[4];
			player2passed.innerHTML = playerData[3];
			if (playerData[5] == 0){
				player2whammy1.className = '';player2whammy2.className = '';player2whammy3.className = '';player2whammy4.className = '';
			}
			if (playerData[5] == 1){
				player2whammy1.className = 'active';player2whammy2.className = '';player2whammy3.className = '';player2whammy4.className = '';
			}
			if (playerData[5] == 2){
				player2whammy1.className = 'active';player2whammy2.className = 'active';player2whammy3.className = '';player2whammy4.className = '';
			}
			if (playerData[5] == 3){
				player2whammy1.className = 'active';player2whammy2.className = 'active';player2whammy3.className = 'active';player2whammy4.className = '';
			}
			if (playerData[5] == 4){
				player2whammy1.className = 'active';player2whammy2.className = 'active';player2whammy3.className = 'active';player2whammy4.className = 'active';
			}
		}
		if(playerData[0] == 3){
			player3name.innerHTML = playerData[1];
			player3score.innerHTML = numberWithCommas(playerData[2]);
			player3center.innerHTML = playerData[3];
			player3earned.innerHTML = playerData[4];
			player3passed.innerHTML = playerData[3];
			if (playerData[5] == 0){
				player3whammy1.className = '';player3whammy2.className = '';player3whammy3.className = '';player3whammy4.className = '';
			}
			if (playerData[5] == 1){
				player3whammy1.className = 'active';player3whammy2.className = '';player3whammy3.className = '';player3whammy4.className = '';
			}
			if (playerData[5] == 2){
				player3whammy1.className = 'active';player3whammy2.className = 'active';player3whammy3.className = '';player3whammy4.className = '';
			}
			if (playerData[5] == 3){
				player3whammy1.className = 'active';player3whammy2.className = 'active';player3whammy3.className = 'active';player3whammy4.className = '';
			}
			if (playerData[5] == 4){
				player3whammy1.className = 'active';player3whammy2.className = 'active';player3whammy3.className = 'active';player3whammy4.className = 'active';
			}
		}
		if(playerData[0] == 4){
			document.getElementById("dollartotal").innerHTML = numberWithCommas(playerData[2]);
			document.getElementById("spinstotal").innerHTML = playerData[3];
			champWhammy1.className = '';
			champWhammy2.className = '';
			champWhammy3.className = '';
			champWhammy4.className = '';
			champWhammy1.classList.add("whammypopup");
			champWhammy2.classList.add("whammypopup");
			champWhammy3.classList.add("whammypopup");
			champWhammy4.classList.add("whammypopup");
			if (playerData[5] == 0){
				
			}
			if (playerData[5] == 1){
				champWhammy1.classList.add("active");
			}
			if (playerData[5] == 2){
				champWhammy1.classList.add("active");
				champWhammy2.classList.add("active");
			}
			if (playerData[5] == 3){
				champWhammy1.classList.add("active");
				champWhammy2.classList.add("active");
				champWhammy3.classList.add("active");
			}
			if (playerData[5] == 4){
				champWhammy1.classList.add("active");
				champWhammy2.classList.add("active");
				champWhammy3.classList.add("active");
				champWhammy4.classList.add("active");
			}
		}
	}
});
//TOGGLE PODIUM
socket.on('togglePodium',function(podiumStatus) {
	if(podiumStatus==1){
		document.getElementById("player_holder").className = 'active';
		document.getElementById("player1score").className = "";document.getElementById("player2score").className = "";document.getElementById("player3score").className = "";
		p1spot1.className="";p1spot2.className="";p1spot3.className="";
		p2spot1.className="";p2spot2.className="";p2spot3.className="";
		p3spot1.className="";p3spot2.className="";p3spot3.className="";
		document.getElementById("player1score").classList.add("scorezone");
		document.getElementById("player2score").classList.add("scorezone");
		document.getElementById("player3score").classList.add("scorezone");
		document.getElementById("player1score").classList.add("showspins");
		document.getElementById("player2score").classList.add("showspins");
		document.getElementById("player3score").classList.add("showspins");
		p1spot1.classList.add("spinspot");p1spot2.classList.add("spinspot");p1spot2.classList.add("spins");p1spot2.classList.add("show");p1spot3.classList.add("spinspot");
		p2spot1.classList.add("spinspot");p2spot2.classList.add("spinspot");p2spot2.classList.add("spins");p2spot2.classList.add("show");p2spot3.classList.add("spinspot");
		p3spot1.classList.add("spinspot");p3spot2.classList.add("spinspot");p3spot2.classList.add("spins");p3spot2.classList.add("show");p3spot3.classList.add("spinspot");
	}
	if(podiumStatus==2){
		document.getElementById("player_holder").className = 'active';
		document.getElementById("player1score").className = "";document.getElementById("player2score").className = "";document.getElementById("player3score").className = "";
		p1spot1.className="";p1spot2.className="";p1spot3.className="";
		p2spot1.className="";p2spot2.className="";p2spot3.className="";
		p3spot1.className="";p3spot2.className="";p3spot3.className="";
		document.getElementById("player1score").className = "scorezone";
		document.getElementById("player2score").className = "scorezone";
		document.getElementById("player3score").className = "scorezone";
		p1spot1.classList.add("spinspot");p1spot1.classList.add("passed");p1spot1.classList.add("show");p1spot2.classList.add("spinspot");p1spot2.classList.add("center");p1spot2.classList.add("show");p1spot3.classList.add("spinspot");p1spot3.classList.add("spins");p1spot3.classList.add("show");
		p2spot1.classList.add("spinspot");p2spot1.classList.add("passed");p2spot1.classList.add("show");p2spot2.classList.add("spinspot");p2spot2.classList.add("center");p2spot2.classList.add("show");p2spot3.classList.add("spinspot");p2spot3.classList.add("spins");p2spot3.classList.add("show");
		p3spot1.classList.add("spinspot");p3spot1.classList.add("passed");p3spot1.classList.add("show");p3spot2.classList.add("spinspot");p3spot2.classList.add("center");p3spot2.classList.add("show");p3spot3.classList.add("spinspot");p3spot3.classList.add("spins");p3spot3.classList.add("show");
	}
	if(podiumStatus==3){
		document.getElementById("player_holder").className = '';
		document.getElementById("player1score").className = "";
		document.getElementById("player2score").className = "";
		document.getElementById("player3score").className = "";
	}
});
//LOCKOUT TRIGGERED
socket.on('lockoutBuzzer',function(data) {
	buzzinSfx.play();
	sfxPlayer = buzzinSfx;
	if(data[1] == 1){
		document.getElementById("player1score").className = "";
		document.getElementById("player1score").classList.add("scorezone");
		document.getElementById("player1score").classList.add("showspins");
		document.getElementById("player1score").classList.add("buzzedin");
	}
	if(data[1] == 2){
		document.getElementById("player2score").className = "";
		document.getElementById("player2score").classList.add("scorezone");
		document.getElementById("player2score").classList.add("showspins");
		document.getElementById("player2score").classList.add("buzzedin");
	}
	if(data[1] == 3){
		document.getElementById("player3score").className = "";
		document.getElementById("player3score").classList.add("scorezone");
		document.getElementById("player3score").classList.add("showspins");
		document.getElementById("player3score").classList.add("buzzedin");
	}
});
//BLINK QUESTION PODIUM
socket.on('podsBlink',function(data) {
	arrayHunt = data[0];
	document.getElementById("player1score").className = "";
	document.getElementById("player1score").classList.add("scorezone");
	document.getElementById("player2score").className = "";
	document.getElementById("player2score").classList.add("scorezone");
	document.getElementById("player3score").className = "";
	document.getElementById("player3score").classList.add("scorezone");
	document.getElementById("answers").className = "";
	boardCenter.className = "";
	document.getElementById("answer1").className = "";
	document.getElementById("answer2").className = "";
	document.getElementById("answer3").className = "";
	document.getElementById("answer1").innerHTML = "";
	document.getElementById("answer2").innerHTML = "";
	document.getElementById("answer3").innerHTML = "";
	if(data[1] == 1){
		typeBlink = "blink";
		document.getElementById("player1score").classList.add("showspins");
		document.getElementById("player2score").classList.add("showspins");
		document.getElementById("player3score").classList.add("showspins");
	}
	if(data[1] == 2){
		typeBlink = "blinkscore";
	}
	if(data[0].includes(1)){
		document.getElementById("player1score").classList.add(typeBlink);
	}
	if(data[0].includes(2)){
		document.getElementById("player2score").classList.add(typeBlink);
	}
	if(data[0].includes(3)){
		document.getElementById("player3score").classList.add(typeBlink);
	}
});
//ADD SPINS
socket.on('addSpins',function(data) {
	dingSfx.play();
	sfxPlayer = dingSfx;
	if(data[0] == 1){
		player1center.innerHTML = data[1];
		player1passed.innerHTML = data[1];
	}
	if(data[0] == 2){
		player2center.innerHTML = data[1];
		player2passed.innerHTML = data[1];
	}
	if(data[0] == 3){
		player3center.innerHTML = data[1];
		player3passed.innerHTML = data[1];
	}
});
//TRANSMIT WHAMMIES
socket.on('transmitWhammy',function(data) {
	if(data[0] == 4){
		if(data[2] == 1){
			boingSfx.play();
			sfxPlayer = boingSfx;
			document.getElementById('whammy'+data[1]).className = '';
			document.getElementById('whammy'+data[1]).classList.add("whammypopup");
			document.getElementById('whammy'+data[1]).classList.add("active");
		}
		if(data[2] == -1){
			whamNum = data[1] + 1;
			document.getElementById('whammy'+whamNum).className = '';
			document.getElementById('whammy'+whamNum).classList.add("whammypopup");
		}
	} else {
		if(data[2] == 1){
			boingSfx.play();
			sfxPlayer = boingSfx;
			document.getElementById('p'+data[0]+'w'+data[1]).className = "active";
		}
		if(data[2] == -1){
			whamNum = data[1] + 1;
			document.getElementById('p'+data[0]+'w'+whamNum).className = "";
		}
	}
});
//PASS SPINS
socket.on('passSpins',function(data) {
	passSfx.play();
	sfxPlayer = passSfx;
	document.getElementById('center'+data[0][0]).innerHTML = 0;
	document.getElementById('passed'+data[0][0]).innerHTML = 0;
	document.getElementById('spins'+data[1][0]).innerHTML = data[1][1];
});
//TIMES UP
socket.on('timesup',function(data) {
	timeupSfx.play();
	sfxPlayer = timesupSfx;
});
//DISPLAY ANSWERS
socket.on('sendTheAnswers',function(data) {
	document.getElementById("answers").className = "active";
	boardCenter.className = "dim";
	setTimeout(function(){ 
		document.getElementById("answer1").innerHTML = data[0];
	}, 2500);
	setTimeout(function(){ 
		document.getElementById("answer2").innerHTML = data[1];
	}, 4000);
	setTimeout(function(){ 
		document.getElementById("answer3").innerHTML = data[2];
	}, 5500);
});
//SHOW THE RIGHT ANSWER
socket.on('showTheAnswer',function(data) {
	if(document.getElementById("answer1").innerHTML == data){
		document.getElementById("answer1").className = "correct";
	} else {
		document.getElementById("answer1").className = "wrong";
	}
	if(document.getElementById("answer2").innerHTML == data){
		document.getElementById("answer2").className = "correct";
	} else {
		document.getElementById("answer2").className = "wrong";
	}
	if(document.getElementById("answer3").innerHTML == data){
		document.getElementById("answer3").className = "correct";
	} else {
		document.getElementById("answer3").className = "wrong";
	}
});
//START ROUND
socket.on('startRound',function(data) {
	if(data == 0){
		runBoardAnim(3);
	}
	if(data == 1){
		bonusRound = false;
		activeBoard = roundOneBoard;
		runBoardAnim(5);
		tobigboardSfx.play();
		sfxPlayer = tobigboardSfx;
		currentPlaying = 4;
		loadSingle(activeBoard,currentStop,1,1);
/*
		setTimeout(function(){ 
			spinTimer();
			cycleTimer(activeBoard);
		}, 3000);
*/
	}
	if(data == 2){
		runBoardAnim(5);
		bonusRound = false;
		activeBoard = roundTwoBoard;
		tobigboardSfx.play();
		currentPlaying = 4;
		sfxPlayer = tobigboardSfx;
		loadSingle(activeBoard,currentStop,1,1);
	}
	if(data == 3){
		runBoardAnim(3);
		bonusRound = true;
	}
});
//START THE BOARD
socket.on("startBoard",function(data){
	boardSpinSfx.play();
	sfxPlayer = boardSpinSfx;
	clearAllSquares();
	spinTimer();
	cycleTimer(activeBoard);
	if (bonusRound){
		blueBoard.className = 'show';
		redBoard.className = '';
	}
});
//GET THE SQUARE INFO
socket.on("getSquareInfo",function(data){
// 	console.log(data);
	squareInfo = [data,activeBoard[selectedSquare]['values'][0][posStop],activeBoard[selectedSquare]['type'][0][posStop],activeBoard[selectedSquare]['extras'][0][posStop]];
	socket.emit('send square info', squareInfo);
	if(activeBoard[selectedSquare]['type'][0][posStop] == "addaone"){
		activeBoard[selectedSquare]['type'][0][posStop] = "money";
		activeBoard[selectedSquare]['values'][0][posStop] = 1000;
		activeBoard[selectedSquare]['text'][0][posStop] = "<sup>$</sup>1,000";
		activeBoard[selectedSquare]['color'][0][posStop] = "blue";
		activeBoard[selectedSquare]['extras'][0][posStop] = "";
	}
	if(activeBoard[selectedSquare]['type'][0][posStop] == "double"){
		activeBoard[selectedSquare]['type'][0][posStop] = "money";
		activeBoard[selectedSquare]['values'][0][posStop] = 1500;
		activeBoard[selectedSquare]['text'][0][posStop] = "<sup>$</sup>1,500";
		activeBoard[selectedSquare]['color'][0][posStop] = "blue";
		activeBoard[selectedSquare]['extras'][0][posStop] = "";
	}
});
//DISPLAY BG
socket.on("displayBg",function(data){
	goldBoard.className = 'show';
	if(data == 1){
		blueBoard.className = '';
		redBoard.className = '';
	}
	if(data == 3){
		blueBoard.className = 'show';
		redBoard.className = '';
	}
	if(data == 2){
		blueBoard.className = 'show';
		redBoard.className = 'show';
	}
});
//CLEAR BOARD LIGHTS
socket.on("clearBoardLights",function(data){
	unlightAllSquares();
});
//STANDBY MODE
socket.on("turnStandby",function(data){
	resetLights();
	resetBoard();
	clearInterval(boardBlinkTimer);
	unlightAllSquares();
	runBoardAnim(0);
	blueBoard.className = '';
	redBoard.className = '';
	boardCenter.className = "";
	document.getElementById("bg").className = '';
	document.getElementById("board_bg").className = '';
	document.getElementById("squares").className = '';
});
//LIGHT ALL SQUARES
socket.on("allLight",function(data){
	lightAllSquares();
});
function unlightAllSquares(){
	for(var x = 1;x<19;x++){
		var thisSquare = document.body.querySelector('.square[data-square="'+x+'"]');
		thisSquare.className = '';
		thisSquare.classList.add("square");
	}
}
function lightAllSquares(){
	for(var x = 1;x<19;x++){
		var thisSquare = document.body.querySelector('.square[data-square="'+x+'"]');
		thisSquare.className = '';
		thisSquare.classList.add("square");
		thisSquare.classList.add("active");
	}
}
var boardBlinkTimer;
//BOARD BLINKER
socket.on("boardBlinker",function(data){
	if(data==1){
		blinkOn = false;
		boardBlinkTimer = setInterval(boardLinkAction, 750);
	}
	if(data==0){
		clearInterval(boardBlinkTimer);
		unlightAllSquares();
	}
});
function boardLinkAction(){
	if(blinkOn){
		blinkOn = false;
		unlightAllSquares();
	} else {
		blinkOn = true;
		lightAllSquares();
	}
}
//BLACKOUT
socket.on("triggerBlackout",function(data){
	unlightAllSquares();
	runBoardAnim(1);
	document.getElementById("board_bg").className = 'preload';
	document.getElementById("squares").className = 'preload';
	document.getElementById("center").className = 'preload';
});
//GAME OPEN
socket.on("triggerShowOpen",function(data){
	loadGame();
	themeSfx.play();
	currentPlaying = 1;
	sfxPlayer = themeSfx;
});
//TOGGLE CENTER MONITOR
socket.on("toggleCenterMonitor",function(data){
	if (data[0] == 1){
		scoreCenter.style.display = "none";
		displayCenterMoneyMain(data[1]);
	} else {
		unflipCenter();
	}
});
//TOGGLE BONUS PODIUM
socket.on("toggleBonusPodium",function(data){
	if (data == 1){
		scoreCenter.style.display = "block";
	} else {
		scoreCenter.style.display = "none";
	}
});
//SHOW BONUS PODIUM MONEY
socket.on("showBonusPodMoney",function(data){
	scoreCenter.style.display = "block";
	document.getElementById("dollartotal").innerHTML = numberWithCommas(data);
});
//LOAD BONUS ROUND NUMBER
socket.on("loadBonusBoard",function(data){
	boardSpinSfx = document.getElementById("cycleSfx");
	scoreCenter.style.display = "none";
	displayCenterMoney(data);
});
//SHOW BONUS SPINS
socket.on("showBonusSpins",function(data){
	scoreCenter.style.display = "block";
	document.getElementById("dollartotal").innerHTML = numberWithCommas(data[1]);
	setTimeout(function(){ 
		document.getElementById("spinstotal").innerHTML = data[0];
		dingSfx.play();
		sfxPlayer = dingSfx;
	}, 3000);
});
//LIGHT MAIN PODIUM
socket.on("lightMainPod",function(data){
	document.getElementById("player1score").className = "";
	document.getElementById("player2score").className = "";
	document.getElementById("player3score").className = "";
	document.getElementById("player1score").classList.add("scorezone");
	document.getElementById("player2score").classList.add("scorezone");
	document.getElementById("player3score").classList.add("scorezone");
	if(data == 1){
		document.getElementById("player1score").classList.add("active");
	}
	if(data == 2){
		document.getElementById("player2score").classList.add("active");
	}
	if(data == 3){
		document.getElementById("player3score").classList.add("active");
	}
});
//CHOSE DIRECTION SQUARE
socket.on("moveDirectionSquare",function(data){
	if(data==1){
		chooseSquareA();
	}
	if(data==3){
		chooseSquareB();
	}
	if(data==2){
		chooseSquareA();
	}
	if(data==4){
		chooseSquareB();
	}
});
//TRIGGERED SFX
socket.on("triggerTheSFX",function(data){
	if(data==1){
		sfxPlayer = themeSfx;
		currentPlaying = 1;
		sfxPlayer.currentTime = 0;
		sfxPlayer.play();
	}
	if(data==2){
		sfxPlayer = shorterloopSfx;
		currentPlaying = 2;
		sfxPlayer.currentTime = 0;
		sfxPlayer.play();
	}
	if(data==3){
		sfxPlayer = stingSfx;
		currentPlaying = 3;
		sfxPlayer.currentTime = 0;
		sfxPlayer.play();
	}
	if(data==4){
		sfxPlayer = tobigboardSfx;
		currentPlaying = 4;
		sfxPlayer.currentTime = 0;
		sfxPlayer.play();
	}
	if(data==5){
		aud_fade(sfxPlayer,currentPlaying);
	}
	if(data==6){
		sfxPlayer.pause();
		sfxPlayer.currentTime = 0;
	}
});
function aud_fade(sfxPlayer,currentPlaying){
	if(currentPlaying == 1){
		soundSf = themeSfx;
	}
	if(currentPlaying == 2){
		soundSf = shorterloopSfx;
	}
	if(currentPlaying == 3){
		soundSf = stingSfx;
	}
	if(currentPlaying == 4){
		soundSf = tobigboardSfx;
	}
    var timer;
    if (soundSf.volume > 0) {
        soundSf.volume -= 0.005;
        timer = setTimeout(aud_fade,5);
    }
}
//TRIGGER BOARD ANIMATION
socket.on("triggerBgAnim",function(data){
	runBoardAnim(data);
});
function runBoardAnim(data){
	redBoard.className = "";
	blueBoard.className = "";
	goldBoard.className = "";
	if(data==1){
		goldBoard.classList.add("show");
		goldBoard.classList.add("vertblackout");
	}
	if(data==2){
		goldBoard.classList.add("show");
		goldBoard.classList.add("vertblink");
	}
	if(data==3){
		goldBoard.classList.add("show");
		goldBoard.classList.add("horblackout");
	}
	if(data==4){
		goldBoard.classList.add("show");
		goldBoard.classList.add("horblink");
	}
	if(data==5){
		goldBoard.classList.add("show");
		goldBoard.classList.add("diagonalblinkreverse");
	}
	if(data==6){
		goldBoard.classList.add("show");
		goldBoard.classList.add("diagonalblink");
	}
	if(data==7){
		blueBoard.classList.add("show");
		blueBoard.classList.add("blueblink");
	}
}