export default {
    data: () => ({
        columns:columns,
        columnDefs:columnDefs
    })
};


const columns = [
    {data: 'id', name: 'id', width: "5%"},
    {data: 'hash', name: 'hash', orderable: false},
    {data: 'client', name: 'client.first_name', orderable: false, width: "20%"},
    {data: 'items', name: 'items.name', orderable: false, searchable: true, width: "20%"},
    {data: 'end', name: 'end'},
    {data: 'status', name: 'status', orderable: true, width: "15%", className: 'text-center'},
    {data: 'manager', name: 'manager.id', className: "text-center", visible:false},
    {data: 'actions', orderable: false, searchable: false, width: "15%", className: 'text-center'},
];

const columnDefs = [
    {
        targets: 1,
        render(data, type, row, meta) {
            return `<a href="/deals/${row.id}" data-toggle="m-tooltip" 
                        data-placement="top" 
                        data-html="true"
                        data-skin="light"
                        data-original-title='Цена: ${row.price}'>${row.hash}</a> `;
        }
    },
    {
        targets: 2,
        render(data, type, row, meta) {
            if (Object.keys(data).length === 0) {
                return "Клиент отсутвует";
            }
            const status = `<span class="m-badge m-badge--${data.statuses[data.status].class} m-badge--wide">${data.statuses[data.status].title}</span>`;
            return `
                        <a href="/clients/${data.id}" 
                        target="_blank"
                        data-toggle="m-tooltip" 
                        data-placement="top" 
                        data-html="true"
                        data-skin="light"
                        data-original-title='${status}'>
                        ${data.name}
                        </a>`;
        }
    },
    {
        targets: 3,
        render(data, type, row, meta) {
            if (Object.keys(data).length === 0) {
                return "Предметы отсутствуют";
            }
            let items = "";
            for (let item in data) {
                items +=
                    `<a href="/inventory/${data[item]["id"]}" target="_blank"
						data-toggle="m-tooltip" 
						data-placement="top" 
						data-html="true"
						data-skin="light"
						data-original-title='<span class="m-badge m-badge--wide m-badge--info">${data[item]["inventory_code"]}</span> ${data[item]["model"] ? data[item]["model"] : ""}'>${data[item]["name"]}
						</a> `;
            }
            return items;
        }
    },
    {
        targets: 4,
        render(data, type, row, meta) {
            return `<a href="javascript:void(0)" data-toggle="m-tooltip" 
					data-placement="top" 
					data-html="true"
					data-skin="dark"
					data-original-title='Начало <br/> ${moment(row.start).format("DD MMM YYYY / HH:mm")}'>
                        ${moment(data).format("DD MMM YYYY / HH:mm")}
                    </a> `;
        }
    },
    {
        targets: 5,
        render(data, type, row, meta) {
            return `<span class="m-badge m-badge--wide m-badge--${row.statuses[data].class}">${row.statuses[data].title}</span>`;

        }
    },
    {
        targets: -2,
        render(data, type, row, meta) {
            return `<a href="javascript:;" target="_blank"
                    data-toggle="m-tooltip"
                    data-placement="top"
                    data-html="true"
                    data-skin="light"
                    data-original-title='<span class="m-badge m-badge--wide m-badge--info"
                    >${row.manager_profit} ${row.manager_profit_type === 'percent' ? '%' : Vue.$store.currencies.list[0].code}</span>'>
                        ${row.manager.name}
                        </a>`;
        }
    },
    {
        targets: -1,
        render(data, type, row, meta) {
            let actions = Vue.$user.role('root,admin') || row.status === 'planned' || row.status === 'waiting' ? 'remove,edit' : '';
            return ` <div class="row-actions"
                             id="${row.id}"   
                             data-status="${row.status}"
                             data-actions="${actions}" 
                             data-unique-actions="complete"></div>`;
        }
    }
];