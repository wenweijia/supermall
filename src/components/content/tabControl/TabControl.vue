<template>
	<div class="tabControl">
		<div class="tabControl-item" v-for="(item, index) in titles"
		 :class="{active: currentIndex == index}"
		  @click="itemClick(index)">
			<span>{{item}}</span>
		</div>
	</div>
</template>
 
<script>
	export default {
		name: 'TabControl',
		
		data(){
			return {
				currentIndex: 0
			}
		},
		
		props: {
			titles: Array
		},
		
		methods:{
			itemClick(index) {
				this.currentIndex = index;
				this.$emit('tabclick', index)
			}
		}
	}
</script>
 
<style>
	.tabControl {
		display: flex;
		width: 100%;
		font-size: 15px;
		text-align: center;
		padding: 10px 0 10px 0;
		background-color: #fff;
	}
	
	.tabControl-item {
		flex: 1;
	}
	
	.tabControl-item span {
		padding: 5px;		
	}
	
	.active {
	  color: var(--color-high-text);
	}
	
	.active span{
		border-bottom: 2px solid #FF5777;
	}
</style>
