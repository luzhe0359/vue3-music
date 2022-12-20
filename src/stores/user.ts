import { defineStore } from 'pinia'
import type { UserProfile } from '@/models/user'
import { useLoginStatus } from '@/utils/api'

export const useUserStore = defineStore({
  id: 'user', // id必填，且需要唯一
  state: () => ({
    showLogin: false,
    profile: {} as UserProfile
  }),
  getters: {
    isLogin: (state) => {
      return state.profile?.userId > 0
    }
  },
  actions: {
    async checkLogin() {
      const { code, profile } = await useLoginStatus()
      if (code === 200) {
        this.profile = profile
        this.showLogin = false
      }
    }
  }
})
