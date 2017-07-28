$(document).ready(function(){
var id;
var arr = [];
var speakerID;
var score = 0;
/*var show = setInterval(function(){
	showRunner()
}, 3000);
*/

timeRunner();
function timeRunner(){
	do {
		setTimeout(function(){ showRunner(); }, 1000);
	}
	while (id == null)
	alert("game over");
}
	

function showRunner(){
	speakerID = randomNumber();
	if(speakerID == 1){
		var audio1 = new Audio('1.mp3');
		audio1.play();
	}else if(speakerID == 2){
		var audio2 = new Audio('2.mp3');
		audio2.play();
	}else if(speakerID == 3){
		var audio1 = new Audio('3.mp3');
		audio3.play();
	}else if(speakerID == 4){
		var audio4 = new Audio('4.mp3');
		audio4.play();
	}else{
		var audio5 = new Audio('5.mp3');
		audio5.play();
	}
}

function randomNumber(){
	 return Math.floor(Math.random()*(5-1+1)+1);
}

$(".click").click(function(){
	id = $(this).attr("id");
	if(id == 1){
		var useraudio1 = new Audio('user1.mp3');
		useraudio1.play();
	}
	else if (id == 2){
		var useraudio2 = new Audio('user2.mp3');
		useraudio2.play();
	}
	else if (id == 3){
		var useraudio3 = new Audio('user3.mp3');
		useraudio3.play();
	}
	else if (id == 4){
		var useraudio4 = new Audio('user4.mp3');
		useraudio4.play();
	}
	else {
		var useraudio5 = new Audio('user5.mp3');
		useraudio5.play();
	}
	
	if(speakerID == id){
		score++;
		// stop current playing music
		
		
	}else{
		// stop the playing audio.
		alert("game over");
	}
});



})