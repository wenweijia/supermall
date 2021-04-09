<template>
	<div class="wrapper" ref='wrapper'>
		<ul class="">
			<button @click="buttonClick">按钮</button>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
			<li>请求数据1</li>
		</ul>
	</div>
</template>

<script>
	
	import BScroll from 'better-scroll'
	
	export default {
		name:"Category",
		data() {
			return {
				scroll: null
			}
		},
		
		mounted() {
			this.initBscroll();
			
			this.scroll.on('scroll',(position) => {
				console.log(position);
			});
			
			this.scroll.on('pullingUp', () => {
				console.log("上啦加载更多");
			});
		},
		
		methods: {
			
			initBscroll() {
				this.scroll = new BScroll(this.$refs.wrapper, {
					probeType: 3,
					pullUpLoad: true,
				}) 	
			},
			
			buttonClick() {
				console.log('按钮点击了');
			}
		}
	}
</script>

<style>
	.wrapper {
		margin-top: 100px;
		height: 150px;
		background-color: red;
		overflow: hidden;
/* 		overflow-y: auto;
 */	}
</style>
