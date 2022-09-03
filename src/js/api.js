export class Api {
 
    static baseURL = 'https://kenzie-olympics.herokuapp.com'
    static async execute() {
    const response = await fetch(`${Api.baseURL}/paises`)

      .then((resp) => resp.json())
      .then((data) => {
        const orderedListCountries = data.sort((a, b) => {
          const medalTotalA = a.medal_bronze + a.medal_gold + a.medal_silver;
          const medalTotalB = b.medal_bronze + b.medal_gold + b.medal_silver;

          if (medalTotalA === medalTotalB) {
            return b.medal_gold - a.medal_gold;
          }

          return medalTotalB - medalTotalA;
        });

        const newData = orderedListCountries.map((country, index) => {
          const newCountry = {
            ...country,
            medal_total: country.medal_bronze + country.medal_gold + country.medal_silver,
            rank: index + 1,
          };

          return newCountry;
        });

        localStorage.setItem('@kenzie-medalhas', JSON.stringify(newData));

        return newData;
      })
      .catch((err) => err);

    return response;
  }
}
