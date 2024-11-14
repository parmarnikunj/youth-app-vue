import http from '@/http-commons'
import type ResponseData from '@/types/ResponseData'
import type Youth from '@/components/youths/types/Youth'
class YouthsService {
  getAll = async (): Promise<ResponseData> => http.get('/users')
  post = async (youth: Youth) => http.post('/users', youth)

  delete = async (id?: number)=> http.delete(`/users/${id}` )
}

export default new YouthsService()
