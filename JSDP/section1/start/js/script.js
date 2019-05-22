var leadself = 'Me: ',
		leadcomputer = "PC: ",
		aSaid= ["This is a Cyber Chat"],
		msgYes = "Yes, that's a great idea.",
		msgNo = "No, that must be a mistake.",
		aSassyStuff = ["Like mold on books, grow myths on history.",
									"She moved like a poem and smiled like a sphinx.",
									"As long as we don’t die, this is gonna be one hell of a story.",
									"She laughed, and the desert sang.",
									"You’ve got about as much charm as a dead slug."];



function talk(msg) {
	echo(leadself + msg);
}

function replayYesNo() {
	// Ternary operator
	var message = Math.random()>0.5 ? msgYes : msgNo;

	echo(leadcomputer + message);
}
function saySassyStuff() {
	var message =  aSassyStuff[ Math.floor(Math.random() * aSassyStuff.length) ];

	echo(leadcomputer + message);
}

//Echo method
function echo(msg) {
	aSaid.push("<div>" + msg + "</div>");

	//Displays only 6 lines of replies
	var aSaidLenght = aSaid.length,
		start = Math.max(aSaidLenght - 6,0),
		out = "";

	for(var i = start; i <aSaidLenght; i++){
		out += aSaid[i];
	}

	document.querySelector('.advert').innerHTML = out;
	document.getElementById('talk').innerHTML = '<span>' + msg + '</span>';
}







