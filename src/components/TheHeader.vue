<template>
	<div class="container">
		<header class="header">
			<router-link to="/" class="logo">
				<img src="/img/icon/logo.svg" alt="Logo" />
			</router-link>
			<label class="address">
				<input type="text" class="input input-address" placeholder="Адрес доставки" />
			</label>
			<div class="buttons">
				<span class="user-name"></span>
				<button class="button button-cart" @click="showBasket">
						<span class="button-cart-svg"></span>
						<span class="button-text">Корзина</span>
						<span class="count" v-show="count > 0">{{ count }}</span>
					</button>
				<button class="button button-primary button-auth">
					<span class="button-auth-svg"></span>
					<span class="button-text">Войти</span>
				</button>
					<button class="button button-primary button-out">
						<span class="button-text">Выйти</span>
						<span class="button-out-svg"></span>
					</button>
			</div>
		</header>
	</div>
</template>
<script>
	export default {

methods: {
	showBasket() {
		this.$store.commit('showBasket', true)
	},
	

	},
computed: {
		count() {
			return this.$store.getters.productsCount
		}
	}
}
</script>
<style  scoped>
.count {
	background: red;
	border-radius: 50%;
	font-size: 10px;
	width: 15px;
	height: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	margin-left: 5px;
}
</style>