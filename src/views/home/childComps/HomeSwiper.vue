<template>
	<Swiper>
		<SwiperItem v-for='item in banners'>
			<a :href="item.link"><img :src="item.image" alt="" @load="itemImageLoad"></a>
		</SwiperItem>
	</Swiper>
</template>
 
<script>
	import {Swiper, SwiperItem} from '../../../components/common/swiper'
	
	export default {
		name: 'HomeSwiper',
		components: {
			Swiper,
			SwiperItem,
		},
		props: {
			// banners: {
			// 	type: Array,
			// 	default() {
			// 		return []
			// 	}
			// }
			banners: Array
		},
		data(){
			return {
				isLoad: false
			}
		},
		methods:{
			itemImageLoad() {
				if (!this.isLoad) {
					this.$emit('swiperImageLoad')
					this.isLoad = true
				}
			}
		}
	}
</script>
 
<style>
</style>
