<template>
    <main class="main">
        <div class="container">
            <section class="menu">
                <div class="flex-container">
                    <div class="section-heading">
                        <h2 class="section-title restaurant-title">Пицца Плюс</h2>
                        <div class="card-info">
                            <div class="rating">4.5</div>
                            <div class="price">От 900 ₽</div>
                            <div class="category">Пицца</div>
                        </div>
                    </div>
                    <div class="sort-buttons">
                        <button class="button sort-button" @click="sortByPrice('asc')">Сортировать товар по возрастанию</button>
                        <button class="button sort-button" @click="sortByPrice('desc')">Сортировать товар по убыванию</button>
                    </div>
                </div>
                <div class="cards cards-menu">
                    <CardProduct 
                    v-for="(item, index) in cards" 
                    :key="index" 
                    :img="item.img" 
                    :title="item.title"
                    :desc="item.desc" 
                    :price="item.price" 
                    @openBasket="addProduct(index)" 
                    @clickImage="showCard(index)" />
                </div>
            </section>
        </div>
    </main>
</template>
<script>
import CardProduct from "@/components/CardProduct.vue";

export default {
    name: "Restaurnat",
    components: {
        CardProduct,
    },
    data() {
        return {
            cards: [
                {
                    img: "../img/pizza-plus/pizza-vesuvius.jpg",
                    title: "Пицца Везувий",
                    desc: "Соус томатный, сыр «Моцарелла», ветчина, пепперони, перец«Халапенье», соус «Тобаско», томаты.",
                    price: 545,
                    count: 1,
                    id: 1,
                    images: [
                        {
                            src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/9edc060af068da34bc5c8298755f11a2.jpg",
                            type: "image",
                        },
                    ]
                },
                {
                    img: "../img/pizza-plus/pizza-girls.jpg",
                    title: "Пицца Девичник",
                    desc: "Соус томатный, постное тесто, нежирный сыр, кукуруза, лук,маслины,грибы, помидоры, болгарский перец.",
                    price: 450,
                    count: 1,
                    id: 2,
                    images: [
                        {
                            src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/9edc060af068da34bc5c8298755f11a2.jpg",
                            type: "image",
                        },
                    ]
                },
                {
                    img: "../img/pizza-plus/pizza-oleole.jpg",
                    title: "Пицца Оле-Оле",
                    desc: "Соус томатный, сыр «Моцарелла», черри, маслины, зелень, майонез",
                    price: 440,
                    count: 1,
                    id: 3,
                    images: [
                        {
                            src: "https://lipsum.app/id/98/800x600",
                            type: "image",
                        },
                    ]
                },
                {
                    img: "../img/pizza-plus/pizza-hawaiian.jpg",
                    title: "Пицца Гавайская",
                    desc: "Соус томатный, сыр «Моцарелла», ветчина, ананасы.",
                    price: 440,
                    count: 1,
                    id: 4,
                    images: [
                        {
                            src: "https://lipsum.app/id/98/800x600",
                            type: "image",
                        },
                    ]
                },
                {
                    img: "../img/pizza-plus/pizza-classic.jpg",
                    title: "Пицца Классика",
                    desc: "Соус томатный, сыр «Моцарелла», сыр «Пармезан», ветчина,салями,грибы.",
                    price: 510,
                    count: 1,
                    id: 5,
                    images: [
                        {
                            src: "https://lipsum.app/id/98/800x600",
                            type: "image",
                        },
                    ]
                },
                {
                    img: "../img/pizza-plus/pizza-classic.jpg",
                    title: "Пицца Плюс",
                    desc: "Соус томатный, сыр «Моцарелла», сыр «Чеддер», томаты,пепперони,телятина, грибы, бекон, болгарский перец.",
                    price: 805,
                    count: 1,
                    id: 6,
                    images: [
                        {
                            src: "https://lipsum.app/id/98/800x600",
                            type: "image",
                        },
                    ]
                },
            ],
        };
    },
    methods: {
        addProduct(index) {
            this.$store.commit("addToCard", this.cards[index]);
        },
        showCard(index) {
            Fancybox.show(this.cards[index].images);
        },
        sortByPrice(direction){
            this.cards.sort((a,b) => direction === 'asc'? a.price - b.price : b.price - a.price)
        }
    },
};
</script>
<style scoped>
.flex-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}
.sort-buttons{
    display: flex;
    justify-content: flex-end;
    margin-bottom: 44px;
}
.sort-button{
margin: 5px;
padding: 5px 7px;
font-size: 14px;
line-height: 16px;
}
</style>