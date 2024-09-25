<script setup>
import LayoutComponent from '@/components/LayoutComponent.vue'
</script>

<template>
  <LayoutComponent>
    <div class="clientes-container">
      <!-- Título da Página -->
      <h1>Clientes Registrados</h1>

      <!-- Campo de Busca -->
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Buscar cliente por nome..."
        class="search-input"
      />

      <!-- Botão para Cadastrar Novo Cliente -->
      <button @click="toggleNewClientForm" class="btn-register">Cadastrar Novo Cliente</button>

      <!-- Formulário de Cadastro de Cliente -->
      <div v-if="showNewClientForm" class="form-container">
        <form @submit.prevent="addClient">
          <label for="name">Nome:</label>
          <input v-model="newClient.name" type="text" id="name" required />

          <label for="phone">Telefone:</label>
          <input v-model="newClient.phone" type="text" id="phone" required />

          <label for="email">Email:</label>
          <input v-model="newClient.email" type="email" id="email" required />

          <label for="address">Endereço:</label>
          <input v-model="newClient.address" type="text" id="address" required />

          <button type="submit" class="btn-submit">Adicionar Cliente</button>
        </form>
      </div>

      <!-- Tabela de Clientes -->
      <table class="client-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="client in filteredClients" :key="client.id">
            <td>{{ client.name }}</td>
            <td>{{ client.phone }}</td>
            <td>{{ client.email }}</td>
            <td>
              <button @click="viewClientDetails(client)" class="btn-view">Ver Detalhes</button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Modal para Exibição de Detalhes do Cliente -->
      <div v-if="selectedClient" class="modal">
        <div class="modal-content">
          <h2>Detalhes do Cliente</h2>
          <p><strong>Nome:</strong> {{ selectedClient.name }}</p>
          <p><strong>Telefone:</strong> {{ selectedClient.phone }}</p>
          <p><strong>Email:</strong> {{ selectedClient.email }}</p>
          <p><strong>Endereço:</strong> {{ selectedClient.address }}</p>
          <p><strong>Histórico de Serviços:</strong></p>
          <ul>
            <li v-for="service in selectedClient.services" :key="service.id">{{ service.description }}</li>
          </ul>
          <button @click="closeModal" class="btn-close">Fechar</button>
        </div>
      </div>
    </div>
  </LayoutComponent>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      showNewClientForm: false,
      newClient: {
        name: '',
        phone: '',
        email: '',
        address: '',
      },
      clients: [
        {
          id: 1,
          name: 'Ana Luiza Bernardo Timoteo',
          phone: '(47)99123-3695',
          email: 'analuiza@gmail.com',
          address: 'Rua A, 123',
          services: [{ id: 1, description: 'Serviço de manutenção em ar-condicionado' }],
        },
        {
          id: 2,
          name: 'Elisa Cecília Rocha',
          phone: '987-654-3210',
          email: 'elisarocha@gmail.com',
          address: 'Rua B, 456',
          services: [{ id: 2, description: 'Instalação de pia' }],
        },
         {
          id: 3,
          name: 'Vitor Schmidt',
          phone: '(47)99242-8827',
          email: 'vitorschmidt@gmail.com',
          address: 'Rua C, 789',
          services: [{ id: 2, description: 'Troca de resistência' }],
        },
      ],
      selectedClient: null,
    };
  },
  computed: {
    filteredClients() {
      return this.clients.filter((client) =>
        client.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    toggleNewClientForm() {
      this.showNewClientForm = !this.showNewClientForm;
    },
    addClient() {
      const newClient = {
        ...this.newClient,
        id: this.clients.length + 1,
        services: [],
      };
      this.clients.push(newClient);
      this.newClient = { name: '', phone: '', email: '', address: '' };
      this.showNewClientForm = false;
    },
    viewClientDetails(client) {
      this.selectedClient = client;
    },
    closeModal() {
      this.selectedClient = null;
    },
  },
};
</script>

<style scoped>
.clientes-container {
  padding: 20px;
}

.search-input {
  margin-bottom: 20px;
  padding: 10px;
  width: 100%;
}

.btn-register {
  margin-bottom: 20px;
  padding: 10px 15px;
  background-color: var(--blue);
  color: white;
  border: none;
  cursor: pointer;
}

.client-table {
  width: 100%;
  border-collapse: collapse;
}

.client-table th, .client-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.client-table th {
  background-color: #f2f2f2;
}

.btn-view {
  background-color: var(--blue);
  color: white;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
}

.form-container {
  margin-bottom: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
}

.btn-submit {
  background-color: var(--blue);
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}

.btn-close {
  margin-top: 20px;
  padding: 10px 15px;
  background-color: var(--primary);
  color: white;
  border: none;
  cursor: pointer;
}
</style>
