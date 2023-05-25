<template>
    <div :class="{'preloader': true, 'image-load': isImage}"></div>
</template>

<script>
export default {
    name: "app-preloader",
    props: {
        isImage: {
            type: Boolean,
            required: false
        },
    }
}
</script>

<style lang="scss">

.preloader{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: #323237;
    z-index: 10;
    
    &.image-load{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 20px 60px 0px rgba(0, 0, 0, 0.2);;
    }

    &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -114px;
        margin-left: -14px;
        border-radius: 50%;
        width: 28px;
        height: 28px;
        border: 2px solid rgba(255, 255, 255, 0.2);
        border-left: 2px solid #f4f6f7;
        -webkit-animation: loaderAnimation 1.1s infinite linear;
        animation: loaderAnimation 1.1s infinite linear;
        z-index: 6;
    }
    
    &.image-load:after{
        position: relative;
        transform: none;
        top: inherit;
        left: inherit;
        margin: 0;
    }
}

@-webkit-keyframes loaderAnimation {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@keyframes loaderAnimation {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

</style>