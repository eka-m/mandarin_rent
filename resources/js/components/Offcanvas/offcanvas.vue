<template>
		<div id="offcanvas" class="m-quick-sidebar m-quick-sidebar--tabbed m-quick-sidebar--skin-light">
				<div class="m-quick-sidebar__content">
				<span id="closeOffCanvas" class="m-quick-sidebar__close"><i class="la la-close"></i></span>
						<div class="row mt-5">
								<div class="col-12">
										<div id="offcanvas-content" class="m-scrollable" data-scrollbar-shown="true" data-scrollable="true" style="height: 80vh;">
												<transition name="fade">
														<div v-if="show" v-html="offcanvas.content"></div>
												</transition>
										</div>
								</div>
						</div>
				</div>
		</div>
</template>

<script>
    export default {
        name: "DaySidebar",
		    store: ['offcanvas'],
		    data:() => ({
				    element:null,
				    show:false
		    }),
		    mounted() {
             this.element = new mOffcanvas('offcanvas', {
                baseClass: 'm-quick-sidebar',
                overlay: true,
                closeBy:  'closeOffCanvas',
                toggleBy: 'openOffcanvas'
            });
            this.element.on('afterShow',()  =>{
                mApp.block("#offcanvas");
                setTimeout(() =>{
                    mApp.unblock("#offcanvas");
                    this.show = true;
                },1000)
            });
             this.element.on('afterHide',()  =>{
                this.offcanvas.open = false;
                this.show = false
                this.offcanvas.content = '';
             });
        },
		    watch:{
            "offcanvas.open" (value) {
                if (value) {
                    this.element.show();
                } else {
                    this.element.hide();
                }
            },
		    }
    }
</script>

<style scoped>

</style>