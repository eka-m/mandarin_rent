<template>
	<div class="m-portlet m-portlet--head-solid-bg m-portlet--head-sm" data-portlet="true" id="basePortlet">
		<div class="m-portlet__head">
			<div class="m-portlet__head-caption">
				<div class="m-portlet__head-title">
					<span v-if="icon" class="m-portlet__head-icon">
						<i :class="icon"></i>
					</span>
					<h3 v-if="title" class="m-portlet__head-text">
						{{title}}
					</h3>
				</div>
			</div>
			<div class="m-portlet__head-tools">
				<ul class="m-portlet__nav">
					<li v-if="portletActions.includes('show') && url" class="m-portlet__nav-item">
						<a :href="url" class="m-portlet__nav-link m-portlet__nav-link--icon"><i class="la la-bullseye"></i></a>
					</li>
					<li v-if="portletActions.includes('edit') && url" class="m-portlet__nav-item">
						<a :href="url + '/edit'" class="m-portlet__nav-link m-portlet__nav-link--icon"><i class="la la-pencil"></i></a>
					</li>
					<li v-if="portletActions.includes('delete') && url" class="m-portlet__nav-item">
						<delete-btn class="m-portlet__nav-link m-portlet__nav-link--icon" :url="url" confirm="Уверены что хотите удалить ?">
							<i class="la la-trash"></i>
						</delete-btn>
					</li>
					<li class="m-portlet__nav-item">
						<a href="#" m-portlet-tool="fullscreen" class="m-portlet__nav-link m-portlet__nav-link--icon" title="">
							<i class="la la-expand"></i>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="m-portlet__body">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "Portlet",
	props: {
		title: null,
		icon: null,
		actions: null,
		url: null,
	},
	data: () => ({
		portlet: null,
		fullscreen: false,
		portletActions: ['delete', 'edit']
	}),
	created () {
		if (this.actions != null) this.portletActions = this.actions;
	},
	mounted () {
		const options = {
			bodyToggleSpeed: 400,
			tooltips: true,
			tools: {
				fullscreen: {
					on: 'Fullscreen',
					off: 'Exit Fullscreen'
				}
			}
		};
		this.portlet = new mPortlet('basePortlet', options);
	},
	methods: {
	}
}
</script>

<style scoped>
</style>
