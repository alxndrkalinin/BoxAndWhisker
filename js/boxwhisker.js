/**
 * Created by alxndrkalinin on 2/20/14.
 */
(function() {

    var margin = {top: 10, right: 50, bottom: 20, left: 50},
        width = 120 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var min = Infinity,
        max = -Infinity;

    var chart = d3.box()
        .whiskers(iqr(1.5))
        .width(width)
        .height(height)
        .tickFormat(d3.format(",.3f"));


    // Define shorthand utility method for adding html elements
    $.extend({
        el: function(el, props) {
            props = props || {};
            var $el = $(document.createElement(el));
            $el.attr(props);
            return $el;
        }
    });

    var selectDataset = function(dataset) {
        $('#datasetTitle').text(dataConfig[dataset].title);
        loadData(dataset);
    };

    var loadData = function(dataset) {
        var files = [];
        var fileLinks = dataConfig[dataset].files;

        var getFile = function(fileName) {
            var def = $.Deferred();
            d3.csv('data/' + fileName, function(error, csv) {
                files.push({
                    fileName: fileName
                        .substring(0, fileName.length - 4)
                        .replace('_', ' '),
                    data: csv
                });
                def.resolve();
            });
            return def.promise();
        };

        $.when.apply($,
            fileLinks.map(function(i) {
                return getFile(i);
            })
        ).then(function() {
            console.log('resolved');
            for(var measure in files[0].data[0]) {
                $('#main-menu').append(
                    $.el('label', {'class' : 'btn btn-default'})
                        .text(measure).click(function() {
                            switchMeasure(files, event.target.textContent);
                        })
                        .append(
                            $.el('input', {'type': 'radio', 'name' : 'options'})
                        )
                );
            }
            $("#main-menu .btn").first().remove();
            console.log($("#main-menu .btn").slice(1,2));
            var defaultMeasure = Object.keys(files[0].data[0])[1];
            processData(files, defaultMeasure);
            $("#main-menu .btn").first().button("toggle");
        });
    };

    var processData = function(files, defaultMeasure) {
        var fileNum = files.length;
        for (var i = 0; i < fileNum; i++)
            csvProcessing(files[i], i, defaultMeasure);
    };

    var csvProcessing = function(file, i, defaultMeasure) {

        var data = [];

        file.data.forEach(function(x) {
            var s = Math.log((x[defaultMeasure] == 0) ? 0.0000000000001 : Math.abs(x[defaultMeasure])),
                d = data[i];
            if (!d) d = data[i] = [s];
            else d.push(s);
            if (s > max) max = s;
            if (s < min) min = s;
        });

        if(min == 0) min = 0.00000000000001;

        if(chart.domain()) {
            var currDomain = chart.domain()();
            if (min > currDomain[0]) min = currDomain[0];
            if (max < currDomain[1]) max = currDomain[1];
        }

        var svg = d3.select("#graph").selectAll("svg")
            .data(data)
            .enter().append("svg")
            .attr("class", "box")
            .attr("id", file.title)
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.bottom + margin.top)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
            .call(chart);

        chart.domain([min, max]);

        var label = file.fileName.replace('Sy5y ','').replace(/_/g, ' ').replace('No', 'Un');
        label = label.substring(0, label.length - 4);

        $('#footer').append(
            $.el('label', {'class' : 'btn btn-default'})
                .text(label)
        );

//        var plot = svg.select("text")
//            .data(file.fileName)
//            .enter()
//            .append("text");
//
//        plot.text( function (d) { return d; })
//            .attr("x", 0)
//            .attr("y", 500)
//            .attr("font-family", "sans-serif")
//            .attr("font-size", "5px")
//            .attr("fill", "red");
    };

    var switchDataset = function(dataset) {
        $("#main-menu").empty();
        $("#graph").empty();
        $("#footer").empty();
        min = Infinity,
            max = -Infinity;
        chart = d3.box()
            .whiskers(iqr(1.5))
            .width(width)
            .height(height)
            .tickFormat(d3.format(",.3f"));
        selectDataset(dataset);
    };
    var switchMeasure = function(files, measure) {
        $("#graph").empty();
        $("#footer").empty();
        min = Infinity,
            max = -Infinity;
        chart = d3.box()
            .whiskers(iqr(1.5))
            .width(width)
            .height(height)
            .tickFormat(d3.format(",.3f"));
        processData(files, measure);
    };

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

    if($.isEmptyObject(dataConfig))
        return false;
    else {
        for(var dataset in dataConfig) {
            $('#datasetList').append(
                $.el('li').append(
                    $.el('a', {'tabindex': '-1', 'href' : '#'}).text(dataset)
                        .click(function() {
                            switchDataset(event.target.text);
                        })
                )
            );
        }

        selectDataset(Object.keys(dataConfig)[0]);
    }
})();