const sketchField = document.querySelector('.sketch_field');
const setBtn = document.querySelector('.btn-set');
const resetBtn = document.querySelector('.btn-reset');
const sizeInput = document.querySelector('#size');
const randomColorBtn = document.querySelector('.random_color');
const defaultColorBtn = document.querySelector('.default_color');
const sizeSpan = document.querySelector('#size-number');
let size = +sizeInput.value;



// Add div's to sketch field
function getGrid(size) {
    // Get width and height for one "pixel" of the grid
    pixelWidth = (sketchField.getBoundingClientRect().width - 4) / size + 'px';
    pixelHeight = (sketchField.getBoundingClientRect().width - 4) / size + 'px';
    for (let i = 0; i < size * size; i++) {
        let div = document.createElement('div');
        div.classList.add('field_div');
        sketchField.append(div);
    };
}

// Set pixels style and grid
function setPixelStyle() {
    let pixels = document.querySelectorAll('.field_div')
    Array.from(pixels).forEach((item) => {
        item.style.background = "white"
        item.style.border = "1px solid rgb(100, 71, 71)";
        item.style.height = pixelHeight;
        item.style.width = pixelWidth;
    });
}

getGrid(+size);
setPixelStyle();

// Set pixels size
setBtn.addEventListener('click', () => {
    let newSize = +sizeInput.value;
        sketchField.innerHTML = '';
        getGrid(+newSize);
        setPixelStyle();
    sizeSpan.textContent = `${sizeInput.value}x${sizeInput.value}`;
});

// Reset grid
resetBtn.addEventListener('click', () => {
    sketchField.innerHTML = '';
    getGrid(16);
    setPixelStyle();
    sizeInput.value = '16';
    sizeSpan.textContent = `${sizeInput.value}x${sizeInput.value}`;
});

sizeInput.addEventListener('input', (e) => {
    sizeSpan.textContent = `${sizeInput.value}x${sizeInput.value}`;
})

// Set default brush color
const defaultBrush = "black";
let currentBrush = defaultBrush;
defaultColorBtn.addEventListener('click', () => {
    currentBrush = defaultBrush;
})

// Get random color for brush
function randomColor() {
    let num = () => (Math.random() * 255).toFixed(0);
    return `rgb(${num()}, ${num()}, ${num()})`;
}

// Set random color brush
randomColorBtn.addEventListener('click', () => {
    currentBrush = "random";
})


// Add hover effect
sketchField.addEventListener('mouseover', changeColor);
function changeColor(e) {
    if (e.target.classList[0] == "field_div") {
        switch (currentBrush) {
            case "random":
                e.target.style.backgroundColor = randomColor();
                break;
            case "black":
                e.target.style.backgroundColor = defaultBrush;
                break;
        }
    }
};
