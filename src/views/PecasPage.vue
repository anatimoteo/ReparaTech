<script setup>
import { ref, reactive } from 'vue'
import LayoutComponent from '@/components/LayoutComponent.vue'

const fornecedores = ['Fornecedor A', 'Fornecedor B', 'Fornecedor C', 'Fornecedor D']

const peca = reactive({
  descricao: '',
  fornecedor: '',
  quantidadeEstoque: '',
})

const pecas = ref([])

const enviarDados = (e) => {
  e.preventDefault()

  pecas.value.push({
    descricao: peca.descricao,
    fornecedor: peca.fornecedor,
    quantidadeEstoque: peca.quantidadeEstoque,
  })

  peca.descricao = ''
  peca.fornecedor = ''
  peca.quantidadeEstoque = ''
}
</script>

<template>
  <LayoutComponent>
    <h1>Cadastro de Peça</h1>

    <form class="forms-container">
      <label for="descricao">Descrição da Peça</label>
      <input type="text" v-model="peca.descricao" name="descricao" id="descricao" />

      <label for="fornecedor">Fornecedor</label>
      <select id="fornecedor" v-model="peca.fornecedor">
        <option value="" disabled>Selecione um fornecedor</option>
        <option v-for="fornecedor in fornecedores" :key="fornecedor" :value="fornecedor">{{ fornecedor }}</option>
      </select>

      <label for="quantidade">Quantidade em Estoque</label>
      <input type="number" v-model="peca.quantidadeEstoque" name="quantidade" id="quantidade" />

      <div class="custom-submit-container">
        <input type="submit" @click="enviarDados" value="Adicionar Nova Peça" class="custom-submit" />
      </div>
    </form>

    <table>
      <tr>
        <th>Descrição</th>
        <th>Fornecedor</th>
        <th>Quantidade em Estoque</th>
      </tr>

      <tr v-for="item in pecas" :key="item.descricao">
        <td>{{ item.descricao }}</td>
        <td>{{ item.fornecedor }}</td>
        <td>{{ item.quantidadeEstoque }}</td>
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
  font-family: var(--font-family-base);
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
  height: 50px;
  cursor: pointer;
  line-height: 1.5rem;
  transition: background-color 0.3s;
}

.custom-submit:hover {
  background-color: var(--blue);
}
</style>

