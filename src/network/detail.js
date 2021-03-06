import {request} from './request.js' 

export function getDetail(iid) {
	return request({
		url: '/detail',
		params: {
			iid
		},
	});
}

export function getDetailRecommend() {
	return request({
		url: '/recommend'
	})
}

export class GoodsInfo {
	constructor(itemInfo, columns, services) {
	    this.title = itemInfo.title
		this.desc = itemInfo.desc
		this.newPrice = itemInfo.price
		this.oldPrice = itemInfo.oldPrice
		this.discountDesc = itemInfo.discountDesc
		this.columns = columns
		this.services = services
		this.realPrice = itemInfo.lowNowPrice
	}
}

export class Shop {
	constructor(shopInfo) {
	    this.logo = shopInfo.shopLogo
		this.name = shopInfo.name
		this.fans = shopInfo.cFans
		this.sells = shopInfo.cSells
		this.score = shopInfo.score
		this.goodCount = shopInfo.cGoods
	}
}