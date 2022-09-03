import { Api } from './api.js';
import { Table } from './Table.js';
import { Sort} from './sort.js';

const tableMain = document.querySelector('.table__body');
const btnFilters = document.querySelectorAll('.table__head__filter');
const form = document.querySelector('.container__form');
const orderCountries = await Api.execute();

Table.create(tableMain, orderCountries);

form.addEventListener('click', (even) => {
  even.preventDefault();
  const arrayCountries = JSON.parse(localStorage.getItem('@kenzie-medalhas'));
  const search = document.querySelector('.container__input').value;
  const countrys = Sort.filterArr(arrayCountries, search);

  Table.create(tableMain, countrys);
});

btnFilters.forEach((elem) =>
  elem.addEventListener('click', (even) => {
    const arrayCountries = JSON.parse(localStorage.getItem('@kenzie-medalhas'));
    const elem = even.currentTarget;
    const img = elem.lastElementChild;

    img.classList.toggle('sort__arrow--up');

    const arrayOr = Sort.sortArr(arrayCountries, elem.id, img);

    localStorage.getItem('@kenzie-medalhas', JSON.stringify(arrayOr));

    Table.create(tableMain, arrayOr);
  })
);
