const cities = [];

async function getData() {
  try {
    const requestURL =
      "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

    const request = new Request(requestURL);
    const response = await fetch(request);

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const data = await response.json();
    cities.push(...data);
  } catch (error) {
    console.error(error);
  }
}
getData();

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `   
          <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(
              place.population
            )}</span>
          </li>
          `;
    })
    .join("");
  results.innerHTML = html;
}

const searchBar = document.querySelector(".search");
const results = document.querySelector(".suggestions");

searchBar.addEventListener("change", displayMatches);
searchBar.addEventListener("keyup", displayMatches);
