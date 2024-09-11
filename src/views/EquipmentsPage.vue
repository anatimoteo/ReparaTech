<script setup>
import { ref, reactive } from 'vue'
import LayoutComponent from '@/components/LayoutComponent.vue'

const marcas = ['Samsung', 'Apple', 'Motorola', 'Xiaomi', 'Realme']

const equipamento = reactive({
  nome: '',
  marcas: '',
  modelo: '',
  numeroserie: '',
  observacoes: ''
})

const equipamentos = ref([])

const enviarDados = (e) => {
  e.preventDefault()

  equipamentos.value.push({
    nome: equipamento.nome,
    marcas: equipamento.marcas,
    modelo: equipamento.modelo,
    numeroserie: equipamento.numeroserie,
    observacoes: equipamento.observacoes,
  })

  equipamento.nome = ''
  equipamento.marcas = ''
  equipamento.modelo = ''
  equipamento.numeroserie = ''
  equipamento.observacoes = ''
}
</script>

<template>
  <LayoutComponent>
    <h1>Cadastro do Equipamento</h1>

    <form class="forms-container">
      <label for="user">Nome do equipamento</label>
      <input type="text" v-model="equipamento.nome" name="text" id="text" />

      <label for="marca">Marca</label>
      <select id="marca" v-model="equipamento.marcas">
        <option value="" disabled>Selecione uma marca</option>
        <option v-for="marca in marcas" :key="marca" :value="marca">{{ marca }}</option>
      </select>

      <label for="modelo">Modelo</label>
      <input type="text" v-model="equipamento.modelo" name="text" id="text" />

      <label for="numeroserie">Número de série</label>
      <input type="text" v-model="equipamento.numeroserie" name="text" id="text" />

      <label for="obs">Observações</label>
      <input
        type="text"
        v-model="equipamento.observacoes"
        name="text"
        id="text"
        placeholder="Breve descrição do problema"
      />

      <div class="custom-submit-container">
        <input type="submit" @click="enviarDados" value="Enviar dados" class="custom-submit" />
      </div>
    </form>

    <table>
      <tr>
        <th>Equipamento</th>
        <th>Marca</th>
        <th>Modelo</th>
        <th>Número de série</th>
        <th>Observações</th>
      </tr>

      <tr v-for="equip in equipamentos" :key="equip.numeroserie">
        <td>{{ equip.nome }}</td>
        <td>{{ equip.marcas }}</td>
        <td>{{ equip.modelo }}</td>
        <td>{{ equip.numeroserie }}</td>
        <td>{{ equip.observacoes }}</td>
      </tr>
    </table>
  </LayoutComponent>
</template>

<style scoped>
.forms-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  padding: 30px;
  background-color: var(--gray-100);
  border-radius: 10px;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
}

label {
  font-size: 1.1rem;
  margin-bottom: 10px;
}

input,
select {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid var(--gray-200);
  border-radius: 5px;
  background-color: white;
  font-family: var( --font-family-base);
  font-size: 17px;
}

h1 {
  text-align: center;
  margin-bottom: 25px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 30px;
  table-layout: fixed;
}

th,
td {
  background-color: var(--gray-100);
  color: var(--blue);
  padding: 10px;
  text-align: left;
  border: 1px solid var(--gray-200);
  word-wrap: break-word;
}

td {
  height: 40px;
}

th {
  font-weight: 600;
}

.custom-submit {
  background-color: var(--primary);
  color: white;
  border: none;
  margin-top: 10px;
  font-size: 1.1rem;
  padding: 15px;
  cursor: pointer;
  line-height: 1.5rem;
  transition: background-color 0.3s;
}

.custom-submit:hover {
  background-color: var(--blue);
}
</style>
