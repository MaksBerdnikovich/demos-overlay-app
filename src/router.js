import { createRouter, createWebHistory } from 'vue-router'
import Demos from './views/demos/Demos.vue'
import Websites from './views/demos/websites/Websites.vue'
//import Blocks from './views/demos/blocks/Blocks.vue'
import Light from "./views/demos/blocks/light/Light.vue";
import Dark from "./views/demos/blocks/dark/Dark.vue";
import Features from './views/features/Features.vue'
import Showcase from './views/showcase/Showcase.vue'
import Feature from "./views/features/feature/Feature.vue";
import Elements from "./views/features/elements/Elements.vue";
//import Products from "./views/features/products/Products.vue";
import ProductLayouts from "./views/features/products/layouts/Layouts.vue";
import ProductBuilder from "./views/features/products/builder/Builder.vue";
//import Shop from "./views/features/shop/Shop.vue";
import ShopLayouts from "./views/features/shop/layouts/Layouts.vue";
import ShopBuilder from "./views/features/shop/builder/Builder.vue";
import ShopCartCheckout from "./views/features/shop/cart-checkout/CartCheckout.vue";
import Portfolio from "./views/features/portfolio/Portfolio.vue";
//import Blog from "./views/features/blog/Blog.vue";
import BlogGrids from "./views/features/blog/blog-grids/BlogGrids.vue";
import BlogLists from "./views/features/blog/blog-lists/BlogLists.vue";
import SinglePosts from "./views/features/blog/single-posts/SinglePosts.vue";
import BlogBuilder from "./views/features/blog/blog-builder/BlogBuilder.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/demos'
        },
        {
            path: '/demos',
            component: Demos,
            children: [
                {
                    path: '',
                    redirect: '/demos/websites',
                },
                {
                    path: 'websites',
                    name: 'websites',
                    redirect: '/demos/websites/all',
                },
                {
                    path: 'websites/:category',
                    name: 'websites_category',
                    component: Websites
                },
                {
                    path: 'blocks',
                    name: 'blocks',
                    redirect: '/demos/blocks/light',
                },
                {
                    path: 'blocks/light',
                    name: 'light',
                    redirect: '/demos/blocks/light/all',
                },
                {
                    path: 'blocks/light/:category',
                    name: 'blocks_light_category',
                    component: Light
                },
                {
                    path: 'blocks/dark',
                    name: 'dark',
                    redirect: '/demos/blocks/dark/all',
                },
                {
                    path: 'blocks/dark/:category',
                    name: 'blocks_dark_category',
                    component: Dark
                },
            ],
        },
        {
            path: '/features',
            component: Features,
            children: [
                {
                    path: '',
                    redirect: '/features/feature',
                },
                {
                    path: 'feature',
                    name: 'feature',
                    component: Feature
                },
                {
                    path: 'elements',
                    name: 'elements',
                    component: Elements
                },
                {
                    path: 'products',
                    name: 'products',
                    redirect: '/features/products/layouts'
                },
                {
                    path: 'products/layouts',
                    name: 'product_layouts',
                    component: ProductLayouts
                },
                {
                    path: 'products/builder',
                    name: 'product_builder',
                    component: ProductBuilder
                },
                {
                    path: 'shop',
                    name: 'shop',
                    redirect: '/features/shop/layouts'
                },
                {
                    path: 'shop/layouts',
                    name: 'shop_layouts',
                    component: ShopLayouts
                },
                {
                    path: 'shop/builder',
                    name: 'shop_builder',
                    component: ShopBuilder
                },
                {
                    path: 'shop/cart-checkout',
                    name: 'shop_cart_checkout',
                    component: ShopCartCheckout
                },
                {
                    path: 'portfolio',
                    name: 'portfolio',
                    component: Portfolio
                },
                {
                    path: 'blog',
                    name: 'blog',
                    redirect: '/features/blog/blog-grids'
                },
                {
                    path: 'blog/blog-grids',
                    name: 'blog_grids',
                    component: BlogGrids
                },
                {
                    path: 'blog/blog-lists',
                    name: 'blog_lists',
                    component: BlogLists
                },
                {
                    path: 'blog/single-posts',
                    name: 'single_posts',
                    component: SinglePosts
                },
                {
                    path: 'blog/blog-builder',
                    name: 'blog_builder',
                    component: BlogBuilder
                },
            ],
        },
        {
            path: '/showcase',
            component: Showcase,
            children: [
                {
                    path: '',
                    redirect: '/showcase/all',
                },
                {
                    path: ':category',
                    name: 'showcase_category',
                    component: Showcase
                },
            ],
        },
    ]
})

export default router
