<script lang="ts">
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'
import { STATUS_SERVICE_CHART } from '@/util/chartData';

ChartJS.register(Tooltip, Legend, ArcElement)

export default {
  name: 'DoughnutChart',
  components: { Doughnut },
  computed: {
    chartStyles() {
      return {
        position: 'relative'
      }
    }
  },
  data() {
    return STATUS_SERVICE_CHART
  }
}
</script>

<template>
  <div class="chart-container">
    <Doughnut :style="chartStyles" :options="chartOptions" :data="chartData" />
  </div>

</template>

<style scoped>
.chart-container{
  height: 300px;
}
</style>
