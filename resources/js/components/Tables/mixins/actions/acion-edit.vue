<template>
    <a :href="params.url + '/' + params.id + '/edit' "
       class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill"
       title="Редактировать">
        <i class="la la-pencil"></i>
    </a>
</template>

<script>
    export default {
        name: "ActionEdit",
        props: ["params"]
    }
</script>
