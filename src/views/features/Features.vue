<template>
    <div class="wrapper-nav">
        <ul>
            <li>
                <router-link
                    :to="{name: 'feature'}" v-scroll-to="scrollTo"
                    class="wrapper-nav-item">Features</router-link>
            </li>
            <li>
                <router-link
                    :to="{name: 'elements'}" v-scroll-to="scrollTo"
                    class="wrapper-nav-item">Elements</router-link>
            </li>
            <li>
                <router-link
                    :to="{name: 'products'}" v-scroll-to="scrollTo"
                    :class="{'wrapper-nav-item': true, 'router-link-active': setRoute === 'products'}">
                    Product Pages
                </router-link>
            </li>
            <li>
                <router-link
                    :to="{name: 'shop'}" v-scroll-to="scrollTo"
                    :class="{'wrapper-nav-item': true, 'router-link-active': setRoute === 'shop'}">
                    Shop
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'portfolio'}" v-scroll-to="scrollTo"
                    class="wrapper-nav-item">Portfolio</router-link>
            </li>
            <li>
                <router-link
                    :to="{name: 'blog'}" v-scroll-to="scrollTo"
                    :class="{'wrapper-nav-item': true, 'router-link-active': setRoute === 'blog'}">
                    Blog
                </router-link>
            </li>
        </ul>
    </div>
    
    <router-view />
</template>

<script>
export default {
    data() {
        return {
            routProducts: '',
            scrollTo: this.$scrollToParams,
        }
    },
    
    computed: {
        setRoute() {
            let routeState
            
            if (this.$router.currentRoute.value.path.includes('products')) {
                routeState = 'products'
            }
    
            if (this.$router.currentRoute.value.path.includes('shop')) {
                routeState = 'shop'
            }
    
            if (this.$router.currentRoute.value.path.includes('blog')) {
                routeState = 'blog'
            }
            
            return routeState
        }
    },
}
</script>