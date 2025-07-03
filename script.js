const container = document.getElementById("container");
const resetBtn = document.getElementById("resetBtn");
const containerSize = 500;

function colorPicker() {
  const colors = [
    "#1d2021",
    "#282828",
    "#32302f",
    "#3c3836",
    "#504945",
    "#665c54",
    "#7c6f64",
    "#f9f5d7",
    "#fbf1c7",
    "#f2e5bc",
    "#ebdbb2",
    "#d5c4a1",
    "#bdae93",
    "#a89984",
    "#fb4934",
    "#b8bb26",
    "#fabd2f",
    "#83a598",
    "#d3869b",
    "#8ec07c",
    "#fe8019",
    "#cc241d",
    "#98971a",
    "#d79921",
    "#458588",
    "#b16286",
    "#689d6a",
    "#d65d0e",
  ];

  return colors[Math.floor(Math.random() * colors.length)];
}

function createGrid(size) {
  container.innerHTML = "";
  // const squares = [];
  const squareSize = containerSize / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = colorPicker();
    });

    container.appendChild(square);
    // squares.push(square);
  }
  // setInterval(() => {
  //   squares.forEach((square) => {
  //     square.style.backgroundColor = colorPicker();
  //   });
  // }, 50);
}

function promptGridSize() {
  let size = parseInt(prompt("Enter number of squares per side (max 100):"));
  if (isNaN(size) || size <= 0 || size > 100) {
    alert("Invalid input. Please enter a number between 1 and 100.");
    return;
  }
  createGrid(size);
}

resetBtn.addEventListener("click", promptGridSize);
createGrid(10);
