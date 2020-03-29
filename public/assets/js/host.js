//PLAYER 1
var player1Name = document.getElementsByName("player1name")[0];
var player1Score = document.getElementsByName("player1score")[0];
var player1Earned = document.getElementsByName("player1earned")[0];
var player1Passed = document.getElementsByName("player1passed")[0];
var player1Whammy = document.getElementsByName("player1whammies")[0];
//PLAYER 1
var player2Name = document.getElementsByName("player2name")[0];
var player2Score = document.getElementsByName("player2score")[0];
var player2Earned = document.getElementsByName("player2earned")[0];
var player2Passed = document.getElementsByName("player2passed")[0];
var player2Whammy = document.getElementsByName("player2whammies")[0];
//PLAYER 1
var player3Name = document.getElementsByName("player3name")[0];
var player3Score = document.getElementsByName("player3score")[0];
var player3Earned = document.getElementsByName("player3earned")[0];
var player3Passed = document.getElementsByName("player3passed")[0];
var player3Whammy = document.getElementsByName("player3whammies")[0];
//QUESTION INTERFACE
var questionHolder = document.getElementsByName("question")[0];
var answer1 = document.getElementsByName("answer1")[0];
var answer2 = document.getElementsByName("answer2")[0];
var answer3 = document.getElementsByName("answer3")[0];

