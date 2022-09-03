export class Sort {
  static sortArr(arr, orderBy, elem) {
    if (elem.classList.contains('sort__arrow--up')) {
      return arr.sort((a, b) => a[orderBy] - b[orderBy]);
    }

    return arr.sort((a, b) => b[orderBy] - a[orderBy]);
  }

  static filterArr(arr, search) {
    const countryName = this.#formatString(search);

    return arr.filter(({ country }) => this.#formatString(country).includes(countryName));
  }

  static #formatString(str) {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }
}
