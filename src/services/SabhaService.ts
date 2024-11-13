import http from '@/http-commons'
import type ResponseData from '@/types/ResponseData'
class SabhaService {
  getAll(): Promise<ResponseData> {
    return http.get('/sabhas')
  }
}

export default new SabhaService()
