import http from '@/http-commons'
import type ResponseData from '@/types/ResponseData'
import type Sabha from '@/components/sabhas/types/Sabha'
class SabhaService {
  getAll = (): Promise<ResponseData> => http.get('/sabhas')
  delete = async (id?: string) => http.delete('/sabhas/'+id)

  add = async (sabha: Sabha) => http.post('/sabhas', sabha)

}

export default new SabhaService()
