<template>
    <div>
        <div class="row">
            <div class="col">
                <button class="btn btn-brand m-btn--square w-100" @click.prevent="browse">Добавить изображения</button>
            </div>
        </div>
        <div class="row">
            <div class="col pt-3 galleryImagesContainer">
                <draggable v-model="images">
                    <div class="galleryImgItem" v-for="(image,key) in images"
                         :key="key" :ref="'image' + key">
                        <div class="galleryImgItemBlock">
                            <div class="galleryImg">
                                <img :src="'/uploads' + image.path" class="img-fluid">
                            </div>
                            <div class="galleryImgActions p-2">
                                <a href="#" class="btn btn-info m-btn m-btn--square m-btn--icon m-btn--icon-only"
                                   @click.prevent="showDescPanel(key)">
                                    <i class="la la-pencil"></i>
                                </a>
                                <a href="#" class="btn btn-danger m-btn m-btn--square m-btn--icon m-btn--icon-only"
                                   @click.prevent="deleteImage(key)">
                                    <i class="la la-trash"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </draggable>
            </div>
        </div>

        <div class="modal fade" ref="showDesc"  id="giModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                         <textarea cols="30" rows="5" class="form-control m-input" v-if="showDesc !== false"
                                   placeholder="Image description" v-model="images[showDesc].title"></textarea>
                        <div class="pt-2 text-right">
                            <button type="button" class="btn btn-danger m-btn--square"  @click="saveImageDesc()">Close</button>
                            <button type="button" class="btn btn-success m-btn--square" @click="saveImageDesc()">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <input type="hidden" :name="inputname" v-if="images" :value="JSON.stringify(images)">
    </div>
</template>

<script type="text/babel">
    import draggable from 'vuedraggable'

    export default {
        name: 'GalleryImages',
        components: {draggable},
        props: {
            current: {
                default: null
            },
            inputname: {
                default: 'images'
            }
        },
        data() {
            return {
                images: [],
                showDesc: false,
            }
        },
        created() {
            this.$helpers.attachScript('moxman-tag','/plugins/moxiemanager/js/moxman.loader.min.js');
            if (this.current !== null && this.current !== '') {
                this.images = JSON.parse(this.current);
            }
        },
        methods: {
            browse() {
                const inst = this;
                moxman.browse({
                    view: 'thumbs',
                    oninsert(args) {
                        for (let i = 0, len = args.files.length; i < len; i++) {
                            inst.images.push({path: args.files[i].path, title: ''})
                        }
                    }
                });
            },
            deleteImage(key) {
                this.images.splice(key, 1);
            },
            showDescPanel(key) {
                this.showDesc = key;
                $(this.$refs.showDesc).modal('show');
            },
            saveImageDesc() {
                $(this.$refs.showDesc).modal('hide');
                this.showDesc = false;
            }
        }
    }
</script>

<style type="text/scss" lang="scss">
    .galleryImagesContainer {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .galleryImgItem {
            display: inline-block;
            width: 118px;
            height: 150px;
            padding: 2px 5px;
            border: 1px solid #18c6ff;
            margin: 1px;
            text-align: center;
            cursor: pointer;
            .galleryImgItemBlock {
                width: 100%;
                height: 100%;
                .galleryImg {
                    overflow: hidden;
                    width: 100%;
                    height: 100px;
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
                .galleryImgActions {
                    width: 100%;
                    height: 50px;
                    text-align: center;
                }
            }
        }
    }


    .imageInfo {
        background: #1B98E0;
        padding: 20px;
        position: absolute;
        z-index: 3;
        top: 0;
    }
</style>