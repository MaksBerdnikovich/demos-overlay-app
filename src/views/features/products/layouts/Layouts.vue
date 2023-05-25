<template>
    <app-submenu :data="cats" />
    <app-features :data="items" :imgBaseUrl="imgBaseUrl"/>
</template>

<script>
import data from "../layouts/data.json";
import cats from "../cats.json";

export default {
    data() {
        return {
            items: data.items,
            cats: cats,
            imgBaseUrl: this.$globalPath + '/features/products/layouts/',
        }
    },
}
</script>
