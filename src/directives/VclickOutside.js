export default {
    mounted(el, binding) {
        el.addEventListener('click', e => e.stopPropagation());
        document.body.addEventListener('click', binding.value);
    },
    unmount(el, binding) {
        document.body.removeEventListener('click', binding.value);
    },

    name: 'click-outside'
}