export const MAIN_SERVICES_CHART = {
  chartData: {
    labels: ['January', 'February', 'March'],
    datasets: [{ data: [40, 20, 12], backgroundColor: ['#A243CF', '#F473A2', '#616CD4'], label: "Dados ficticios" }]
  },
  chartOptions: {
    responsive: true
  }
}

export const STATUS_SERVICE_CHART = {
  chartData: {
    labels: ['finalizado', 'início', 'em andamento'],
    datasets: [{ data: [40, 35, 25], backgroundColor: ['#FBBC04', '#8D34F9', '#04C300'], label: "Dados ficticios" }]
  },
  chartOptions: {
    responsive: true
  }
}