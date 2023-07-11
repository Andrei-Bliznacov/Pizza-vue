<template>
  <TheHeader />
  <router-view />
  <TheFooter />
  <ModalCard :show="$store.state.showModalCard" @close="$store.commit('showBasket', false)"></ModalCard>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import ModalCard from './components/ModalCard.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
    ModalCard,
  }
}
</script>
