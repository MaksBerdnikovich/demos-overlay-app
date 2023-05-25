<template>
    <app-features
        :data="items"
        :imgBaseUrl="imgBaseUrl"
    />
</template>

<script>

import data from "./data.json";

export default {
    data() {
        return {
            items: data.items,
            imgBaseUrl: this.$globalPath + '/features/portfolio/',
        }
    },
}
</script>