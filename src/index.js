
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import axios from 'axios';
import { fetchCountries } from './fetchCountries';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const refs = {
    input: document.querySelector('#search-box'),
    list: document.querySelector('.country-list'),
    container: document.querySelector('.country-info')
}

export { refs };

const onInput = (e) => {
    if (!e.target.value) {
        return refs.list.innerHTML = '';
    }
    fetchCountries(e.target.value.trim())
}

refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));