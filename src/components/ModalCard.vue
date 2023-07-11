<template>
    <div class="modal modal-cart" :class="{'is-open': show}" @click.self="close">
        <div class="modal-dialog">
            <div class="modal-header">
                <h3 class="modal-title">Корзина</h3>
                <button class="close" @click="close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="food-row"
                 v-for="item, index in $store.state.card" 
                 :key="index">
                    <span class="food-name" @dblclick="$store.commit('removeCard', index)">{{ item.title }}</span>
                    <strong class="food-price">{{ item.price * item.count }}</strong>
                    <div class="food-counter">
                        <button class="counter-button" @click="minusItem(index)">-</button>
                        <span class="counter">{{ item.count }}</span>
                        <button class="counter-button" @click="item.count++">+</button>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <span class="modal-pricetag">{{  cardTotal }} ₽</span>
                <div class="footer-buttons">
                    <button class="button button-primary">Оформить заказ</button>
                    <button class="button clear-cart" @click="$store.commit('cancel')">Отмена</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        show: {
        type: Boolean,
        default: false
        }
    },
	computed:{
		cardTotal(){
			return	this.$store.getters.cardTotal;
		}
	},
    methods:{
        close(){
            this.$emit('close')
        },
		minusItem(index){
			if (this.$store.state.card[index].count > 1) {
			 this.$store.state.card[index].count--
			}
		}
    }
}
</script>