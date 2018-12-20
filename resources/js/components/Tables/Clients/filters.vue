<template>
    <div class="m-form m-form--label-align-right m--margin-top-20 m--margin-bottom-30">
        <div class="row">
            <div class="col-md-3">
                <div class="m-form__group m-form__group--inline">
                    <div class="m-form__label">
                        <label>Статус</label>
                    </div>
                    <div class="m-form__control">
                        <select v-model="selectedStatus" class="form-control m-bootstrap-select m-bootstrap-select--solid selectPickerVue">
                            <option value=""
                                    data-content='<span class="m-badge m-badge--wide m-badge--metal">Все</span>'>
                                Все
                            </option>
                            <option :value="key" v-for="(status, key) in statuses" :key="key"
                                    :data-content='`<span class="m-badge m-badge--wide m-badge--${status.class}">${status.title}</spam>`'>
                                {{status.title}}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="d-md-none m--margin-bottom-10"></div>
            </div>
            <div class="col-md-5 offset-md-4">
                <div class="m-input-icon m-input-icon--left">
                    <input type="text"
                           class="form-control m-input m-input--solid"
                           placeholder="Быстрый поиск..."
                           v-model="search"
                    >
                    <span class="m-input-icon__icon m-input-icon__icon--left"><span><i class="la la-search"></i></span></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "InventoryFilters",
        props: ['table', 'propStatuses'],
        data: () => ({
            statuses: {},
            categories: {},
            selectedStatus: "",
            search:null,
        }),
        watch: {
            selectedStatus(value) {
                this.table.search(value).draw();
            },
            search(value) {
                this.table.search(value).draw();
            }
        },
        created() {
          this.statuses = JSON.parse(this.propStatuses);
        },
        mounted() {
            $(".selectPickerVue").selectpicker({});
        }
    }
</script>