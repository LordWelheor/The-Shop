const productForm = document.getElementById('productForm');
const previewImg = document.getElementById('previewImg');
const colorName = document.getElementById('colorName');
const sizeName = document.getElementById('sizeName');
const size = ['S', 'M', 'L'];
const color = [
    {nameEng: 'white', nameRu: 'Белый'},
    {nameEng: 'yellow', nameRu: 'Желтый'},
    {nameEng: 'green', nameRu: 'Зеленый'}
];

productForm.addEventListener('click', function (elem) {
    const action = elem.target.getAttribute('data-action');

    size.forEach( el => {
        if (action === el)
            sizeName.innerHTML = el;
    });

    color.forEach( el => {
        if (action === el.nameEng) {
            previewImg.src = 'img/tshirt_' + el.nameEng + '.jpg';
            colorName.innerHTML = el.nameRu;
        }
    });
});
