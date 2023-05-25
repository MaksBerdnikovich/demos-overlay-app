<template>
    <app-blocks
        :data="items"
        :categories="cats"
        :router="'blocks_dark_category'">
    </app-blocks>
</template>

<script>

import data from "./data.json";

export default {
    data() {
        return {
            cats: data.cats,
            items: data.items,
        }
    },
}
</script>
