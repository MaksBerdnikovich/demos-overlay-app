<template>
    <div class="previews fullwidth">
        <app-preloader v-if="!isImagesLoaded"/>
        
        <div :class="{'previews-grid-justify': true, 'loading': !isImagesLoaded, 'slide-top': isImagesLoaded}">
            <ul :class="position ? `previews-grid--${position}` : ''">
                <li class="ft-item" v-for="item in data" :key="item.title">
                    <a class="previews-grid__item" :href="item.url" target="_blank">
                        <div class="image">
                            <img :src="imgBaseUrl + item.img1x"
                                 :srcset="`${imgBaseUrl + item.img1x} 1x, ${imgBaseUrl + item.img2x} 2x`"
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
    name: "app-features",
    props: {
        data: {
            type: Array,
            required: true
        },
        imgBaseUrl: {
            type: String,
            required: true
        },
        position: {
            type: String,
            required: false
        }
    },
    
    mixins: [imagesLoading],
    
    data() {
        return {
            isImagesLoaded: false,
        }
    },
}
</script>
