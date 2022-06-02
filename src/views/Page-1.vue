<template>
  <div class="body">
    <h1 class="title">Sobre o profissional</h1>
    <h2 class="sub-title">Dados do profissional</h2>
    <div class="area-form">
      <div class="left-side">
        <form>
          <label class="label-type1">
            Nome Completo*
            <input
              type="text"
              name="name"
              :class="{ border: errorName }"
              placeholder="Digite o nome completo"
              required
              minlength="3"
              maxlength="48"
              v-model="nome"
            />
            <p v-show="errorName" class="error">{{ errorName }}</p>
          </label>
          <label class="label-type1">
            CPF*
            <input
              type="text"
              name="cpf"
              :class="{ border: errorCpf }"
              class="min"
              placeholder="Digite um CPF"
              required
              maxlength="14"
              v-model="cpf"
              v-mask="'###.###.###-##'"
            />
            <p class="error" v-show="errorCpf">{{ errorCpf }}</p>
          </label>
          <label class="label-type1">
            Número de celular*
            <input
              type="text"
              name="tel"
              :class="{ border: errorTel }"
              class="min"
              placeholder="(00) 0 0000-0000"
              required
              maxlength="16"
              v-model="tel"
              v-mask="'(##) # ####-####'"
            />
            <p v-show="errorTel" class="error">{{ errorTel }}</p>
          </label>
          <label class="label-type2">
            <label class="area-select">
              Estado*
              <select v-model="estado" class="select1" :class="{ border: errorEsta }">
                <option disabled value="dis">Selecione</option>
                <option v-for="i in itemsEstado" :key="i.id" :value="i.id">
                  {{ i.nome }}
                </option>
              </select>
              <p v-show="errorEsta" class="error">{{ errorEsta }}</p>
            </label>
            <label class="area-select">
              Cidade*
              <select v-model="cidade" class="select2" :class="{ border: errorCida }">
                <option disabled value="dis">Selecione</option>
                <option v-for="i in itemsCidade" :key="i.id" :value="i.nome">
                  {{ i.nome }}
                </option>
              </select>
              <p v-show="errorCida" class="error">{{ errorCida }}</p>
            </label>
          </label>
        </form>
        <div class="area-load">
          <div id="loading"></div>
          <div id="loading-num">1 de 2</div>
        </div>
        <Button
          buttonName="próximo"
          cor="button1"
          @click.prevent.stop="vereficacao()"
        />
      </div>
      <div class="right-side">
        <img src="../../public/images/pag-1.png" alt="imagem" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button";
import estados from "../services/estados";
import cidades from "../services/cidades";
import cpfCada from "../services/cpfCada";

export default {
  name: "Page-1",
  data() {
    return {
      nome: [],
      cpf: [],
      tel: [],
      estado: "dis",
      cidade: "dis",
      itemsEstado: [],
      itemsCidade: [],
      itemsCpf: [],
      errorName: "",
      errorCpf: "",
      errorTel: "",
      errorEsta: "",
      errorCida: "",
      voltar: "<",
    };
  },
  components: {
    Button,
  },
  mounted() {
    estados.listar().then((res) => {
      this.itemsEstado = res.data;
    });
    cpfCada.listar().then((res) => {
      this.itemsCpf = res.data;
    });
    this.nome = this.$store.state.profissional.nome;
    this.cpf = this.$store.state.profissional.cpf;
    this.tel = this.$store.state.profissional.numero;
    this.estado = this.$store.state.profissional.estadoId;
    this.cidade = this.$store.state.profissional.cidade;
  },
  watch: {
    estado(newValue) {
      cidades.listar(newValue).then((res) => {
        this.itemsCidade = res.data;
      });
    },
  },
  methods: {
    vereficacao() {
      this.errorName = "";
      this.errorCpf = "";
      this.errorTel = "";
      this.errorEsta = "";
      this.errorCida = "";
      let cpf = this.cpf;
      let newCpf = cpf.replace(".", "").replace(".", "").replace("-", "");
      let valiCpf = this.itemsCpf.find((i) => i.cpf === newCpf);
      let valiEsta = this.itemsEstado.find((i) => i.id === this.estado);
      let valiCida = this.itemsCidade.find((i) => i.nome === this.cidade);
      let nomeEstado = this.itemsEstado.find((i) => i.id === this.estado);
      if (this.nome.length < 2) {
        let erro = "O nome deve ter no minimo 3 caracteres e no maximo 48.";
        this.errorName = erro;
      }
      if (this.cpf.length < 14) {
        let erro = "CPF inválido.";
        this.errorCpf = erro;
      }
      if (valiCpf) {
        let erro = "CPF já cadastrado.";
        this.errorCpf = erro;
      }
      if (this.tel.length < 16) {
        let erro = "Telefone inválido.";
        this.errorTel = erro;
      }
      if (!valiEsta) {
        let erro = "Selecione um estado.";
        this.errorEsta = erro;
      } else if (!valiCida) {
        let erro = "Selecione uma cidade.";
        this.errorCida = erro;
      } else {
        this.$store.commit("saveNome", this.nome);
        this.$store.commit("saveCpf", this.cpf);
        this.$store.commit("saveNumero", this.tel);
        this.$store.commit("saveEstado", nomeEstado.nome);
        this.$store.commit("saveCidade", this.cidade);
        this.$store.commit("saveEstadoId", this.estado);
        return this.$router.push("/page=2");
      }
    },
  },
};
</script>
<style scoped>
.border {
  border-color: #dc3545;
}
</style>