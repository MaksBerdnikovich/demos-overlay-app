<template>
    <div class="previews fullwidth">
        <app-preloader v-if="!isImagesLoaded"/>
        
        <div :class="{'previews-grid-justify': true, 'loading': !isImagesLoaded, 'slide-top': isImagesLoaded}">
            <ul v-masonry transition-duration="0" item-selector=".item">
                <li v-masonry-tile v-for="item in data" :key="item.title" :class="{'item': true}">
                    <a class="previews-grid__item" :href="item.url" target="_blank">
                        <div class="image">
                            <img
                                :src="imgBaseUrl + item.image"
                                width="383" height="383" :alt="item.title" ref="img" @load="imgLoad"/>
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
</template>

<script>

import imagesLoading from "../../mixins/imagesLoading";

export default {
    name: "app-masonry",
    props: {
        data: {
            type: Array,
            required: true
        },
        imgBaseUrl: {
            type: String,
            required: true
        },
    },
    
    mixins: [imagesLoading],
    
    data() {
        return {
            isImagesLoaded: false,
        }
    },
}
</script>
