export const columnDefs = {
    data: () => ({
        columnDefs: [
            {
                targets: 1,
                render: function (data, type, row, meta) {
                    return `<a href="/clients/${row.id}">${row.name}</a> `;
                }
            },
            {
                targets: 5,
                orderable: true,
                render: function (data, type, row, meta) {
                    return `<span class="m-badge m-badge--wide m-badge--${row.statuses[row.status].class}">
                        ${row.statuses[row.status].title}
                        </span>`;
                },
            },
            {
                targets: -1,
                render(data, type, row, meta) {
                    return ` <div class="row-actions" id="${row.id}"  data-actions="edit,remove"></div>`;
                }
            }
        ]
    }),
};

export const columns = {
    data: () => ({
        columns: [
            {data: 'id', name: 'id', width: "5%"},
            {data: 'name', name: 'first_name', orderable: false, searchable: true},
            {data: 'contactface', name: 'contactface',  orderable: false, className:"text-center", searchable: false},
            {data: 'passport_serial', name:"passport_serial", orderable: false, width: "10%", className:"text-center"},
            {data: 'phone', name: 'phone', className:"text-center", orderable: false},
            {data: 'status', name: 'status', className:"text-center"},
            {data: 'actions', orderable: false, searchable: false},
        ]
    })
};

