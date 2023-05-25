<template>
    <div id="thegem-demos">
        <div class="header" ref="header">
            <div class="header__logo">
                <transition name="mode-fade" mode="out-in">
                    <div v-if="!isShowcase" class="header__logo-item">
                        <app-svg-icon name="logo"/> <span>TheGem WordPress Theme</span>
                        <div v-if="isAction" class="action">SALE</div>
                    </div>
                    <div v-else class="header__logo-item">
                        <app-svg-icon name="logo"/> <span>TheGem Customers Showcase</span>
                    </div>
                </transition>
            </div>
            <div class="header__info">
                <div class="header__info-link">
                    <a href="https://codex-themes.com/thegem/pre-sale-questions/"
                       target="_blank" class="info-link__secondary">Pre-Sale Questions?</a>
                </div>
                <div :class="{'header__info-text':true, 'action': isAction}">
                    <transition name="mode-fade" mode="out-in">
                        <div v-if="!isShowcase">
                            <p v-if="!isAction">
                                Get the <span class="selection">entire collection</span> of 400+ pre-built demos & 500+ page sections for <span class="selection">only $59.</span>
                                With Elementor, WPBakery & WooCommerce. Premium support & lifetime updates.
                                All demos, features, pages & sections <span class="selection">can be mixed.</span>
                            </p>
                            <p v-if="isAction">
                                Get the entire collection of 400+ pre-built demos & 500+ page sections for only
                                <span class="action-normal">$59</span> <span class="action-sale">{{actionPrice}}</span>.
                                With Elementor, WPBakery & WooCommerce. Premium support & lifetime updates.
                                All demos, features, pages & sections can be mixed.
                            </p>
                        </div>
                        <div v-else>
                            <p>
                                Inspire and be inspired. Enjoy this beautiful examples of websites, made with TheGem by our
                                valued customers. Discover the ultimate versatility of TheGem in the real world.
                            </p>
                        </div>
                    </transition>
                </div>
                <div class="header__info-link">
                    <a href="https://themeforest.net/checkout/from_item/16061685?license=regular&support=bundle_6month&_ga=2.16410870.1729110559.1648742987-153216264.1648742987"
                       target="_blank" class="info-link__primary">Purchase TheGem</a>
                </div>
            </div>
            <div class="header__nav">
                <ul>
                    <li><router-link to="/demos" class="header__nav-item" v-scroll-to="scrollTo">Demos</router-link></li>
                    <li><router-link to="/features" class="header__nav-item" v-scroll-to="scrollTo">Features</router-link></li>
                    <li><router-link to="/showcase" class="header__nav-item" v-scroll-to="scrollTo">Showcase</router-link></li>
                </ul>
            </div>
        </div>
        
        <div :class="{'wrapper': true, 'sticky': isSticky}" v-scroll="handleScroll" ref="wrapper">
            <router-view/>
        </div>
    </div>
</template>

<style lang="scss" src="@/assets/scss/main.scss"></style>

<script>

export default {
    data() {
        return {
            isSticky: false,
            scrollTo: this.$scrollToParams,
            isAction: this.$action,
            actionSale: this.$actionSale,
            actionPrice: this.$actionPrice,
        }
    },
    
    methods: {
        handleScroll() {
            let headerH = this.$refs.header.clientHeight;
            let wrapperH = this.$refs.wrapper.scrollHeight;
    
            if (window.scrollY >= (headerH + 50) && (wrapperH - window.innerHeight) > 100) {
                this.isSticky = true
            } else {
                this.isSticky = false
            }
        }
    },
    
    computed: {
        isShowcase() {
            let showcase = false;
            
            if (this.$router.currentRoute.value.name === 'showcase_category') {
                showcase = true
            }
            
            return showcase
        },
    },
}

</script>
