const elements = {
  container: document.querySelector('.container')
}

function createGrid(num) {
  for (let i = 0; i < num; i++) {
    const square = document.createElement('div')
    square.style.cssText = `
      border: 1px solid black;
      height: ${(500 - 4) / Math.sqrt(num)}px;
      width: ${(500 - 4) / Math.sqrt(num)}px;
      gap: 0;
      align-items: start;
    ` 
    elements.container.appendChild(square)
  }
}

createGrid(64)