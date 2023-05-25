<template>
    <app-submenu :data="cats" />
    <app-masonry :data="items" :imgBaseUrl="imgBaseUrl"/>
</template>

<script>
import data from "../cart-checkout/data.json";
import cats from "../cats.json";

export default {
    data() {
        return {
            items: data.items,
            cats: cats,
            imgBaseUrl: this.$globalPath + '/features/shop/cart-checkout/',
        }
    },
}
</script>