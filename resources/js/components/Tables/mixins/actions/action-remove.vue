<template>
    <div class="d-inline">
        <a
           href="javascript:"
           @click.prevent="remove($event)"
           class="m-portlet__nav-link text-dark btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill"
           :title="params.confirm"
           :data-id="params.id"
           data-toggle="m-popover"
           data-skin="dark"
           data-trigger="click"
           data-html="true"
           data-content='
                    <button class="btn btn-danger btn-sm rejectDelete">Нет</button>
                    <button class="btn btn-success btn-sm confirmDelete">Да</button>'>
            <i class="la la-trash-o"></i></a>
    </div>
</template>

<script>
    export default {
        name: "ActionRemove",
        props: ["table", 'params', 'url'],
        created() {
        },
        methods: {
            remove(e) {
                const elem = $(e.currentTarget);
                elem.popover("show");
                const id = this.params.id;
                $(".rejectDelete").on("click", e => {
                    elem.popover("hide");
                });
                $(".confirmDelete").on("click", e => {
                    elem.popover("hide");
                    axios.delete(this.params.url + '/' + id).then(r => {
                        this.table.ajax.reload(null, false);
                    });
                });
            }
        }
    }
</script>

<style scoped>

</style>