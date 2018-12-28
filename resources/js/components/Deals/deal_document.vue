<template>
		<div>
				<button class="btn btn-brand m-btn m-btn--gradient-from-accent m-btn--wide" @click.prevent="make">Посмотреть
						документ
				</button>
		</div>
</template>

<script>
    import pdfMake from 'pdfmake/build/pdfmake';
    import vfsFonts from 'pdfmake/build/vfs_fonts'
		import DealPdf from './deal-pdf'
    export default {
        name: "DealDocument",
        props: ['deal'],
        created() {
            const {vfs} = vfsFonts.pdfMake;
            pdfMake.vfs = vfs;
        },
		    mounted() {
            this.make();
		    },
        methods: {
            make() {
                pdfMake.createPdf(DealPdf).getDataUrl((outDoc) =>{
                    document.getElementById('pdfV').src = outDoc;
                });
            }
        }
    }
</script>

<style scoped>

</style>