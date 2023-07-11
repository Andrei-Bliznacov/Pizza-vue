import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      showModalCard: false,
      card: [],
    }
  },
  getters: {
    cardTotal(state) {
      let count = 0;
      for (let index = 0; index < state.card.length; index++) {
        const item = state.card[index];
        count += item.price * item.count;
      }
      return count;
    },
    productsCount(state) {
      let count = 0;
      for (let index = 0; index < state.card.length; index++) {
        const item = state.card[index];
        count += item.count;
      }
      return count;
    },
  },
  mutations: {
    showBasket(state, value) {
      state.showModalCard = value;
    },
    addToCard(state, value) {
      const findResult = state.card.find(item => {
        return item.id == value.id;
      });
      if (findResult !== undefined) {
        value.count++;
      } else {
        state.card.push(value);
      }
    },
    cancel(state){
      state.card.length = 0 ;
      state.showModalCard = false;
     },
  }
})
export default store