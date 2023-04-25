const sketchField = document.querySelector('.sketch_field');
const setBtn = document.querySelector('.btn-set');
const resetBtn = document.querySelector('.btn-reset');
const amountInput = document.querySelector('#amount')
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
    // Set pixels style and grid
    let pixels = document.querySelectorAll('.field_div')
    Array.from(pixels).forEach((item) => {
        item.style.background = "white"
        item.style.border = "1px solid rgb(100, 71, 71)";
        item.style.height = pixelHeight;
        item.style.width = pixelWidth;
    });
}
getGrid(+amount);

// Add hover effect
sketchField.addEventListener('mousemove', changeColor);
function changeColor(e) {
    if (e.target.classList[0] == "field_div") {
        e.target.style.backgroundColor = 'black'
    }
};

// Set pixels amount
setBtn.addEventListener('click', () => {
    let newAmount = amountInput.value;
    console.log(newAmount)
    if (newAmount && Number.isInteger(+newAmount) && +newAmount >= 4 && +newAmount <= 100) {
        newAmount = +amountInput.value;
        sketchField.innerHTML = '';
        getGrid(+newAmount);
    } else {
        alert('Amount must be a numeric value less than 100 and greater than 4');
    }
});

// Reset grid
resetBtn.addEventListener('click', () => {
    sketchField.innerHTML = '';
    getGrid(16);
    amountInput.value = '16';
});