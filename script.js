import data from "./data.json" assert { type: "json" };

const chartStore = document.querySelector(".chart");

/**
 * Retuns HTML Templete based on json date.
 * @param {JSON} data
 * Ex. data = [
 *  {
 *  "day": @param {string},
 *  "amaount": @param {float}
 * }
 * ]
 */
function generateChartTemplate(data) {
  data.forEach((element) => {
    const height = `"height: ${element.amount}%"`
    const bar = 
    `<div class="barCont">
          <p class="barName">${element.day}</p>
          <div class="bar">
            <div class="barLine" style=${height}>
            </div>
              <span class="hide">$${element.amount}</span>
          </div>
    </div>`;
    chartStore.insertAdjacentHTML("beforeend", bar)
  });
}

generateChartTemplate(data);
