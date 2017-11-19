import PropertySelector from './property-selector.js';
const Dispatcher = document.getElementById('doc');
const productPicture = document.getElementById('productPicture');
const colorName = document.getElementById('colorName');
const colorList = document.getElementById('colorList');
const sizeName = document.getElementById('sizeName');
const sizeList = document.getElementById('sizeList');
const price = document.getElementById('priceVal');
const colorNames = [
    {nameEng: 'white', nameRu: 'Белый'},
    {nameEng: 'yellow', nameRu: 'Желтый'},
    {nameEng: 'green', nameRu: 'Зеленый'}];

new PropertySelector(sizeList);
new PropertySelector(colorList);

Dispatcher.addEventListener('property-selected', ev => {
    const data = ev.detail;

    if (data.type === 'size') {
        localStorage.setItem(data.type, data.value);
        changeSize(data.value);
    }

    if (data.type === 'color') {
        localStorage.setItem(data.type, data.value);
        changeColor(data.value);
    }
});

function changeSize(size) {
    price.innerHTML = new Date().getMilliseconds() * 100;
    sizeName.innerHTML = size;
}

function changeColor(color) {
    localStorage.setItem('color', color);
    productPicture.src = 'img/tshirts/tshirt_' + color + '.jpg';

    colorNames.forEach( el => {
        if (color === el.nameEng) {
            colorName.innerHTML = el.nameRu;
        }
    });
}

const lastSize = localStorage.getItem('size');
const lastColor = localStorage.getItem('color');
if (lastSize) {
    document.getElementById('rad-' + lastSize).checked = true;
    changeSize(lastSize);
}
if (lastColor) {
    document.getElementById('rad-' + lastColor).checked = true;
    changeColor(lastColor);
}
