$(document).ready(function(){
var id;
var arr = [];
var speakerID;
var score = 0;
var time;

$('#start').click(function(){

$("#scorelabel").text(score);
showRunner()

function checkClick() {
time = setInterval(function () {
	gameOver();
}, 1500);
}


function showRunner(){
	speakerID = randomNumber();
	if(speakerID == 1){
		var audio1 = new Audio('kickcenter.wav');
		audio1.play();
	}else if(speakerID == 2){
		var audio2 = new Audio('kickleft.wav');
		audio2.play();
	}else if(speakerID == 3){
		var audio3 = new Audio('kickright.wav');
		audio3.play();
	}/*else if(speakerID == 4){
		var audio4 = new Audio('4.mp3');
		audio4.play();
	}else{
		var audio5 = new Audio('5.mp3');
		audio5.play();
	}*/
	checkClick();
}

function randomNumber(){
	 return Math.floor(Math.random()*(3-1+1)+1);
}

$(".click").click(function(){
	id = $(this).attr("id");
	if(id == 1){
		var useraudio1 = new Audio('snarecenter.wav');
		useraudio1.play();
	}
	else if (id == 2){
		var useraudio2 = new Audio('snareleft.wav');
		useraudio2.play();
	}
	else if (id == 3){
		var useraudio3 = new Audio('snareright.wav');
		useraudio3.play();
	}
	/*else if (id == 4){
		var useraudio4 = new Audio('user4.mp3');
		useraudio4.play();
	}
	else {
		var useraudio5 = new Audio('user5.mp3');
		useraudio5.play();
	}*/
	
	if(speakerID == id){
		score++;
		$("#scorelabel").text(score);
		clearInterval(time);
		setTimeout(function(){ showRunner(); }, 1000);
		
		
	}else{
		gameOver();
	}
});

function gameOver() {
	$("#scorelabel").text("GAME OVER!! Your score: " +score);
	$("#start").hide();
	$("#replay").show();
}

})

$('#replay').click(function(){
	location.reload();
})
})