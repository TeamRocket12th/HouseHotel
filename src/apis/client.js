import request from './request.js'

const apiGetAllRoomInfos = () => {
  return request.get()
}
const apiGetRoomInfos = (id) => {
  return request.get(`/${id}`)
}
const apiPostReservation = (id) => {
  return request.post(`/${id}`)
}
const apiDeleteAll = () => {
  return request.delete()
}

export default {
  apiGetAllRoomInfos,
  apiGetRoomInfos,
  apiPostReservation,
  apiDeleteAll
}
