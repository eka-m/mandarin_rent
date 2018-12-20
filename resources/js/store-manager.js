import currencies from './store/currency-store';
import deal from './store/deal-store';
export default {
    currencies: currencies,
    deal: deal,
    init(obj, value) {
        return _.merge(this[obj], value);
    },
    set(obj, key, value) {
        return _.set(this[obj], key, value);
    },
    get(obj, key, value = false) {
        return _.get(this[obj], key, value);
    }
};
