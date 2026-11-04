const QR_DESTINATION = 'https://github.com/PlusSizeBeauty/Plus-SizeBeautyStore';

function hashString(value) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  }
  return hash;
}

function buildMatrix(size) {
  const matrix = Array.from({ length: size }, () => Array(size).fill(0));

  function addFinderPattern(offsetX, offsetY) {
    for (let y = 0; y < 7; y += 1) {
      for (let x = 0; x < 7; x += 1) {
        const inBorder = x === 0 || y === 0 || x === 6 || y === 6;
        const inCenter = x >= 2 && x <= 4 && y >= 2 && y <= 4;
        matrix[offsetY + y][offsetX + x] = inBorder || inCenter ? 1 : 0;
      }
    }
  }

  addFinderPattern(0, 0);
  addFinderPattern(size - 7, 0);
  addFinderPattern(0, size - 7);

  const seed = hashString(QR_DESTINATION);
  for (let row = 0; row < size; row += 1) {
    for (let column = 0; column < size; column += 1) {
      if (matrix[row][column] === 0) {
        const pseudo = (seed + row * 53 + column * 97) % 2;
        matrix[row][column] = pseudo;
      }
    }
  }

  return matrix;
}

function renderQrMatrix(destination) {
  const svg = document.getElementById('qrCanvas');
  const size = 21;
  const moduleSize = 10;
  const matrix = buildMatrix(size);

  const cells = [];
  for (let row = 0; row < size; row += 1) {
    for (let column = 0; column < size; column += 1) {
      if (matrix[row][column] === 1) {
        cells.push(`<rect x="${column * moduleSize}" y="${row * moduleSize}" width="${moduleSize}" height="${moduleSize}" fill="#1b1b1b" />`);
      }
    }
  }

  svg.innerHTML = `
    <rect width="230" height="230" rx="18" fill="#ffffff"></rect>
    ${cells.join('')}
  `;

  document.getElementById('qrLink').setAttribute('href', destination);
  document.getElementById('qrLink').textContent = destination;
}

renderQrMatrix(QR_DESTINATION);
