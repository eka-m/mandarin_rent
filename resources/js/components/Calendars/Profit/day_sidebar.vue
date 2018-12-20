<template>
		<div id="daySidebar" class="m-quick-sidebar m-quick-sidebar--tabbed m-quick-sidebar--skin-light">
				<div class="m-quick-sidebar__content">
				<span id="m_quick_sidebar_close" class="m-quick-sidebar__close">
						<i class="la la-close"></i>
					</span>
					<div class="row">
							<div class="col-12">
									<h1>Yes</h1>
							</div>
					</div>
				</div>
		</div>
</template>

<script>
    export default {
        name: "DaySidebar",
		    mounted() {
           const qs =  new mOffcanvas('daySidebar', {
                baseClass: 'm-aside-left--offcanvas-default',
                overlay: true,
                closeBy: 'm_quick_sidebar_close',
                toggleBy: {
                    target: 'openDaySidebar',
                    state: 'm-brand__toggler--active'
                }
            });
           console.log(qs);
            qs.show();
		    }
    }
</script>

<style scoped>

</style>