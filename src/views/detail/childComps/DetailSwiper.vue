<template>
	<swiper class="detail-swiper">
		<swiperItem v-for="(item, index) in images">
			<img :src="item" alt="">
		</swiperItem>
	</swiper>
</template>
 
<script>
	
	import {Swiper, SwiperItem} from '../../../components/common/swiper/index.js'
	
	export default {
		name: 'DetailSwiper',
		
		components: {
			Swiper,
			SwiperItem,
		},
		
		props: {
			images: {
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
	.detail-swiper {
		height: 300px;
		overflow: hidden;
	}
</style>
