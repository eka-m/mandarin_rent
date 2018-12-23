<template>
		<div>
				<h6>Данные сделки</h6>
				<ul class="list-group m--font-bolder mt-2">
						<li class="list-group-item">
								Сделка: <a class="m-link m-link--brand" :href="route('deals.show', deal.id)" target="_blank">{{deal.hash}}</a>
								<span :class="`m-badge m-badge--wide m-badge--${deal.statuses[deal.status].class}`">{{deal.statuses[deal.status].title}}</span>
						</li>
						<li class="list-group-item">
								Стоимость: <span class="m-badge m-badge--wide m-badge--danger">{{deal.cost}}</span>
								Скидка: <span class="m-badge m-badge--wide m-badge--warning">{{deal.sale}} %</span>
								Итог: <span class="m-badge m-badge--wide m-badge--success">{{deal.realcost}}</span>
						</li>
						<li class="list-group-item">
								Клиент:  <a class="m-link m-link--brand" :href="route('clients.show', deal.client.id)" target="_blank">{{deal.client.fullname}}</a>
						</li>
						<li class="list-group-item">
								Период:
								<span class="m--font-brand m--font-boldest">с {{makeDate(deal.start)}}</span>
								 /
								<span class="m--font-brand m--font-boldest">до {{makeDate(deal.end)}}</span>
						</li>
						<li class="list-group-item" v-if="deal.closed !== null">
								Дата оплаты	<span class="m-badge m-badge--wide m-badge--accent m--font-boldest">{{makeDate(deal.closed)}}</span>
						</li>
						<li class="list-group-item mt-3">
								<span>Предметы сделки</span>
								<ul class="list-group mt-2">
										<li class="list-group-item" v-for="(item,key) in deal.items" :key="key">
												<span class="m-badge m-badge--wide m-badge--accent m--font-boldest">№ {{item.inventory_code}}</span>
												<a :href="route('inventory.show',item.id)" class="m-link m-link--brand">
														{{item.name}} {{item.model}}
														<span class="m-badge m-badge--wide m-badge--info m--font-boldest">{{item.cost}}</span>
												</a>
										</li>
								</ul>
						</li>
				</ul>
		</div>
</template>

<script>
    export default {
		    name:"DealTemplate",
		    props:["deal"],
		    methods:{
		        makeDate(date) {
		            return moment(date).format('DD MMMM YYYY');
		        }
		    }
    }
</script>

<style>
.fc-content {
		cursor:pointer;
}
</style>