import { defineStore } from 'pinia'
import YouthsService from '@/components/youths/services/YouthsService'
import type Youth from '@/components/youths/types/Youth'

export const useYouthStore = defineStore('youth', {
  state: () => {
      return {
        youths: [] as Youth[],
        loading: false,
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
