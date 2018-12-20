export default {
    install(Vue, options) {
        Vue.prototype.$helpers = this.methods;
    },
    methods: {
        isEmpty(value) {
            switch (value) {
                case "":
                case 0:
                case "0":
                case null:
                case false:
                case typeof this === "undefined":
                    return true;
                default:
                    return false;
            }
        },
        monthNames() {
            return ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        },
        csrf() {
            return document.head.querySelector('meta[name="csrf-token"]').content;
        },
        attachScript(tag_id, path) {
            return new Promise((resolve, reject) => {
                const tag = $(tag_id);
                if (tag.length === 0) {
                    const tag = $("<script />", {
                        type: "text/javascript",
                        src: path,
                        id: tag_id
                    });
                    $("head").append(tag);
                    resolve(true)
                } else {
                    reject(false)
                }
            });

        },
        attachStyle(tag_id, path) {
            return new Promise((resolve, reject) => {
                const tag = $(tag_id);
                if (tag.length === 0) {
                    const tag = $("<link />", {
                        rel: "stylesheet",
                        href: path,
                        id: tag_id
                    });
                    $("head").append(tag);
                    resolve(true)
                } else {
                    reject("sdsd")
                }
            });
        }
    }
}
