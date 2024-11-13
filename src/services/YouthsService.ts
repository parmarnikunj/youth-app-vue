import http from '@/http-commons'
import type ResponseData from '@/types/ResponseData'
class YouthsService {
  getAll(): Promise<ResponseData> {
    return http.get('/users')
  }
}

export default new YouthsService()
