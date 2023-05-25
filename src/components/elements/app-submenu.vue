<template>
    <div class="wrapper-submenu">
        <ul class="wrapper-submenu__list">
            <li v-for="item in data" :key="item.title">
                <router-link :to="{name: item.name}" class="wrapper-submenu__item" @click="setScroll">
                    <span>{{item.title}}</span>
                    <i v-if="item.tag" :class="`badge ${item.tag}`">{{item.tag}}</i>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: "app-submenu",
    props: {
        data: {
            type: Array,
            required: true
        }
    },
    
    methods: {
        setScroll(event) {
            if (event) {
                this.$scrollTo('.wrapper')
            }
        }
    },
}
</script>

<style lang="scss">
@import "src/assets/scss/variables";
@import "src/assets/scss/mixins";

.wrapper-submenu{
    position: relative;
    width: 100%;
    margin-bottom: 50px;
    
    &__list{
        position: relative;
        display: flex;
        justify-content: center;
    }
    
    &__item{
        position: relative;
        margin: 0 20px;
        padding: 0 5px;
        font-size: 14px;
        font-weight: 400;
        color: $light;
    
        @include slide-grow($light, 1px, -2px);
    }
    
    &__item .badge {
        position: absolute;
        left: 100%;
        top: -5px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 28px;
        min-height: 13px;
        padding: 0;
        font-size: 7px;
        font-weight: 700;
        text-transform: uppercase;
        text-align: center;
        line-height: 1;
        font-style: normal;
        color: $light;
        
        &.new{
            background-color: $label-new;
            color: $label-text-light;
        }
    
        &.upd{
            background-color: $label-special;
            color: $label-text-dark;
        }
    }
}

</style>