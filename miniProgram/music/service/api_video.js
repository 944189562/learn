import request from './index'

export function getTopMV(offset = 0, limit = 10) {
  return request.get('/top/mv', {
    offset,
    limit
  })
}

/**
 * 请求MV的播放地址
 * @param {number} id MV的id
 */

export function getMVURL(id) {
  return request.get('/mv/url', {
    id
  })
}

export function getMVDetail(mvid) {
  return request.get('/mv/detail', {
    mvid
  })
}

export function getRelatedMV(id) {
  return request.get('/related/allvideo', {
    id
  })
}