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

export function getSongList(cat = "全部", limit = 10, offset = 0, order = "hot") {
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

export function getListDetail(id) {
  return request.get('/playlist/detail', {
    id
  })
}