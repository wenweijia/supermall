<template>
	<div class="base-info" v-if="Object.keys(goods).length">
		<div class="info-title">{{goods.title}}</div>
		<div class="info-price">
			<span class="info-new-price">{{goods.newPrice}}</span>
			<span class="info-old-price">{{goods.oldPrice}}</span>
			<span class="info-discount">{{goods.discountDesc}}</span>
		</div>
		<div class="info-columns">
			<span class="info-columns-sell">{{goods.columns[0]}}</span>
			<span class="info-columns-collection">{{goods.columns[1]}}</span>
			<span class="info-columns-fahuo">{{goods.columns[2]}}</span>
		</div>
		<div class="info-services">
			<span class="info-services-item">
				<img :src="goods.services[goods.services.length-2].icon" alt="">
				<span>{{goods.services[goods.services.length-2].name}}</span>
			</span>
			<span class="info-services-item">
				<img :src="goods.services[goods.services.length-1].icon" alt="">
				<span>{{goods.services[goods.services.length-1].name}}</span>
			</span>
		</div>
	</div>
</template>
 
<script>
	export default {
		name: 'DetailBaseInfo',

		props: {
			goods: {
				type: Object,
				default: {},
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
	.info-title {
		color: #333;
		font-size: 16px;
		padding: 12px 10px;
	}
	.info-price {
		padding: 0px 10px 12px 10px;
	}
	
	.info-new-price {
		font-size: 16px;
		color: #f13e3a;
	}
	
	.info-old-price {
		margin-left: 5px;
		margin-right: 5px;
		font-size: 12px;
		text-decoration: line-through;
	}
	
	.info-discount {
		font-size: 13px;
		color: #fff;
		background-color: #f13e3a;
		border-radius: 6px;
		padding: 2px 5px;
	}
	
	.info-columns {
		display: flex;
		justify-content: space-between;
		padding: 5px 10px;
		color: #999;
		font-size: 12px;
		border-bottom: 1px solid #eee;
	}
	
	.info-services {
		display: flex;
		justify-content: space-between;
		padding: 20px 10px;
		border-bottom: 5px solid #eee;
		font-size: 14px;
	}
	
	.info-services-item img{
		width: 12px;
		height: 12px;
	}
	
</style>
