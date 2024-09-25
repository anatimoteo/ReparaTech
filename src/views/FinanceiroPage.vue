<script setup>
import LayoutComponent from '@/components/LayoutComponent.vue';
import { ref, onMounted } from 'vue'
import { Chart } from 'chart.js'

const faturas = ref([
  { id: 1, cliente: 'Cliente A', servico: 'Serviço 1', valor: 1500.00, data: '01/09/2024' },
  { id: 2, cliente: 'Cliente B', servico: 'Serviço 2', valor: 2300.00, data: '05/09/2024' },
])

const entradaValor = ref('')
const saidaValor = ref('')
const caixaAtual = ref(5000.00)
const registrarEntrada = () => {
  if (entradaValor.value) {
    caixaAtual.value += parseFloat(entradaValor.value)
    entradaValor.value = ''
  }
}

const registrarSaida = () => {
  if (saidaValor.value) {
    caixaAtual.value -= parseFloat(saidaValor.value)
    saidaValor.value = ''
  }
}

onMounted(() => {
  const ctx = document.getElementById('financeChart')
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Entrada', 'Saída'],
      datasets: [{
        label: 'Situação Financeira',
        data: [caixaAtual.value, 1000], 
        backgroundColor: ['#4CAF50', '#F44336'], 
        borderWidth: 1
      }]
    }}
  )})
</script>

<template>
  <LayoutComponent>
    <div class="financeiro">
      <header class="header">
        <h1>Visão Financeira da Empresa</h1>
      </header>

      <section class="faturas">
        <h2>Faturas Emitidas</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Cliente</th>
              <th>Serviço</th>
              <th>Valor (R$)</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="fatura in faturas" :key="fatura.id">
              <td>{{ fatura.id }}</td>
              <td>{{ fatura.cliente }}</td>
              <td>{{ fatura.servico }}</td>
              <td>{{ fatura.valor.toFixed(2) }}</td>
              <td>{{ fatura.data }}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section class="movimentacao">
        <div class="caixa">
          <h2>Movimentação Financeira</h2>
          <div class="caixa-content">
            <div>
              <h3>Entrada de Recursos</h3>
              <input v-model="entradaValor" placeholder="Valor de Entrada" type="number" />
              <button @click="registrarEntrada">Registrar Entrada</button>
            </div>

            <div>
              <h3>Saída de Recursos</h3>
              <input v-model="saidaValor" placeholder="Valor de Saída" type="number" />
              <button @click="registrarSaida">Registrar Saída</button>
            </div>
          </div>

          <h3>Caixa Atual: R$ {{ caixaAtual.toFixed(2) }}</h3>
        </div>
      </section>

      <section class="grafico">
        <h2>Situação Financeira</h2>
        <div class="grafico-container">
          <canvas id="financeChart"></canvas>
        </div>
      </section>
    </div>
  </LayoutComponent>
</template>

<style scoped>
.financeiro {
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 30px;
}

.header h1 {
  color: #2C3E50;
  font-size: 2rem;
  font-weight: bold;
}

.faturas {
  margin-bottom: 30px;
}

.faturas h2 {
  margin-bottom: 15px;
  color: white;
  text-align: center;
  background-color: var(--blue);
  padding: 10px;
  border-radius: 5px;
}

table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

table th, table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

table th {
  background-color: var(--blue);
  color: white;
}

table td {
  color: #333;
}

.movimentacao {
  margin-bottom: 30px;
  background-color: var(--blue);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: white;
}

.movimentacao h2 {
  margin-bottom: 20px;
  color: white;
}

.caixa-content {
  display: flex;
  gap: 30px;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: var(--gray-200);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: var(--gray-100);
}

.caixa h3 {
  color: white;
  font-weight: bold;
}

.grafico {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  max-width: 600px; /* Ajusta a largura da seção do gráfico */
}

.grafico h2 {
  margin-bottom: 20px;
  color: var(--blue);
  text-align: center;
}

.grafico-container {
  height: 300px; /* Ajusta a altura do gráfico */
  position: relative;
}

canvas {
  max-width: 100%;
  height: 100%;
}
</style>
