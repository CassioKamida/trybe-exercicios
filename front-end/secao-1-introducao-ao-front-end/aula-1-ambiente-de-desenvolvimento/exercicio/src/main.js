import validator from 'validator';
import './style.css';

const textField = document.querySelector('#value');
const selector = document.querySelector('#option');
const button = document.querySelector('#button');
const answer = document.querySelector('#answer');

const UUID_VERSION = 4;

button.addEventListener('click', () => {
    preventDefault();

    const fields = {
        cpf: validator.isTaxID(textField.value, 'pt-BR'),
        hexColor: validator.isHexColor(textField.value),
        email: validator.isEmail(textField.value),
        uuid: validator.isUUID(textField.value, UUID_VERSION),
        url: validator.isURL(textField.value),
    };

    answer.innerHTML = `A validação retornou ${fields[selector.value]}`;
});
