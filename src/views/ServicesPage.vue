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

</script>

<template>

  <LayoutComponent>
    <div class="add-servico">
      <h2>Adicionar Novo Serviço</h2>

      <label for="servico">Tipo de serviço</label>
      <select id="servico">
        <option value="" disabled>Selecione um serviço</option>
        <option v-for="servico in servicos" :key="servico" :value="servicos">{{ servico }}</option>
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
  font-family: var( --font-family-base);
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
}

</style>
