const api_link = "http://127.0.0.1:5000/file";

coinNames = null;
coinPrices = null
function construct(data){
        coinNames = data["models"];
        coinPrices = data["prices"];
        console.log(coinNames)
        console.log(coinPrices[0][0].date)
    }
const _init = async function(){
        const response = await fetch(api_link);
        let data = await response.json();
        construct(data);
    }
const delay = millis => new Promise((resolve, reject) => {
  setTimeout(_ => resolve(), millis)
});

const load_first = async function() 
{
    await delay(100);
    var chart = new CanvasJS.Chart("chartContainer",
    {

      title:{
      text: coinNames[0] + " PRICE - INR"
      },
       data: [
      {
        type: "line",
        dataPoints: [
        { x: new Date(coinPrices[0][0].year, coinPrices[0][0].month-1, coinPrices[0][0].date), y: coinPrices[0][0].price },
        { x: new Date(coinPrices[0][1].year, coinPrices[0][1].month-1, coinPrices[0][1].date), y: coinPrices[0][1].price },
        { x: new Date(coinPrices[0][2].year, coinPrices[0][2].month-1, coinPrices[0][2].date), y: coinPrices[0][2].price },
        { x: new Date(coinPrices[0][3].year, coinPrices[0][3].month-1, coinPrices[0][3].date), y: coinPrices[0][3].price },
        { x: new Date(coinPrices[0][4].year, coinPrices[0][4].month-1, coinPrices[0][4].date), y: coinPrices[0][4].price },
        { x: new Date(coinPrices[0][5].year, coinPrices[0][5].month-1, coinPrices[0][5].date), y: coinPrices[0][5].price },
        { x: new Date(coinPrices[0][6].year, coinPrices[0][6].month-1, coinPrices[0][6].date), y: coinPrices[0][6].price }
        ]
      }
      ]
    });

chart.render();
}

window.onload = function () {
    _init();
    load_first();
}
    

function loadContent(index){
    index -= 1;
    var chart = new CanvasJS.Chart("chartContainer",
    {
      title:{
      text:coinNames[index] + " PRICE - INR"
      },
       data: [
      {
        type: "line",

        dataPoints: [
        { x: new Date(coinPrices[index][0].year, coinPrices[index][0].month-1, coinPrices[index][0].date), y: coinPrices[index][0].price },
        { x: new Date(coinPrices[index][1].year, coinPrices[index][1].month-1, coinPrices[index][1].date), y: coinPrices[index][1].price },
        { x: new Date(coinPrices[index][2].year, coinPrices[index][2].month-1, coinPrices[index][2].date), y: coinPrices[index][2].price },
        { x: new Date(coinPrices[index][3].year, coinPrices[index][3].month-1, coinPrices[index][3].date), y: coinPrices[index][3].price },
        { x: new Date(coinPrices[index][4].year, coinPrices[index][4].month-1, coinPrices[index][4].date), y: coinPrices[index][4].price },
        { x: new Date(coinPrices[index][5].year, coinPrices[index][5].month-1, coinPrices[index][5].date), y: coinPrices[index][5].price },
        { x: new Date(coinPrices[index][6].year, coinPrices[index][6].month-1, coinPrices[index][6].date), y: coinPrices[index][6].price }
        ]
      }
      ]
    });
chart.render();    
}



