<template>
	<div id="home">
		<Nabbar class='home-nabbar'><div slot='center'>购物街</div></Nabbar>
		<HomeSwiper :banners = "banners"></HomeSwiper>
		<RecommendView :recommends = "recommends"></RecommendView>
		<FeatureView></FeatureView>
		
		<ul>
			<li>sdfsdfsdfsdf</li>
			<li>sdfsdfsdfsdf</li>
			<li>sdfsdfsdfsdf</li>
			<li>sdfsdfsdfsdf</li>
			<li>sdfsdfsdfsdf</li>
			<li>sdfsdfsdfsdf</li>
			<li>sdfsdfsdfsdf</li>
			<li>sdfsdfsdfsdf</li>
			<li>sdfsdfsdfsdf</li>
			<li>sdfsdfsdfsdf</li>
		</ul>
	</div>
</template>

<script>
	import Nabbar from '../../components/common/nabbar/Nabbar.vue'
	import HomeSwiper from './childComps/HomeSwiper.vue'
	import RecommendView from './childComps/RecommendView.vue'
	import FeatureView from './childComps/FeatureView.vue'
	
	import {getHomeMultidata} from '../../network/home.js'
	
	export default {
		name:"Home",
		components: {
			Nabbar,
			HomeSwiper,
			RecommendView,
			FeatureView,
		},
		
		data() {
			return {
				banners: [],
				recommends: [],
			}
		},
		
		created() {
			getHomeMultidata().then(res => {
				console.log(res);
				this.banners = res.data.banner.list
				this.recommends = res.data.recommend.list
			})
		},
		methods:{
		}
	}
</script>

<style>
	#home {
		padding-top: 44px;
	}
	
	.home-nabbar {
		color: #FFFFFF;
		background-color: var(--color-tint);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 9;
	}
</style>
