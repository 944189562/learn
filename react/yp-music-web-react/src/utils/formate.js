export const getSizeImage = (url, size) => {
  return `${url}?param=${size}y${size}`
}

export function getPlaySong(id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}