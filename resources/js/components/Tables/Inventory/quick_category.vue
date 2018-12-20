<template>
    <button class="btn btn-accent m-btn--icon-only m-btn--icon "
            data-trigger="click"
            data-toggle="popover"
            data-skin="dark"
            data-html="true"
            title="Новая категория"
            data-content='
            <div class="input-group m-input-group m-input-group--air">
                <input type="text" class="form-control m-input" placeholder="Quantity" aria-describedby="basic-addon1">
                <div class="input-group-append">
                    <button class="btn btn-accent m-btn--icon-only m-btn--icon">+</button>
                </div>
            </div>
            '
            data-original-title="Dismissible popover"
    >
        <i class="fa flaticon-attachment"></i>
    </button>
</template>

<script>
    export default {
        name: "QuickCategory",
        mounted() {
            $('[data-toggle="popover"]').popover()
        }
    }
</script>

<style scoped>

</style>