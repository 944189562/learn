import request from './index'

/**
 * 轮播图
 * @param {number} type | 设备类型 | 0: pc, 1: android, 2: phone, 3: ipad
 */
export function getBanner(type = 2) {
  return request.get('/banner', {
    type
  })
}

export function getRankings(limit) {
  return request.get('/personalized/newsong', {
    limit
  })
}

export function getCatList() {
  return request.get('/playlist/hot')
}

export function getSongList(data = { cat: "全部", limit: 10, offset: 0, order: "hot" }) {
  const { cat = "全部", limit = 10, offset = 0, order = "hot" } = data
  return request.get('/top/playlist', {
    cat,
    limit,
    offset,
    order
  })
}

export function getAllTopList() {
  return request.get('/toplist')
}

export function getListDetail(id, limit = 10, offset = 0) {
  return request.get('/playlist/track/all', {
    id,
    limit,
    offset
  })
}