<template>
    <div>
        <textarea :name="name" ref="editor" cols="30" rows="10">{{content}}</textarea>
    </div>
</template>

<script>
    import 'trumbowyg/dist/trumbowyg.min.js';


    export default {
        name: "Editor",
        props: ['name', 'propContent'],
        data: () => ({
            editor: null,
            content: null,
            config: {}
        }),
        created() {
            this.content = this.propContent ? this.propContent : null;
        },
        mounted() {
            this.init();
            this.initEvents();
            if (this.content) {
                this.editor.trumbowyg('html', this.content);
            }
        },
        methods: {
            init() {
                this.editor = $(this.$refs.editor).trumbowyg({
                    svgPath: '/svg/icons.svg'
                });
            },
            initEvents() {
                this.editor.on("tbwchange", (e) => {
                    this.content = this.editor.trumbowyg('html');
                });
            }
        }
    }
</script>

<style>
    @import '~trumbowyg/dist/ui/trumbowyg.min.css';
</style>