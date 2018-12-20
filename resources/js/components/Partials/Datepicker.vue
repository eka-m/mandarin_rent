<template>
    <div>
        <datepicker v-model="date"></datepicker>
        <input type="hidden" :name="inputname" :value="date">
    </div>
</template>

<script type="text/babel">
    import datepicker from 'vue-date';

    export default {
        name: 'DatePicker',
        components: {datepicker},
        props: {
            currentdate: {
                default: null
            },
            inputname: {
                default: 'created_at'
            },
        },
        data() {
            return {
                date: null,
            }
        },
        created() {
            this.date = this.currentdate;
        }
    }
</script>