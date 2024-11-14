import { defineStore } from 'pinia'
import type Sabha from '@/components/sabhas/types/Sabha'
import SabhaService from '@/components/sabhas/services/SabhaService'

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
      const sbhas = await SabhaService.getAll()
      this.sabhas = sbhas.data
    },
    async add(sabha: Sabha) {
      const response = await SabhaService.add(sabha)
      this.sabhas.push(response.data)
    },
    async delete(id?: string) {
      this.sabhas = this.sabhas.filter(sabha => sabha.id != id)
      const response = await SabhaService.delete(id)
      console.log(response.status)
    }
  }
})
