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
import { MAIN_SERVICES_CHART } from '@/util/chartData';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  computed: {
    chartStyles() {
      return {
        position: 'relative'
      }
    }
  },
  data() {
    return MAIN_SERVICES_CHART
  }
}
</script>

<template>
  <div class="chart-container">
    <Bar :style="chartStyles" id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>

</template>

<style scoped>
.chart-container {
  height: 250px;
}
</style>
