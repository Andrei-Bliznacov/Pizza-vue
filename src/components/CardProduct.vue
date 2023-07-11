<template>
    <div class="card">
        <img :src="img" alt="image" class="card-image" @click="$emit('clickImage')" />
        <div class="card-text">
            <div class="card-heading">
                <h3 class="card-title card-title-reg">{{title}}</h3>
            </div>
            <div class="card-info">
                <div class="ingredients">{{desc}}
                </div>
            </div>
            <div class="card-buttons">
                <button @click="$emit('openBasket')" class="button button-primary button-add-cart">
                    <span class="button-card-text">В корзину</span>
                    <span class="button-cart-svg"></span>
                </button>
                <strong class="card-price-bold">{{price}} ₽</strong>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        img:{
            type: String,
            default:"./public/img/pizza-plus/pizza-classic.jpg"
        },
        title:{
            type: String,
            default: 'Пицца Классическая'
        },
        desc:{
            type: String,
            default: 'Сыр «Моцарелла», сыр «Пармезан», ветчина, грибыб, салями, соус томатный.'
        },
        price:{
            type: Number,
            default: 0
        }
    }
}
</script>