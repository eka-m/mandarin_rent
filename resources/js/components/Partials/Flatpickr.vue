<template>
    <flat-pickr v-model="date" :config="config" :value="date" :name="inputname" class="form-control m-input"></flat-pickr>
</template>

<script>
    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/themes/airbnb.css';

    export default {
        name: 'FlatPicker',
        components: {flatPickr},
        props: {
            currentdate: {
                default: null
            },
            inputname: {
                default: 'created_at'
            },
            conf: {
                default: {}
            }
        },
        data() {
            return {
                date: null,
                config: {}
            }
        },
        created() {
            this.config = this.conf;
            this.date = this.currentdate;
        }
    }
</script>