var infoArray = [
	"Цитата 1",
	"Цитата 2",
	"Анекдот 1",
	"Анекдот 2"
];

function getRandomInfo() {
	var randomIndex = Math.floor(Math.random() * infoArray.length);
	var infoElement = document.getElementById('info');
	infoElement.innerText = infoArray[randomIndex];
}