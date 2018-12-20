<template>
    <ul class="uk-list uk-list-striped">
        <gallery v-for="(gallery,key) in galleries" :key="key" :gallery="gallery"
                 v-on:deleteGallery="deleteGallery"></gallery>
    </ul>
</template>

<script type="text/babel">
    import gallery from './Gallery.vue'

    export default {
        name: 'Galleries',
        components: {gallery},
        props: ['data'],
        data() {
            return {
                galleries: null
            }
        },
        created() {
            this.galleries = JSON.parse(this.data);
        },
        methods: {
            deleteGallery(gallery) {
                const inst = this;
                const index = this.galleries.indexOf(gallery);
                UIkit.modal.confirm('Are you sure?').then(() => {
                    axios.delete('/admin/galleries/' + gallery.id).then(r => {
                            inst.galleries.splice(index, 1);
                    })
                }, () => {
                });
            }
        }
    }
</script>