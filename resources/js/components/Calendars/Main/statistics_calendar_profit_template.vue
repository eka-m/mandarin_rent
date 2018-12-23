<template>
		<div>
				<h6>{{types[deals[0].status]}} cделки {{makeDate(deals[0].closed)}}</h6>
				<ul class="list-group">
						<li v-for="(deal,key) in deals" class="list-group-item  m--font-boldest" :key="key">
								<a :href="route('clients.show', deal.client.id)" class="m-link m-link--brand" target="_blank">
										{{deal.client.fullname}}
								</a>
								<a :href="route('deals.show', deal.id)" class="m-link m-link--focus" target="_blank">
										{{deal.hash}}
								</a>
								<span class="m-badge m-badge--wide m-badge--success m--font-boldest" v-if="deal.client.status === 'staff'">STAFF</span>
								<span :class="`m-badge m-badge--wide m--font-boldest m-badge--${deal.statuses[deal.status].class}`" v-else>{{deal.cost}}</span>
						</li>
				</ul>
		</div>
</template>

<script>
    export default {
		    name:"ProfitTemplate",
		    props:['deals'],
		    data:() => ({
				   types: {
				       finished: 'Завершенные',
				       notpaid: 'Неоплаченные',
				   }
		    }),
		    methods:{
            makeDate(date) {
                return moment(date).format('DD MMMM YYYY');
            }
		    }
    }
</script>