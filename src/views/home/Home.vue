<template>
	<div id="home">
		<Nabbar class='home-nabbar'><div slot='center'>购物街</div></Nabbar>
		<TabControl class='tabControl1' :titles=titles @tabclick="tabclick" ref="tabControl1" v-show="isShowTab"></TabControl>
		<Scroll class="wrapper"
		 ref="scroll" 
		 :probeType='3' 
		 @scroll="contentScroll"
		 :pullUpLoad='true'
		 @pullingUp="loadMore">
			<HomeSwiper :banners = "banners" @swiperImageLoad="swiperImageLoad"></HomeSwiper>
			<RecommendView :recommends = "recommends"></RecommendView>
			<FeatureView></FeatureView>
			<TabControl class='tabControl2' :titles=titles @tabclick="tabclick" ref="tabControl2"></TabControl>
			<GoodsList :goods="currentGoods"></GoodsList>
		</Scroll>
		<BackTop @click.native='backClick' v-show="isShowBackTop"></BackTop>
	</div>
</template>

<script>
	import Nabbar from '../../components/common/nabbar/Nabbar.vue'
	import Scroll from '../../components/common/scroll/Scroll.vue'
	import HomeSwiper from './childComps/HomeSwiper.vue'
	import RecommendView from './childComps/RecommendView.vue'
	import FeatureView from './childComps/FeatureView.vue'
	import TabControl from '../../components/content/tabControl/TabControl.vue'
	import GoodsList from '../../components/content/goods/GoodsList.vue'
	import BackTop from '../../components/content/backTop/BackTop.vue'
	
	import {getHomeMultidata,
			getHomeGoods} from '../../network/home.js'
	
	// var util = require("../../common/utils.js");
	import {debounce} from '../../common/util.js'
		
	export default {
		name:"Home",
		components: {
			Nabbar,
			Scroll,
			HomeSwiper,
			RecommendView,
			FeatureView,
			TabControl,
			GoodsList,
			BackTop,
		},
		
		data() {
			return {
				banners: [],
				recommends: [],
				titles: ['流行','新款','精选'],
				goods: {
				  'pop': {page: 0, list: []},
				  'new': {page: 0, list: []},
				  'sell': {page: 0, list: []},
				},
				currentIndex: 0,
				currentType: 'pop',
				isShowBackTop: false,
				tabOffsetTop: 0,
				isShowTab: false,
				saveY: 0,
			}
		},
		
		computed: {
			currentGoods() {
				return this.goods[this.currentType].list
				// if (this.currentIndex == 1) {
				// 	return this.goods['new'].list
					
				// }else if (this.currentIndex == 2) {
				// 	return this.goods['sell'].list
					
				// }else{
				// 	return this.goods['pop'].list
				// }
			}
		},
		
		created() {
			this.getHomeMultidata()
			this.getHomeGoods('pop')
			this.getHomeGoods('new')
			this.getHomeGoods('sell')
		},
		
		mounted() {
			// 防抖动，仅调有限次
			const refresh = debounce(this.refreshTest, 1000)
			this.$bus.$on('itemImageLoad', () => {
				// this.$refs.scroll.refresh()
				refresh()
			})
		},	
		
		activated() {
			this.$refs.scroll.refresh()
			this.$refs.scroll.scrollTo(0, this.saveY, 0)
		},
		
		deactivated() {
			this.saveY = this.$refs.scroll.scroll.y
			console.log(this.saveY);
		},
		
		destroyed() {
			console.log('home destroyed');
		},
		
		methods:{
			/**
			 * 事件监听相关的方法
			 */
			tabclick(index) {
				this.currentIndex = index
				switch (index) {
				  case 0:
				    this.currentType = 'pop'
				    break
				  case 1:
				    this.currentType = 'new'
				    break
				  case 2:
				    this.currentType = 'sell'
				    break
				}
				this.$refs.tabControl1.currentIndex = index
				this.$refs.tabControl2.currentIndex = index
				
			},
			
			backClick() {
				console.log('置顶');
				this.$refs.scroll.scrollTo(0, 0)
			},
			
			contentScroll(position) {
				this.isShowBackTop = position.y < -1000;
				this.isShowTab = this.tabOffsetTop < -position.y
			},
			
			loadMore() {
				this.getHomeGoods(this.currentType)
			},
			
			swiperImageLoad() {
				this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
				console.log(this.tabOffsetTop);
			},
			
			refreshTest() {
				console.log("------");
			},
			
			/**
			 * 网络请求方法
			*/
			getHomeMultidata(){
				getHomeMultidata().then(res => {
					this.banners = res.data.banner.list
					this.recommends = res.data.recommend.list
					// this.$refs.scroll.refresh()
				})
			},
			
			getHomeGoods(type) {
				const page = this.goods[type].page + 1;
				getHomeGoods(type, page).then(res => {
					this.goods[type].list.push(...res.data.list);
					this.goods[type].page = page;					
					this.$refs.scroll.finishPullUp()
				})
			}  
		}
	}
</script>

<style>
	#home {
		/* padding-top: 44px; */
		height: 100vh;
		position: relative;
	}
	
	.home-nabbar {
		color: #FFFFFF;
		background-color: var(--color-tint);
		/* position: fixed;
		top: 0;
		left: 0;
		right: 0; */
		z-index: 9;
	}
	
	.wrapper {
		overflow: hidden;
		position: absolute;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
		/* margin-top: 50px;
		height: 350px;
		overflow: hidden;
		width: 100%; */
	}
	
	.tabControl1 {
		position: relative;
		z-index: 9;
	}
	
	.tabControl2 {
		/* position: sticky;
		top: 44px;
		z-index: 9; */
	}
	
</style>
