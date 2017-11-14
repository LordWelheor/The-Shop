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
        changeSize(data.value);
    }

    if (data.type === 'color') {
        changeColor(data.value);
    }
});

function changeSize(size) {
    price.innerHTML = new Date().getSeconds() * 100;
    sizeName.innerHTML = size;
}

function changeColor(color) {
    productPicture.src = 'img/tshirts/tshirt_' + color + '.jpg';

    colorNames.forEach( el => {
        if (color === el.nameEng) {
            colorName.innerHTML = el.nameRu;
        }
    });
}
