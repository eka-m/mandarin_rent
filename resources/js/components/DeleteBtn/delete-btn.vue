<template>
    <a href="javascript:void(0)"
       ref="deleteBtn"
       :title="confirm"
       :id="'delete-btn' + _uid"
       data-toggle="m-popover"
       data-trigger="click"
       data-skin="dark"
       data-html="true"
       :data-content="setButtons()">
        <slot></slot>
        <form :id="'deleteForm'+_uid" class="deleteForm" :action="url" method="post">
            <input type="hidden" name="_method" value="delete">
            <input type="hidden" name="_token" :value="$helpers.csrf()">
        </form>
    </a>
</template>

<script>
    export default {
        name: 'DeleteButton',
        props: ['url', 'confirm', 'element'],
        mounted() {
            $("#delete-btn"+this._uid).popover();
        },
        methods: {
            setButtons() {
                return `
					<div class="text-center">
					<button class="btn btn-danger btn-sm m-btn" onclick="$('#delete-btn${this._uid}').popover('hide')">Отменить</button>
					<button class="btn btn-accent btn-sm m-btn" onclick="
					$('#delete-btn${this._uid}').popover('hide');
					$('#deleteForm${this._uid}').submit();
					">
					    Удалить
					</button>
					</div>
					`;
            }
        }
    }
</script>

<style scoped>
    .deleteForm {
        display: none;
    }
</style>
