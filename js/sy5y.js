/**
 * Created by alxndrkalinin on 2/20/14.
 */
(function() {

//    var inputFiles = [
//        'Sy5y_NoDiff_Control_2D_N32.csv',
//        'Sy5y_NoDiff_Cort_2D_N33.csv',
//        'Sy5y_NoDiff_Control_3D_N34.csv',
//        'Sy5y_NoDiff_Cort_3D_N35.csv',
//        'Sy5y_Diff_Control_2D_N36.csv',
//        'Sy5y_Diff_Cort_2D_N37.csv',
//        'Sy5y_Diff_Control_3D_N38.csv',
//        'Sy5y_Diff_Cort_3D_N39.csv'
//    ];

    var inputFiles = [
        'PC3_EPI_5k',
        'PC3_EMT_5k'
    ];

    var metrics = [
        'AvgMeanCurvature',
        'ComputeArea',
        'Volume',
        'ShapeIndex',
        'Curvedness',
        'FractalDimension'
    ];

    var margin = {top: 10, right: 50, bottom: 20, left: 50},
        width = 120 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var min = Infinity,
        max = -Infinity;

    var chart = d3.box()
        .whiskers(iqr(1.5))
        .width(width)
        .height(height);

    var data = [];
    var metric = metrics[4];    // default

    var dfd = $.Deferred();

//  Read files in loop

    var deferreds = $.map(inputFiles, function(current) {
        return d3.csv(current);
    });

    $.when.apply($, deferreds).then(function(value) {
        console.log('done');
        console.log(deferreds[0].get());
    });

    var csvProcessing = function(error, csv, data, i) {

            csv.forEach(function(x) {
                var s = x[metric],
                    d = data[i];
                if (!d) d = data[i] = [s];
                else d.push(s);
                if (s > max) max = s;
                if (s < min) min = s;
            });

            chart.domain([min, max]);

            var svg = d3.select(".graph").selectAll("svg")
                .data(data)
                .enter().append("svg")
                .attr("class", "box")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.bottom + margin.top)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                .call(chart);
    }

    function randomize(d) {
        if (!d.randomizer) d.randomizer = randomizer(d);
        return d.map(d.randomizer);
    }

    function randomizer(d) {
        var k = d3.max(d) * .02;
        return function(d) {
            return Math.max(min, Math.min(max, d + k * (Math.random() - .5)));
        };
    }

// Returns a function to compute the interquartile range.
    function iqr(k) {
        return function(d, i) {
            var q1 = d.quartiles[0],
                q3 = d.quartiles[2],
                iqr = (q3 - q1) * k,
                i = -1,
                j = d.length;
            while (d[++i] < q1 - iqr);
            while (d[--j] > q3 + iqr);
            return [i, j];
        };
    }
})();