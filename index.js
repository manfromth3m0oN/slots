var list = [
	"./assets/bar.png",
	"./assets/bell.png",
	"./assets/cherry.png",
	"./assets/clover.png",
	"./assets/coin.png",
	"./assets/diamond.png",
	"./assets/grapes.png",
	"./assets/heart.png",
	"./assets/horseshoe.png",
	"./assets/lemon.png",
	"./assets/orange.png",
	"./assets/plum.png",
	"./assets/question.png",
	"./assets/seven.png",
	"./assets/watermelon.png"
];

let tokens = 0

if (localStorage.getItem("tokens")){
	tokens = localStorage.getItem("tokens")
} else {
	tokens = 100
}
document.getElementById("tokens").innerHTML = tokens; 
function changeReels() {
	if (tokens != 0) {
	tokens--;
	document.getElementById("tokens").innerHTML = tokens; 
	index1 = Math.floor(Math.random() * 10);
	index2 = Math.floor(Math.random() * 10);
	index3 = Math.floor(Math.random() * 10);
	index4 = Math.floor(Math.random() * 10);
	index5 = Math.floor(Math.random() * 10);
	
	const indexes = [index1, index2, index3, index4, index5]
	console.log(indexes)
	
	var image = document.getElementById('reel1');
	image.src=list[index1];
	var image = document.getElementById('reel2');
	image.src=list[index2];
	var image = document.getElementById('reel3');
	image.src=list[index3];
	var image = document.getElementById('reel4');
	image.src=list[index4];
	var image = document.getElementById('reel5');
	image.src=list[index5];

	for (i = 0; i < 10; i++) {
		let occurences = indexes.filter(c => c === i).length;
		console.log(i, occurences)
		if (occurences == 3){
			tokens = tokens + 50
			document.getElementById("log").innerHTML += "You gained 50 tokens!\n"
		} else if (occurences == 5) {
			tokens = tokens + 100
			document.getElementById("log").innerHTML += "You gained 50 tokens!\n"
		}
	}
	} else {
		alert("your out of tokens")
	}
}

function cashout () {
	if (localStorage.getItem("tokens")) {
		console.log("tokens exists")
		document.getElementById("log").innerHTML += "cashing out your current balance of ", document.getElementById("tokens").innerHTML;
		localStorage.setItem("tokens", tokens)
	} else {
		console.log("tokens does not exist");
		document.getElementById("log").innerHTML += "You havent cashed out before, making a new local store with your current tokens";
		localStorage.setItem("tokens", tokens)
	}
}
