<template>
	<div>
		<DetailNavBar></DetailNavBar>
		<div>详情页{{iid}}</div>
	</div>
	
</template>
 
<script>
	
	import DetailNavBar from './childComps/DetailNavBar.vue'
	
	export default {
		name: 'Detail',
		
		components: {
			DetailNavBar,
		},

		data(){
			return {
				iid: null
			}
		},
		
		created() {
			this.iid = this.$route.params.iid
			console.log(this.iid);
		},

		methods:{
			
		}
	}
</script>
 
<style>

</style>
