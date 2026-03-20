const elements = {
  container: document.querySelector('.container'),
  square: document.querySelector('.container > div'),
  enterSize: document.querySelector('.set-size'),
  setSize: document.querySelector('#size'),

}

function createGrid(num) {
  for (let i = 0; i < num; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.style.cssText = `
      border: 1px solid var(--green);
      height: ${(500 - 4) / Math.sqrt(num)}px;
      width: ${(500 - 4) / Math.sqrt(num)}px;
      gap: 0;
      align-items: start;
    ` 
    elements.container.appendChild(square)
  }
}

elements.container.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('square')) {
    e.target.classList.add('black')
  }
})

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('set-size')) {
    elements.container.innerHTML = ''
    createGrid(Math.pow(elements.setSize.value, 2))
  }

  elements.setSize.addEventListener('input', () => {
    if (elements.setSize.value > 64) {
      elements.setSize.value = 64
    }
  })
})