var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var express = require('express');
app.use(express.static('public'));

//VARIABLES
var userNames = [];
var userIds = [];
var answersLogged = [0,0,0,0];
var firstPlayer = 0;

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});
app.get('/play', function(req, res){
	res.sendFile(__dirname + '/player.html');
});
app.get('/producer', function(req, res){
	res.sendFile(__dirname + '/producer.html');
});
app.get('/host', function(req, res){
	res.sendFile(__dirname + '/host.html');
});

io.on('connection', function(socket){
// 	console.log(socket);
//   console.log('a user connected. game code is '+gameCode+" Player ID is "+playerId);
//   io.emit('clientConnect',playerId);
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  //SETUP THE GAME CODE
  socket.on('create game', function(gc){
    gameCode = gc;
    socket.join(gameCode);
	io.emit('sendHostCode', gameCode);
  });
  //START THE GAME
  socket.on('start game', function(typeOfGame){
	  io.emit('loadTheGame', typeOfGame);
//   	io.emit('clientSendQuestion', questionArray);
  });
  //SEND THE QUESTIOn
  socket.on('send question', function(questionArray){
	  answersLogged = [0,0,0,0];
	  firstPlayer = 0;
    io.emit('clientSendQuestion', questionArray);
  });
  //CHECK GAMECODE AND LOGIN
  	socket.on('login player', function(data){
	  sendData = [data[0],data[1],data[2]];
	  io.emit('checkUsername', sendData);
	  if (gameCode == data[1]){
	 	 socket.join(gameCode);
	  }
  	});
  	//CHECKED USERNAME
  	socket.on('checked username', function(checkVal){
		if (checkVal[0] == "roomfull"){
			io.emit('loginError', 4);  
		}
		if (checkVal[0] == "nameused"){
			io.emit('loginError', 1); 
		}
		if (checkVal[0] == "codebad"){
			io.emit('loginError', 2); 
		}
		if (checkVal[0] == "allbad"){
			io.emit('loginError', 3); 
		}
		if (checkVal[0] == "valid"){
			userInfo = [checkVal[1], checkVal[2], checkVal[3]];
			io.in(gameCode).emit('loginSuccessful', userInfo);
			io.in(gameCode).emit('showUsername', 1);
		}
	  });
  //STOP THE BOARD
  socket.on('stop board', function(msg){
    io.emit('clientstop', 'this is working');
  });
  //START THE BOARD
  socket.on('start board', function(msg){
    io.emit('startBoard', 'this is working');
  });
  //CHECK AND STORE ANSWER
  	socket.on('transmit answer', function(data){
	  	firstCheck = "no";
	  	if (firstPlayer == 0){
		  	firstCheck = "yes";
		  	firstPlayer = data[3];
	  	}
	  playerIndex = userIds.indexOf(data[3]);
	  answersLogged[playerIndex] = data[0];
	  io.in(data[2]).emit('answerToHost', [data[0],data[1],firstCheck]);
  	});
  	//HAND OUT SPINS
  	socket.on('give spins', function(correctAnswer){
	  	io.in(correctAnswer[1]).emit('awardSpins', [correctAnswer[0],firstPlayer]);
  	});
  	//DISPLAY THE SPINS
  	//STOP THE BOARD
	socket.on('stop board', function(msg){
	    io.emit('clientstop', 'this is working');
	});
	//SYNC PLAYER TO BOARD AND HOST
	socket.on('sync player', function(data){
		//MAKE FUNCTION FOR HOST
	  io.emit('syncPlayer', data);
  	});
  	//TOGGLE THE PODIUM
  	socket.on('podium toggle', function(data){
	  io.emit('togglePodium', data);
  	});
  	//BLINK Q PODIUM
  	socket.on('blink q pod', function(podNums){
	  	io.emit('podsBlink', podNums);
  	});
  	//PLAYER HAS LOGGED IN
  	socket.on('logged in', function(playerVal){
	  	socket.broadcast.to(playerVal[1]).emit('standbyGame', playerVal);
	  	io.emit('newPlayerHost', playerVal);
  	});
  	//START ROUND
  	socket.on('start round', function(roundNum){
		if (roundNum == 0){
			io.emit('showbuzzer', 0);
			io.emit('startRound', 0);
		}
		if (roundNum == 1){
			io.emit('startRound', 1);
			io.emit('showbuzzer', 1);
		}
		if (roundNum == 2){
			io.emit('startRound', 2);
			io.emit('showbuzzer', 2);
		}
		if (roundNum == 3){
			io.emit('showbuzzer', 3);
			io.emit('startRound', 3);
		}
  	});
  	//ACTIVATE BUZZERS
  	socket.on('activate buzzers', function(buzzerNums){
	  	buzzersActive = true;
		io.emit('activateBuzzers', buzzerNums);
  	});
  	//QUESTION BUZZIN
  	socket.on('question buzzin', function(buzzerStats){
	  	if(buzzersActive){
	  		buzzersActive = false;
	  		io.emit('activateBuzzers', [0]);
	  		io.emit('lockoutBuzzer', buzzerStats);
		}
  	});
  	//ADD SPINS
  	socket.on('add spins', function(spinStats){
	  	io.emit('addSpins', spinStats);
  	});
  	//TRANSMIT WHAMMIES
  	socket.on('transmit whammy', function(whamStats){
	  	io.emit('transmitWhammy', whamStats);
  	});
  	//PASS SPINS WHAMMIES
  	socket.on('pass spins', function(spinStats){
	  	io.emit('passSpins', spinStats);
  	});
  	//TIME UP SFX
  	socket.on('timeup', function(data){
	  	io.emit('timesup', data);
  	});
  	//TRANSMIT ANSWERS
  	socket.on('transmit answers', function(aData){
	  	io.emit('sendTheAnswers', aData);
  	});
  	//REVEAL ANSWERS
  	socket.on('reveal answer', function(rightAnswer){
	  	io.emit('showTheAnswer', rightAnswer);
  	});
  	//ADD SQUARE
  	socket.on('add square', function(playerNum){
	  	io.emit('getSquareInfo', playerNum);
  	});
  	//SENT SQUARE INFO
  	socket.on('send square info', function(squareInfo){
	  	io.emit('sendSquareInfo', squareInfo);
  	});
  	//START THE BOARD
	  socket.on('display bg', function(bgColor){
	    io.emit('displayBg', bgColor);
	  });
	  //CLEAR BOARD LIGHTS
	  socket.on('clear board lights', function(data){
	    io.emit('clearBoardLights', 1);
	  });
	  //STANDBY MODE
	  socket.on('standby mode', function(data){
	    io.emit('turnStandby', 1);
	  });
	  //LIGHT ALL SQUARES
	  socket.on('all squares lit', function(data){
	    io.emit('allLight', 1);
	  });
	  //TOGGLE BLINKING BOARD
	  socket.on('blink all squares', function(data){
	    io.emit('boardBlinker', data);
	  });
	  //TRIGGER BLACKOUT
	  socket.on('trigger blackout', function(data){
	    io.emit('triggerBlackout', data);
	  });
	  //TRIGGER OPENING
	  socket.on('start opening', function(data){
	    io.emit('triggerShowOpen', data);
	  });
	  //TOGGLE CENTER MONITOR
	  socket.on('toggle center monitor', function(data){
	    io.emit('toggleCenterMonitor', data);
	  });
	  //TOGGLE BONUS PODIUM
	  socket.on('toggle bonus podium', function(data){
	    io.emit('toggleBonusPodium', data);
	  });
	  //SHOW BONUS PDOIUM MONEY
	  socket.on('show bonus money', function(data){
	    io.emit('showBonusPodMoney', data);
	  });
	  //LOAD BONUS BOARD
	  socket.on('load bonus board', function(data){
	    io.emit('loadBonusBoard', data);
	  });
	  //DISPLAY BONUS SPINS
	  socket.on('display bonus spins', function(data){
	    io.emit('showBonusSpins', data);
	  });
	  //LIGHT MAIN PODIUM
	  socket.on('light main pod', function(data){
	    io.emit('lightMainPod', data);
	  });
	  //DIRECTIONAL SQUARE CHOSEN
	  socket.on('directional square', function(directionChosen){
	    io.emit('moveDirectionSquare', directionChosen);
	  });
	  //TRANSMIT MSG TO HOST
	  socket.on('transmit msg', function(msgSent){
	    io.emit('transmitHostMsg', msgSent);
	  });
	  //SEND HOST QUESTION
	  socket.on('transmit host question', function(theQ){
	    io.emit('transmitHostQ', theQ);
	  });
	  //TRIGGER SFX
	  socket.on('trigger sfx', function(sfxId){
	    io.emit('triggerTheSFX', sfxId);
	  });
	  //TRIGGER BOARD ANIMATION
	  socket.on('trigger board animation', function(animId){
	    io.emit('triggerBgAnim', animId);
	  });
	  //BOARD LIGHT BOUNCE
	  socket.on('board light bounce', function(selectedSquare,usedSquares,canSpin){
	    io.emit('boardLtBn', selectedSquare,usedSquares,canSpin);
	  });
	  //BOARD LIGHT BOUNCE
	  socket.on('send stops board', function(allStops,type){
	    io.emit('cycleBoardStops', allStops,type);
	  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

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

function makeid(length) {
   var result           = '';
   var characters       = '0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

var gameCode = makeid(6);