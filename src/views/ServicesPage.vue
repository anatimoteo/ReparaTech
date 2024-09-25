<script setup>
import { ref } from 'vue'
import LayoutComponent from '@/components/LayoutComponent.vue'

const servicos = ['Troca de tela', 'Troca de Bateria', 'Reparo de Câmera', 'Desbloqueio de Dispositivo']

const cadastroServico = ref({
  servico: '',
  descricao: '',
  preco: null,
  duracao: ''
})

const servicosCadastrados = ref([])

const addServico = () => {
  if (cadastroServico.value.servico && cadastroServico.value.descricao && cadastroServico.value.preco && cadastroServico.value.duracao) {
    servicosCadastrados.value.push({ ...cadastroServico.value })
    
    cadastroServico.value = { servico: '', descricao: '', preco: null, duracao: '' }
  } else {
    alert("Por favor, preencha todos os campos.")
  }
}
</script>

<template>
  <LayoutComponent>
    <div class="add-servico">
      <h2>Adicionar Novo Serviço</h2>

      <label for="servico">Tipo de serviço</label>
      <select id="servico" v-model="cadastroServico.servico">
        <option value="" disabled>Selecione um serviço</option>
        <option v-for="servico in servicos" :key="servico" :value="servico">{{ servico }}</option>
      </select>

      <label for="servico-descricao">Descrição do Serviço</label>
      <input
        v-model="cadastroServico.descricao"
        id="servico-descricao"
        type="text"
        placeholder="Descrição do serviço"
      />

      <label for="servico-preco">Preço do Serviço (R$)</label>
      <input v-model="cadastroServico.preco" id="servico-preco" type="number" placeholder="Preço" />

      <label for="servico-duracao">Duração do Serviço</label>
      <input
        v-model="cadastroServico.duracao"
        id="servico-duracao"
        type="text"
        placeholder="Duração (ex: 2 horas)"
      />

      <button @click="addServico">Adicionar Serviço</button>
    </div>

    <div class="lista-servicos" v-if="servicosCadastrados.length">
      <h2 class="titulo-servicos">Serviços Cadastrados</h2>
      <table>
        <thead>
          <tr>
            <th>Serviço</th>
            <th>Descrição</th>
            <th>Preço (R$)</th>
            <th>Duração</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(servico, index) in servicosCadastrados" :key="index">
            <td>{{ servico.servico }}</td>
            <td>{{ servico.descricao }}</td>
            <td>{{ servico.preco }}</td>
            <td>{{ servico.duracao }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </LayoutComponent>
</template>

<style scoped>
.add-servico {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  padding: 30px;
  background-color: var(--blue);
  border-radius: 10px;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
  color: white;
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

.add-servico button {
  padding: 10px 20px;
  background-color: var(--gray-200);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-servico button:hover {
  background-color: var(--gray-100);
}

.lista-servicos {
  margin-top: 30px;
  text-align: center; /* Centraliza o conteúdo dentro da div */
}

.titulo-servicos {
  text-align: center; /* Centraliza o título */
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;
  max-width: 800px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

thead {
  background-color: var(--blue);
  color: white;
}

th,
td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

tbody tr:hover {
  background-color: #f2f2f2;
}
</style>
