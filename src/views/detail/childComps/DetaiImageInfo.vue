<template>
	<div>
		<div class="image-info-item" v-for="item in imageArr">
			<img :src="item" mode="aspectFill">			
		</div>
	</div>
	
</template>
 
<script>
	export default {
		name: 'DetailImageInfo',
		
		props: {
			imageArr: {
				type: Array,
				default: [],
			}
		},
		
		data(){
			return {
				
			}
		},

		methods:{
			
		}
	}
</script>
 
<style>
	.image-info-item {
		width: 100%;
		height: 300px;
	}
	
	.image-info-item img{
		width: 100%;
		height: 100%;
	}
</style>
