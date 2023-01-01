const input = document.querySelector('.input');
const button = document.querySelector('.button');
const result = document.querySelector('.result');
const error = document.querySelector('.error');

let xhr = new XMLHttpRequest();

const baseUrl = 'https://picsum.photos/v2/list?limit=';

button.addEventListener('click', changeUrl);
input.addEventListener('input', isDisabled);
function isDisabled() {
    if (input.value == '') {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}

function changeUrl() {
    if (input.value >= 1 && input.value <= 10) {
        getRequest(input.value);
    } else {
        error.textContent = 'Ошибка, число вне диапазона от 1 до 10';
        result.innerHTML = '';
        input.value = '';
        isDisabled();
    }
}

function getRequest(userNumber) {
    let resultUrl = baseUrl + userNumber;
    console.log(resultUrl);
    let xhr = new XMLHttpRequest();
    xhr.open('get', resultUrl, true);
    xhr.onload = function () {
        const response = JSON.parse(xhr.response);
        response.forEach((elem) => {
            result.innerHTML += `<img class="image" src='${elem.download_url}'>`;
        });
    };
    xhr.send();
    error.textContent = '';
    input.value = '';
    isDisabled();
}
