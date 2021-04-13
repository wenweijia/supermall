<template>
	<div class="shop-info">
		<div class="shop-top">
			<img :src="shop.logo" alt="">
			<span class="shop-name">{{shop.name}}</span>
		</div>
		<div class="shop-content">
			<div class="shop-content-left">
				<div class="shop-content-left-item">
					<div class="shop-sells">{{shop.sells}}</div>
					<div>总销量</div>
				</div>
				<div class="shop-content-left-item">
					<div class="shop-goods">{{shop.goodCount}}</div>
					<div>全部宝贝</div>
				</div>
			</div>
			<div class="shop-content-right">
				<div class="shop-content-right-item" v-for="item in shop.score">
					<span>{{item.name}}</span>
					<span class="shop-score" :class="{'shop-score-red':item.isBetter}">{{item.score}}</span>
					<span :class="{'shop-score-bred':item.isBetter}" class="shop-isBetter">{{isBetter(item.isBetter)}}</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'DetailShopInfo',
		
		props: {
			shop: {
				type: Object,
				default: {}
			}
		},
				
		data(){
			return {
				
			}
		},
		
		computed: {
		},

		methods:{
			isBetter(res) {
				return res ? '高' :'低'
			}
		}
	}
</script>
 
<style>
	.shop-top {
		padding: 20px 10px;
	}
	
	.shop-top img {
		width: 50px;
		height: 50px;
		border: 1px solid #eee;
		border-radius: 25px;
		vertical-align: middle;
	}
	
	.shop-name {
		margin-left: 8px;
		vertical-align: middle;
	}
	
	.shop-content {
		display: flex;
		padding: 10px;
	}
	
	.shop-content-left {
		flex: 1;
		display: flex;
		font-size: 14px;
		border-right: 1px solid #eee;
		text-align: center;
	}
	
	.shop-content-left-item {
		flex: 1;
	}
	
	.shop-sells, .shop-goods{
		margin-top: 5px;
		margin-bottom: 5px;
	}
	
	.shop-content-right {
		flex: 1;
	}
	
	.shop-content-right-item {
		font-size: 13px;
		margin-bottom: 5px;
		display: flex;
		justify-content: space-between;
		padding-left: 15px;
	}
	
	.shop-score {
		font-size: 12px;
		color: #42B983;
	}
	
	.shop-isBetter {
		color: #FFF;
		background-color: #42B983;
	}
	
	.shop-score-red {
		color: #FF5777;
	}
	
	.shop-score-bred {
		background-color: #FF5777;
	}
</style>
