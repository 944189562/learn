// pages/detail-search/index.js
import { getSearchHot, getSearchSuggest, getSearchData } from '../../service/api_search'
import debounce from '../../utils/debounce'
import stringToNodes from '../../utils/string2nodes'

const debounceGetSearchSuggest = debounce(getSearchSuggest, 200)

Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue: '',
    hotSearchList: [],
    suggestSongs: [],
    suggestNodes: [],
    resultSongs: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getPageData()
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },
  async getPageData() {
    const { result } = await getSearchHot()
    this.setData({
      hotSearchList: result.hots
    })
  },
  async handleChange(event) {
    const searchValue = event.detail
    this.setData({
      searchValue
    })

    if (!searchValue) {
      this.setData({
        suggestSongs: [],
        resultSongs: []
      })
      return
    }

    const { result } = await debounceGetSearchSuggest(searchValue)
    const suggestSongs = result?.allMatch || []
    const suggestNodes = []
    suggestSongs.forEach(item => {
      const { keyword } = item
      suggestNodes.push(stringToNodes(keyword, searchValue))
    })

    this.setData({
      suggestSongs,
      suggestNodes
    })
  },
  handleSearchKeyword(event) {
    const keyword = event.currentTarget.dataset.keyword
    this.setData({
      searchValue: keyword
    })
    this.handleSearchAction()
  },
  async handleSearchAction() {
    const { result } = await getSearchData(this.data.searchValue)
    const { songs, hasMore } = result
    const resultSongs = songs

    this.setData({
      suggestSongs: [],
      resultSongs
    })
  }
})