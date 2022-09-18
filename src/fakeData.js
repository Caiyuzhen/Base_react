export default function getProductData () {
	let products = []
	for (let i = 0; i< 10; i++){
		products.push({
			id: i,
			name: `product${i}`,
		})
	}

	return products //记得 return 出数据！！
}