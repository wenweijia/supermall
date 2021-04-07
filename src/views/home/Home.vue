<template>
	<div>
		<Nabbar class='home-nabbar'><div slot='center'>购物街</div></Nabbar>
		<Swiper>
			<SwiperItem v-for='item in banners'>
				<a :href="item.link"><img :src="item.image" alt=""></a>
			</SwiperItem>
		</Swiper>
	</div>
</template>

<script>
	import Nabbar from '../../components/common/nabbar/Nabbar.vue'
	import {Swiper, SwiperItem} from '../../components/common/swiper'
	import {getHomeMultidata} from '../../network/home.js'
	
	export default {
		name:"Home",
		components: {
			Nabbar,
			Swiper,
			SwiperItem,
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
	.home-nabbar {
		color: #FFFFFF;
		background-color: var(--color-tint);
		
	}
</style>
