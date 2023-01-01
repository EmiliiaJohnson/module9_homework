const firstInput = document.querySelector('.firstInput');
const secondInput = document.querySelector('.secondInput');
const button = document.querySelector('.button');
const result = document.querySelector('.result');
const error = document.querySelector('.error');

firstInput.addEventListener('input', isDisabled);
secondInput.addEventListener('input', isDisabled);
function isDisabled() {
    if (firstInput.value == '' || secondInput.value == '') {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}

button.addEventListener('click', (e) => {
    const first = firstInput.value;
    const second = secondInput.value;
    if (first >= 100 && first <= 300 &&
        second >= 100 && second <= 300) {
        fetch(`https://picsum.photos/${first}/${second}`)
            .then((response) => {
                result.innerHTML = `<img class="img" src="${response.url}" width='first' height='second'>`;
                error.textContent = '';
            })
            .catch(() => {
                console.log('Ошибка');
            });
    } else {
        error.textContent = 'Одно или оба числа вне диапазона от 100 до 300';
        result.innerHTML = '';
        firstInput.value = '';
        secondInput.value = '';
        isDisabled();
    }
    firstInput.value = '';
    secondInput.value = '';
    isDisabled();
});

