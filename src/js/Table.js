export class Table {
  static create(parent, arrCountry) {
    parent.innerHTML = '';

    arrCountry.forEach((country) => {
      const tr = document.createElement('tr');
      const tdPosition = document.createElement('td');
      tdPosition.classList.add('table__data__body--center');
      tdPosition.innerText = `${country.rank}º`;

      const tdCountry = document.createElement('td');
      tdCountry.classList.add('table__data__body--left');

      const div = document.createElement('div');

      const img = document.createElement('img');
      img.classList.add('bandeira');
      img.src = country.flag_url;

      const span = document.createElement('span');
      span.innerText = country.country;

      const tdOuro = document.createElement('td');
      tdOuro.classList.add('table__data__body--center');
      tdOuro.innerText = country.medal_gold;

      const tdPrata = document.createElement('td');
      tdPrata.classList.add('table__data__body--center');
      tdPrata.innerText = country.medal_silver;

      const tdBronze = document.createElement('td');
      tdBronze.classList.add('table__data__body--center');
      tdBronze.innerText = country.medal_bronze;

      const tdTotal = document.createElement('td');
      tdTotal.classList.add('table__data__body--center');
      tdTotal.innerText = country.medal_total;

      div.append(img, span);
      tdCountry.append(div);
      tr.append(tdPosition, tdCountry, tdOuro, tdPrata, tdBronze, tdTotal);
      parent.append(tr);
    });
  }
}
