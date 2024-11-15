import { defineStore } from 'pinia'
import YouthsService from '@/components/youths/services/YouthsService'
import type Youth from '@/components/youths/types/Youth'
const initialFormYouth = {
  name:{first: "", last: ""},
  phone: { mobile: ""},
  address: {
    street: "",
    houseNumber: 10,
    city: {
      name: ""
    },
    country: {
      name: ""
    }

  }
}
export const useYouthStore = defineStore('youth', {
  state: () => {
      return {
        youths: [] as Youth[],
        loading: false,
        formYouth:  {
          name:{first: "", last: ""},
          phone: { mobile: ""},
          address: {
            street: "",
            houseNumber: 10,
            city: {
              name: ""
            },
            country: {
              name: ""
            }

          }
        }  as Youth
      }
  },
  getters: {
    getYouths(state) {
      return state.youths
    }
  },
  actions: {
    async fetchYouths() {
        this.loading = true
        const youths = await YouthsService.getAll()
        this.youths = youths.data
        this.loading = false
    },
    async postFormYouth() {
      const resp = await YouthsService.post(this.formYouth)
      console.log(resp.status)
      this.fetchYouths()
      this.formYouth = initialFormYouth
    },
    async addYouth(youth: Youth) {
      console.log("add youth")
      const resp = await YouthsService.post(youth)
      this.youths.push(resp.data)
    },
    async deleteYouth(id?: number) {
      console.log("delete")
      this.youths = this.youths.filter(youth => youth.id != id)
      await YouthsService.delete(id)
    }
  }
})
