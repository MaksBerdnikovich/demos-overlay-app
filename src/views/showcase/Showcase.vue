<template>
    
    <div class="wrapper-nav">
        <ul>
            <li v-for="category in cats" :key="category.id" :class="{'cat-all': category.id === 'all'}">
                <router-link
                    :to="{name: 'showcase_category', params: {category: category.id}}"
                    class="wrapper-nav-item" v-scroll-to="scrollTo" @click="onClickCategory">
                    {{ category.title }}
                </router-link>
            </li>
        </ul>
    </div>
    
    <div class="previews fullwidth">
        <app-preloader v-if="!isImagesLoaded"/>
    
        <div :class="{'previews-grid-justify': true, 'loading': !isImagesLoaded, 'slide-top': isImagesLoaded}">
            <ul>
                <li v-for="item in filteredItems" :key="item.id * random">
                    <a class="previews-grid__item" :href="item.url" target="_blank">
                        <div class="image">
                            <img :src="imgBaseUrl + '/1x/' + item.img"
                                :srcset="`${imgBaseUrl + '/1x/' + item.img} 1x, ${imgBaseUrl + '/2x/' + item.img} 2x`"
                                width="343" height="230" :alt="item.title" ref="img" @load="imgLoad">
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

import data from "./data.json";
import imagesLoading from "../../mixins/imagesLoading";
import loadMoreItems from "../../mixins/loadMoreItems";

export default {
    mixins: [imagesLoading, loadMoreItems],
    
    data() {
        return {
            cats: data.cats,
            items: data.items,
            offset: this.$offset,
            random: 0,
            imgBaseUrl: this.$globalPath + '/showcase',
            scrollTo: this.$scrollToParams,
            isImagesLoaded: false
        }
    },
    
    computed: {
        filteredItems() {
            let catId = this.$router.currentRoute.value.params.category;
            let items = this.items;
            
            if (catId !== 'all') {
                let filteredItems = items.filter(item => item.cats.find(el => el == catId))
                return filteredItems.slice(0, this.offset)
            }
    
            return items.slice(0, this.offset)
        },
    }
}
</script>
