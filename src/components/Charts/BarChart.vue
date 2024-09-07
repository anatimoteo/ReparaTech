<script lang="ts">
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  computed: {
    chartStyles() {
      return {
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
        datasets: [{ data: [40, 20, 12, 40] }]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>

<template>
  <Bar :style="chartStyles" id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<style scoped></style>
