<template>
    <app-quicks :data="items" />
</template>

<script>

import data from "./data.json";

export default {
    data() {
        return {
            items: data.items,
        }
    },
}
</script>