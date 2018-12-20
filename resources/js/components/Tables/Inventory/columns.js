export const columnDefs = {
    data: () => ({
        columnDefs: [
            {
                targets: 2,
                title: 'Название',
                orderable: true,
                render: function (data, type, row, meta) {
                    return `<a href="/inventory/${row.id}">${row.name}</a> `;
                }
            },
            {
                targets: 4,
                title: 'Фото',
                orderable: false,
                render: function (data, type, row, meta) {
                    if (row.small_image !== null) {
                        return '<img src="' + row.small_image + '" class="img-fluid">';
                    }
                    return "Изаброжения отсутствуют";
                },
            },
            {
                targets: 5,
                title: 'Цена',
                render: function (data, type, row, meta) {
                    const per = {
                        day: "Д",
                        hour: "Ч"
                    };
                    return row.rent.price + " AZN /" + per[row.rent.per];
                }
            },
            {
                targets: 6,
                title: 'Категория',
                orderable: false,
                render: function (data, type, row, meta) {
                    return `<span class="m-badge m-badge--focus m-badge--wide m--font-boldest" >${row.category}</span>`;
                },
            },
            {
                targets: 7,
                title: 'Статус',
                orderable: false,
                render: function (data, type, row, meta) {
                    return `<span class="m-badge m-badge--wide m--font-boldest m-badge--${row.statuses[row.status].class}">
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
            {data: 'inventory_code', name: 'inventory_code', width: "5%"},
            {data: 'name', name: 'name'},
            {data: 'model', name: 'model', title:"Модель"},
            {data: 'photos', width: "10%", className:"text-center"},
            {data: 'rent', name: 'rent',  orderable: false, searchable: false},
            {data: 'category', name: 'category.name', width: "13%", className: "text-center "},
            {data: 'status', name: 'status', className: "text-center"},
            {data: 'actions', orderable: false, searchable: false},
        ]
    })
};

