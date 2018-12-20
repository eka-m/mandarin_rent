export default {
    data: () => ({
        options: {
            responsive: true,
            searchDelay: 500,
            processing: true,
            serverSide: true,
            searching: true,
            lengthChange: false,
            dom: 'B, t, i, p, r',
            rowId: "id",
            ajax: null,
            order: [[ 0, 'DESC' ]],
            language: {
                url: "/plugins/datatables/ru.json"
            }
        }
    }),
    created() {
        this.options.ajax = '/async' + this.actionsUrl;
    }
};