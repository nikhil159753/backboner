//Flot Pie Chart
$(function() {

    var data = [{
        label: "Great",
        data: instances,
        color: "#a1d490"
    }, {
        label: "Good",
        data: 3,
        color: "#acff47"
    }, {
        label: "Meh",
        data: 9,
        color: "#faf798"
    }, {
        label: "Bad",
        data: 20,
        color: "#fabf98"
    }];

    var plotObj = $.plot($("#flot-pie-chart"), data, {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    });
    // Update the random dataset at 25FPS for a smoothly-animating chart

    // setInterval(function updateRandom() {
    //     data[0].data = instances;
    //     plotObj.setData(data);
    //     plotObj.draw();
    //     console.log(data[0].data);
    // }, 500);
});