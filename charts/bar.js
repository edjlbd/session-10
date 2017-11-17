Vue.component('bar-chart', {
  extends: VueChartJs.Bar,
  props: ['data', 'options'],
  mounted () {
    var data = this.data || {
      labels: ["AB","BC","MB","NB","NL","NS","NT","ON","PE","QC","SK","YT","N/A"],
      datasets: [
        {
          label: 'TEXT FRAUD',
          backgroundColor: '#f87979',
          data: [92,60,18,10,6,11,0,348,2,189,25,0,6],
          datalabels: {
            align: 'end',
          } ,      
        },
                  {
          label: 'FRAUD IN THOUSANDS $',
          backgroundColor: '#ADD8E6',
          data: [123.329,44.331,16.918,8.765,1.550,4.120,0,223.692,0,116.520,17.046,0,11.181],
          datalabels: {
            align: 'end',
          }
        }
      ]
    };

    var options = this.options || {
      tooltips: {
        enabled: false
      },
      legend: {
        display: true
      },
			plugins: {
				datalabels: {
          display: true,
					color: '#000000',
					font: {
						weight: 'bold'
					},
					formatter: Math.round
				}
			},
      scales: {
        yAxes:  [
          {
            display: false,
            ticks: {
              beginAtZero: true
            }
          }
        ],
        xAxes: [
          {
            categoryPercentage: 1,
            barPercentage: 2/3
          }
        ]
      }
    };

    this.renderChart(data, options);
  }
})
