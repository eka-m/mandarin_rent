<template>
        <a href="javascript:;" v-if="$user.role('root,admin') || params.status === 'notpaid' || params.status === 'islate' || params.status === 'active'"
           class="m-portlet__nav-link text-dark btn m-btn m-btn--hover-success m-btn--icon m-btn--icon-only m-btn--pill completeDealButton"
           @click.prevent="complete">
            <i class="fa fa-check-circle"></i>
        </a>
</template>

<script>
    import { EventBus } from '../../../../event-bus';
    export default {
        name: "ActionCompleteDeal",
        props: ['table', 'params'],
        methods: {
            complete() {
                EventBus.$emit('complete.deal',this.params);
            },
        }
    }
</script>

<style scoped>

</style>