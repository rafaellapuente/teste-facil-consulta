<template>
  <div class="body">
    <div class="voltar">
      <router-link to="/page=2" id="out">{{ voltar }}</router-link>
    </div>
    <h1 class="title">Revisão do cadastro</h1>
    <div class="area-form">
      <div class="left-side">
        <div class="cadastro">
          <div class="infos-cadastro">
            <p class="infos-titulo">Nome Completo</p>
            <p class="infos-info">{{ $store.state.profissional.nome }}</p>
          </div>
          <div class="infos-cadastro">
            <p class="infos-titulo">CPF</p>
            <p class="infos-info">{{ $store.state.profissional.cpf }}</p>
          </div>
          <div class="infos-cadastro">
            <p class="infos-titulo">Número de celular ou de telefone</p>
            <p class="infos-info">{{ $store.state.profissional.numero }}</p>
          </div>
          <div class="infos-cadastro">
            <p class="infos-titulo">Estado/Cidade</p>
            <p class="infos-info">
              {{ $store.state.profissional.estado }} -
              {{ $store.state.profissional.cidade }}
            </p>
          </div>
          <div class="infos-cadastro">
            <p class="infos-titulo">Especialidade principal</p>
            <p class="infos-info">{{ $store.state.profissional.espe }}</p>
          </div>
          <div class="infos-cadastro">
            <p class="infos-titulo">Preço da consulta</p>
            <p class="infos-info">R$ {{ $store.state.profissional.valor }}</p>
          </div>
          <div class="infos-cadastro">
            <p class="infos-titulo">Formas de pagamento da consulta</p>
            <p class="infos-info" v-if='this.$store.state.profissional.dinheiro'>Dinheiro</p>
            <p class="infos-info" v-if='this.$store.state.profissional.pix'>Pix</p>
            <p class="infos-info" v-show='this.$store.state.profissional.credito'>{{ $store.state.profissional.cartao }}</p>
          </div>
          <div class="column">
            <Button buttonName="cadastro profissional" cor='button2' @click="this.$router.push('/page=4')"/>
            <router-link to='/' id="edit">Editar cadastro</router-link>
          </div>
        </div>
      </div>
      <div class="right-side">
        <img src="../../public/images/pag-3.png" alt="imagem" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button";
export default {
  name: "Page-3",
  data() {
    return {
      voltar:"<"
    };
  },
  components: {
    Button,
  },
};
</script>
<style scoped>
.cadastro {
  width: 100%;
}
.infos-titulo {
  font-weight: bold;
}
.column{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
#edit{
    margin-top:20px;
    font-weight: bold;
    text-decoration: none;
}
</style>