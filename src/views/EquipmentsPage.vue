<script setup>
import { reactive } from 'vue'
import LayoutComponent from '@/components/LayoutComponent.vue'

const marcas = ['Samsung', 'Apple', 'Motorola', 'Xiaomi', 'Realme']

const equipamento = reactive({
  equipamento: '',
  marcas: [],
  modelo: '',
  numeroserie: '',
  observacoes: ''
})
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
      </tr>
      <tr>
        <td>{{ equipamento.nome }}</td>
        <td>{{ equipamento.marcas }}</td>
        <td>{{ equipamento.modelo }}</td>
        <td>{{ equipamento.numeroserie }}</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
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
  overflow-y: scroll;
  overflow-x: hidden;
  margin-bottom: 50px;
}

label {
  font-size: 1.1rem;
  margin-bottom: 10px;
}

input,
select {
  width: 100%;
  padding: 5px;
  margin-bottom: 20px;
  border: 1px solid var(--gray-200);
  border-radius: 5px;

}

h1 {
  text-align: center;
  margin-bottom: 25px;
}

th,
td {
  background-color: var(--gray-100);
  border-collapse: collapse;
  color: var(--blue);
  border-radius: 8px;
  width: 400px;
  height: 50px;
  font-size: 18px;
}

th,
td {
  padding: 13px;
}
</style>
