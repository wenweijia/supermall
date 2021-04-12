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
			},
			pullUpLoad: {
				type: Boolean,
				default: false,
			}
		},
		
		data(){
			return {
				scroll: null
			}
		},

		mounted() {
			this.initBscroll();
			
			if (this.probeType === 2 || this.probeType === 3) {
				this.scroll.on('scroll',(position) => {
					this.$emit('scroll', position)
				});
			}
		
			if (this.pullUpLoad) {
				this.scroll.on('pullingUp', () => {
					console.log("上啦加载更多");
					this.$emit('pullingUp');
				});
			}
		},
		
		methods: {
			
			initBscroll() {
				this.scroll = new BScroll(this.$refs.wrapper, {
					probeType: this.probeType,
					pullUpLoad: this.pullUpLoad,
					click: true,
					observeDOM: true,
					observeImage: true,
				}) 	
			},
			
			refresh() {
				this.scroll.refresh()
			},
			
			scrollTo(x, y, time=300) {
				this.scroll.scrollTo(x, y, time)
			},
			
			finishPullUp() {
				this.scroll.finishPullUp()
			},
		}
	}
</script>
 
<style>

</style>
