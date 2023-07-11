<template>
    <main class="main">
        <div class="container">
            <section class="container-promo">
                <section class="promo pizza">
                    <h1 class="promo-title">{{ banner.first }}</h1>
                    <p class="promo-text">
                        {{ banner.second }}
                    </p>
                </section>
            </section>
            <section class="restaurants">
                <div class="section-heading">
                    <h2 class="section-title">{{ title.title }}</h2>
                    <label class="search">
                        <input type="text" class="input input-search" placeholder="Поиск блюд и ресторанов" />
                    </label>
                </div>
                <div class="cards cards-restaurants">
                    <Card 
                    v-for="item, index in magazin.cards" 
                    :key="index" 
                    :image='item.image' 
                    :title='item.title'
                    :time='item.time' 
                    :rating='item.rating' 
                    :price='item.price' 
                    :type='item.type' />
                </div>
            </section>
        </div>
    </main>
</template>
<script>

import Card from "../components/Card.vue"
export default {
    name: 'Home',
    components: {
        Card,

    },
    data() {
        return {
            magazin: {
                cards: [
                    {
                        image: 'img/pizza-plus/preview.jpg',
                        title: 'Пицца плюс',
                        time: '50 мин',
                        rating: '4.5',
                        price: 'От 900 ₽',
                        type: 'Пицца'
                    },
                    {
                        image: 'img/tanuki/preview.jpg',
                        title: 'Тануки',
                        time: '60 мин',
                        rating: '4.5',
                        price: 'От 1 200 ₽',
                        type: 'Суши, роллы'
                    },
                    {
                        image: 'img/food-band/preview.jpg',
                        title: 'FoodBand',
                        time: '40 мин',
                        rating: '4.5',
                        price: 'От 450 ₽',
                        type: 'Пицца'
                    },
                    {
                        image: 'img/palki-skalki/preview.jpg',
                        title: 'Палки скалки',
                        time: '55 мин',
                        rating: '4.5',
                        price: 'От 500 ₽',
                        type: 'Пицца'
                    },
                    {
                        image: 'img/gusi-lebedi/preview.jpg',
                        title: 'Гуси Лебеди',
                        time: '75 мин',
                        rating: '4.5',
                        price: 'От 1 000 ₽',
                        type: 'Русская кухня'
                    },
                    {
                        image: 'img/pizza-burger/preview.jpg',
                        title: 'PizzaBurger',
                        time: '45 мин',
                        rating: '4.5',
                        price: 'От 700 ₽',
                        type: 'Пицца'
                    },

                ]

            },
            banner: {
                first: 'Онлайн-сервис доставки еды на дом',
                second: 'Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком',
            },
            title: {
                title: 'Ресторан'
            }
        }
    }

}
</script>
<style scoped>
.promo-title {
    max-width: 450px;
}
</style>