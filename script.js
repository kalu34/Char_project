fetch('https://api.covidtracking.com/v1/us/current.json').then(res => res.json()).then(data => {
    const [result] = data;
    console.log(result)
    const {death,hospitalized,negative,pending,positive} = result;
    new Chart(document.getElementById('pie-chart-1'), {
        type : 'pie',
        data : {
            labels : ["positive", "negative", "pending", "hospitalized", "death"],
            datasets : [{
                backgroundColor : [ "#e63946", "#254BDD",
                        "#ffbe0b", "#1d3557", "#326998" ],
                data : [`${positive}`, `${negative}`, `${pending}`, `${hospitalized}`, `${death}`]
            }]
        },
        options : {
            title : {
                display : true,
                text : 'Pie Chart for admin panel'
            },
            responsive : true
        }
    });
})

document.getElementById('button-addon2').addEventListener('click', function(){
    const textSearch = document.getElementById('textSearch').value

    fetch('https://api.covidtracking.com/v1/states/current.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            data.forEach(element => {
                if(textSearch === element.state){
                    const {recovered, positive, negative, hospitalized, death} = element

                    // Destroy existing chart if it exists
                    if (window.myChart) {
                        window.myChart.destroy();
                    }

                    var chart = new Chart(document.getElementById('pie-chart-2'), {
                        type : 'pie',
                        data : {
                            labels : ["positive", "negative", "hospitalized", "recovered", "death"],
                            datasets : [{
                                backgroundColor : [ "#e63946", "#254BDD", "#ffbe0b", "#1d3557", "#326998" ],
                                data : [positive, negative, hospitalized, recovered, death]
                            }]
                        },
                        options : {
                            title : {
                                display : true,
                                text : 'Pie Chart for admin panel'
                            },
                            responsive : true
                        }
                    });

                    // Store the new chart object
                    window.myChart = chart;
                }
            });
        });
});

fetch('https://api.covidtracking.com/v1/states/current.json').then(res => res.json()).then(data => {
    const [result] = data;
    console.log(result)
    const {death,hospitalized,negative,pending,positive} = result;
    new Chart(document.getElementById('pie-chart-3'), {
        type : 'pie',
        data : {
            labels : ["positive", "negative", "pending", "hospitalized", "death"],
            datasets : [{
                backgroundColor : ["#e63946", "#254BDD",
                        "#ffbe0b", "#1d3557", "#326998" ],
                data : [`${positive}`, `${negative}`, `${pending}`, `${hospitalized}`, `${death}`]
            }]
        },
        options : {
            title : {
                display : true,
                text : 'Pie Chart for admin panel'
            },
            responsive : true
        }
    });
})

fetch('https://api.covidtracking.com/v1/us/20200501.json').then(res => res.json()).then(data => {
    const {death,hospitalized,negative,pending,positive} = data;
    new Chart(document.getElementById('pie-chart-4'), {
        type : 'bar',
        data : {
            labels : ["positive", "negative", "pending", "hospitalized", "death"],
            datasets : [{
                backgroundColor : ["#e63946", "#254BDD",
                        "#ffbe0b", "#1d3557", "#326998" ],
                data : [`${positive}`, `${negative}`, `${pending}`, `${hospitalized}`, `${death}`]
            }]
        },
        options : {
            title : {
                display : true,
                text : 'Pie Chart for admin panel'
            },
            responsive : true
        }
    });
})

//
