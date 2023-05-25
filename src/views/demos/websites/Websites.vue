<template>
    
    <div class="sidebar">
        <div class="search-form">
            <form class="form" @submit.prevent>
                <input v-model="query" @keyup="searchKeyup"
                       class="input" type="text" placeholder="Search demos (e.g. ‘Shop’)" />
                <app-svg-icon name="magnify" />
            </form>
            
            <div class="search-form__keywords" v-if="searchKeywords.length && keywordsPanel">
                <ul>
                    <li v-for="(item, index) in searchKeywords" :key="index" @click="setKeyword">{{item}}</li>
                </ul>
            </div>
        </div>
        <div class="categories">
            <div class="categories-mobile">
                <div class="mobile-cat-btn">
                    <button @click="toggleCategories" ref="toggleCategories"><app-svg-icon name="filter" /> <span>Show Categories</span></button>
                </div>
                <div class="mobile-buy-btn">
                    <a href="https://themeforest.net/checkout/from_item/16061685?license=regular&support=bundle_6month&_ga=2.16410870.1729110559.1648742987-153216264.1648742987"
                       target="_blank" class="info-link__primary">Buy TheGem</a>
                </div>
            </div>
            
            <ul :class="{'categories-list': true, 'open': isShowCategories}" >
                <!--
                <li class="cat-favorite">
                    <router-link :to="{name: 'websites_category', params: {category:'favorites'}}">
                        <app-svg-icon name="starOutline" /> <span>My Favorites</span>
                    </router-link>
                </li>
                -->
                <li v-for="category in cats" :key="category.id" :class="{'cat-all': category.id === 'all'}">
                    <router-link
                        :to="{name: 'websites_category', params: {category: category.id}}"
                        v-scroll-to="scrollTo" @click="onClickCategory">
                        <app-svg-icon v-if="category.id === 'all'" name="presentation" />
                        <span>{{ category.title }}</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>

    <div class="previews">
        <app-preloader v-if="!isImagesLoaded"/>
    
        <div :class="{'previews-grid-justify': true, 'loading': !isImagesLoaded, 'slide-top': isImagesLoaded}">
            <ul>
                <li v-for="item in filteredItems" :key="item.id * random">
                    <a class="previews-grid__item" :href="!isAction ? item.url : getActionUrl(item.slug, item.url)" target="_blank" :data-id="item.id">
                        <div class="image">
                            <img :src="imgBaseUrl + item.img1x"
                                 :srcset="`${imgBaseUrl + item.img1x} 1x, ${imgBaseUrl + item.img2x} 2x`"
                                 width="281" height="481" :alt="item.title" ref="img" @load="imgLoad"/>
                            <app-preloader :isImage="true"/>
                        </div>
                        <div class="title">
                            <span>{{ item.title }} <i v-if="item.tag" :class="`badge ${item.tag}`"> {{ item.tag }}</i></span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    
    <div v-intersection="loadMore" class="observer"></div>
    
</template>

<script>
import data from "./data.json";
import sort_config from "./sorting.json";
import imagesLoading from "../../../mixins/imagesLoading";
import loadMoreItems from "../../../mixins/loadMoreItems";

export default {
    mixins: [imagesLoading, loadMoreItems],
    
    data() {
        return {
            cats: data.cats,
            items: data.items,
            sortConfig: sort_config,
            query: '',
            offset: this.$offset,
            flushClass: false,
            random: 0,
            imgBaseUrl: this.$globalPath + '/demos/websites/',
            scrollTo: this.$scrollToParams,
            keywordsPanel: true,
            isImagesLoaded: false,
            isShowCategories: false,
            isAction: this.$action,
        }
    },
    
    methods: {
        getKeywords() {
            let items = this.items;
            
            let keywordsArr = items.map(item => item.keywords.split(' '));
            keywordsArr = keywordsArr.flat();
            
            return keywordsArr.filter((item, index) => keywordsArr.indexOf(item) === index);
        },
        
        setKeyword(event) {
            this.onImageLoad();
            
            if (event) {
                this.$scrollTo(this.scrollTo.el)
                this.query = event.target.textContent
                this.keywordsPanel = !this.keywordsPanel
            }
        },
    
        searchKeyup(event) {
            this.onImageLoad();
            
            if (event) {
                this.$router.push({name: 'websites_category', params: {category:'all'}})
                this.keywordsPanel = true
            }
        },
    
        toggleCategories(event){
            if (event) {
                this.isShowCategories = !this.isShowCategories
            }
        },
    
        getActionUrl(slug, url, name = this.$actionName) {
            // action url exception
            if (
                slug === 'splash-fullscreen-vertical-slider-2' ||
                slug === 'agency-fullpage' ||
                slug === 'photography-vertical-slider' ||
                slug === 'splash-fullscreen-vertical-slider-1' ||
                slug === 'fullscreen-product-landing' ||
                slug === 'music-event-fullscreen' ||
                slug === 'app-fullscreen-landing'
            ) return url
            
            return `https://codex-themes.com/thegem/starting_page/${name}.php?page=${slug}`
        }
    },
    
    computed: {
        filteredItems() {
            let self = this;
            let catId = this.$router.currentRoute.value.params.category;
            let items = this.items;
            self.isShowCategories = false;
            
            if (this.query.length >= 2) {
                let searchItems = items.filter(item => item.keywords.toLowerCase().indexOf(self.query.toLowerCase()) !== -1);
    
                let result = [];
                if (searchItems.length > 0) {
                    result = searchItems.slice(0, this.offset)
                } else {
                    result = items.slice(0, this.offset)
                }
                return result
            }
            
            if (catId !== 'all') {
                let filteredItems = items.filter(item => item.cats.find(el => el === catId));
                let sortConfig = this.sortConfig;
    
                filteredItems.forEach((el, i) => {
                    el.sort_order = 0;
                    
                    for (const [key, value] of Object.entries(sortConfig)) {
                        if (key == catId){
                            for (const [k, v] of Object.entries(value)) {
                                if (el.id == k) {
                                    el.sort_order = v;
                                }
                            }
                        }
                    }
                })
    
                filteredItems.sort((a, b) => b.sort_order - a.sort_order);
                
                return filteredItems.slice(0, this.offset)
            }
    
            return items.slice(0, this.offset)
        },
        
        searchKeywords() {
            let self = this;
            let keywords = this.getKeywords();
            
            if (this.query.length <= 1) {
                return []
            } else {
                return keywords.filter(item => item.toLowerCase().indexOf(self.query.toLowerCase()) === 0)
            }
        },
    }
}
</script>