//RECEIVE MESSAGE
socket.on("transmitHostMsg",function(data){
	document.getElementsByName("message")[0].value = data;
});
//PLAYER HAS JOINED
socket.on("newPlayerHost",function(data){
	document.getElementsByName("player"+data[0]+"name")[0].value = data[2];
});
//START ROUND
socket.on('startRound',function(data) {
	if(data == 0){
		roundNumber = 0;
		document.getElementsByClassName("board_area")[0].style.display = "none";
		document.getElementsByClassName("bonus_area")[0].style.display = "none";
		document.getElementsByClassName("question_area")[0].style.display = "flex";
	}
	if(data == 1){
		roundNumber = 1;
		document.getElementsByClassName("board_area")[0].style.display = "flex";
		document.getElementsByClassName("question_area")[0].style.display = "none";
		document.getElementsByClassName("bonus_area")[0].style.display = "none";
		document.getElementsByName('roundnumber')[0].value = 1;
		document.getElementsByName('spinstaken')[0].value = 0;
		document.getElementsByName('totalmoney')[0].value = parseInt(player1Score.value.replace("$","")) + parseInt(player2Score.value.replace("$","")) + parseInt(player3Score.value.replace("$",""));
		document.getElementsByName('totalwhammies')[0].value = parseInt(player1Whammy.value) + parseInt(player2Whammy.value) + parseInt(player3Whammy.value);
	}
	if(data == 2){
		roundNumber = 2;
		document.getElementsByClassName("board_area")[0].style.display = "flex";
		document.getElementsByClassName("question_area")[0].style.display = "none";
		document.getElementsByClassName("bonus_area")[0].style.display = "none";
		document.getElementsByName('roundnumber')[0].value = 2;
		document.getElementsByName('spinstaken')[0].value = 0;
		document.getElementsByName('totalmoney')[0].value = parseInt(player1Score.value.replace("$","")) + parseInt(player2Score.value.replace("$","")) + parseInt(player3Score.value.replace("$",""));
		document.getElementsByName('totalwhammies')[0].value = parseInt(player1Whammy.value) + parseInt(player2Whammy.value) + parseInt(player3Whammy.value);
	}
	if(data == 3){
		roundNumber = 3;
		document.getElementsByClassName("board_area")[0].style.display = "none";
		document.getElementsByClassName("question_area")[0].style.display = "none";
		document.getElementsByClassName("player_area")[0].style.display = "none";
		document.getElementsByClassName("bonus_area")[0].style.display = "flex";
		var p1Score = document.getElementsByName("player1score")[0].value.replace("$","").replace(",","");
		var p2Score = document.getElementsByName("player2score")[0].value.replace("$","").replace(",","");
		var p3Score = document.getElementsByName("player3score")[0].value.replace("$","").replace(",","");
		p1Score = parseInt(p1Score);
		p2Score = parseInt(p2Score);
		p3Score = parseInt(p3Score);
		if(p1Score > p2Score && p1Score > p3Score){
			document.getElementsByName("safetotal")[0].value = player1Score.value;
			document.getElementsByName("champname")[0].value = player1Name.value;
		}
		if(p2Score > p1Score && p2Score > p3Score){
			document.getElementsByName("safetotal")[0].value = player2Score.value;
			document.getElementsByName("champname")[0].value = player2Name.value;
		}
		if(p3Score > p2Score && p3Score > p2Score){
			document.getElementsByName("safetotal")[0].value = player3Score.value;
			document.getElementsByName("champname")[0].value = player3Name.value;
		}
	}
	grandWinnings();
});
//GET GRAND TOTAL WINNINGS
function grandWinnings(){
	var bonusScore = document.getElementsByName("bonustotal")[0].value.replace("$","").replace(",","");
	var safeTotal = document.getElementsByName("safetotal")[0].value.replace("$","").replace(",","");
	bonusScore = parseInt(bonusScore);
	safeTotal = parseInt(safeTotal);
	combinedTotal = bonusScore + safeTotal;
	document.getElementsByName("totalwinnings")[0].value = "$"+numberWithCommas(combinedTotal);
}
socket.on('syncPlayer',function(playerData) {
	if(playerData[6] == 2){
		
	} else {
		if(playerData[0] == 1){
			player1Name.value = playerData[1];
			player1Score.value = "$"+numberWithCommas(playerData[2]);
			player1Earned.value = playerData[3];
			player1Passed.value = playerData[4];
			player1Whammy.value = playerData[5];
		}
		if(playerData[0] == 2){
			player2Name.value = playerData[1];
			player2Score.value = "$"+numberWithCommas(playerData[2]);
			player2Earned.value = playerData[3];
			player2Passed.value = playerData[4];
			player2Whammy.value = playerData[5];
		}
		if(playerData[0] == 3){
			player3Name.value = playerData[1];
			player3Score.value = "$"+numberWithCommas(playerData[2]);
			player3Earned.value = playerData[3];
			player3Passed.value = playerData[4];
			player3Whammy.value = playerData[5];
		}
		if(playerData[0] == 4){
			console.log(playerData);
			document.getElementsByName("bonustotal")[0].value = "$"+numberWithCommas(playerData[2]);
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
//GLOBAL COMMAS
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
//RECEIVE QUESTION
socket.on('transmitHostQ',function(data) {
	questionHolder.value = data;
});
//RECEIVE ANSWERS
socket.on('sendTheAnswers',function(data) {
	answer1.value = data[0];
	answer2.value = data[1];
	answer3.value = data[2];
	if(data[0] == data[3]){
		answer1.className = "correct";
	} else {
		answer1.className = "wrong";
	}
	if(data[1] == data[3]){
		answer2.className = "correct";
	} else {
		answer2.className = "wrong";
	}
	if(data[2] == data[3]){
		answer3.className = "correct";
	} else {
		answer3.className = "wrong";
	}
});
//TRIGGER PLAYER INDICATOR
//LOCKOUT TRIGGERED
socket.on('lockoutBuzzer',function(data) {
	player1Active = false;
	player2Active = false;
	player3Active = false;
	if(data[1] == 1){
		document.getElementById("player1col").classList.add("col");
		document.getElementById("player1col").classList.add("active");
		player1Active = true;
	}
	if(data[1] == 2){
		document.getElementById("player2col").classList.add("col");
		document.getElementById("player2col").classList.add("active");
		player1Active = true;
	}
	if(data[1] == 3){
		document.getElementById("player3col").classList.add("col");
		document.getElementById("player3col").classList.add("active");
		player1Active = true;
	}
});
//CLEAR ALL
//BLINK QUESTION PODIUM
socket.on('podsBlink',function(data) {
	arrayHunt = data[0];
	document.getElementById("player1col").className = "col";
	document.getElementById("player2col").className = "col";
	document.getElementById("player3col").className = "col";
	questionHolder.value = "";
	answer1.value = "";
	answer2.value = "";
	answer3.value = "";
	answer1.className="";
	answer2.className="";
	answer3.className="";
});
//ADD SPINS
socket.on('addSpins',function(data) {
	if(data[0] == 1){
		player1Earned.value = data[1];
	}
	if(data[0] == 2){
		player2Earned.value = data[1];
	}
	if(data[0] == 3){
		player3Earned.value = data[1];
	}
});
//PASS SPINS
socket.on('passSpins',function(data) {
	document.getElementsByName('player'+data[0][0]+'earned')[0].value = 0;
	document.getElementsByName('player'+data[1][0]+'passed')[0].value = data[1][1];
});
//TRANSMIT WHAMMY
socket.on('transmitWhammy',function(data) {
	if(roundNumber == 3){
		document.getElementsByName('bonuswhammies')[0].value = data[1];
	} else {
		document.getElementsByName('player'+data[0]+'whammies')[0].value = data[1];
	}
});
//GET SQUARE VALUE AND PARSE
socket.on('sendSquareInfo',function(squareInfo) {
	if(canAdd){
		canAdd = false;
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
			if(playerNum !== 4){
// 				document.getElementsByName('totallost')[0].value = parseInt(document.getElementsByName('totallost')[0].value.replace("$","").replace(",","")) + parseInt(document.getElementsByName(playerNumberFull+"score")[0].value.replace("$","").replace(",",""));
			}
			document.getElementsByName('totalwhammies')[0].value = parseInt(document.getElementsByName('totalwhammies')[0].value) + 1;
		} else if(squareType == "addaone"){
			currentScore = "1"+document.getElementsByName(playerNumberFull+"score")[0].value;
			playerScoreNew = parseInt(currentScore);
		} else if(squareType == "double"){
			playerScoreNew = parseInt(document.getElementsByName(playerNumberFull+"score")[0].value) * 2;
		} else {
			if(playerNum == 4){
				playerScoreNew = parseInt(document.getElementsByName("bonustotal")[0].value.replace("$","").replace(",","")) + squareValue;
			} else {
				playerScoreNew = parseInt(document.getElementsByName(playerNumberFull+"score")[0].value) + squareValue;
			}
		}
		if(playerNum == 4){
			document.getElementsByName("bonustotal")[0].value = "$"+numberWithCommas(playerScoreNew);
			document.getElementsByName("targetdistance")[0].value = "$"+numberWithCommas((500000-playerScoreNew));
			
			grandWinnings();
		} else {
			document.getElementsByName(playerNumberFull+"score")[0].value = playerScoreNew;
			getScoreDifference(0,playerNum);
		}
		if (squareExtras !== "plus"){
			if(playerNum == 4){
				playerSpinsNew = parseInt(document.getElementsByName("bonusspinstotake")[0].value) - 1;
				document.getElementsByName("bonusspinstotake")[0].value = playerSpinsNew;
			} else {
				playerSpinsNew = parseInt(document.getElementsByName(playerNumberFull+"earned")[0].value) - 1;
				document.getElementsByName(playerNumberFull+"earned")[0].value = playerSpinsNew;
			}
		}
		if(playerNum == 4){
			document.getElementsByName('totalspinstaken')[0].value = parseInt(document.getElementsByName('spinstaken')[0].value) + 1;
		} else {
			document.getElementsByName('spinstaken')[0].value = parseInt(document.getElementsByName('spinstaken')[0].value) + 1;
			
		}
	}
});
//GET SCORE DIFFERENCE
function getScoreDifference(playerNumberFull,playerNum){
	setTimeout(function(){ 
		var p1Score = document.getElementsByName("player1score")[0].value.replace("$","").replace(",","");
		var p2Score = document.getElementsByName("player2score")[0].value.replace("$","").replace(",","");
		var p3Score = document.getElementsByName("player3score")[0].value.replace("$","").replace(",","");
		p1Score = parseInt(p1Score);
		p2Score = parseInt(p2Score);
		p3Score = parseInt(p3Score);
		scoresArray = [p1Score,p2Score,p3Score];
		scoresArraySort = [p1Score,p2Score,p3Score];
		dif1to2 = p1Score - p2Score;
		dif1to3 = p1Score - p3Score;
		dif2to1 = p2Score - p1Score;
		dif2to3 = p2Score - p3Score;
		dif3to1 = p3Score - p1Score;
		dif3to2 = p3Score - p2Score;
		totalScores = p1Score + p2Score + p3Score;
		document.getElementsByName("totalmoney")[0].value = "$"+numberWithCommas(totalScores);
		//CHECK FOR PLAYER 1
 		scoresArraySort.sort(function(a, b){return a-b});
		scoresArraySort.reverse();
		diffFirstSecond = scoresArraySort[0] - scoresArraySort[1];
		diffFirstThird = scoresArraySort[0] - scoresArraySort[2];
		diffSecondThird = scoresArraySort[1] - scoresArraySort[2];
		firstPlace = indexOfMax(scoresArray);
		scoresArray[firstPlace] = -5;
		firstPlacePlayer = firstPlace + 1;
		secondPlace = indexOfMax(scoresArray);
		scoresArray[secondPlace] = -5;
		secondPlacePlayer = secondPlace + 1;
		thirdPlace = indexOfMax(scoresArray);
		scoresArray[thirdPlace] = 0-5;
		thirdPlacePlayer = thirdPlace + 1;
		if (playerNum == firstPlacePlayer){
			if(diffFirstSecond == 0 && diffSecondThird == 0){
				document.getElementsByName("distancefirst")[0].value = "ALL PLAYERS TIED";
				document.getElementsByName("distancesecond")[0].value = "ALL PLAYERS TIED";
				document.getElementsByName("distancethird")[0].value = "ALL PLAYERS TIED";
				document.getElementsByName("whopasto")[0].value = "TIE | PLAYER CHOOSES";
			} else if(diffFirstSecond == 0){
				document.getElementsByName("distancefirst")[0].value = "$0 (TIED FOR FIRST WITH "+document.getElementsByName('player'+secondPlacePlayer+'name')[0].value+")";
				document.getElementsByName("distancesecond")[0].value = "$0 (TIED FOR FIRST WITH "+document.getElementsByName('player'+secondPlacePlayer+'name')[0].value+")";
				document.getElementsByName("distancethird")[0].value = "$"+numberWithCommas(diffFirstThird)+" AHEAD OF "+document.getElementsByName('player'+thirdPlacePlayer+'name')[0].value+"";
				document.getElementsByName("whopasto")[0].value = document.getElementsByName('player'+secondPlacePlayer+'name')[0].value;
			} else {
				document.getElementsByName("distancefirst")[0].value = "IN FIRST PLACE";
				document.getElementsByName("distancesecond")[0].value = "$"+numberWithCommas(diffFirstSecond)+" AHEAD OF "+document.getElementsByName('player'+secondPlacePlayer+'name')[0].value+"";
				document.getElementsByName("distancethird")[0].value = "$"+numberWithCommas(diffFirstThird)+" AHEAD OF "+document.getElementsByName('player'+thirdPlacePlayer+'name')[0].value+"";
				document.getElementsByName("whopasto")[0].value = document.getElementsByName('player'+secondPlacePlayer+'name')[0].value;
			}
			
		}
		if (playerNum == secondPlacePlayer){
			if(diffFirstSecond == 0 && diffSecondThird == 0){
				document.getElementsByName("distancefirst")[0].value = "ALL PLAYERS TIED";
				document.getElementsByName("distancesecond")[0].value = "ALL PLAYERS TIED";
				document.getElementsByName("distancethird")[0].value = "ALL PLAYERS TIED";
				document.getElementsByName("whopasto")[0].value = "TIE | PLAYER CHOOSES";
			} else if(diffFirstSecond == 0){
				document.getElementsByName("distancefirst")[0].value = "$0 (TIED FOR FIRST WITH "+document.getElementsByName('player'+firstPlacePlayer+'name')[0].value+")";
				document.getElementsByName("distancesecond")[0].value = "$0 (TIED FOR FIRST WITH "+document.getElementsByName('player'+firstPlacePlayer+'name')[0].value+")";
				document.getElementsByName("distancethird")[0].value = "$"+numberWithCommas(diffFirstThird)+" AHEAD OF "+document.getElementsByName('player'+thirdPlacePlayer+'name')[0].value+"";
				document.getElementsByName("whopasto")[0].value = "TIE | PLAYER CHOOSES";
			} else if(diffSecondThird == 0){
				document.getElementsByName("distancefirst")[0].value = "$"+numberWithCommas(diffFirstSecond)+" BEHIND "+document.getElementsByName('player'+firstPlacePlayer+'name')[0].value+"";
				document.getElementsByName("distancesecond")[0].value = "$0 (TIED FOR SECOND WITH "+document.getElementsByName('player'+thirdPlacePlayer+'name')[0].value+")";
				document.getElementsByName("distancethird")[0].value = "$0 (TIED FOR SECOND WITH "+document.getElementsByName('player'+thirdPlacePlayer+'name')[0].value+")";
				document.getElementsByName("whopasto")[0].value = document.getElementsByName('player'+firstPlacePlayer+'name')[0].value;
			} else {
				document.getElementsByName("distancefirst")[0].value = "$"+numberWithCommas(diffFirstSecond)+" BEHIND "+document.getElementsByName('player'+firstPlacePlayer+'name')[0].value+"";
				document.getElementsByName("distancesecond")[0].value = "IN SECOND PLACE";
				document.getElementsByName("distancethird")[0].value = "$"+numberWithCommas(diffSecondThird)+" AHEAD OF "+document.getElementsByName('player'+thirdPlacePlayer+'name')[0].value+"";
				document.getElementsByName("whopasto")[0].value = document.getElementsByName('player'+firstPlacePlayer+'name')[0].value;
			}
		}
		if (playerNum == thirdPlacePlayer){
			if(diffFirstSecond == 0 && diffSecondThird == 0){
				document.getElementsByName("distancefirst")[0].value = "ALL PLAYERS TIED";
				document.getElementsByName("distancesecond")[0].value = "ALL PLAYERS TIED";
				document.getElementsByName("distancethird")[0].value = "ALL PLAYERS TIED";
				document.getElementsByName("whopasto")[0].value = "TIE | PLAYER CHOOSES";
			} else if(diffSecondThird == 0){
				document.getElementsByName("distancefirst")[0].value = "$"+numberWithCommas(diffFirstThird)+" BEHIND "+document.getElementsByName('player'+firstPlacePlayer+'name')[0].value+"";
				document.getElementsByName("distancesecond")[0].value = "$0 (TIED FOR SECOND WITH "+document.getElementsByName('player'+secondPlacePlayer+'name')[0].value+")";
				document.getElementsByName("distancethird")[0].value = "$0 (TIED FOR SECOND WITH "+document.getElementsByName('player'+secondPlacePlayer+'name')[0].value+")";
				document.getElementsByName("whopasto")[0].value = document.getElementsByName('player'+firstPlacePlayer+'name')[0].value;
			} else {
				if(diffFirstSecond == 0){
					document.getElementsByName("distancefirst")[0].value = "$"+numberWithCommas(diffSecondThird)+" BEHIND "+document.getElementsByName('player'+firstPlacePlayer+'name')[0].value+"";
					document.getElementsByName("distancesecond")[0].value = "$"+numberWithCommas(diffSecondThird)+" BEHIND "+document.getElementsByName('player'+secondPlacePlayer+'name')[0].value+"";
					document.getElementsByName("distancethird")[0].value = "IN THIRD PLACE";
					document.getElementsByName("whopasto")[0].value = "TIE | PLAYER CHOOSES";
				} else {
					document.getElementsByName("distancefirst")[0].value = "$"+numberWithCommas(diffFirstThird)+" BEHIND "+document.getElementsByName('player'+firstPlacePlayer+'name')[0].value+"";
					document.getElementsByName("distancesecond")[0].value = "$"+numberWithCommas(diffSecondThird)+" BEHIND "+document.getElementsByName('player'+secondPlacePlayer+'name')[0].value+"";
					document.getElementsByName("distancethird")[0].value = "IN THIRD PLACE";
					document.getElementsByName("whopasto")[0].value = document.getElementsByName('player'+firstPlacePlayer+'name')[0].value;
				}
			}
		}
		
// 		whoPassTo();
	}, 100);
}
//WHO ARE SPINS PASSED TO
function whoPassTo(){
	var p1Score = document.getElementsByName("player1score")[0].value.replace("$","").replace(",","");
	var p2Score = document.getElementsByName("player2score")[0].value.replace("$","").replace(",","");
	var p3Score = document.getElementsByName("player3score")[0].value.replace("$","").replace(",","");
	p1Score = parseInt(p1Score);
	p2Score = parseInt(p2Score);
	p3Score = parseInt(p3Score);	
	if(p1Score > p2Score && p1Score > p3Score){
		if (p2Score > p3Score){
			document.getElementsByName("whopasto")[0].value = document.getElementsByName("player2name")[0].value;
		} else if (p3Score > p2Score){
			document.getElementsByName("whopasto")[0].value = document.getElementsByName("player3name")[0].value;
		} else {
			document.getElementsByName("whopasto")[0].value = "TIE | PLAYER CHOOSES";
		}
	}
	if(p2Score > p1Score && p2Score > p3Score){
		if (p1Score > p3Score){
			document.getElementsByName("whopasto")[0].value = document.getElementsByName("player1name")[0].value;
		} else if (p3Score > p1Score){
			document.getElementsByName("whopasto")[0].value = document.getElementsByName("player3name")[0].value;
		} else {
			document.getElementsByName("whopasto")[0].value = "TIE | PLAYER CHOOSES";
		}
	}
	if(p3Score > p1Score && p3Score > p2Score){
		if (p1Score > p2Score){
			document.getElementsByName("whopasto")[0].value = document.getElementsByName("player1name")[0].value;
		} else if (p2Score > p1Score){
			document.getElementsByName("whopasto")[0].value = document.getElementsByName("player2name")[0].value;
		} else {
			document.getElementsByName("whopasto")[0].value = "TIE | PLAYER CHOOSES";
		}
	}
}
//LIGHT UP PLAYER IN CONTROL
//LIGHT MAIN PODIUM
socket.on("lightMainPod",function(data){
	document.getElementById("player1col").className = "";
	document.getElementById("player2col").className = "";
	document.getElementById("player3col").className = "";
	document.getElementById("player1col").classList.add("col");
	document.getElementById("player2col").classList.add("col");
	document.getElementById("player3col").classList.add("col");
	if(data == 1){
		document.getElementById("player1col").classList.add("active");
		getScoreDifference(0,1);
	}
	if(data == 2){
		document.getElementById("player2col").classList.add("active");
		getScoreDifference(0,2);
	}
	if(data == 3){
		document.getElementById("player3col").classList.add("active");
		getScoreDifference(0,3);
	}
});
//LOAD BONUS ROUND NUMBER
socket.on("loadBonusBoard",function(data){
	document.getElementsByName("bonusroundnumber")[0].value = data;
	if(data==1){
		document.getElementsByName("bonusspinstotake")[0].value = 5;
	} else if(data==2){
		document.getElementsByName("bonusspinstotake")[0].value = 4;
	} else {
		document.getElementsByName("bonusspinstotake")[0].value = 3;
	}
});
//MAX INDEX
function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}
//BOARD STARTED
socket.on("startBoard",function(data){
	canAdd = true;
});