window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer",
    {

      title:{
      text: "Etherium Currency Values"
      },
       data: [
      {
        type: "line",

        dataPoints: [
        { x: new Date(2012, 01, 1), y: 450 },
        { x: new Date(2012, 01, 2), y: 414 },
        { x: new Date(2012, 01, 3), y: 520 },
        { x: new Date(2012, 01, 4), y: 460 },
        { x: new Date(2012, 01, 5), y: 450 },
        { x: new Date(2012, 01, 6), y: 500 },
        { x: new Date(2012, 01, 7), y: 480 }
        ]
      }
      ]
    });

chart.render();
}

function loadContent(index){
    var month;
    if(index==2)
    {
        month = 2;
    }
    else if(index==3)
    {
        month = 3;
    }
    else if(index==4)
    {
        month =3;
    }
    var chart = new CanvasJS.Chart("chartContainer",
    {
      title:{
      text: "Etherium Currency Values"
      },
       data: [
      {
        type: "line",

        dataPoints: [
        { x: new Date(2012, month, 1), y: 450 },
        { x: new Date(2012, month, 2), y: 414 },
        { x: new Date(2012, month, 3), y: 520 },
        { x: new Date(2012, month, 4), y: 460 },
        { x: new Date(2012, month, 5), y: 450 },
        { x: new Date(2012, month, 6), y: 500 },
        { x: new Date(2012, month, 7), y: 480 }
        ]
      }
      ]
    });
chart.render();    
}



