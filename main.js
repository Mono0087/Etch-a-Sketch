const sketchField = document.querySelector('.sketch_field');

let divNumber = 20;

// Add div's to sketch field
for (let i = 0; i < divNumber * divNumber; i++) {
    let div = document.createElement('div');
    div.classList.add('field_div');
    sketchField.append(div)
    div.style.border = "1px solid rgb(100, 71, 71)";
    div.style.background = "white"
    div.style.width = (sketchField.getBoundingClientRect().width - 4) / divNumber + 'px';
    div.style.height = (sketchField.getBoundingClientRect().width - 4) / divNumber + 'px';
}

// Add hover effect
sketchField.addEventListener('mousemove', changeColor);
function changeColor(e) {
    if (e.target.classList[0] == "field_div") {
        e.target.style.backgroundColor = 'black'
    }
}
