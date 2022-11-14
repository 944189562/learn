import request from './request';

export function getSongDetail(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}

export function getLyric(id) {
  return request({
    url: "/lyric",
    params: {
      id
    }
  })
}

export function getSongUrl(id) {
  return request({
    url: '/song/url',
    params: {
      id
    }
  })
}