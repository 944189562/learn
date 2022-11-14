export default function (selector) {
	return new Promise(resolve => {
		const query = wx.createSelectorQuery()
		query.select(selector).boundingClientRect(resolve)
		query.exec()
	})
}