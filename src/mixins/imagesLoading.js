export default {
    methods: {
        imgLoad(event){
            if (event){
                event.target.nextSibling.style.display = 'none';
                event.target.style.opacity = '1';
            }
        },

        onImageLoad() {
            let images = this.$refs.img;
            this.isImagesLoaded = false;

            let imageInterval = setInterval(() => {
                for (let i = 0; i < images.length; i++) {
                    if (images[i].complete) {
                        images.splice(i, 1);
                    }

                    if (images.length === 0) {
                        clearInterval(imageInterval);
                        this.isImagesLoaded = true
                    }
                }
            }, 10);

            setTimeout(() => this.isImagesLoaded = true, 2000);
        }
    },

    mounted() {
        this.onImageLoad()
    }
}