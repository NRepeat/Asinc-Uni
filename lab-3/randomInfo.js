var infoArray = [
	"Цитата 1",
	"Цитата 2",
	"Анекдот 1",
	"Анекдот 2"
];

function getRandomInfo() {
	let randomIndex = Math.floor(Math.random() * infoArray.length);
	let infoElement = document.getElementById('info');
	infoElement.innerText = infoArray[randomIndex];
}