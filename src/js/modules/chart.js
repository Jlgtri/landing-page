import ApexCharts from "apexcharts";

class Chart {
  static init() {
    var options = {
      series: [55, 30, 10, 5],
      labels: ["Presale", "Liquidity", "OKX Listing", "Team"],
      chart: {
        width: 530,
        type: "donut"
      },
      theme: {
        monochrome: {
          enabled: true,
          color: "#00225e",
          shadeTo: "light",
          shadeIntensity: 0.65
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: "100%"
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    var options2 = {
      series: [70, 30],
      labels: ["Liquidity", "Marketing & Development"],
      chart: {
        width: 470,
        type: "donut"
      },
      theme: {
        monochrome: {
          enabled: true,
          color: "#00225e",
          shadeTo: "light",
          shadeIntensity: 0.65
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: "97%"
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
    chart2.render();
  }
}

export default Chart;
