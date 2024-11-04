let mark = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
let black = 0;

function summary() {
  document.getElementById('black').innerHTML = black;
  document.getElementById('white').innerHTML = 16 - black;
  
}

function flip(pawn) {
  let i = pawn.dataset.i;
  let j = pawn.dataset.j;
  if (mark[i][j] == 0) {
    pawn.classList.add("black");
    mark[i][j] = 1;
    black++;
    summary();
    setTimeout(function () {
      pawn.classList.remove("black");
      mark[i][j] = 0;
      black--;
      summary();
    }, 3000);
  }
}

function main() {
  pawn.addEventListener("click");

  summary();
}

main();
