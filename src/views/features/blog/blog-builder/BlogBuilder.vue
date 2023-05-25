<template>
    <app-submenu :data="cats" />
    <app-features :data="items" :imgBaseUrl="imgBaseUrl" :position="'center'"/>
</template>

<script>
import data from "../blog-builder/data.json";
import cats from "../cats.json";

export default {
    data() {
        return {
            items: data.items,
            cats: cats,
            imgBaseUrl: this.$globalPath + '/features/blog/blog-builder/',
        }
    },
}
</script>