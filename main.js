const sketchField = document.querySelector('.sketch_field');
const setBtn = document.querySelector('.btn-set');
const resetBtn = document.querySelector('.btn-reset');
const amountInput = document.querySelector('#amount');
const randomColorBtn = document.querySelector('.random_color');
const defaultColorBtn = document.querySelector('.default_color');
let amount = +amountInput.value;



// Add div's to sketch field
function getGrid(amount) {
    // Get width and height for one "pixel" of the grid
    pixelWidth = (sketchField.getBoundingClientRect().width - 4) / amount + 'px';
    pixelHeight = (sketchField.getBoundingClientRect().width - 4) / amount + 'px';
    for (let i = 0; i < amount * amount; i++) {
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

getGrid(+amount);
setPixelStyle();

// Set pixels amount
setBtn.addEventListener('click', () => {
    let newAmount = amountInput.value;
    console.log(newAmount)
    if (newAmount && Number.isInteger(+newAmount) && +newAmount >= 4 && +newAmount <= 100) {
        newAmount = +amountInput.value;
        sketchField.innerHTML = '';
        getGrid(+newAmount);
        setPixelStyle();
    } else {
        alert('Amount must be a numeric value less than 100 and greater than 4');
    }
});

// Reset grid
resetBtn.addEventListener('click', () => {
    sketchField.innerHTML = '';
    getGrid(16);
    setPixelStyle();
    amountInput.value = '16';
});

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
sketchField.addEventListener('mousemove', changeColor);
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
