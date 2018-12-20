<template>
	<div class="m-portlet m-portlet--head-sm" data-portlet="true" ref="paginatiablebox">
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
					<li class="m-portlet__nav-item">
						<a href="#" data-portlet-tool="fullscreen" class="m-portlet__nav-link m-portlet__nav-link--icon" title="" data-original-title="Fullscreen">
							<i class="la la-expand"></i>
						</a>
					</li>
					<li class="m-portlet__nav-item">
						<a href="" data-portlet-tool="toggle" class="m-portlet__nav-link m-portlet__nav-link--icon" title="" data-original-title="Collapse">
							<i class="la la-angle-down"></i>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "PaginatableBox",
	props: {
		title:null,
		icon:null,
		url:null,
	},
	data: () => ({
		content: null
	}),
	created () {
		this.getData();
	},
	methods: {
		getData () {
			axios.get(url).then(r => {

			}).catch(e => {

			});
		},
		loader () {

		}
	},
}
</script>

<style scoped>
</style>
