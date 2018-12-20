export default  {
    created() {
        this.$helpers.attachStyle('#datatables-css', 'plugins/datatables/datatables.bundle.css');
        this.$helpers.attachScript('#datatables-js', 'plugins/datatables/datatables.bundle.js');
    }
}