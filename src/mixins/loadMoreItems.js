export default {
    methods: {
        loadMore() {
            this.offset = this.offset + this.$loadmore;
        },

        onClickCategory() {
            this.offset = this.$offset;
            this.random = Math.floor(Math.random() * 1000);
            this.query = '';

            this.onImageLoad();
        },
    }
}