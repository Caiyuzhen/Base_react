
//获取本地存储的数据
function getStorage() {
	return JSON.parse(localStorage.getItem('list')) || [] //解析为字符串格式
}




//根据 id 来删除跟存储数据（删除跟增加两个方法写在一起）
function setStorage(item, id) {
	//承接 字符串 数据
	let listData = JSON.parse(localStorage.getItem('list')) || []

	if(id) { //判断传入的 id， id 存在就删除，不存在就添加
		listData = listData.filter((item) => {
			return item.id !== id //删除掉当前这一选项
		})}
		else{
			listData.push(item) //添加新的选项
		}
		//保存新的数据进 localStorage
		localStorage.setItem('list', JSON.stringify(listData))

		//最终要返回一个新的数据
		return listData

	}



export {
	getStorage,
	setStorage
}