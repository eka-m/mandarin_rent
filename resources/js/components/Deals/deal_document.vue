<template>
    <div>
        <button class="btn btn-brand m-btn m-btn--gradient-from-accent m-btn--wide" @click.prevent="make">Посмотреть документ</button>
    </div>
</template>

<script>
    export default {
        name:"DealDocument",
        props:['deal'],
        methods: {
            make() {

            }
        }
    }
</script>

<style scoped>

</style>