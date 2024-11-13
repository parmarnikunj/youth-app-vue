import { defineStore } from 'pinia'
import type Sabha from '@/types/Sabha'
import SabhaService from '@/services/SabhaService'

export const useSabhaStore = defineStore('sabha', {
  state: () => {
      return {
        sabhas: [] as Sabha[]
      }
  },
  getters: {
    getSabhas(state) {
      return state.sabhas
    }
  },
  actions: {
    async fetchSabhas() {
      try {
        const sabhas = await SabhaService.getAll()
        this.sabhas = sabhas.data
      }
      catch (error) {
        console.error(error)
      }
    }
  }
})
