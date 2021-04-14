<template>
	<div id="detail">
		<DetailNavBar ref="navBarRef" class="detail-navbar" @titleClick="titleClick"></DetailNavBar>
		<Scroll ref="scroll" class="detail-scroll" :probe-type='3' @scroll="contentScroll">
			<DetailSwiper :images="topImages"></DetailSwiper>
			<detail-base-info :goods="goods"></detail-base-info>
			<detail-shop-info :shop="shop"></detail-shop-info>
			<detail-image-info ref="imageInfoRef" :imageArr="imageList"></detail-image-info>
			<detail-comment-info ref="commentInfo" :comment="commentInfo"></detail-comment-info>
			<GoodsList ref="recommendInfo" :goods="recommends"></GoodsList>
		</Scroll>
		
	</div>
	
</template>
 
<script>
	
	import DetailNavBar from './childComps/DetailNavBar.vue'
	import Scroll from '../../components/common/scroll/Scroll.vue'
	import DetailSwiper from './childComps/DetailSwiper.vue'
	import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
	import DetailShopInfo from './childComps/DetailShopInfo.vue'
	import DetailImageInfo from './childComps/DetaiImageInfo.vue'
	import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
	import GoodsList from '../../components/content/goods/GoodsList.vue'
	
	import {getDetail, getDetailRecommend, GoodsInfo, Shop} from '../../network/detail.js'
	import {debounce} from '../../common/util.js'
	
	export default {
		name: 'Detail',
		
		components: {
			DetailNavBar,
			Scroll,
			DetailSwiper,
			DetailBaseInfo,
			DetailShopInfo,
			DetailImageInfo,
			DetailCommentInfo,
			GoodsList,
		},

		data(){
			return {
				iid: null,
				topImages: [],
				goods: {},
				shop: {},
				imageList: [],
				commentInfo: {},
				recommends: [],
				themeTopYs: [],
				detailIndex: 0,
			}
		},
		
		created() {
			this.iid = this.$route.params.iid
			console.log(this.iid);
			
			//1.请求详情数据
			this.getDetailRequest(this.iid)
			
			//2.获取推荐数据
			this.getDetailRecommendRequest()
		},
		
		mounted() {
			// 防抖动，仅调有限次
			const refresh = debounce(this.detailImageLoad, 1000)
			this.$bus.$on('detailImageLoad', () => {
				refresh()
			})
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
					// 4.获取图片数组
					this.imageList = data.detailInfo.detailImage[0].list
					// 5.获取评论信息
					if (data.rate.cRate !== 0) {
						this.commentInfo = data.rate.list[0]
					}
				}).catch(err => {
					console.log(err);
				})
			},
			
			// 获取推荐数据
			getDetailRecommendRequest() {
				getDetailRecommend().then(res => {
					this.recommends = res.data.list
				}).catch(err => {
					console.log(err);
				})
			},
			
			detailImageLoad() {
				this.themeTopYs = []
				this.themeTopYs.push(0)
				this.themeTopYs.push(this.$refs.imageInfoRef.$el.offsetTop)
				this.themeTopYs.push(this.$refs.commentInfo.$el.offsetTop)
				this.themeTopYs.push(this.$refs.recommendInfo.$el.offsetTop)
				console.log(this.themeTopYs);
			},
			
			titleClick(index) {
				console.log('点击第：',index);
				this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
			},
			
			contentScroll(position) {
				for (let i = 0; i < this.themeTopYs.length - 1; ++i) {
				  if (
				    this.detailIndex != i &&
				    -position.y >= this.themeTopYs[i] &&
				    -position.y < this.themeTopYs[i + 1]
				  ) {
				    this.detailIndex = i;
				    this.$refs.navBarRef.currentIndex = i;
				    break;
				  }
				}
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
