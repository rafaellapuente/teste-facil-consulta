<template>
  <div class="body">
    <div class="voltar">
      <router-link to="/" id="out">{{ voltar }}</router-link>
    </div>
    <h1 class="title">Sobre o atendimento</h1>
    <h2 class="sub-title">Detalhes do atendimento</h2>
    <div class="area-form">
      <div class="left-side">
        <form>
          <label class="label-type1">
            Especialidade principal*
            <select v-model="esp" :class="{ border: errorEsp }">
              <option disabled value="dis">Selecione a especialidade</option>
              <option v-for="i in itemEsp" :key="i.id" :value="i.nome">
                {{ i.nome }}
              </option>
            </select>
            <p v-show="errorEsp" class="error">{{ errorEsp }}</p>
          </label>
          <label class="label-type1">
            Informe o preço da consulta*
            <div id="value">
              <div id="moeda" :class="{ border: errorValor }">R$</div>
              <input
                id="border"
                type="text"
                name="valor"
                maxlength="6"
                v-model="valor"
                v-mask="'###,##'"
                :class="{ border: errorValor }"
              />
            </div>
            <p v-show="errorValor" class="error">{{ errorValor }}</p>
          </label>
          <div class="label-type1">
            Formas de pagamento da consilta*
            <label class="pag" :class="{ borderC: errorPag }">
              <input
                type="checkbox"
                name="Dinheiro"
                value="Dinheiro"
                v-model="dinheiro"
              />
              Em dinheiro
            </label>
            <label class="pag" :class="{ borderC: errorPag }">
              <input type="checkbox" name="Pix" value="Pix" v-model="pix" />
              Pix
            </label>
            <div id="colu" class="pag" :class="{ borderC: errorPag }">
              <label id="tipo">
                <input
                  type="checkbox"
                  name="Cartão de crédito"
                  v-model="cartao"
                />
                Cartão de crédito
              </label>
              <div v-show="cartao" id="formas">
                <p>Parcelamento em</p>
                <label id="parce">
                  <input
                    type="radio"
                    name="credito"
                    v-model="parc"
                    value="Cartão de crédito - Parcelamento em 1x, sem juros"
                  />
                  1x, sem juros
                </label>
                <label id="parce">
                  <input
                    type="radio"
                    name="credito"
                    v-model="parc"
                    value="Cartão de crédito - Parcelamento em 2x, sem juros"
                  />
                  2x, sem juros
                </label>
                <label id="parce">
                  <input
                    type="radio"
                    name="credito"
                    v-model="parc"
                    value="Cartão de crédito - Parcelamento em 3x, sem juros"
                  />
                  3x, sem juros
                </label>
              </div>
            </div>
            <p v-show="errorPag" class="error">{{ errorPag }}</p>
          </div>
        </form>
        <div class="area-load">
          <div id="loading2"></div>
          <div id="loading-num">2 de 2</div>
        </div>
        <Button
          buttonName="próximo"
          cor="button1"
          @click.prevent.stop="vereficacao()"
        />
      </div>
      <div class="right-side">
        <img src="../../public/images/pag-2.png" alt="imagem" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button";
import espec from "../services/espec";
export default {
  name: "Page-2",
  data() {
    return {
      esp: "dis",
      valor: "",
      dinheiro: "",
      pix: "",
      cartao: "",
      parc: "",
      itemEsp: [],
      errorEsp: "",
      errorValor: "",
      errorPag: "",
      voltar: "<",
    };
  },
  components: {
    Button,
  },
  mounted() {
    espec.listar().then((res) => {
      this.itemEsp = res.data;
    });
    this.esp = this.$store.state.profissional.espe;
    this.valor = this.$store.state.profissional.valor;
    this.dinheiro = this.$store.state.profissional.dinheiro;
    this.pix = this.$store.state.profissional.pix;
    this.cartao = this.$store.state.profissional.credito;
    this.parc = this.$store.state.profissional.cartao;
  },
  methods: {
    vereficacao() {
      this.errorEsp = "";
      this.errorValor = "";
      this.errorPag = "";
      let validaEsp = this.itemEsp.find((i) => i.nome === this.esp);
      let valor = this.valor.replace(",", ".");
      let newValor =
        valor.length[0] === "0"
          ? Number(valor.replace(/^./, ""))
          : Number(valor);
      if (!validaEsp) {
        let erro = "Selecione uma especialidade.";
        this.errorEsp = erro;
      }
      if (newValor >= 30 && newValor <= 350 ? false : true) {
        let erro =
          "O valor da consulta deve ser no minimo R$030,00 e no máximo R$350,00.";
        this.errorValor = erro;
      }
      if (
        this.dinheiro === false && this.pix === false && this.cartao === false
          ? true
          : false
      ) {
        let erro = "Selecione pelo menos uma opção de pagamento.";
        this.errorPag = erro;
      } else if (this.cartao === false) {
        this.parc = "";
      } else if (this.cartao && this.parc === "") {
        let erro = "Selecione uma opção de parcelamento.";
        this.errorPag = erro;
      }
      if (
        this.errorEsp === "" &&
        this.errorValor === "" &&
        this.errorPag === ""
      ) {
        this.$store.commit("saveEspe", this.esp);
        this.$store.commit("saveValor", newValor.toFixed(2).replace(".",","));
        this.$store.commit("saveDinheiro", this.dinheiro);
        this.$store.commit("savePix", this.pix);
        this.$store.commit("saveCredito", this.cartao);
        this.$store.commit("saveCartao", this.parc);
        return this.$router.push("/page=3");
      }
    },
  },
};
</script>
<style scoped>
#value {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70%;
}
#moeda {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 35px;
  background: #483698;
  color: #ffffff;
  margin-top: 10px;
  border-radius: 5px 0px 0px 5px;
}
#border {
  border-radius: 0px 5px 5px 0px;
  width: 100%;
}
#parce {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  margin: 5px 0px;
}
.border {
  border-color: #dc3545;
}
.borderC {
  border: 1px solid #dc3545;
}
</style>