<script lang="ts">
import { Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'

ChartJS.register(Tooltip, Legend, ArcElement)

export default {
  name: 'PieChart',
  components: { Pie },
  computed: {
    chartStyles() {
      return {
        width:'300px',
        height: '260px',
        position: 'relative'
      }
    }
  },
  data() {
    return {
      chartData: {
        title: 'Status do serviço',
        labels: ['January', 'February', 'March', 'JOSE'],
        datasets: [{ data: [40, 20, 12, 40], backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'] }]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>

<template>
  <Pie :style="chartStyles" :options="chartOptions" :data="chartData" />
</template>

<style scoped></style>
