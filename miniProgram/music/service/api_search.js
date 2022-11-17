import request from './index'

export function getSearchHot() {
  return request.get('/search/hot')
}

export function getSearchSuggest(keywords) {
  return request.get('/search/suggest', {
    keywords,
    type: 'mobile'
  })
}

export function getSearchData(keywords) {
  return request.get('/search', {
    keywords
  })
}