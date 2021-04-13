<template>
	<div id="detail">
		<DetailNavBar class="detail-navbar"></DetailNavBar>
		<Scroll class="detail-scroll">
			<DetailSwiper :images="topImages"></DetailSwiper>
			<detail-base-info :goods="goods"></detail-base-info>
			<detail-shop-info :shop="shop"></detail-shop-info>
		</Scroll>
		
	</div>
	
</template>
 
<script>
	
	import DetailNavBar from './childComps/DetailNavBar.vue'
	import Scroll from '../../components/common/scroll/Scroll.vue'
	import DetailSwiper from './childComps/DetailSwiper.vue'
	import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
	import DetailShopInfo from './childComps/DetailShopInfo.vue'
	
	import {getDetail, GoodsInfo, Shop} from '../../network/detail.js'
	
	export default {
		name: 'Detail',
		
		components: {
			DetailNavBar,
			Scroll,
			DetailSwiper,
			DetailBaseInfo,
			DetailShopInfo,
		},

		data(){
			return {
				iid: null,
				topImages: [],
				goods: {},
				shop: {},
			}
		},
		
		created() {
			this.iid = this.$route.params.iid
			console.log(this.iid);
			
			//1.请求详情数据
			this.getDetailRequest(this.iid)
		},

		methods:{
			
			/**
			 * 请求网络数据
			 */
			// 请求详情数据
			getDetailRequest(iid) {
				getDetail(iid).then(res => {
					console.log(res);
					const data = res.result
					// 1.获取轮播图
					this.topImages = data.itemInfo.topImages
					// 2.获取商品信息
					this.goods = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)
					// 3.创建店铺信息对象
					this.shop = new Shop(data.shopInfo)
				}).catch(err => {
					console.log(err);
				})
			},
		}
	}
</script>
 
<style>
	#detail {
		position: relative;
		z-index: 9;
		background-color: #fff;
	}
	
	.detail-navbar {
		position: relative;
		z-index: 9;
		background-color: #fff;
	}
	
	.detail-scroll {
		height: calc(100vh - 44px);
	}
	
</style>
