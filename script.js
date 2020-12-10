$(document).ready(function () {
  $("select").formSelect();

  $("input.autocomplete").autocomplete({
    data: {
      "Trigésimo Octavo Juzgado de Trabajo de Lima": null,
      "Décimo Tercer Juzgado Especializado de Trabajo Permanente de Lima": null,
      "Trigésimo Noveno Juzgado de Trabajo de Lima": null,
    },
  });

  $("#form").submit(function (e) {
    e.preventDefault();

    $("#charts").show();
  });

  var instance = M.FormSelect.getInstance(
    document.querySelector("#speciality")
  );
  console.log(instance.el);

  am4core.ready(function () {
    am4core.useTheme(am4themes_material);
    am4core.useTheme(am4themes_animated);

    //Duration Chart
    var dur = am4core.create("dur", am4charts.PieChart);
    dur.startAngle = 160;
    dur.endAngle = 380;

    dur.innerRadius = am4core.percent(40);

    dur.data = [
      {
        periodo: "Menos de 9 meses",
        duración: 128,
      },
      {
        periodo: "9 meses a 13 meses",
        duración: 280,
      },
      {
        periodo: "13 meses a 20 meses",
        duración: 512,
      },
      {
        periodo: "20 meses a 26 meses",
        duración: 680,
      },
    ];

    var pieSeries2 = dur.series.push(new am4charts.PieSeries());
    pieSeries2.dataFields.value = "duración";
    pieSeries2.dataFields.category = "periodo";
    pieSeries2.slices.template.stroke = new am4core.InterfaceColorSet().getFor(
      "background"
    );
    pieSeries2.slices.template.strokeWidth = 1;
    pieSeries2.slices.template.strokeOpacity = 1;
    pieSeries2.slices.template.states.getKey(
      "hover"
    ).properties.shiftRadius = 0.05;
    pieSeries2.slices.template.states.getKey("hover").properties.scale = 1;

    var label = dur.seriesContainer.createChild(am4core.Label);
    label.textAlign = "middle";
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.adapter.add("text", function (text, target) {
      return "[font-size:18px]Duración promedio[/]:\n[bold font-size:30px] 16 meses y 28 días[/]";
    });
    //End of Duration Chart

    //Resolution
    var res = am4core.create("res", am4charts.PieChart);

    // Add data
    res.data = [
      { resolución: "A favor", casos: 1340 },
      { resolución: "En contra", casos: 260 },
    ];

    // Add and configure Series
    var pieSeries = res.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "casos";
    pieSeries.dataFields.category = "resolución";

    // Add label
    res.innerRadius = 100;
    var label1 = res.seriesContainer.createChild(am4core.Label);
    label1.horizontalCenter = "middle";
    label1.verticalCenter = "middle";
    label1.fontSize = 50;
    label1.adapter.add("text", function (text, target) {
      return pieSeries.dataItem.values.value.sum;
    });

    var reswc = am4core.create("reswc", am4charts.PieChart);

    // Add data
    reswc.data = [
      { resolución: "A favor", casos: 265 },
      { resolución: "En contra", casos: 35 },
    ];

    // Add and configure Series
    var pieSeries3 = reswc.series.push(new am4charts.PieSeries());
    pieSeries3.dataFields.value = "casos";
    pieSeries3.dataFields.category = "resolución";

    // Add label
    reswc.innerRadius = 100;
    var label2 = reswc.seriesContainer.createChild(am4core.Label);
    label2.horizontalCenter = "middle";
    label2.verticalCenter = "middle";
    label2.fontSize = 50;
    label2.adapter.add("text", function (text, target) {
      return pieSeries3.dataItem.values.value.sum;
    });

    var lswc = am4core.create("lswc", am4charts.PieChart);

    // Add data
    lswc.data = [
      { estrategia: "Primacia de la realidad", casos: 169 },
      { estrategia: "Irrenunciabilidad de derechos", casos: 131 },
    ];

    // Add and configure Series
    var pieSeries4 = lswc.series.push(new am4charts.PieSeries());
    pieSeries4.dataFields.value = "casos";
    pieSeries4.dataFields.category = "estrategia";

    // Add label
    lswc.innerRadius = 100;
    var label3 = lswc.seriesContainer.createChild(am4core.Label);
    label3.horizontalCenter = "middle";
    label3.verticalCenter = "middle";
    label3.fontSize = 50;
    label3.adapter.add("text", function (text, target) {
      return pieSeries4.dataItem.values.value.sum;
    });

    var respr = am4core.create("respr", am4charts.PieChart);

    // Add data
    respr.data = [
      { resolución: "A favor", casos: 147 },
      { resolución: "En contra", casos: 22 },
    ];

    // Add and configure Series
    var pieSeries5 = respr.series.push(new am4charts.PieSeries());
    pieSeries5.dataFields.value = "casos";
    pieSeries5.dataFields.category = "resolución";

    // Add label
    respr.innerRadius = 100;
    var label4 = respr.seriesContainer.createChild(am4core.Label);
    label4.horizontalCenter = "middle";
    label4.verticalCenter = "middle";
    label4.fontSize = 50;
    label4.adapter.add("text", function (text, target) {
      return pieSeries5.dataItem.values.value.sum;
    });

    var resir = am4core.create("resir", am4charts.PieChart);
    // Add data
    resir.data = [
      { resolución: "A favor", casos: 118 },
      { resolución: "En contra", casos: 13 },
    ];

    // Add and configure Series
    var pieSeries6 = resir.series.push(new am4charts.PieSeries());
    pieSeries6.dataFields.value = "casos";
    pieSeries6.dataFields.category = "resolución";

    // Add label
    resir.innerRadius = 100;
    var label4 = resir.seriesContainer.createChild(am4core.Label);
    label4.horizontalCenter = "middle";
    label4.verticalCenter = "middle";
    label4.fontSize = 50;
    label4.adapter.add("text", function (text, target) {
      return pieSeries6.dataItem.values.value.sum;
    });

    var lsa = am4core.create("lsa", am4charts.XYChart);

    // Add data
    lsa.data = [
      {
        estrategias: "Prescripción",
        casos: 35,
      },
      {
        estrategias: "Inexistencia de vinculo laboral",
        casos: 27,
      },
      {
        estrategias: "Falta de capacidad",
        casos: 20,
      },
    ];

    // Create axes

    var categoryAxis = lsa.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "estrategias";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    categoryAxis.renderer.labels.template.adapter.add(
      "dy",
      function (dy, target) {
        if (target.dataItem && target.dataItem.index & (2 == 2)) {
          return dy + 25;
        }
        return dy;
      }
    );

    var valueAxis = lsa.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;

    // Create series
    var series = lsa.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "casos";
    series.dataFields.categoryX = "estrategias";
    series.name = "Estrategias";
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = 0.8;

    var columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
  });
});
