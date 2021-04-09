<template>
	<div class="wrapper" ref="wrapper">
	  <div class="content">
	    <slot></slot>
	  </div>
	</div>
</template>
 
<script>
	import BScroll from 'better-scroll'
	
	export default {
		name: 'Scroll',

		data(){
			return {
				
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
		}
	}
</script>
 
<style>

</style>
