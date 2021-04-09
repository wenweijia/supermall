<template>
	<div class="goods">
		<GoodsListItem class="goods-item" v-for="(item, index) in goods" :goodsItem="item"></GoodsListItem>
	</div>
</template>
 
<script>
	import GoodsListItem from './GoodsListItem.vue'
	
	export default {
		name: 'GoodsList',

		components: {
			GoodsListItem
		},
		
		props: {
			goods: Array
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
	.goods {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 2px;
	}
	
	.goods-item {
		width: 48%;
	}
	
	
</style>
