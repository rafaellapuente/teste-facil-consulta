<template>
  <div class="body">
    <h1 class="title">Cadastro finalizado</h1>
    <div class="area-page-4">
        <p>Sr(a). {{ $store.state.profissional.nome }} seu cadastro foi finalizado com sucesso.</p>
        <p>Seus dados serão analizados, aguarde o retorno da equipe para liberarmos o acesso para receber os agendamento dos cliente.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page-4",
  data() {
    return {};
  },
  mounted(){
      let url = location.href
      let urlFilter = url.replace("/page=4","")
      setTimeout(()=>location.assign(urlFilter), 5000)
  },
};
</script>
<style scoped>
.area-page-4{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}
p{
    width: 70%;
}
@media only screen and (max-width: 420px){
    .body{
        height: 100vh;
    }
}
</style>