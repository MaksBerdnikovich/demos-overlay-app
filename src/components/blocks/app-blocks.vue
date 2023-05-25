<template>
    
    <div class="sidebar">
        <div class="search-form">
            <form class="form" @submit.prevent>
                <input v-model="query" @keyup="searchKeyup"
                       class="input" type="text" placeholder="Search by name" />
                <app-svg-icon name="magnify" />
            </form>
        </div>
        <div class="categories">
            <ul class="categories-list">
                <li v-for="cat in categories" :key="cat.title" :class="{'cat-all': cat.id === 'all'}">
                    <router-link
                        :to="{name: router, params: {category: cat.name}}"
                        v-scroll-to="scrollTo" @click="onClickCategory">
                        <app-svg-icon v-if="cat.id === 'all'" name="presentation" />
                        <span>
                            {{ cat.title }}
                            <sup>{{ cat.id === 'all' ? getAllCount() : getCatCount(cat.name) }}</sup>
                        </span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
    
    <div class="previews">
        <app-preloader v-if="!isImagesLoaded"/>
        
        <div :class="{'previews-grid-justify blocks': true, 'loading': !isImagesLoaded, 'slide-top': isImagesLoaded}">
            <ul v-masonry transition-duration="0" item-selector=".item">
                <li v-masonry-tile v-for="item in filteredItems" :key="item.id" :class="{'item': true, 'item-header': item.category == 'headers'}">
                    <a class="previews-grid__item" :href="item.link" target="_blank">
                        <div class="image">
                            <img
                                :src="imgBaseUrl + item.image"
                                width="280" height="280" :alt="item.title" ref="img" @load="imgLoad"/>
                            <app-preloader :isImage="true"/>
                        </div>
                        <div class="title">
                            <span>{{ item.title }} <i v-if="item.tag" :class="`badge ${item.tag}`"> {{ item.tag }}</i></span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        
        <div v-intersection="loadMore" class="observer"></div>
    </div>

</template>

<script>

import imagesLoading from "../../mixins/imagesLoading";
import loadMoreItems from "../../mixins/loadMoreItems";

export default {
    name: "app-blocks",
    props: {
        data: {
            type: Array,
            required: true
        },
        categories: {
            type: Array,
            required: true
        },
        router: {
            type: String,
            required: true
        },
    },
    
    mixins: [imagesLoading, loadMoreItems],
    
    data() {
        return {
            items: this.data,
            
            query: '',
            offset: this.$offset,
            imgBaseUrl: this.$globalPath + '/demos/blocks/',
            scrollTo: this.$scrollToParams,
            isImagesLoaded: false
        }
    },
    
    methods: {
        searchKeyup(event) {
            if (event) {
                this.onImageLoad();
                this.$router.push({name: 'blocks_light_category', params: {category:'all'}})
                this.keywordsPanel = true
            }
        },
        
        getAllCount() {
            return this.items.length
        },
        
        getCatCount(cat) {
            return this.items.filter(item => item.category.find(el => el === cat)).length
        },
    },
    
    computed: {
        filteredItems() {
            let self = this;
            let catId = this.$router.currentRoute.value.params.category;
            let items = this.items;
            items.sort((a, b) => a.id - b.id).sort((a, b) => a.sort_order - b.sort_order);
            
            if (this.query.length >= 2) {
                let searchItems = items.filter(item => item.title.toLowerCase().indexOf(self.query.toLowerCase()) == 0);
                
                let result = [];
                if (searchItems.length > 0) {
                    result = searchItems.slice(0, this.offset)
                } else {
                    result = items.slice(0, this.offset)
                }
                return result
            }
            
            if (catId !== 'all') {
                let filteredItems = items.filter(item => item.category.find(el => el == catId))
                return filteredItems.slice(0, this.offset)
            } else {
                let filteredItems = items.filter(item => item.category.find(el => el != 'headers'));
                return filteredItems.slice(0, this.offset)
            }
    
            //return items.slice(0, this.offset)
        }
    }
}
</script>
