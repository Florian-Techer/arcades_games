//define html element
const board = document.getElementById("game-board");
const instructionText = document.getElementById("instruction-text");
const logo = document.getElementById("logo");
const gridSize = 20;
const score = document.getElementById("score");
const hightScoreText = document.getElementById("hight-score");

//define game variables
let snake = [{ x: 10, y: 10 }];
let food = generateFood();
let hightScore = 0;
let direction = "right";
let gameInterval;
let gameSpeedDelay = 500;
let gameStarted = false;

