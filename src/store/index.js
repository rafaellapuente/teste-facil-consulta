import { createStore } from 'vuex'

export default createStore({
  state: {
    profissional:{
      nome:"",
      cpf:"",
      numero:"",
      estado:"",
      estadoId:"dis",
      cidade:"dis",
      espe:"dis",
      valor:"",
      dinheiro:false,
      pix:false,
      credito:false,
      cartao:""
    }
  },
  getters: {
  },
  mutations: {
    saveNome(state, payload){
      state.profissional.nome = payload
    },
    saveCpf(state, payload){
      state.profissional.cpf = payload
    },
    saveNumero(state, payload){
      state.profissional.numero = payload
    },
    saveEstado(state, payload){
      state.profissional.estado = payload
    },
    saveEstadoId(state, payload){
      state.profissional.estadoId = payload
    },
    saveCidade(state, payload){
      state.profissional.cidade = payload
    },
    saveEspe(state, payload){
      state.profissional.espe = payload
    },
    saveValor(state, payload){
      state.profissional.valor = payload
    },
    saveDinheiro(state, payload){
      state.profissional.dinheiro = payload
    },
    savePix(state, payload){
      state.profissional.pix = payload
    },
    saveCredito(state, payload){
      state.profissional.credito = payload
    },
    saveCartao(state, payload){
      state.profissional.cartao = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
