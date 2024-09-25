<script setup>
import { ref } from 'vue';
import LayoutComponent from '@/components/LayoutComponent.vue';

const entradaEquipamentos = ref([
  { id: 1, tipo: 'Computador', modelo: 'Dell XPS 13', estado: 'Novo' },
  { id: 2, tipo: 'Impressora', modelo: 'HP LaserJet', estado: 'Usado' }
]);

const retiradaEquipamentos = ref([
  { id: 1, tipo: 'Monitor', modelo: 'LG 24', estado: 'Usado', motivo: 'Manutenção' },
  { id: 2, tipo: 'Teclado', modelo: 'Logitech K120', estado: 'Novo', motivo: 'Descarte' }
]);

const showEntradaModal = ref(false);
const showRetiradaModal = ref(false);

const novoEquipamento = ref({
  tipo: '',
  modelo: '',
  estado: ''
});

const novaRetirada = ref({
  tipo: '',
  modelo: '',
  estado: '',
  motivo: ''
});

const registrarEntrada = () => {
  if (novoEquipamento.value.tipo && novoEquipamento.value.modelo && novoEquipamento.value.estado) {
    entradaEquipamentos.value.push({ 
      id: entradaEquipamentos.value.length + 1, 
      ...novoEquipamento.value 
    });
    resetNovoEquipamento();
    showEntradaModal.value = false; 
  }
};

const registrarRetirada = () => {
  if (novaRetirada.value.tipo && novaRetirada.value.modelo && novaRetirada.value.estado && novaRetirada.value.motivo) {
    retiradaEquipamentos.value.push({ 
      id: retiradaEquipamentos.value.length + 1, 
      ...novaRetirada.value 
    });
    resetNovaRetirada();
    showRetiradaModal.value = false; 
  }
};

const resetNovoEquipamento = () => {
  novoEquipamento.value = { tipo: '', modelo: '', estado: '' };
};

const resetNovaRetirada = () => {
  novaRetirada.value = { tipo: '', modelo: '', estado: '', motivo: '' };
};

</script>

<template>
  <LayoutComponent>
    <div class="container">
      <h1>Página de Equipamentos</h1>
      
      <div class="table-container">
        <h2>Entradas de Equipamentos</h2>
        <p class="description">Aqui você pode visualizar e registrar as entradas de novos equipamentos. Utilize o botão abaixo para adicionar um novo equipamento à lista.</p>
        <table class="styled-table">
          <thead>
            <tr>
              <th>Tipo de Equipamento</th>
              <th>Modelo</th>
              <th>Estado de Conservação</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in entradaEquipamentos" :key="item.id">
              <td>{{ item.tipo }}</td>
              <td>{{ item.modelo }}</td>
              <td>{{ item.estado }}</td>
            </tr>
          </tbody>
        </table>
        <button @click="showEntradaModal = true" class="primary-btn">Registrar Nova Entrada</button>
      </div>

      <div class="table-container">
        <h2>Retiradas de Equipamentos</h2>
        <p class="description">Nesta seção, você pode visualizar as retiradas de equipamentos e registrar novas retiradas. Clique no botão abaixo para adicionar uma nova retirada.</p>
        <table class="styled-table">
          <thead>
            <tr>
              <th>Tipo de Equipamento</th>
              <th>Modelo</th>
              <th>Estado de Conservação</th>
              <th>Motivo da Retirada</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in retiradaEquipamentos" :key="item.id">
              <td>{{ item.tipo }}</td>
              <td>{{ item.modelo }}</td>
              <td>{{ item.estado }}</td>
              <td>{{ item.motivo }}</td>
            </tr>
          </tbody>
        </table>
        <button @click="showRetiradaModal = true" class="primary-btn">Registrar Retirada</button>
      </div>

      <div v-if="showEntradaModal" class="modal">
        <div class="modal-content">
          <h3>Registrar Nova Entrada</h3>
          <label>Tipo:</label>
          <input v-model="novoEquipamento.tipo" class="modal-input" placeholder="Ex: Computador" />
          
          <label>Modelo:</label>
          <input v-model="novoEquipamento.modelo" class="modal-input" placeholder="Ex: Dell XPS 13" />
          
          <label>Estado:</label>
          <input v-model="novoEquipamento.estado" class="modal-input" placeholder="Ex: Novo" />
          
          <div class="modal-actions">
            <button @click="registrarEntrada" class="modal-btn primary-btn">Salvar</button>
            <button @click="showEntradaModal = false" class="modal-btn secondary-btn">Cancelar</button>
          </div>
        </div>
      </div>

      <div v-if="showRetiradaModal" class="modal">
        <div class="modal-content">
          <h3>Registrar Nova Retirada</h3>
          <label>Tipo:</label>
          <input v-model="novaRetirada.tipo" class="modal-input" placeholder="Ex: Monitor" />
          
          <label>Modelo:</label>
          <input v-model="novaRetirada.modelo" class="modal-input" placeholder="Ex: LG 24" />
          
          <label>Estado:</label>
          <input v-model="novaRetirada.estado" class="modal-input" placeholder="Ex: Usado" />
          
          <label>Motivo:</label>
          <input v-model="novaRetirada.motivo" class="modal-input" placeholder="Ex: Manutenção" />
          
          <div class="modal-actions">
            <button @click="registrarRetirada" class="modal-btn primary-btn">Salvar</button>
            <button @click="showRetiradaModal = false" class="modal-btn secondary-btn">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  </LayoutComponent>
</template>

<style scoped>
.container {
  padding: 20px;
  max-width: 1000px;
  margin: auto;
}

.table-container {
  margin-bottom: 40px;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

h1, h2 {
  color: var(--blue);
  margin-bottom: 10px;
}

.description {
  font-size: 0.9em;
  color: #666;
  margin-bottom: 15px;
}

.styled-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  font-size: 1em;
  text-align: left;
}

.styled-table thead tr {
  background-color: var(--blue-light);
  color: var(--blue);
}

.styled-table th, .styled-table td {
  padding: 12px 15px;
  border: 1px solid #ddd;
}

.primary-btn {
  padding: 10px 20px;
  background-color: var(--blue);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.primary-btn:hover {
  background-color: var(--blue-dark);
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.modal-input {
  width: calc(100% - 20px);
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.modal-actions {
  display: flex;
  justify-content: space-between;
}

.modal-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.secondary-btn {
  background-color: #ccc;
  color: #333;
}

.secondary-btn:hover {
  background-color: #bbb;
}
</style>
