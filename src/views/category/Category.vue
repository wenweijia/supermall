<template>
	<div class="wrapper1" ref='wrapper2'>
		<div class="content">
			<div class="h500"></div>
			<div class="h300"></div>
			<div class="h400"></div>
		</div>
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
				this.scroll = new BScroll(this.$refs.wrapper2, {
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
	.wrapper1 {
		margin-top: 100px;
		height: 150px;
		overflow: hidden;
		width: 100%;
/* 		overflow-y: auto;
 */	}
 
	.h300 {
		height: 100px;
		width: 100%;
		background-color: red;
	}
	
	.h400 {
		height: 100px;
		width: 100%;
		background-color: #004444;
	}
	
	.h500 {
		height: 100px;
		width: 100%;
		background-color: #000088;
	}
	
	/* .content {
		height: 1200px;
	} */
</style>
