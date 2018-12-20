<template>
    <div class="row">
        <div class="col-md-4">
            <div>
                <input type="hidden" :name="inputname" :value="filename">
                <button type="button" @click="browse" class="btn btn-brand">{{btn}}</button>
                <a href="#" @click.prevent="deleteImage" v-if="filename"
                        class="uk-icon-button uk-button-danger"
                        uk-icon="icon:trash"></a>
            </div>
        </div>
        <div class="image-preview col-md-8">
            <img :src="'/uploads' + filename" v-if="filename" class="img-fluid">
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'ImageInput',
        props: {
            inputname: {
                default: 'file'
            },
            img: {
                default: null
            },
            btn: {
                default: 'Choose'
            }
        },
        data () {
            return {
                filename: null
            }
        },
        created () {
            this.filename = this.img;
        },
        methods: {
            browse () {
                const inst = this;
                moxman.browse({
                    view: 'thumbs',
                    oninsert (args) {
                        inst.filename = args.focusedFile.path;
                    }
                });
            },
            deleteImage () {
                this.filename = null;
            }
        }
    }
</script>
<style lang="scss" type="text/scss" scoped>
    .image-preview {
        padding: 0 !important;
        img {
            max-width: 100%;
        }
    }
</style>