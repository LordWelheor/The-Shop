const productForm = document.getElementById('productForm');

productForm.addEventListener('click', function (elem) {
    const previewImg = document.getElementById('previewImg');
    const colorName = document.getElementById('colorName');
    const sizeName = document.getElementById('sizeName');
    const action = elem.target.getAttribute('data-action');

    switch (action) {
    case 'S':
        sizeName.innerHTML = 'S';
        break;
    case 'M':
        sizeName.innerHTML = 'M';
        break;
    case 'L':
        sizeName.innerHTML = 'L';
        break;
    case 'white':
        previewImg.src = 'img/tshirt_white.jpg';
        colorName.innerHTML = 'Белый';
        break;
    case 'yellow':
        previewImg.src = 'img/tshirt_yellow.jpg';
        colorName.innerHTML = 'Желтый';
        break;
    case 'green':
        previewImg.src = 'img/tshirt_green.jpg';
        colorName.innerHTML = 'Зеленый';
        break;
    }
});
