import { defineStore } from 'pinia'
import YouthsService from '@/services/YouthsService'
import type Youth from '@/types/Youth'

export const useYouthStore = defineStore('youth', {
  state: () => {
      return {
        youths: [] as Youth[]
      }
  },
  getters: {
    getYouths(state) {
      return state.youths
    }
  },
  actions: {
    async fetchYouths() {
      try {
        const youths = await YouthsService.getAll()
        this.youths = youths.data
      }
      catch (error) {
        console.error(error)
      }
    }
  }
})
