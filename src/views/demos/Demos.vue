<template>
    
    <div class="wrapper-nav">
        <ul>
            <li>
                <router-link
                    :to="{name: 'websites'}" v-scroll-to="scrollTo"
                    :class="`wrapper-nav-item ${isWebsites ? 'router-link-active' : ''}`">
                    Websites</router-link>
            </li>
            <li>
                <router-link
                    :to="{name: 'blocks'}" v-scroll-to="scrollTo"
                    :class="`wrapper-nav-item ${!isWebsites ? 'router-link-active' : ''}`" @click="setMode">
                    Page Sections</router-link>
            </li>
        </ul>
    
        <div class="wrapper-nav__switcher" v-if="!isWebsites">
            <label class="switch">
                <span class="switch-text">Multicolor</span>
                <input class="switch-input" type="checkbox" v-model="mode" @change="setMode"/>
                <i class="switch-indicator"></i>
                <span class="switch-text">Dark</span>
            </label>
        </div>
    </div>

    <router-view />
</template>

<script>

export default {
    data() {
        return {
            mode: false,
            scrollTo: this.$scrollToParams
        }
    },
    
    methods: {
        setMode(event) {
            if (event && this.mode) {
                this.$router.push({name: 'dark', params: {category:'all'}})
            } else {
                this.$router.push({name: 'light', params: {category:'all'}})
            }
        }
    },
    
    computed: {
        isWebsites() {
            let websites = false;
            
            if (this.$router.currentRoute.value.name === 'websites_category') {
                websites = true
            }
            
            return websites
        },
    },
    
    
}

</script>