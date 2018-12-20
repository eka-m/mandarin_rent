<template>
    <div>
        <div class="simpleeditor" ref="textareaanchor" v-model="value">
            <slot></slot>
        </div>
        <textarea v-model="value" :name="inputname" rows="5" class="simpleeditortextarea">{{value}}</textarea>
    </div>

</template>

<script type="text/babel">
    import MediumEditor from 'medium-editor'

    export default {
        name: 'Editor',
        props: ['inputname'],
        data() {
            return {
                value: null,
                editor: null,
                options: {
                    toolbar: {
                        buttons: [
                            {
                                name: 'bold',
                                contentDefault: '<i class="dj-bold"></i>'
                            }, {
                                name: 'italic',
                                contentDefault: '<i class="dj-italic"></i>'
                            },
                            {
                                name: 'underline',
                                contentDefault: '<i class="dj-underline"></i>'
                            },
                            {
                                name: 'anchor',
                                contentDefault: '<i class="dj-link"></i>'
                            },
                            {
                                name: 'unorderedlist',
                                contentDefault: '<i class="dj-list-ul"></i>'
                            },
                        ],
                    },
                    cleanPastedHTML: true,
                    cleanTags: ['p'],
                },
            }
        },
        mounted() {
            this.editor = new MediumEditor(this.$refs.textareaanchor, this.options);
            this.setResult();
            this.editor.subscribe('editableInput', (e, editable) => {
                this.setResult();
            });
        },
        methods: {
            limitTextareaLine(e) {
                if (e.keyCode == 13 && $(this).val().split("\n").length >= $(this).attr('rows')) {
                    return false;
                }
            },
            setResult() {
                this.value = this.editor.getContent();
            },
        }
    }
</script>

<style lang="scss" type="text/scss">
    @import "~medium-editor/dist/css/medium-editor.css";
    @import "~medium-editor/dist/css/themes/beagle.css";

    .simpleeditortextarea {
        display: none;
    }

    .simpleeditor {
        outline: none;
        p {
            margin-bottom: 5px !important;
            margin-top: 5px !important;
        }
    }

</style>