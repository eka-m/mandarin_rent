export default {
    data: () => ({
        sale: 0,
    }),
    computed: {
        totalItemsPrice() {
            let price = 0;
            const items = this.$store.deal.items;
            for (let item in items) {
                price += Number(items[item].rent.price);
            }
            return price;
        },
        totalRealPrice() {
            let price = 0;
            const items = this.$store.deal.items;
            for (let item in items) {
                let item = items[item];
                let oneHourPrice = Number(item.rent.price);
                if (item.rent.per === "day") {
                    oneHourPrice = item.rent.price / 24;
                }
                if (!item.reserved) {
                    price += oneHourPrice * this.rentHours;
                }
            }
            const result = Number(price).toFixed(1);
            return result > 0 ? result : 0;
        },
        rentHours() {
            return moment(this.$store.deal.end).diff(moment(this.$store.deal.start), 'hours');
        },
        rentDays() {
            return moment(this.$store.deal.end).diff(moment(this.$store.deal.start), 'days');
        },
        duration() {
            const diff = moment(this.$store.deal.end).diff(moment(this.$store.deal.start));
            const duration = moment.duration(diff);
            return `
                ${duration.days() > 0 ? duration.days() : ''} 
                ${duration.days() ? noun(duration.days(), 'день', 'дня', 'дней') : '' }
                ${duration.hours() > 0 ? duration.hours() : ''} 
                ${duration.hours() ? noun(duration.hours(), 'час', 'часа', 'часов') : ''}
                    `;
        },
    },
    methods: {
        total() {
            let total = this.totalRealPrice;
            const result = this.sale > 0 ? (total - total / 100 * this.sale).toFixed(1) : total;
            this.totalPrice = result > 0 ? result : 0;
            return result > 0 ? result : 0;
        },
        calculateSale(event) {
            if (this.totalRealPrice > 0) {
                this.sale = Number(100 - (event.target.value * 100) / this.totalRealPrice).toFixed(1);
                this.sale = this.sale < 0 ? 0 : this.sale;
                this.sale = this.sale > 100 ? 100 : this.sale;
            }
        }
    }
}