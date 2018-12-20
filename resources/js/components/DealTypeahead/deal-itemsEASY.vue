<template>
	<div>
		<div class="row">
			<div class="col">
				<label for="dealitems">Предметы сделки</label>
				<div class="m-typeahead">
					<input type="text" class="form-control m-input dealsTypeAhead" placeholder="Введите название или И.Н" ref="typeahead">
				</div>
			</div>
		</div>
		<div class="row mt-3">
			<div class="col">
				<ul id="dealItems" class="list-group">
					<li class="list-group-item animated fadeIn" v-for="(item, key) in selectedItems" :key="key">
						<span class='m-badge m-badge--wide m-badge--info'>{{item.inventory_code}}</span>
						<a :href="'/inventory/' + item.id" target="_blank" class="m-link m-btn--link">{{item.name}}</a>
						<div class="d-inline pull-right">
							<span class='m-badge m-badge--wide m-badge--warning'>{{item.rent.price}} AZN / {{per[item.rent.per]}}</span>
							<button class="btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill btn-sm" @click.prevent="removeItem(item)">
								<i class="la la-trash"></i>
							</button>
						</div>
					</li>
				</ul>
				<input type="hidden" class="form-control m-input" name="items" id="dealItemsInput" :value="JSON.stringify(selectedIds)">
				<input type="hidden" name="price" :value="totalTimePrice">
				<input type="hidden" name="sale" :value="sale">
			</div>
		</div>
		<div class="row mt-3 animated fadeIn" v-if="selectedItems.length > 0">
			<div class="col text-right">
				<div class="bg-info p-2 text-light">
					<div class="row">
						<div class="col-md-8 pr-0 d-flex align-content-right align-items-center justify-content-end">
							<div class="m--regular-font-size-lg1">Скидка:</div>
						</div>
						<div class="col-md-4">
							<div class="input-group m-input-group m-input-group--pill">
								<input type="text" class="form-control form-control-sm m-input" v-model="sale">
								<div class="input-group-append">
									<span class="input-group-text">%</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="bg-dark text-light p-2">
					<h6 class="m-0">
						<span>Общая сумма: </span>
						<span class="m-badge m-badge--wide m-badge--danger m--regular-font-size-lg2">
							{{totalTimePrice}} AZN
						</span>
					</h6>
					<p class="text-light m-0 mt-2">{{duration}} до:
						<span class="m-badge m-badge--wide m-badge--info m--regular-font-size-lg1">{{formatDate(finish)}}</span>
					</p>
				</div>
			</div>
		</div>
	</div>

</template>

<!--suppress JSUnfilteredForInLoop -->
<script type="text/babel">
import { noun } from 'plural-ru';
import 'easy-autocomplete';
export default {
	name: 'DealItems',
	props: {
		dataUrl: {
			default: null
		},
		availableItems: {
			default: []
		},
		currentPrice: {
			default: 0
		},
		currentSale: {
			default: 0.0
		},
		dealId: {
			default: null
		}
	},
	data () {
		return {
			el: null,
			selectedItems: [],
			selectedIds: [],
			serverData: [],
			localData: [],
			start: null,
			finish: null,
			sale: 0,
			price: 0.0,
			per: {
				day: 'День',
				hour: 'Час'
			}
		};
	},
	created () {
		this.selectedItems = this.availableItems
			? JSON.parse(this.availableItems)
			: [];
		this.price = this.currentPrice ? this.currentPrice : 0.0;
		this.sale = this.currentSale ? this.currentSale : 0;

		const startInput = $('#dealStart');
		const finishInput = $('#dealFinish');
		this.start = startInput.val();
		this.finish = finishInput.val();
		$('#dealStart')
			.datetimepicker()
			.on('changeDate', ev => {
				this.start = this.formatDate(ev.date);
			});
		$('#dealFinish')
			.datetimepicker()
			.on('changeDate', ev => {
				this.finish = this.formatDate(ev.date);
			});
	},
	mounted () {
		this.el = $('.dealsTypeAhead');
		this.el.easyAutocomplete({
			data: ["blue", "green", "pink", "red", "yellow"]
		});
	},
	computed: {
		totalItemsPrice () {
			let price = 0;
			for (let item in this.selectedItems) {
				price += Number(this.selectedItems[item].rent.price);
			}
			return price;
		},
		totalTimePrice () {
			let price = 0;
			for (let item in this.selectedItems) {
				let item = this.selectedItems[item];
				let oneHourPrice = Number(item.rent.price);
				if (item.rent.per == 'day') {
					oneHourPrice = item.rent.price / 24;
				}
				price += oneHourPrice * this.rentHours;
			}
			let total = Number(price).toFixed(1);
			const result =
				this.sale > 0 ? (total - total / 100 * this.sale).toFixed(1) : total;

			return result > 0 ? result : 0;
		},
		rentHours () {
			return moment(this.finish).diff(moment(this.start), 'hours');
		},
		rentDays () {
			return moment(this.finish).diff(moment(this.start), 'days');
		},
		duration () {
			const diff = moment(this.finish).diff(moment(this.start));
			const duration = moment.duration(diff);
			return `
                ${duration.days() > 0 ? duration.days() : ''} ${
				duration.days() ? noun(duration.days(), 'день', 'дня', 'дней') : ''
				}
                ${duration.hours() > 0 ? duration.hours() : ''} ${
				duration.hours() ? noun(duration.hours(), 'час', 'часа', 'часов') : ''
				}
                ${duration.minutes() > 0 ? duration.minutes() : ''} ${
				duration.minutes()
					? noun(duration.minutes(), 'минута', 'минуты', 'минут')
					: ''
				}
                    `;
		},
		localItems () {
			return this.availableItems
				? JSON.parse(this.availableItems).filter(
					x => !this.selectedIds.includes(x.id)
				)
				: [];
		}
	},
	watch: {
		selectedItems (val) {
			let ids = [];
			for (let item in val) {
				ids.push(val[item]['id']);
			}
			this.selectedIds = ids;
		}
	},
	methods: {
		formatDate (date) {
			return moment(date).format('YYYY-MM-DD HH:mm');
		},
		convertToTimestamp (date) {
			return Number(moment(date).format('X'));
		},

		removeItem (item) {
			const index = this.selectedItems.indexOf(item);
			this.selectedItems.splice(index, 1);
		}
	}
};
</script>

<style type="text/scss" lang="scss">
.tt-dataset {
  max-height: 300px;
  overflow-y: auto;
}
.easy-autocomplete-container {
  max-height: 150px;
	overflow-y: auto;
	background: $white;
	box-shadow: 0px 0px 15px 1px rgba(81,77,92,0.2);
	 ul {
		list-style: none !important;
		margin: 0;
		padding: 0;
		li {
			padding: 5px;
		}
  }
}
</style>