<template>
    <li :id="'gallery' + gallery.id">
        <a href="/admin/galleries/edit" class="uk-display-inline-block">{{gallery.name}}</a>
        <div class="uk-float-right">
            <a :href="'/admin/galleries/' + gallery.id + '/edit'" class="uk-icon-button uk-button-primary" uk-icon="icon: pencil"></a>
            <a href="" class="uk-icon-button uk-button-danger" @click.prevent="$emit('deleteGallery', gallery)"
               uk-icon="icon: trash"></a>
        </div>
    </li>
</template>

<script type="text/babel">
    export default {
        name: 'Gallery',
        props: ['gallery']
    }
</script>