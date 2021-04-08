<template>
	<div class="recommend">
		<div class="recommend-item" v-for="item in recommends">
			<a :href="item.link">
				<img :src="item.image" alt="">
				<div>{{item.title}}</div>
			</a>
		</div>
		<a href=""></a>
	</div>
</template>
 
<script>
	export default {
		name: 'RecommendView',
		props: {
			recommends: {
				type: Array,
				default() {
					return []
				}
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
	.recommend {
		width: 100%;
		display: flex;
		padding: 10px 0 20px;
		border-bottom: 8px solid #eee;
	}
	.recommend-item {
		font-size: 12px;
		text-align: center;
		flex: 1;
	}
	.recommend-item img {
		width: 70px;
		height: 70px;
	}
</style>
