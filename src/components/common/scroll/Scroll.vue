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
		
		props: {
			probeType: {
				type: Number,
				default: 0,
			}
		},
		
		data(){
			return {
				scroll: null
			}
		},

		mounted() {
			this.initBscroll();
			
			this.scroll.on('scroll',(position) => {
				this.$emit('scroll', position)
			});
			
			this.scroll.on('pullingUp', () => {
				console.log("上啦加载更多");
			});
		},
		
		methods: {
			
			initBscroll() {
				this.scroll = new BScroll(this.$refs.wrapper, {
					probeType: this.probeType,
					pullUpLoad: true,
					click: true,
				}) 	
			},
			
			refresh() {
				this.scroll.refresh()
			},
			
			scrollTo(x, y, time=300) {
				this.scroll.scrollTo(x, y, time)
			}
		}
	}
</script>
 
<style>

</style>
