<template>
	<div class="goods-item" @click="itemClick">
		<img :src="showImage" alt="" @load="loadFinish">
		<div class="goods-info">
		  <p>{{goodsItem.title}}</p>
		  <span class="price">{{goodsItem.price}}</span>
		  <span class="collect">{{goodsItem.cfav}}</span>
		</div>
	</div>
</template>
 
<script>
	export default {
		name: 'GoodsListItem',
		
		props: {
			goodsItem: Object
		},
		
		computed: {
			showImage() {
				return this.goodsItem.image || this.goodsItem.show.img
			}
		},
		
		data(){
			return {
				
			}
		},

		methods:{
			loadFinish() {
				if (this.$route.path.indexOf('home') !== -1) {
					this.$bus.$emit('itemImageLoad')
				}else if (this.$route.path.indexOf('/detail') !== -1) {
					this.$bus.$emit('detailImageLoad')
				} 
			},
			
			itemClick() {
				this.$router.push('/detail/'+this.goodsItem.iid)
			},
		}
	}
</script>
 
<style>
	.goods-item {
		padding-bottom: 5px;
	}
	
	.goods-item img {
		width: 100%;
		border-radius: 5px;
	}
	
	.goods-info {
	  font-size: 12px;
	}
	
	.goods-info p{
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin-top: 5px;
		margin-bottom: 3px;
	}
	
	.goods-info .price {
		color: var(--color-high-text);
		margin-right: 10px;
		margin-left: 25%;
	}
	
	.goods-info .collect::before {
	  content: '';
	  width: 14px;
	  height: 14px;
	  padding-left: 15px;
	  padding-top: 2px;
	  background: url(../../../assets/img/common/collect.svg) no-repeat 0/14px 14px;
	}
</style>
