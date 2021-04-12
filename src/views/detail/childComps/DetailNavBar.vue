<template>
	<Nabbar>
		<!-- <div class="back" slot="left" @click="backClick">
			<img src="../../../assets/img/common/back.svg" alt="">
		</div> -->
		<template #left>
		  <div class="back" @click="backClick">
		    <img src="../../../assets/img/common/back.svg" alt="" />
		  </div>
		</template>
		<div class="title" slot="center" >
			<div v-for="(item, index) in titles" 
			class="title-item" :class="{active: currentIndex === index}"
			@click="itemClick(index)"
			:key="index"
			>{{item}}</div>
		</div>
	</Nabbar>
</template>
 
<script>
	
	import Nabbar from '../../../components/common/nabbar/Nabbar.vue'
	
	export default {
		name: 'DetailNavBar',
		
		components: {
			Nabbar
		},
		
		data(){
			return {
				titles: ['商品', '参数', '评论', '推荐'],
				currentIndex: 0,
			}
		},

		methods:{
			backClick() {
				this.$router.back()
			},
			
			itemClick(index) {
				this.currentIndex = index
			}
		}
	}
</script>
 
<style>
	.title {
		display: flex;
		font-size: 14px;
	}
	
	.title-item {
		flex: 1;
	}
	
	.active {
		color: #FF5777;
	}
	
	.back img {
		margin-top: 10px;
		margin-left: -15px;
	}
</style>
