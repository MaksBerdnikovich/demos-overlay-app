<template>
    <div class="quickfinders">
        <div class="quickfinders-grid slide-top">
            <ul>
                <li v-for="item in data" :key="item.name">
                    <a class="quickfinders-grid__item" :href="item.url" target="_blank">
                        <div :class="`badge ${item.tag}`" v-if="item.tag">{{ item.tag }}</div>
                        <div class="icon" v-if="item.icon"><app-svg-icon :name="item.icon"/></div>
                        <div class="title" v-if="item.title">{{ item.title }}</div>
                        <div class="desc" v-if="item.desc">{{ item.desc }}</div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "app-quicks",
    
    props: {
        data: {
            type: Array,
            required: true
        },
    },
}
</script>